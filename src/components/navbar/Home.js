import React from "react";
import classes from "./Home.module.css";


const Home = () => {
  return (
    <>
      <div className={classes.topmost}>
        
        
      </div>
      <div className={classes.container}>
        <div className={classes.heading}>Stock</div>
        <div>
          <div className={classes.outer}>
            <div className={classes.date}>DEC20</div>
            <div className={classes.place}>Nike</div>
            <div className={classes.title}>Navy Blue</div>
            <button className={classes.buyBtn}>Buy Shoes</button>
          </div>
          <div className={classes.outer}>
            <div className={classes.date}>DEC21</div>
            <div className={classes.place}>Puma</div>
            <div className={classes.title}>S16</div>
            <button className={classes.buyBtn}>Buy Shoes</button>
          </div>
          <div className={classes.outer}>
            <div className={classes.date}>DEC22</div>
            <div className={classes.place}>Addidas</div>
            <div className={classes.title}>AD56</div>
            <button className={classes.buyBtn}>Buy Shoes</button>
          </div>
          <div className={classes.outer}>
            <div className={classes.date}>DEC23</div>
            <div className={classes.place}>Gucci</div>
            <div className={classes.title}>Rege8</div>
            <button className={classes.buyBtn}>Buy Shoes</button>
          </div>
          <div className={classes.outer}>
            <div className={classes.date}>DEC25</div>
            <div className={classes.place}>Sports</div>
            <div className={classes.title}>S34</div>
            <button className={classes.buyBtn}>Buy Shoes</button>
          </div>
          <div className={classes.outer}>
            <div className={classes.date}>DEC26</div>
            <div className={classes.place}>Lakhani</div>
            <div className={classes.title}>L-56</div>
            <button className={classes.buyBtn}>Buy Shoes</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
