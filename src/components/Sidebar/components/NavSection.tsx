import { Box, Text, Stack } from '@chakra-ui/react'

type NavSectionProps = {
  title: string
  children: React.ReactNode
}

export const NavSection = ({ title, children }: NavSectionProps) => (
  <Box>
    <Text
      fontWeight="bold"
      color="gray.400"
      fontSize="small"
      textTransform="uppercase"
    >
      {title}
    </Text>

    <Stack spacing="4" mt="8" align="stretch">
      {children}
    </Stack>
  </Box>
)
