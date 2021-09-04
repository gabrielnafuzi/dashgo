import { Flex, Button, Stack } from '@chakra-ui/react'

import { Input } from '@/components/Form/Input'

const Home = () => {
  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        w="100%"
        maxW={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
      >
        <Stack spacing="4">
          <Input
            name="email"
            type="email"
            label="E-mail"
            placeholder="johndoe@email.com"
          />

          <Input
            name="password"
            type="password"
            label="Senha"
            placeholder="********"
          />
        </Stack>

        <Button type="submit" mt="6" size="lg" colorScheme="pink">
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}

export default Home
