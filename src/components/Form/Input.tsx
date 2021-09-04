import {
  Input as ChakraInput,
  FormLabel,
  FormControl,
  InputProps as ChakraInputProps
} from '@chakra-ui/react'

type InputProps = {
  name: string
  label?: string
} & ChakraInputProps

export const Input = ({ name, label, ...rest }: InputProps) => (
  <FormControl>
    {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}

    <ChakraInput
      name={name}
      id={name}
      type="password"
      focusBorderColor="pink.500"
      bgColor="gray.900"
      variant="filled"
      _hover={{
        bgColor: 'gray.900'
      }}
      size="lg"
      {...rest}
    />
  </FormControl>
)
