import React from 'react'
import SalesBox from './SalesBox'

const SalesBoxGroup = (props) => {
    const { homeData } = props;
    console.log( homeData, "homeData")
    

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-6 ">
                <SalesBox title="Sales" price={homeData ?`$ ${homeData.totalSales}` : "0"} growth="+2.5%" />
                <SalesBox title="Clients" price={ homeData ? homeData.leads?.length : "0"}  growth="-2.5%" />
                <SalesBox title="Conversion"price={homeData ? homeData.claims?.legth : "0"}growth="+2.5%" />
                <SalesBox title="Claims" price={homeData ? homeData.totalClaimAmount : "0"} growth="-0.5%" />
            </div>
        </>
    )
}

export default SalesBoxGroup
