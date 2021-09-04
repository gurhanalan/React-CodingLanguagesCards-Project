import React, { useState } from "react";

function Item({ card, key, className }) {
    // const [showPic, setshowPic] = useState(true);

    return (
        <div key={key} className={className}>
            <img src={card.img} alt="card-img" />
        </div>
    );
}

export default Item;
