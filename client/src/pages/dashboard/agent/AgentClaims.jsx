import React from 'react'
import ProgresContainer from '../../../components/molecules/dashboard/ProgresContainer'
import ProgressBox from '../../../components/molecules/dashboard/ProgressBox'
import { FiledClaims, InProgress, Apporoved } from '../../../utils/ProgressData'
import Searchbar from '../../../components/molecules/dashboard/Searchbar'




const AgentClaims = () => {

  return (
    <>
      <Searchbar />
      <div className='flex text-center justify-between'>
          <ProgresContainer data={{title: "NEW LEADS", color: "#F7E69C", box:<ProgressBox data={FiledClaims} />}}/>
          <ProgresContainer data={{title: "IN PROGRESS", color: "#ADD8E6",  box:<ProgressBox data={InProgress} /> }}/>
          <ProgresContainer data={{title: "CLOSED ONES", color: "#B3E2A9", box:<ProgressBox data={Apporoved} />}}/>
      </div>
    </>
  )
}

export default AgentClaims