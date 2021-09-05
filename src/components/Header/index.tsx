import { Flex } from '@chakra-ui/react'

import { Logo, NotificationsNav, Profile, SearchBox } from './components'

export const Header = () => (
  <Flex
    as="header"
    w="100%"
    maxW={1480}
    h="20"
    mx="auto"
    mt="4"
    px="6"
    align="center"
  >
    <Logo />
    <SearchBox />

    <Flex align="center" ml="auto">
      <NotificationsNav />
      <Profile />
    </Flex>
  </Flex>
)
