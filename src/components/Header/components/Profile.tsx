import { Flex, Box, Text, Avatar } from '@chakra-ui/react'

export const Profile = () => (
  <Flex align="center">
    <Box mr="4">
      <Text>Gabriel Moraes</Text>
      <Text color="gray.300" fontSize="small">
        gabrielnafuzi@gmail.com
      </Text>
    </Box>

    <Avatar
      size="md"
      name="Gabriel Moraes"
      src="https://github.com/gabrielnafuzi.png"
    />
  </Flex>
)
