import React, {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';

export const Blance = () => {
  const {transactions} = useContext(GlobalContext);
  const amounts = transactions.map(transaction => transaction.amount);
  const total = amounts.reduce((a,b) =>(a += b),0).toFixed(2);

    return (
        <>
          <h4>  Blance</h4>
    <h1>$ {total}</h1>
        </>
    )
}
