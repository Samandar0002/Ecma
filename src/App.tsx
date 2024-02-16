import "./App.css";
import { UseReduce } from "./hooks";
import TableElm from "./components/table";
import NavItem from "./components/navigationBar";
import Barmenu from "./components/barmenu";
import SearchBar from "./components/searchbar";
import { useEffect, useState } from "react";
import { Main } from "./layouts";

function App() {
  const { state, dispatch } = UseReduce();
  const [query, setQuery] = useState("");
  const [ID, setID] = useState<number | null>(null);

  useEffect(() => {
    console.log("state: ", state);
  }, [state]);

  const onID = (id: number) => {
    setID(id);
  };

  function handleSearch(q: string) {
    setQuery(q);
  }

  
  const filteredData = state.filter(d => d.name.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="App flex max-h-full items-start gap-[20px]">
      <NavItem />
      <Barmenu />
      <SearchBar value={query} onQuery={handleSearch}/>
      <div className="w-full mt-[8rem] flex min-h-screen items-start gap-4">
        <TableElm elements={filteredData} handleID={onID} />
        <Main id={ID!} />
      </div>
    </div>
  );
}

export default App;
