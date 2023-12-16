import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import DashboardTemplate from './DashboardTemplate'
import AgentSidebar from './AgentSidebar'
import NotificationBar from './NotificationBar'
import Searchbar from './Searchbar'

const AgentDashboard = () => {
  return (
   <>
        <DashboardTemplate 
            sidebar={<AgentSidebar />}

            notificationSection={<NotificationBar />}
            
            dashboardBody={ <Outlet />}
        />
   </>
  )
}

export default AgentDashboard
