import React, { useState } from "react";
import Sidebar from "./sidebar";
import Posts from "./posts";
import Products from "./products";

// import NotificationDropdown from "components/Dropdowns/NotificationDropdown.js";
// import UserDropdown from "components/Dropdowns/UserDropdown.js";

function Dashboard({ isMobile }) {
  const [page, setPage] = useState("Product");
  return (
    <>
      <Sidebar isMobile={isMobile} setPage={setPage}></Sidebar>
      <div className="p-4 sm:ml-64">
        {
          (page == "Post") ?
            <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
              <Posts />
            </div> :
            <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
              <Products />
            </div>
        }
      </div>
    </>
  );
}

export default Dashboard;