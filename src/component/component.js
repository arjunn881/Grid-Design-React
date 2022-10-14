import React from "react";
import style from "./component.module.css";

const component = () => {
  return (
    <div className={style.maindiv}>

      <div><h1>Latest Post</h1></div>
      <div className={style.filtercontainer}>
        <div>
          <i class="fa-solid fa-filter"></i>
          <span className={style.filtertext}>Filter by Catagory</span>
          </div>
        </div>
      <div className={style.catagories}>
        
        <div className={style.activecatagory}>
          <span>All</span>
        </div>
        <div className={style.catagory}>
          <span>Artificial Intelligence</span>
        </div>
        <div className={style.catagory}>
          <span>Cloud Computing</span>
        </div>
        <div className={style.catagory}>
          <span>DevOps</span>
        </div>
        <div className={style.catagory}>
          <span>Programming Languages</span>
        </div>
        <div className={style.catagory}>
          <span>Mobile Application Development</span>
        </div>
        <div className={style.catagory}>
          <span>Technology and Tools</span>
        </div>
        <div className={style.catagory}>
          <span>Get a Job in a Tech Company</span>
        </div>

        <div className={style.catagory}>
          <span>Others</span>
        </div>
      </div>
    </div>
  );
};

export default component;
