import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Bank } from './Bank';
import { Spinner } from './Spinner';
import { Pagination } from './Pagination';
import { Pagesize } from './Pagesize';

export const Banks = (props) => {

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(100);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    updateBanks()
  }, [props.city])

  // fetch list of banks from the banks api
  const updateBanks = async() => {
    setLoading(true)
    if(JSON.parse(localStorage.getItem(props.city))){
      let res = JSON.parse(localStorage.getItem(props.city))
      props.setBanks(res)
      props.setFilteredbanks(res)
    }
    else{
      let res = await axios.get(`https://vast-shore-74260.herokuapp.com/banks?city=${props.city.toUpperCase()}`)
      props.setBanks(res.data)
      props.setFilteredbanks(res.data)
      localStorage.setItem(props.city, JSON.stringify(res.data))
    }
    
    props.setKeyword("")
    setLoading(false)
  }

  // Get current list of banks
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = props.filteredbanks.slice(indexOfFirstPost, indexOfLastPost)
  
  //Change Page
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return(
    <div>
      {loading ? <Spinner /> : 
      <div className='container'>
      <div className="row py-4 fw-bold text-white bg-danger border border-dark border-3 rounded">
        <div className="col-1">ID</div>
        <div className="col-2">IFSC</div>
        <div className="col-2">Branch</div>
        <div className="col-2">Name</div>
        <div className="col-1">City</div>
        {/* <div className="col">{props.district}</div>
        <div className="col">{props.state}</div> */}
        <div className="col-3">Address</div>
        <div className="col-1">Favorite</div>
      </div>
      {currentPosts.map((e) => {
        return (
          <div key={e.ifsc}>
            <Bank ifsc={e.ifsc} bank_id={e.bank_id} 
            address={e.address} city={e.city}
            branch={e.branch} bank_name={e.bank_name}
            district={e.district} state={e.state} />
          </div>
        )
      })}

      <Pagination postsPerPage={postsPerPage} totalPosts={props.filteredbanks.length} paginate={paginate}/>
      <Pagesize setPostsPerPage={setPostsPerPage} />

    </div>}

    </div>
  ) 
};
