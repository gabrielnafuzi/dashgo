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
  Text
} from '@chakra-ui/react'
import { RiAddLine, RiPencilLine } from 'react-icons/ri'

import { Header } from '@/components/Header'
import { Pagination } from '@/components/Pagination'
import { Sidebar } from '@/components/Sidebar'

const users = [
  {
    name: 'Gabriel Moraes',
    email: 'gabrielnafuzi@email.com',
    registrationDate: '04 de Abril, 2021'
  },
  {
    name: 'Diego Fernandes',
    email: 'diego@email.com',
    registrationDate: '04 de Abril, 2021'
  },
  {
    name: 'Mayk Brito',
    email: 'mayk@email.com',
    registrationDate: '08 de Abril, 2021'
  }
]

const UserList = () => (
  <Box>
    <Header />

    <Flex w="100%" maxW={1480} my="6" mx="auto" px="6">
      <Sidebar />

      <Box flex="1" borderRadius={8} bg="gray.800" p="8">
        <Flex mb="8" justify="space-between" align="center">
          <Heading size="lg" fontWeight="normal">
            Usuários
          </Heading>

          <Button
            as="a"
            size="sm"
            fontSize="sm"
            colorScheme="pink"
            leftIcon={<Icon as={RiAddLine} fontSize="20" />}
          >
            Criar novo
          </Button>
        </Flex>

        <Table colorScheme="whiteAlpha">
          <Thead>
            <Tr>
              <Th px="6" color="gray.300" width="8">
                <Checkbox colorScheme="pink" />
              </Th>

              <Th>Usuário</Th>
              <Th>Data de cadastro</Th>
              <Th w="8" />
            </Tr>
          </Thead>

          <Tbody>
            {users.map(({ name, email, registrationDate }) => (
              <Tr key={email}>
                <Td px="6">
                  <Checkbox colorScheme="pink" />
                </Td>

                <Td>
                  <Box>
                    <Text fontWeight="bold">{name}</Text>
                    <Text fontSize="sm" color="gray.300">
                      {email}
                    </Text>
                  </Box>
                </Td>

                <Td>{registrationDate}</Td>

                <Td>
                  <Button
                    as="a"
                    size="sm"
                    fontSize="sm"
                    colorScheme="purple"
                    leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                  >
                    Editar
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>

        <Pagination />
      </Box>
    </Flex>
  </Box>
)

export default UserList
