
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext.js';
import { FaTimesCircle } from 'react-icons/fa';
import { FaPlusCircle } from 'react-icons/fa';
import { FaMinusCircle } from 'react-icons/fa';

const ExpenseItem = (props) => {
    const { dispatch, currency} = useContext(AppContext);
    
    const handleDeleteItem = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.name,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });

    }


    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{parseInt(props.cost)}</td>
        <td><FaPlusCircle  size='1.2em' color="green" onClick={event=> increaseAllocation(props.name)}></FaPlusCircle></td>
        <td><FaMinusCircle  size='1.2em' color="red" onClick={event=> decreaseAllocation(props.name)}></FaMinusCircle></td>
        <td><FaTimesCircle  onClick={handleDeleteItem}></FaTimesCircle></td>
        </tr>
    );
};

export default ExpenseItem;