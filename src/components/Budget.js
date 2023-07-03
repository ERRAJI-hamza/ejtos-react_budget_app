
import React , {useContext, useState} from 'react';
import { AppContext } from '../context/AppContext';


const Budget = () => {

    const {dispatch ,currency , budget ,expenses, remaining} = useContext(AppContext);

    const changeBudget = (val)=>{
          const total_budget = expenses.reduce( 
            (previousExp, currentExp) => {
           return previousExp + currentExp.cost
             },0)
            if(val >= 20000){
                alert("The value cannot exceed remaining funds "+currency+""+remaining)
            }
            else if(val <= total_budget){
                alert("you cannot reduce the budget value lower than the spending")
            }

            dispatch({
                type: 'SET_BUDGET',
                payload: val,
            })
      }

         return (
            <div className='alert alert-secondary'>
            <div className="row align-items-center">
              <div className="col-sm-auto">
                <label>Budget: {currency}</label>
              </div>
              <div className="col-sm">
                <input
                  required='required'
                  type='number'
                  id='budget'
                  value={budget}
                  max={20000}
                  step={10}
                  className="form-control"
                  onChange={event => changeBudget(event.target.value)}
                />
              </div>
            </div>
          </div>
          
        );
    };
    
export default Budget;