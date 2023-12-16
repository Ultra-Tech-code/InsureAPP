import React from 'react'

const DashboardTemplate = (props) => {
    const { sidebar,dashboardBody, notificationSection } = props
    return (
        <>
            <div className='lg:flex lg:justify-between max-w-screen overflow-hidden bg-[#DFE7FA] h-full'>

                {sidebar}
                <main className='bg-[#DFE7FA] w-full min-h-screen lg:w-[80vw] xl:w-[83vw] flex flex-col px-12 md:px-16'>
                    {notificationSection}
                    {dashboardBody || "Your contents will appear here"}
                </main>
            </div>

        </>
    )
}

export default DashboardTemplate
