import React, {FC, ReactElement, Fragment} from "react";
import NavBar from "./NavBar/index";
import SideMenu from "./SideMenu/index";
import SnackBar from "./SnackBar/index";

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
