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

        <Button
          type="submit"
          mt="6"
          bg="pink.500"
          textColor="gray.50"
          fontWeight="medium"
          size="lg"
          _hover={{
            bg: 'pink.600'
          }}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}

export default Home
