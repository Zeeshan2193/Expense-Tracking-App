import React, {useContext, useState} from 'react'
import {GlobalContext} from '../context/GlobalState';

export const TransactionList = () => {
    const {transactions} = useContext(GlobalContext);
    const {deleteTransaction} = useContext(GlobalContext);

    const sign = transactions.amount < 0 ? '-' : '+' ; 
    //this a variable for show list
    const [a, setA] = useState("hidhis");
    //this b variable for hidding the show button
    const [b, setB] = useState("bshow");

    return (
        <div>
            <h3>History</h3><span> <button className={`btn ${b}`} onClick = {()=> {setA("swhis"); setB("bhide")}}>Show</button></span>
            <div className={a}>
            <ul className="list">
                {transactions.map(transaction => (<li className={transaction.amount<0? "minus": "plus"}>
    {transaction.text}<span>{transaction.amount < 0 ? '-' : '+'}${Math.abs(transaction.amount)}</span><button onClick={()=>deleteTransaction(transaction.id)} className="delete-btn">x</button>
                </li>))}

            </ul>
            <button className="btn" onClick={()=> {setA("hidhis"); setB("bshow") }}>Hide List</button>
            </div>
        </div>
    )
}
