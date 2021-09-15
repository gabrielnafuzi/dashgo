import { Button } from '@chakra-ui/react'

type PaginationItemProps = {
  pageNumber: number
  isCurrent?: boolean
  onPageChange: (pageNumber: number) => void
}

export const PaginationItem = ({
  isCurrent = false,
  pageNumber,
  onPageChange
}: PaginationItemProps) => {
  if (isCurrent) {
    return (
      <Button
        size="sm"
        fontSize="xs"
        w="4"
        colorScheme="pink"
        disabled
        _disabled={{
          bg: 'pink.500',
          cursor: 'default'
        }}
      >
        {pageNumber}
      </Button>
    )
  }

  return (
    <Button
      size="sm"
      fontSize="xs"
      w="4"
      bg="gray.700"
      _hover={{
        bg: 'gray.500'
      }}
      onClick={() => onPageChange(pageNumber)}
    >
      {pageNumber}
    </Button>
  )
}
