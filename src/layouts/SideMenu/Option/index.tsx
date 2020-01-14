import React, {FC} from "react";
import {Button, Typography} from "@material-ui/core";
import {SvgIconComponent} from "@material-ui/icons";
import useStyles from "./useStyles";

interface Props {
  name: string;
  onClick: VoidFunction;
  Icon: SvgIconComponent;
}

const Option: FC<Props> = ({name, onClick, Icon}) => {
  const classes = useStyles();
  return (
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
    </Button>
  );
};



export default Option;
