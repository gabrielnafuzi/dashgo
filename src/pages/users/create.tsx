import {
  Box,
  Flex,
  Heading,
  Divider,
  VStack,
  HStack,
  SimpleGrid,
  Button
} from '@chakra-ui/react'

import { Input } from '@/components/Form/Input'
import { Header } from '@/components/Header'
import { Sidebar } from '@/components/Sidebar'

const CreateUser = () => (
  <Box>
    <Header />

    <Flex w="100%" maxW={1480} my="6" mx="auto" px="6">
      <Sidebar />

      <Box flex="1" borderRadius={8} bg="gray.800" p="8">
        <Heading size="lg" fontWeight="normal">
          Criar usuário
        </Heading>

        <Divider my="6" borderColor="gray.700" />

        <VStack spacing="8">
          <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
            <Input name="name" label="Nome completo" />
            <Input name="email" type="email" label="E-mail" />
          </SimpleGrid>

          <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
            <Input name="password" type="password" label="Senha" />
            <Input
              name="password_confirmation"
              type="password"
              label="Confirmação da senha"
            />
          </SimpleGrid>
        </VStack>

        <Flex mt="8" justify="flex-end">
          <HStack>
            <Button colorScheme="whiteAlpha">Cancelar</Button>
            <Button colorScheme="pink">Salvar</Button>
          </HStack>
        </Flex>
      </Box>
    </Flex>
  </Box>
)

export default CreateUser
