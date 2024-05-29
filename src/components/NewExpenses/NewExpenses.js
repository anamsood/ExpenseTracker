import React,{useState} from 'react';
import './NewExpenses.css';
import ExpenseForm from './ExpenseForm';

function NewExpenses(prop){
    const [startEditing,setStartEditing] =useState(false);

    function submitExpenseDataHandler(enteredExpenseData){
        const expenseData={
            id:Math.random().toString(),
            ...enteredExpenseData,
        };
        prop.onAddExpense(expenseData);
        setStartEditing(false)
    };

    function startEditingHandler(){
        setStartEditing(true);
    }

    function stopEditingHandler(){
        setStartEditing(false);
    }

    return(
        <div className="new-expense">
            {!startEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
            {startEditing && <ExpenseForm onSubmitExpenseData={submitExpenseDataHandler} onCancel={stopEditingHandler}/>}

        </div>
    );
};

export default NewExpenses;