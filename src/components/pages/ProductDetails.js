import React, { useContext } from "react";
import classes from "./ProductDetails.module.css";
import { useParams, Link } from "react-router-dom";
import { MyContext } from "../../context/AppContext";

const ProductDetails = () => {
  const { productList, addItem } = useContext(MyContext);
  const prodId = useParams().id;

  let shoes;
  for (let i = 0; i < productList.length; i++) {
    if (`${productList[i].id}` === prodId) {
      console.log("HIII");
      shoes = productList[i];
    }
  }

  return (
    <>
      <div className={classes.cardWrapper}>
        <img className={classes.image} src={shoes.imageUrl} alt={shoes.title} />
        <div className={classes.zoom_area}>
          <div className={classes.moreImages}>
            <img
              className={classes.sampleImg}
              src={shoes.imageUrl}
              alt={shoes.title}
            />
            <img
              className={classes.sampleImg}
              src={shoes.imageUrl}
              alt={shoes.title}
            />
            <img
              className={classes.sampleImg}
              src={shoes.imageUrl}
              alt={shoes.title}
            />
          </div>
        </div>
        <div className={classes.details}>
          <h1 className={classes.title}>{shoes.title}</h1>
          <p className={classes.description}>
            Enhance Your Shopping Experience With Our Personalised
            Recommendations. Explore a Great Collection Of Shoes For Men,
            Available At Great Prices..
          </p>
          <div className={classes.starRatings}>★★★★☆</div>
          <ul className={classes.reviews}>
            <h3>Reviews:-</h3>
            <li>Nice product. Recommended!!</li>
            <li>Over-Priced.</li>
            <li>Value for money!</li>
            <p>Load more reviews</p>
          </ul>
          <p className={classes.price}>${shoes.price}</p>
          <div className={classes.btns}>
            <button
              className={classes.addBtn}
              type="button"
              onClick={() => addItem(shoes.id)}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
      <Link to="/" className={classes.backBtn} type="button">
        Go Back
      </Link>
    </>
  );
};

export default ProductDetails;
