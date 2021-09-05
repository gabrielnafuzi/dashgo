import { ElementType } from 'react'

import Link from 'next/link'

import {
  Text,
  Link as ChakraLink,
  Icon,
  LinkProps as ChakraLinkProps
} from '@chakra-ui/react'

type NavLinkProps = {
  icon: ElementType
  children: string
} & ChakraLinkProps

export const NavLink = ({ icon, children, href, ...rest }: NavLinkProps) => (
  <Link href={href} passHref>
    <ChakraLink display="flex" align="center" {...rest}>
      <Icon as={icon} fontSize="20" />
      <Text ml="4" fontWeight="medium">
        {children}
      </Text>
    </ChakraLink>
  </Link>
)
