import { Outlet } from "react-router-dom";
import * as React from "react";
import MainHeader from "../Main/MainHeader";

class Layout extends React.Component {
  render() {
    return (
      <>
        <MainHeader />
        <Outlet />
      </>
    );
  }
}

export default Layout;
