import { Flex } from '@chakra-ui/react'

import { Header } from '@/components/Header'
import { Sidebar } from '@/components/Sidebar'

const Dashboard = () => (
  <Flex flexDir="column" h="100vh">
    <Header />

    <Flex w="100%" maxW={1480} my="6" mx="auto" px="6">
      <Sidebar />
    </Flex>
  </Flex>
)

export default Dashboard
