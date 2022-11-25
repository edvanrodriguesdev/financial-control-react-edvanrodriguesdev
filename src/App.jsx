import "./App.css";
import "./components/styles.css";
import { useState } from "react";
import { HomePage } from "./components/HomePage";
import { Header } from "./components/Header";
import { Form } from "./components/Form";
import { TotalMoney } from "./components/TotalMoney";
import { List } from "./components/List";

export function App() {
  const [listTransactions, setListTransactions] = useState([]);

  const [filterList, setFilterList] = useState("Todos");

  const [pagina, setPagina] = useState(true);

  const handleValue = (valueId) => {
    const valueList = listTransactions.filter((value) => value.id !== valueId);

    setListTransactions(valueList);
  };

  return (
    <div className="App">
      {pagina ? (
        <HomePage pagina={pagina} setPagina={setPagina} />
      ) : (
        <>
          <Header pagina={pagina} setPagina={setPagina} />
          <div className="containerSite">
            <div>
              <Form
                listTransactions={listTransactions}
                setListTransactions={setListTransactions}
              />
              <TotalMoney listTransactions={listTransactions} />
            </div>
            <div>
              <List
                listTransactions={listTransactions}
                handleValue={handleValue}
                filterList={filterList}
                setFilterList={setFilterList}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
