import React, { useState } from 'react'
import { ClaimsData } from "../../../utils/Data";
import Table from '../../../components/molecules/dashboard/Table'
import { transformData } from '../../../utils/DataTransformer'
import ActionButton from '../../../components/molecules/dashboard/ActionButton'
import Searchbar from '../../../components/molecules/dashboard/Searchbar';



const AdminCLients = () => {
  const [filteredData, setFilteredData] = useState(transformData(ClaimsData));

  const updateFilteredData = (newData) => {
    setFilteredData(transformData(newData));
  };
  

  let tableHead = {
    head1: "S/N",
    head2: "Policy No.",
    head3: "Duration",
    head4: "Premium Amt",
    head5: "Client Name",
    head6: "Product",
    head7: "Status",
  };



  return (
    <div>
      <Searchbar data={ClaimsData} keyword="clientName" onUpdateData={updateFilteredData} />
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

export default AdminCLients