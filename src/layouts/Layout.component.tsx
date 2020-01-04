import React, {FC, ReactElement, Fragment} from "react";
import NavBar from "./NavBar";
import SideMenu from "./SideMenu";

interface Props {
  children: ReactElement[];
}

const Layout: FC<Props> = ({children}) =>
  <Fragment>
    <NavBar/>
    {
      children
    }
    <SideMenu/>
  </Fragment>;

export default Layout;
