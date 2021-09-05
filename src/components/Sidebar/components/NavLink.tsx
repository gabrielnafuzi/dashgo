import { ElementType } from 'react'

import {
  Text,
  Link,
  Icon,
  LinkProps as ChakraLinkProps
} from '@chakra-ui/react'

type NavLinkProps = {
  icon: ElementType
  children: string
} & ChakraLinkProps

export const NavLink = ({ icon, children, ...rest }: NavLinkProps) => (
  <Link display="flex" align="center" {...rest}>
    <Icon as={icon} fontSize="20" />
    <Text ml="4" fontWeight="medium">
      {children}
    </Text>
  </Link>
)
