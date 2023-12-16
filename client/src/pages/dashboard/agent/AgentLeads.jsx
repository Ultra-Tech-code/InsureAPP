import React from "react";
import { useState } from "react";
import Searchbar from "../../../components/molecules/dashboard/Searchbar";

const AgentLeads = () => {
  // lead data
  const initialLeads = [
    { id: 1, name: "Adewumi Gabriel", description: "Blockchain Dev" },
    { id: 2, name: "Abbas Ahmed", description: "Dev Reels" },
    { id: 3, name: "Alicia Joseph", description: "Software Dev" },
  ];

  const [newLeads, setNewLeads] = useState(initialLeads);
  const [inProgress, setInProgress] = useState([]);
  const [closedLeads, setClosedLeads] = useState([]);

  const handleOnDragStart = (e, lead) => {
    e.dataTransfer.setData("text/plain", lead.id.toString());
  };

  const handleOnDrop = (e, targetList, setTargetList) => {
    e.preventDefault();
    const leadId = e.dataTransfer.getData("text/plain");
    const lead = newLeads.find((item) => item.id === parseInt(leadId, 10));

    if (lead) {
      // Check if the lead is not already in the target list
      if (!targetList.some((item) => item.id === lead.id)) {
        // Remove the lead from the source list
        const updatedSourceLeads = newLeads.filter(
          (item) => item.id !== lead.id
        );
        setNewLeads(updatedSourceLeads);

        // Update the target list by adding the new lead
        setTargetList([...targetList, lead]);
      }
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Searchbar />
      <section className="bg-[#DFE7FA] h-screen w-full flex flex-wrap justify-between">
        {/* New Leads */}
        <div
          className="widget-container bg-[--white-bg] h-fit mt-4 w-[19rem] rounded-md shadow-md"
          onDrop={(e) => handleOnDrop(e, inProgress, setInProgress)}
          onDragOver={handleDragOver}
        >
          <h4 className="text-[#111111] bg-yellow-200 w-full uppercase h-fit text-center p-2">
            New Leads
          </h4>
          {newLeads.map((lead) => (
            <div
              key={lead.id}
              className="widget border border-gray-400 p-4 m-4 rounded-md w-auto"
              draggable
              onDragStart={(e) => handleOnDragStart(e, lead)}
            >
              <h4 className="text-gray-800 pb-1">{lead.name}</h4>
              <p className="text-gray-600">{lead.description}</p>
              <p className="text-gray-400 text-right">See More</p>
            </div>
          ))}
        </div>

        {/* In Progress */}
        <div
          className="widget-container bg-[--white-bg] mt-4 w-[19rem] h-fit rounded-md shadow-md"
          onDrop={(e) => handleOnDrop(e, inProgress, setInProgress)}
          onDragOver={handleDragOver}
        >
          <h4 className="text-[#111111] bg-blue-200 w-full uppercase text-center p-2">
            In Progress
          </h4>
          {inProgress.map((lead) => (
            <div
              key={lead.id}
              className="widget border border-gray-400 p-4 m-4 rounded-md w-auto"
              draggable
              onDragStart={(e) => handleOnDragStart(e, lead)}
            >
              <h4 className="text-gray-800 pb-1">{lead.name}</h4>
              <p className="text-gray-600">{lead.description}</p>
              <p className="text-gray-400 text-right">See More</p>
            </div>
          ))}
        </div>
        {/* Closed Leads */}
        <div
          className="widget-container bg-[--white-bg] mt-4 w-[19rem] h-fit rounded-md shadow-md"
          onDrop={(e) => handleOnDrop(e, closedLeads, setClosedLeads)}
          onDragOver={handleDragOver}
        >
          <h4 className="text-[#111111] bg-green-200 w-full uppercase text-center p-2">
            Closed Leads
          </h4>
          {closedLeads.map((lead) => (
            <div
              key={lead.id}
              className="widget border border-gray-400 p-4 m-4 rounded-md w-auto"
              draggable
              onDragStart={(e) => handleOnDragStart(e, lead)}
            >
              <h4 className="text-gray-800 pb-1">{lead.name}</h4>
              <p className="text-gray-600">{lead.description}</p>
              <p className="text-gray-400 text-right">See More</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default AgentLeads;
