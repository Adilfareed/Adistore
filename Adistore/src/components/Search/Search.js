import React from 'react'
import { MdClose } from "react-icons/md";
import "./Search.scss"

const Search = ({setsearchitem}) => {
  return (
    <div className='search-item'>
        <div className='form'>
            <input
            type='text'
            autoFocus
            placeholder='Search for Products'/>
            <MdClose className='close-btn' onClick={()=>setsearchitem(false)}/>

        </div>

    </div>
  )
}

export default Search