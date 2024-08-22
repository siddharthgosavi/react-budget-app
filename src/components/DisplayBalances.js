import React from "react";
import { Grid, GridColumn, GridRow, Segment } from "semantic-ui-react";
import DisplayBalance from "./DisplayBalance";

function DisplayBalances() {
  return (
    <Segment textAlign="center">
      <Grid columns={2} divided>
        <GridRow>
          <GridColumn>
            <DisplayBalance title={"income"} value={"1,400.50"} color={"green"} />
          </GridColumn>
          <GridColumn>
            <DisplayBalance title={"Expenses"} value={"700"} color={"red"} />
          </GridColumn>
        </GridRow>
      </Grid>
    </Segment>
  );
}

export default DisplayBalances;
