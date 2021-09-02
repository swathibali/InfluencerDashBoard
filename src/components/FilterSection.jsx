import { useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import { Link, Redirect, useHistory } from 'react-router-dom';
import AddPostLink from './AddPostLink';
import './filterSection.scss';
import Calendar from '@lls/react-light-calendar'
import '@lls/react-light-calendar/dist/index.css'


const FilterSection = () => {

  const [isModalOpen,setModelOpen] = useState(false)
  console.log(useHistory());
  const addPostLink = () =>{
   
    setModelOpen(!isModalOpen)
  }
  
  

  return (
    <>
      <span>Filter by : </span>
      <select name="Post Type">
        <option label="Post Type"></option>
        <option value="Story">Story</option>
        <option value="Static">Static</option>
        <option value="IGTV">IGTV</option>
        <option value="Reels">Reels</option>
      </select>
     
      <select name="Date Range">
      <option label="Date Range"></option>
       </select>

      <button className = 'addPost' onClick = {addPostLink}>Add Post Link</button>
       <AddPostLink isModalOpen={isModalOpen} addPostLink={addPostLink}/> 
    </>
  );
};

export default FilterSection;
