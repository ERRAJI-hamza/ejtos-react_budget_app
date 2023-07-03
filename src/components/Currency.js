import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';


const Currency = () => {
  const {dispatch } = useContext(AppContext);

    const changeCurrency = (val)=>{
            dispatch({
                type: 'CHG_CURRENCY',
                payload: val,
            })
    }
    

  return (
        <div className='alert alert-secondary'> 
      <select name="currency" id="currency" style={{backgroundColor: '#b7e3a9'}} onChange={event=>changeCurrency(event.target.value)}>
        <option value="$">currency($ Dollar)</option>
        <option value="£">currency(£ Pound)</option>
        <option value="€">currency(€ Euro)</option>
        <option value="₹">currency(₹ Pound)</option>
      </select>	
    </div>
    );
};

export default Currency;