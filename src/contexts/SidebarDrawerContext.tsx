import { createContext, useContext } from 'react'
import { useEffect } from 'react'

import { useRouter } from 'next/router'

import { useDisclosure, UseDisclosureReturn } from '@chakra-ui/react'

type SidebarDrawerProviderProps = {
  children: React.ReactNode
}

type SidebarDrawerContextData = UseDisclosureReturn

const SidebarDrawerContext = createContext({} as SidebarDrawerContextData)

export const SidebarDrawerProvider = ({
  children
}: SidebarDrawerProviderProps) => {
  const disclosure = useDisclosure()
  const router = useRouter()

  useEffect(() => {
    disclosure.onClose()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.asPath])

  return (
    <SidebarDrawerContext.Provider value={disclosure}>
      {children}
    </SidebarDrawerContext.Provider>
  )
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext)
