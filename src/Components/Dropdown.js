import React from 'react';

export const Dropdown = (props) => {
  const arr = ["Kochi", "Mumbai", "Delhi", "Chennai", "Bangalore"]
  return (
    <div className="d-flex">
    <label htmlFor="inputState" className="mx-3 fw-bold form-label">Pick a City</label>
    <select onChange = {
                (e)=>{
                    console.log(e.target.value) 
                    props.setCity(e.target.value)
                }
            } 
            id="inputState" className="border border-dark border-round form-select">
    <option>Choose...</option>
    {arr.map((value) => (
                <option value={value} key={value}>
                    {value}
                </option>
    ))}
    </select>
    </div>
  )
};


