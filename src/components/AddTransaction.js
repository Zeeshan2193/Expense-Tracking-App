import React,{useState, useContext} from 'react'
import {GlobalContext} from '../context/GlobalState';

export const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState();


    const {addTransaction} = useContext(GlobalContext);
    const onSubmit= e=>{
        e.preventDefault();
        const NewTransaction = {
            id: Math.floor(Math.random() * 10000000),
            text,
            amount: +amount
        }
        addTransaction(NewTransaction);
        setText = '';
        setAmount = '';
    }
    
    return (
        <>
          <h3>Add New Transaction</h3>
          <form onSubmit={onSubmit}>
              <div className="form-control">
                  <label>Text</label>
                  <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter Text ......."></input>
              </div>
              <div className="form-control">
                  <label>Amount<br />
                  (negative-expense, positive-expense)
                  </label>
                  <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter Amount ......."></input>
              </div>
            <button className="btn">Add Transaction</button>
          </form>  
        </>
    )
}
