import React from 'react'
import DashboardMenu from '@/component/dashboard/sidebar'

export default function Layout({children}) {
  return (
   <>
  <DashboardMenu/>
   {children}

   </>
  )
}
