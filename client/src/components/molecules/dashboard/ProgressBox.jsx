import React from "react";

const ProgressBox = ({ data }) => {
  console.log("our data ", data);

  const renderedData = data.map((datium) => {
    return (
      <div className="p-4 w-full border border-gray-400 rounded-lg mb-4">
        <h3 className="text-left">{datium.name}</h3>
        
        <div className="flex justify-between">
            <p className="text-gray-600">{datium.occupation}</p>
            <p className="text-gray-400">See More</p>
        </div>
      </div>
    );
  });


  // Return the array of JSX elements
  return <>{renderedData}</>;
};

export default ProgressBox;
