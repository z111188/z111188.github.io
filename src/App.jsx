import { useState } from "react";
import "./App.css";
import StockForm from "./components/StockForm";
import StockContext from "./contexts/StockContext";
import StockList1 from "./components/Stocklist1";


function App() {
  //const [count, setCount] = useState(0);
  const [stocks, setStocks] = useState([]);

  return (
    <StockContext.Provider value={{stocks,setStocks}}>
      <h1>Finance Dashboard</h1>
      <StockForm />
      <StockList1 />
    </StockContext.Provider>
  );
}

export default App;

