import React, {FC, ReactElement, Fragment} from "react";
import NavBar from "./NavBar";
import SideMenu from "./SideMenu";
import SnackBar from "./SnackBar";

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
    <SnackBar/>
  </Fragment>;

export default Layout;
