import React from 'react'
import './Calculator.css'
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import { Button } from '@mui/material';

function Calculator() {
    const [total, setTotal] = React.useState(0);
    const [amount, setAmount] = React.useState(0);
    const [rate, setRate] = React.useState(0);
    const [year, setYear] = React.useState(0);

    const calculate = (e) => {
        setTotal((amount * rate * year) / 100);
    }

    const reset = (e) => {
        setTotal(0);
        setAmount(0);
        setRate(0);
        setYear(0);
    }

    console.log(amount, rate, year);
    console.log(total);
  return (
    <div>
        <div className="container">
            <div className="header">
            <h1>Simple Interest Calculator</h1>
            <p>Enter the values to calculate simple interest</p>
            <div className="total">
                <h1> &#8377; {total}</h1>
            </div>
            </div>
            <div className="calculator">
            <FormControl className='FormControls'>
            <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
            <OutlinedInput
                id="outlined-adornment-amount" onChange={(e) => setAmount(e.target.value)} value={amount||''}
                startAdornment={<InputAdornment position="start">$</InputAdornment>}
                label="Amount"
            />
            </FormControl>
            <FormControl className='FormControls'>
            <InputLabel htmlFor="outlined-adornment-amount">Rate</InputLabel>
            <OutlinedInput
                id="outlined-adornment-amount" onChange={(e) => setRate(e.target.value)} value={rate||''}
                startAdornment={<InputAdornment position="start">%</InputAdornment>}
                label="Rate"
            />
            </FormControl>
            <FormControl className='FormControls'>
            <InputLabel htmlFor="outlined-adornment-amount">Year</InputLabel>
            <OutlinedInput
                id="outlined-adornment-amount" onChange={(e)=>setYear(e.target.value)} value={year||''} 
                startAdornment={<InputAdornment position="start"></InputAdornment>}
                label="Year"
            />
            </FormControl>
            <div className="btns">
            <Button variant="contained" onClick={calculate}>Calculate</Button>
            <Button variant="contained" onClick={reset}>Reset</Button>
            </div>
            </div>

        </div>
    </div>
    )
    }

export default Calculator