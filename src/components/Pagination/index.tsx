import { Stack, Box, Text } from '@chakra-ui/react'

import { PaginationItem } from './components'

type PaginationProps = {
  totalCountOfRegisters: number
  registersPerPage?: number
  currentPage?: number
  onPageChange: (page: number) => void
}

const siblingsCount = 1

const generatePagesArray = (from: number, to: number) =>
  Array.from({ length: to - from }, (_, idx) => from + idx + 1).filter(
    (page) => page > 0
  )

export const Pagination = ({
  totalCountOfRegisters,
  registersPerPage = 10,
  currentPage = 1,
  onPageChange
}: PaginationProps) => {
  const lastPage = Math.ceil(totalCountOfRegisters / registersPerPage)

  const previousPages =
    currentPage > 1
      ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
      : []

  const nextPages =
    currentPage < lastPage
      ? generatePagesArray(
          currentPage,
          Math.min(currentPage + siblingsCount, lastPage)
        )
      : []

  return (
    <Stack
      spacing="6"
      direction={['column', 'row']}
      mt="8"
      justify="space-between"
      align="center"
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>

      <Stack direction="row" spacing="2">
        {currentPage > 1 + siblingsCount && (
          <>
            <PaginationItem onPageChange={onPageChange} pageNumber={1} />
            {currentPage > 2 + siblingsCount && (
              <Text color="gray.300" w="8" textAlign="center">
                ...
              </Text>
            )}
          </>
        )}

        {previousPages.length > 0 &&
          previousPages.map((page) => (
            <PaginationItem
              onPageChange={onPageChange}
              key={page}
              pageNumber={page}
            />
          ))}

        <PaginationItem
          onPageChange={onPageChange}
          pageNumber={currentPage}
          isCurrent
        />

        {nextPages.length > 0 &&
          nextPages.map((page) => (
            <PaginationItem
              onPageChange={onPageChange}
              key={page}
              pageNumber={page}
            />
          ))}

        {currentPage + siblingsCount < lastPage && (
          <>
            {currentPage + 1 + siblingsCount < lastPage && (
              <Text color="gray.300" w="8" textAlign="center">
                ...
              </Text>
            )}
            <PaginationItem onPageChange={onPageChange} pageNumber={lastPage} />
          </>
        )}
      </Stack>
    </Stack>
  )
}
