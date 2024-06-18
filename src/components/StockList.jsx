import { useContext, useState, useEffect } from "react";
import MyContext from "../contexts/StockContext";

function StockList() {
    const stockContext = useContext(MyContext);
    const [currentPrice,setCurrentPrice]= useState("");
    
    useEffect(() => {
        fetch("https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=IBM&apikey=demo")
        .then((res) => res.json())
        .then((data) => setCurrentPrice(data["Global Quote"]["05. price"]))
        .catch(()=>{alert="Error"})
      });
    
      let pnl = ((currentPrice - stockContext.purchaseprice)*stockContext.quantity).toFixed(2);
   
    stockContext.setResult(()=>{
      if (currentPrice < stockContext.purchaseprice)

        return (<>
        <div className="stockbox">
        <p>Symbol: {stockContext.symbol}<br></br>
           Quantity: {stockContext.quantity}<br></br>
           Purchase Price: {parseFloat(stockContext.purchaseprice).toFixed(2)}<br></br>
           Current Price: {parseFloat(currentPrice).toFixed(2)}<br></br>
           <span className="pnl">Profit/Loss:{pnl}</span>
        </p></div>
        </>     );
        else 

        return (<>
        <div className="stockbox">
        <p>Symbol: {stockContext.symbol}<br></br>
           Quantity: {stockContext.quantity}<br></br>
           Purchase Price: ${parseFloat(stockContext.purchaseprice).toFixed(2)}<br></br>
           Current Price: {parseFloat(currentPrice).toFixed(2)}<br></br>
           <span className="pnl1">Profit/Loss: {pnl}</span>
        </p></div>
        </>     );})

        }

export default StockList;