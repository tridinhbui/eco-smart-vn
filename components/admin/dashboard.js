import React, { useState } from "react";
import Sidebar from "./sidebar";
import Posts from "./posts";

// import NotificationDropdown from "components/Dropdowns/NotificationDropdown.js";
// import UserDropdown from "components/Dropdowns/UserDropdown.js";

function Dashboard({isMobile}) {
  
  return (
    <>
      <Sidebar isMobile={isMobile}></Sidebar>
      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          <Posts/>
        </div>
      </div>
    </>
  );
}

export default Dashboard;