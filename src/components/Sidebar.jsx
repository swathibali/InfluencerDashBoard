import React, { useContext, useState } from 'react';
import './sidebar.scss'; 
import data from '../data'
import { AppDetailsContext } from '../contexts/AppDetailsContext';


const Sidebar = () => {
  const {appDetails, setAppDetails} = useContext(AppDetailsContext)
  const [app,setApp]=useState('instagram')
  
  const display = (e) => {
    console.log(data.socialmedia[e.target.value],"value");
    setApp(e.target.value)
    setAppDetails(data.socialmedia[e.target.value])
  
   
  };
  return (
    <>
      <ul className="sidebar_list">
        <li>
          <button className={`${app === 'instagram' ? 'list__btn__active' : 'list__btn'}`}value="instagram" onClick={display}>
            Instagram
          </button>
        </li>
        <li>
          <button className={`${app === 'youtube' ? 'list__btn__active' : 'list__btn'}`} value="youtube" onClick={display}>
            Youtube
          </button>
        </li>
        <li>
          <button className={`${app === 'facebook' ? 'list__btn__active' : 'list__btn'}`} value="facebook" onClick={display}>
            Facebook
          </button>
        </li>
      </ul>
    </>
  );
};

export default Sidebar;
