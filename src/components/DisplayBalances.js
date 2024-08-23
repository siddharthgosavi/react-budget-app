import React from "react";
import { Grid, GridColumn, GridRow, Segment } from "semantic-ui-react";
import DisplayBalance from "./DisplayBalance";

function DisplayBalances({totalIncomes, totalExpenses}) {
  return (
    <Segment textAlign="center">
      <Grid columns={2} divided>
        <GridRow>
          <GridColumn>
            <DisplayBalance title={"income"} value={totalIncomes} color={"green"} />
          </GridColumn>
          <GridColumn>
            <DisplayBalance title={"Expenses"} value={totalExpenses} color={"red"} />
          </GridColumn>
        </GridRow>
      </Grid>
    </Segment>
  );
}

export default DisplayBalances;
