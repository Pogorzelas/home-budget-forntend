import React, {FC} from "react";
import {IconButton} from "@material-ui/core";
import {SvgIconComponent} from "@material-ui/icons";

interface Props {
  onClick: VoidFunction;
  Icon: SvgIconComponent;
}

const Option: FC<Props> = ({onClick, Icon}) =>
  <IconButton onClick={onClick}>
    <Icon/>
  </IconButton>;


export default Option;
