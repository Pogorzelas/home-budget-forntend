import React, {FC} from "react";
import {Fab, Typography} from "@material-ui/core";
import {Add} from "@material-ui/icons";
import useStyles from "./useStyles";
import BalanceModal from "../../../../../components/BalanceModal";
import {BalanceType} from "../../../../../enums/BalanceType.enum";
import {useTableName} from "./useTableName";

interface Props {
  type: BalanceType;
}

const TableName: FC<Props> = ({type}) => {
  const {name, openModal} = useTableName(type);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div/>
      <Typography variant='h3'>
        {name}
      </Typography>
      <Fab
        size='medium'
        color='primary'
        onClick={openModal}
      >
        <Add/>
      </Fab>
      <BalanceModal/>
    </div>
  )
};

export default TableName;
