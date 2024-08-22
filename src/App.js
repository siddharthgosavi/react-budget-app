import "./App.css";
import { Container } from "semantic-ui-react";
import MainHeader from "./components/MainHeader";
import NewEntryForm from "./components/NewEntryForm";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import EntryLine from "./components/EntryLine";

function App() {
  return (
    <Container>
      <MainHeader title={"Budget"} size={"small"} />
      <DisplayBalance title={"Your Balance"} value={"250.53"} />
      <DisplayBalances />

      <MainHeader title={"History"} type={"h3"} />
      <EntryLine description={"Income"} value={"200"} />
      <EntryLine description={"Expense else"} value={"400"} isExpense />

      <MainHeader title={"Add new transaction"} type={"h3"} />
      <NewEntryForm />
    </Container>
  );
}

export default App;
