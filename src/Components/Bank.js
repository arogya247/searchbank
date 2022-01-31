import React, {useState, useEffect} from 'react';
import { MdOutlineFavoriteBorder } from 'react-icons/md';
import {FcLike} from 'react-icons/fc'

export const Bank = (props) => {

  const [fav, setFav] = useState(false);

  const favHandler = () => {

    let favorites = JSON.parse(localStorage.getItem("favorites"))
    
    if (fav===false){  
        if(favorites === null){
          favorites = []
        }
        favorites.push(props.ifsc)
        setFav(true)
    }
    else{
      favorites = favorites.filter(item => item !== props.ifsc)
      setFav(false)
    }

    localStorage.setItem("favorites", JSON.stringify(favorites))
    
  }

  useEffect(() => {
    let favorites = JSON.parse(localStorage.getItem("favorites"))
    if (favorites && favorites.includes(props.ifsc)){
    setFav(true)
  }
  }, [fav])
  

  return (
  <div className='bank py-1'>
      <div className="row py-1 shadow border border-dark border-3 rounded">
        <div className="col-1">{props.bank_id}</div>
        <div className="col-2">{props.ifsc}</div>
        <div className="col-2">{props.branch}</div>
        <div className="col-2">{props.bank_name}</div>
        <div className="col-1">{props.city}</div>
        {/* <div className="col">{props.district}</div>
        <div className="col">{props.state}</div> */}
        <div className="col-3">{props.address.slice(0,25)}...</div>
        <div className="col-1">
          <button onClick={() => favHandler()}>{fav ? <FcLike /> : <MdOutlineFavoriteBorder /> }</button>
        </div>
      </div>
  </div>
  )
};
