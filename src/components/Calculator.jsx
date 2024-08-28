import React from 'react'
import './Calculator.css'
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import { Button } from '@mui/material';

function Calculator() {
    const [total, setTotal] = React.useState(0);
    const [amount, setAmount] = React.useState('');
    const [rate, setRate] = React.useState('');
    const [year, setYear] = React.useState('');

    const calculate = () => {
        setTotal((amount * rate * year) / 100);
    }

    const reset = () => {
        setTotal(0);
        setAmount(0);
        setRate(0);
        setYear(0);
    }

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
                            id="outlined-adornment-amount"
                            type="number"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            startAdornment={<InputAdornment position="start">$</InputAdornment>}
                            label="Amount"
                        />
                    </FormControl>
                    <FormControl className='FormControls'>
                        <InputLabel htmlFor="outlined-adornment-rate">Rate</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-rate"
                            type="number"
                            value={rate}
                            onChange={(e) => setRate(e.target.value)}
                            startAdornment={<InputAdornment position="start">%</InputAdornment>}
                            label="Rate"
                        />
                    </FormControl>
                    <FormControl className='FormControls'>
                        <InputLabel htmlFor="outlined-adornment-year">Year</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-year"
                            type="number"
                            value={year}
                            onChange={(e) => setYear(e.target.value)}
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

export default Calculator;
