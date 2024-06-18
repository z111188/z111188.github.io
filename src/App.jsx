import { useState } from "react";
import "./App.css";
import StockForm from "./components/StockForm";
import MyContext from "./contexts/StockContext";
import StockList from "./components/StockList";


function App() {
  //const [count, setCount] = useState(0);
  const [symbol, setSymbol] = useState("");
  const [quantity, setQuantity] = useState("");
  const [purchaseprice, setPurchaseprice] = useState("");
  const [result, setResult] = useState(["No Stocks Added"]);

  return (
    <MyContext.Provider value={{symbol,setSymbol,quantity,setQuantity,purchaseprice,setPurchaseprice,result,setResult}}>
      <h1>Finance Dashboard</h1>
      <StockForm />
      <h1>Stock List</h1>
      <h2>{result}</h2>
    </MyContext.Provider>
  );
}

export default App;

