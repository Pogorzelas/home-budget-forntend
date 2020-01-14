import React, {FC} from "react";
import {Fab, Typography} from "@material-ui/core";
import {Add} from "@material-ui/icons";
import {useAddButton} from "./useAddButton";
import IncomeModal from "../../../../../components/IncomeModal/index";
import useStyles from "./useStyles";

const TABLE_NAME = 'Dochody';

const TableName: FC = () => {
  const {openModal} = useAddButton();
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div/>
      <Typography variant='h3'>
        {TABLE_NAME}
      </Typography>
      <Fab
        size='medium'
        color='primary'
        onClick={openModal}
      >
        <Add/>
      </Fab>
      <IncomeModal/>
    </div>
  )
};

export default TableName;
