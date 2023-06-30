import React from 'react';
import './style/PurchaseCard.css';

const PurchaseCard = ({ prod }) => {
    console.log(prod);
    const subtotal = prod.quantity * prod.product.price;

    return (
        <article className="purchaseCard">
            <img className="purchaseCard_img" src={prod.product.images[0].url} alt="" />
            <h3 className="purchaseCard_title">{prod.product.title}</h3>
            <div>
                <span>{prod.quantity}</span>x<span></span>
            </div>
            <div>
                <span>${subtotal}</span>
            </div>
        </article>
    );
};

export default PurchaseCard;
