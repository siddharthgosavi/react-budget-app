import "./App.css";
import { Container } from "semantic-ui-react";
import MainHeader from "./components/MainHeader";
import NewEntryForm from "./components/NewEntryForm";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import { useEffect, useState } from "react";
import EntryLines from "./components/EntryLines";
import ModelEdit from "./components/ModelEdit";

function App() {
  const [entries, setEntries] = useState(intialEntries);
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [isExpense, setIsExpense] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [entryId, setEntryId] = useState();
  const [totalIncomes, setTotalIncomes] = useState(0);
  const [totalExpenses, setTotalExpenses] = useState(0);
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    if (!isOpen && entryId) {
      updateEntry();
      resetEntry();
    }
    // eslint-disable-next-line
  }, [isOpen, entryId]);

  useEffect(() => {
    let totalIncome = 0;
    let totalExpense = 0;
    entries.forEach(entry => {
      if (entry.isExpense) {
        totalExpense += Number(entry.value);
      } else {
        totalIncome += Number(entry.value);
      }
    });
    setBalance(totalIncome - totalExpense);
    setTotalIncomes(totalIncome);
    setTotalExpenses(totalExpense);
  }, [entries]);

  function deleteEntry(id) {
    const result = entries.filter(entry => entry.id !== id);
    setEntries(result);
  }

  function editEntry(id) {
    console.log("edit entry", id);
    if (id) {
      const index = entries.findIndex(entry => entry.id === id);
      const entry = entries[index];

      setEntryId(id);
      setDescription(entry.description);
      setValue(entry.value);
      setIsExpense(entry.isExpense);
      setIsOpen(true);
    }
  }

  function addEntry() {
    const result = entries.concat({ id: entries.length + 1, description, value, isExpense });
    setEntries(result);
    resetEntry();
  }

  function updateEntry() {
    const index = entries.findIndex(entry => entry.id === entryId);
    const newEntries = [...entries];
    newEntries[index].description = description;
    newEntries[index].value = value;
    newEntries[index].isExpense = isExpense;
    setEntries(newEntries);
  }

  function resetEntry() {
    setDescription("");
    setValue("");
    setIsExpense(true);
  }
  return (
    <Container style={{ paddingTop: 10, paddingBottom: 10 }}>
      <MainHeader title={"Budget"} size={"small"} />
      <DisplayBalance title={"Your Balance"} value={balance} />
      <DisplayBalances totalIncomes={totalIncomes} totalExpenses={totalExpenses} />

      <MainHeader title={"History"} type={"h3"} />
      <EntryLines entries={entries} deleteEntry={deleteEntry} setIsOpen={setIsOpen} editEntry={editEntry} />

      <MainHeader title={"Add new transaction"} type={"h3"} />
      <NewEntryForm addEntry={addEntry} description={description} setDescription={setDescription} value={value} setValue={setValue} isExpense={isExpense} setIsExpense={setIsExpense} />

      <ModelEdit isOpen={isOpen} setIsOpen={setIsOpen} description={description} setDescription={setDescription} value={value} setValue={setValue} isExpense={isExpense} setIsExpense={setIsExpense} />
    </Container>
  );
}

export default App;

var intialEntries = [
  {
    id: 1,
    description: "Salary",
    value: "10000.00",
    isExpense: false
  },
  {
    id: 2,
    description: "Water bill",
    value: "99.00",
    isExpense: true
  },
  {
    id: 3,
    description: "Rent",
    value: "300.00",
    isExpense: true
  },
  {
    id: 4,
    description: "Electricity bill",
    value: "50.00",
    isExpense: true
  }
];
