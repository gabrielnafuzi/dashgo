import { Flex, Input, Icon } from '@chakra-ui/react'
import { RiSearchLine } from 'react-icons/ri'

export const SearchBox = () => (
  <Flex
    as="label"
    flex="1"
    py="4"
    px="8"
    ml="6"
    maxWidth={400}
    align="center"
    color="gray.200"
    position="relative"
    bg="gray.800"
    borderWidth={1}
    borderColor="transparent"
    borderRadius="full"
    transition="all 0.3s"
    _focusWithin={{
      borderColor: 'pink.500'
    }}
  >
    <Input
      color="gray.50"
      variant="unstyled"
      px="4"
      mr="4"
      placeholder="Buscar na plataforma"
      _placeholder={{ color: 'gray.400' }}
    />

    <Icon as={RiSearchLine} fontSize="20" />
  </Flex>
)
