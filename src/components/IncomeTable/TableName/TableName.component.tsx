import React, {FC} from "react";
import {Fab, Typography} from "@material-ui/core";
import {Add} from "@material-ui/icons";
import {useAddButton} from "./useAddButton";
import IncomeModal from "../../IncomeModal/index";

const TABLE_NAME = 'Dochody';

interface Props {
  classes: {
    root: string;
  }
}

const TableName: FC<Props> = ({classes}) => {
  const {openModal} = useAddButton();
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
