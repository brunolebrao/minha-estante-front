import * as React from 'react'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'

import { Header } from 'components/Header'

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar
}))

interface LayoutProps {
  children: React.ReactNode
}
export function Layout({ children }: LayoutProps) {
  const [open, setOpen] = React.useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <>
      <Header />
      <Box sx={{ display: 'flex' }}>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          {children}
        </Box>
      </Box>
    </>
  )
}
