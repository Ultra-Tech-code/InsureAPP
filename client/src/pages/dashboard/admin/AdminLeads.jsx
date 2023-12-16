import React, { useState } from 'react'
import { LeadsData } from '../../../utils/Data'
import Table from '../../../components/molecules/dashboard/Table'
import { transformData } from '../../../utils/DataTransformer'
import ActionButton from '../../../components/molecules/dashboard/ActionButton'
import Searchbar from '../../../components/molecules/dashboard/Searchbar'



const AdminLeads = () => {
  const [filteredData, setFilteredData] = useState(transformData(LeadsData));

  const updateFilteredData = (newData) => {
    setFilteredData(transformData(newData));
  };

  

  let tableHead={
    head1: "S/N",
    head2: "Occupation",
    head3: "Email",
    head4: "Phone Num",
    head5: "Client Name",
    head6: "Agent ID",
    head7: "Status"
  }

  return (
    <div>
      <Searchbar data={LeadsData} keyword="clientName" onUpdateData={updateFilteredData} />
      <div className='flex justify-between mb-4'>
        {/* <div className='flex'>
          <ActionButton title='PDF'/>
          <ActionButton title='EXCEL'/>
          <ActionButton title='PRINT'/>
        </div> */}
      </div>
      
      <Table data={{tableHead, tabledata: filteredData}}/>

    </div>
  )
}

export default AdminLeads