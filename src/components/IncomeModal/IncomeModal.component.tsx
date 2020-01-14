import React, {FC} from "react";
import {Dialog} from "@material-ui/core";
import {useIncomeModal} from "./useIncomeModal";

const IncomeModal: FC = () => {
  const {isOpen, handleClose} = useIncomeModal();
  return (
    <Dialog open={isOpen} onClose={handleClose}>

    </Dialog>
  );
};

export default IncomeModal;
