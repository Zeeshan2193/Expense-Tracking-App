import React, {useContext}from 'react'
import {GlobalContext} from '../context/GlobalState';

export const IncomeExpenses = () => {
    const {transactions} = useContext(GlobalContext);
    const amounts = transactions.map(transaction => transaction.amount);
    const income = amounts.filter(b => b>0).reduce((a,b) =>(a += b),0).toFixed(2);

    const expense = (amounts.filter(b => b<0).reduce((a,b) =>(a += b),0)*-1).toFixed(2);

    return (
        <div className="inc-exp-container">
            <div>
            <h4>income</h4>
    <p className="money plus">+${income}</p>
            </div>
            <div>
               <h4> Expenses</h4>
    <p className="money minus">-${expense}</p>
            </div>
        </div>
    )
}
