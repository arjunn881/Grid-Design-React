import React from "react";
import style from "./header.module.css";

const header = () => {
  return (
    <header className={style.header}>
      <nav className={style.headertext}>
        <p className={style.logo}>EDYODA</p>
        <p className={style.story}>Stories</p>
      </nav>
      <div className={style.catagoryicon}>
        <p className={style.dropdowntext}>Explore Catagories</p>
        <i className="fa-solid fa-angle-down"></i>
      </div>

      <div className={style.btndiv}>
        
          <p className={style.headerpara}>
            EdYoda is free learning and knowledge sharing platform for techies
          </p>
        
        
          <button className={style.btn}>
            <span className={style.btntext}>Go To Main Website</span>
          </button>
        
      </div>
    </header>
  );
};

export default header;
