import { Flex, Box, Text, Avatar } from '@chakra-ui/react'

type ProfileProps = {
  showProfileData?: boolean
}

export const Profile = ({ showProfileData = true }: ProfileProps) => (
  <Flex align="center">
    {showProfileData && (
      <Box mr="4">
        <Text>Gabriel Moraes</Text>
        <Text color="gray.300" fontSize="small">
          gabrielnafuzi@gmail.com
        </Text>
      </Box>
    )}

    <Avatar
      size="md"
      name="Gabriel Moraes"
      src="https://github.com/gabrielnafuzi.png"
    />
  </Flex>
)
