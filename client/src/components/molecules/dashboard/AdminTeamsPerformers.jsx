import React from "react";

const AdminTeamsPerformers = () => {
  return (
    <>
      <div className="flex flex-nowrap justify-between items-center mx-auto my-2">
        <div className="flex gap-3">
          <div>
            <img
              src="https://res.cloudinary.com/dfo28lkwl/image/upload/v1700863051/images_vtestj.jpg"
              className="w-5 h-5"
            />
          </div>
          <div className="self-start">
            <h2>Prince James</h2>
          </div>
        </div>
        <div>
          <p>25 Clients</p>
        </div>
        <div>
          <p>$3000</p>
        </div>
      </div>
    </>
  );
};

export default AdminTeamsPerformers;
