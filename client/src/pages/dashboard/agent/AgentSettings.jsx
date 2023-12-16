import React from 'react'
import AgentSettingsNav from '../../../components/molecules/dashboard/AgentSettingsNav'
import { Outlet } from 'react-router-dom'

const AgentSettings = () => {
    return (
        <>
            <AgentSettingsNav />
            <Outlet />
        </>
    )
}

export default AgentSettings
