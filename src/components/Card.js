// import { BsFillBagFill } from "react-icons/bs";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';

const Card = ({ img, title, star, reviews, prevPrice, newPrice }) => {

  const [isLiked, setIsLiked] = useState(false);

  const handleClick = () => {
    setIsLiked(!isLiked);
  };
  return (
    <>
    
      <section className="card">
        <img src={img} alt={title} className="card-img" />
        <div className={`bag ${isLiked ? 'liked' : ''}`} onClick={handleClick}>
      <FontAwesomeIcon icon={faHeart} className="bag-icon" />
    </div>

        <div className="card-details">
          <h3 className="card-title">{title}</h3>
         
          <section className="card-price">
            <div className="price">
              <del>{prevPrice}</del> {newPrice}
            </div>
           
          </section>
          <section className="card-reviews">
            {star} {star} {star} {star}
            <span className="total-reviews">{reviews}</span>
          </section>
        </div>
      </section>
    </>
  );
};

export default Card;
