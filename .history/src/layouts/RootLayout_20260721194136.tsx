import Navbar from '@/components/shared/Navbar'
import React from 'react'
import { Outlet } from 'react-router'

export default function RootLayout() {
  return (
    <>
    <Navbar></Navbar>
    <Outlet></Outlet>
    </>
  )
}
