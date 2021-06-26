import {React} from 'react'
import { ReactDOM } from 'react-dom';
import './index.style.css'

export const SearchBox=props=>(
    <input className="searchBox" type="text"  placeholder="search" onChange={props.onSearch}/>
    
);
