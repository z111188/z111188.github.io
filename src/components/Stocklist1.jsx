import React, {useContext} from 'react';
import StockContext from '../contexts/StockContext';

function StockList1() {
  const {stocks} = useContext(StockContext);
  
  return (
    <div>
      <h2>Stock List</h2>
      {stocks.length === 0 ? (
        <h4><i>No stocks added yet</i></h4>
      ) : (
        <ul>
          {stocks.map((stocklist, index) => (
            <li key={index}>  
        <div className="stockbox">
        <p><b>Symbol:</b> {(stocklist.symbol).toUpperCase()} <br></br>
           <b>Quantity:</b> {stocklist.quantity}<br></br>
           <b>Purchase Price:</b> {parseFloat(stocklist.purchaseprice).toFixed(2)}<br></br>
           <b>Current Price:</b> {parseFloat(stocklist.currentPrice).toFixed(2)}<br></br>
           <span className={stocklist.pnl < 0 ? 'neg' : 'pos'}>Profit/Loss: {parseFloat(stocklist.pnl).toFixed(2)}</span>
           </p></div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default StockList1;