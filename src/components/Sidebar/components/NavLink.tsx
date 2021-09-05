import { ElementType } from 'react'

import {
  Text,
  Link as ChakraLink,
  Icon,
  LinkProps as ChakraLinkProps
} from '@chakra-ui/react'

import { ActiveLink } from '@/components/ActiveLink'

type NavLinkProps = {
  icon: ElementType
  children: string
} & ChakraLinkProps

export const NavLink = ({ icon, children, href, ...rest }: NavLinkProps) => (
  <ActiveLink href={href} passHref>
    <ChakraLink display="flex" align="center" {...rest}>
      <Icon as={icon} fontSize="20" />
      <Text ml="4" fontWeight="medium">
        {children}
      </Text>
    </ChakraLink>
  </ActiveLink>
)
