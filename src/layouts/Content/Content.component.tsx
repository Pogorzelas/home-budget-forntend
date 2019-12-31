import React, {FC} from "react";
import {Container} from "@material-ui/core";
import FoodTable from "../../components/FoodTable";

export const Content: FC = () =>
  <Container>
    <FoodTable/>
  </Container>;
