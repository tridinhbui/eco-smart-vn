import React, { useEffect, useState } from "react";
import Navbar from "../navbar/navbar";
import { useRouter } from 'next/router'

const Layout = ({ children }) => {
  const router = useRouter()
  const [path, setPath] = useState("/");
  useEffect(() => {
    setPath(router.pathname);
  }, [router]);
  return (
    <>
      {
        path == "/admin" || path =="/dashboard" ?
          <>
            {children}
          </>
          :
          <>
            <Navbar />
            {children}
          </>
      }
    </>
  );
};

export default Layout;