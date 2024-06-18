import { useCallback, useContext, useEffect, useState } from "react";
import MyContext from "../contexts/StockContext";
import "./stock.css";
import StockList from "./StockList";

function StockForm() {

  const stockContext = useContext(MyContext);

  return (
    <> <div className="stockDataContainer">
      <input
        value={stockContext.Symbol}
        onChange= {(event) => stockContext.setSymbol(event.target.value)}
        placeholder="Stock Symbol"
        className="stock-input"
      ></input>
      <input
        value={stockContext.quantity}
        onChange= {(event) => stockContext.setQuantity(event.target.value)}
        input type="number"
        min="0"
        placeholder="Quantity"
        className="stock-input"
     ></input>
      <input
        value={stockContext.purchaseprice}
        onChange= {(event) => stockContext.setPurchaseprice(event.target.value)}
        input type="number"
        min="0"
        placeholder="Purchase Price"
        className="stock-input"
      ></input>
      <button onClick ={StockList}>Add Stock</button>
    </div>

 </>
  );

}

export default StockForm;
