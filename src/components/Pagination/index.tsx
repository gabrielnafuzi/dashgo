import { Stack, Button, Box } from '@chakra-ui/react'

import { PaginationItem } from './components'

export const Pagination = () => (
  <Stack
    spacing="6"
    direction="row"
    mt="8"
    justify="space-between"
    align="center"
  >
    <Box>
      <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
    </Box>

    <Stack direction="row" spacing="2">
      <PaginationItem pageNumber={1} isCurrent />

      {[...Array(4)].map((_, i) => (
        <PaginationItem key={i} pageNumber={i + 2} />
      ))}
    </Stack>
  </Stack>
)
