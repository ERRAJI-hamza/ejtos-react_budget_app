
import React , {useContext} from 'react';
import { AppContext } from '../context/AppContext';


const Remaining = () => {
      const {expenses ,budget, currency} = useContext(AppContext);

      let remaining = 0;

      if (expenses) {
            const totalExpenses = expenses.reduce((total, item) => {
            return (total = total + item.cost);
        }, 0);
        remaining = budget - totalExpenses;
       }

         return (
            <div className='alert alert-success'>
                <span>Remaining: {currency}{remaining}</span>
            </div>
        );
    };
    
export default Remaining;
