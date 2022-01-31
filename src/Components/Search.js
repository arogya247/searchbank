import React from 'react';

export const Search = (props) => {

  const {banks, keyword, setKeyword, filteredbanks, setFilteredbanks} = props

  function filterByKeyword(array, string) {
    return array.filter(o =>
        Object.keys(o).some(k => String(o[k]).toLowerCase().includes(string.toLowerCase())));
  }

  const filterHandler = (e) => {
    setFilteredbanks(() => filterByKeyword(banks, e))
  }

  return (
  <div>
    <div className="d-flex">
      <label htmlFor="taskName" className="px-3 fw-bold form-label">Search using keywords</label>
      <input type="text" value={keyword} 
          onChange={(e) => {
            setKeyword(() => e.target.value)
            filterHandler(e.target.value)
            }
          } 
          className="border border-dark border-round form-control" id="taskName" />
    </div>
  </div>
  )
};
