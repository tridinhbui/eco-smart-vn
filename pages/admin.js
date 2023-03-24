import React, { useEffect, useState } from "react";
import Login from "@/components/admin/login";
import Dashboard from "@/components/admin/dashboard";

const Admin = ({data}) => {
  if (!data.isLogin)
    return (
      <div>
        <Login/>
      </div>
    )
  return (
    <div>
      <Dashboard isMobile = {data.isMobileView}/>
    </div>
  )
};

export async function getServerSideProps(ctx) {
  let data;
  let isMobileView = (ctx.req
    ? ctx.req.headers['user-agent']
    : navigator.userAgent).match(
      /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
    )
  if (ctx.req.headers.cookie)
    data = {isLogin:true, isMobileView: Boolean(isMobileView)};
  else
    data = {isLogin:false, isMobileView: Boolean(isMobileView)};
  return { props: { data } }
}

export default Admin;