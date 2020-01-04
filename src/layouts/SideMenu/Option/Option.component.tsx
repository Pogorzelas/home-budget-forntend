import React, {FC} from "react";
import {Button, Typography} from "@material-ui/core";
import {SvgIconComponent} from "@material-ui/icons";

interface Props {
  name: string;
  onClick: VoidFunction;
  Icon: SvgIconComponent;
  classes: {
    label: string;
  }
}

const Option: FC<Props> = ({name, onClick, Icon, classes}) =>
  <Button
    classes={{
      label: classes.label
    }}
    onClick={onClick}
    variant='text'
  >
    <Icon/>
    <Typography component='p'>
      {name}
    </Typography>
  </Button>;


export default Option;
