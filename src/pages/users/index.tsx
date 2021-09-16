import { useState } from 'react'

import { GetServerSideProps } from 'next'
import NextLink from 'next/link'

import {
  Box,
  Flex,
  Heading,
  Button,
  Icon,
  Table,
  Thead,
  Tbody,
  Th,
  Tr,
  Td,
  Checkbox,
  Text,
  Spinner,
  useBreakpointValue,
  Link
} from '@chakra-ui/react'
import { RiAddLine } from 'react-icons/ri'

import { Header } from '@/components/Header'
import { Pagination } from '@/components/Pagination'
import { Sidebar } from '@/components/Sidebar'
import { api } from '@/services/api'
import { getUsers, User, useUsers } from '@/services/hooks/use-users'
import { queryClient } from '@/services/query-client'

type UserListProps = {
  users?: User[]
  totalCount?: number
}

const UserList = ({ users, totalCount = 0 }: UserListProps) => {
  const [page, setPage] = useState(1)
  const { data, isLoading, isFetching, error } = useUsers(page, {
    initialData: users && { users, totalCount }
  })

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  const handleSetPage = (newPageNumber: number) => {
    setPage(newPageNumber)
  }

  const handlePrefetchUser = async (userId: string) => {
    await queryClient.prefetchQuery(
      ['user', userId],
      async () => {
        const response = await api.get(`users/${userId}`)

        return response
      },
      {
        staleTime: 1000 * 60 * 10 // 10 minutes
      }
    )
  }

  return (
    <Box>
      <Header />

      <Flex w="100%" maxW={1480} my="6" mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Usuários{' '}
              {!isLoading && isFetching && (
                <Spinner size="sm" color="gray.500" ml="4" />
              )}
            </Heading>

            <NextLink href="/users/create" passHref>
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} fontSize="20" />}
              >
                Criar novo
              </Button>
            </NextLink>
          </Flex>

          {isLoading ? (
            <Flex justify="center">
              <Spinner />
            </Flex>
          ) : error ? (
            <Flex justify="center">
              <Text>Falha ao obter dados dos usuários.</Text>
            </Flex>
          ) : (
            <>
              <Table colorScheme="whiteAlpha">
                <Thead>
                  <Tr>
                    <Th px={['4', '4', '6']} color="gray.300" width="8">
                      <Checkbox colorScheme="pink" />
                    </Th>

                    <Th>Usuário</Th>
                    {isWideVersion && <Th>Data de cadastro</Th>}
                  </Tr>
                </Thead>

                <Tbody>
                  {data?.users.map(({ id, name, email, createdAt }) => (
                    <Tr key={id}>
                      <Td px={['4', '4', '6']}>
                        <Checkbox colorScheme="pink" />
                      </Td>

                      <Td>
                        <Box>
                          <Link
                            color="purple.400"
                            onMouseEnter={() => handlePrefetchUser(id)}
                          >
                            <Text fontWeight="bold">{name}</Text>
                          </Link>
                          <Text fontSize="sm" color="gray.300">
                            {email}
                          </Text>
                        </Box>
                      </Td>

                      {isWideVersion && <Td>{createdAt}</Td>}
                    </Tr>
                  ))}
                </Tbody>
              </Table>

              <Pagination
                totalCountOfRegisters={data.totalCount}
                currentPage={page}
                onPageChange={handleSetPage}
              />
            </>
          )}
        </Box>
      </Flex>
    </Box>
  )
}

export default UserList

// export const getServerSideProps: GetServerSideProps = async () => {
//   const { users, totalCount } = await getUsers(1)

//   return {
//     props: {
//       users,
//       totalCount
//     }
//   }
// }
