import { useCallback, useContext, useEffect, useState } from "react";
import "./stock.css";
import StockContext from "../contexts/StockContext";

function StockForm() {
  const {stocks, setStocks} = useContext(StockContext);
  const [symbol, setSymbol] = useState("");
  const [quantity, setQuantity] = useState("");
  const [purchaseprice, setPurchasePrice] = useState("");
  const [currentPrice,setCurrentPrice] = useState("");
  
  useEffect(() => {
    fetch("https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol="+symbol+"&apikey=027d3303de6bd0ea33155022")
    .then((res) => res.json())
    .then((data) => setCurrentPrice(data['Global Quote']['05. price']))
    .catch(()=>{alert="Invalid Stock Symbol"})
  });

  const AddStock = useCallback( (event) => {
    event.preventDefault();

    const pnl= ((currentPrice - purchaseprice)*quantity).toFixed(2);
    const newStock = {symbol, quantity, purchaseprice, currentPrice, pnl};
    setStocks([...stocks,newStock]);
    
    setSymbol('');
    setQuantity('');
    setPurchasePrice('');

  }, [symbol, quantity, purchaseprice, stocks, setStocks]);

  return (
    <> 
    <form onSubmit={AddStock} className="stockDataContainer" >
      <input
        value={symbol}
        onChange= {(event) => setSymbol(event.target.value)}
        placeholder="Stock Symbol"
        className="stock-input"
      required></input>
      <input
        value={quantity}
        onChange= {(event) => setQuantity(event.target.value)}
        input type="number"
        min="0"
        placeholder="Quantity"
        className="stock-input"
        required></input>
      <input
        value={purchaseprice}
        onChange= {(event) => setPurchasePrice(event.target.value)}
        input type="number"
        min="0"
        placeholder="Purchase Price"
        className="stock-input"
      required></input>
      <button type="submit">Add Stock</button>
    </form>
 </>
  );

}

export default StockForm;
