import React from 'react';

export const Pagesize = (props) => {

  const arr = [100, 200, 300, 400, 500]
  
  return (
    <div className="d-flex py-1">
    <label htmlFor="inputState" className="fw-bold form-label">Pick the page size..</label>
    <select onChange = {
                (e)=>{
                    console.log(e.target.value) 
                    props.setPostsPerPage(e.target.value)
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