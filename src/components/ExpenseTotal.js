import React , {useContext} from 'react';
import { AppContext } from '../context/AppContext';


const ExpenseTotal = () => {
      const {expenses ,currency} = useContext(AppContext);
      const total_budget = expenses.reduce( 
        (previousExp, currentExp) => {
        return previousExp + currentExp.cost
         },0)

         return (
            <div className='alert alert-primary'>
                <span>Spent so far: {currency}{total_budget}</span>
            </div>
        );
    };
    
export default ExpenseTotal;