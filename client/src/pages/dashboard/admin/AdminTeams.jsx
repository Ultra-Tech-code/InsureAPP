import React, { useState } from "react";
import { TeamData } from "../../../utils/Data";
import Table from "../../../components/molecules/dashboard/Table";
import { transformData } from "../../../utils/DataTransformer";
import ActionButton from "../../../components/molecules/dashboard/ActionButton";
import Searchbar from "../../../components/molecules/dashboard/Searchbar";
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';

const AdminTeams = () => {
  const [filteredData, setFilteredData] = useState(transformData(TeamData));

  const navigate = useNavigate();

  const updateFilteredData = (newData) => {
    setFilteredData(transformData(newData));
  };

  let tableHead = {
    head1: "S/N",
    head2: "Name",
    head3: "Staff ID",
    head4: "Role",
    head5: "Email",
    head6: "Portfolio",
    head7: "Status",
  };

  const location = useLocation();
  const formData = location.state?.formData || {};
  
  const handleButtonClick = () => {
    //go to invite page with useNavigate
    navigate("/auth/admin/team-invite", { state: { formData } } )
  }
  


  return (
    <div>
      <Searchbar data={TeamData} keyword="Name" onUpdateData={updateFilteredData} />
      <div className="flex justify-between mb-4">
        {/* <div className="flex">
          <ActionButton title="PDF" />
          <ActionButton title="EXCEL" />
          <ActionButton title="PRINT" />
        </div> */}
      </div>

      <ActionButton title="Invite Agent" onClick={handleButtonClick} />

      <Table data={{ tableHead, tabledata:filteredData }} />
    </div>
  );
};

export default AdminTeams;
