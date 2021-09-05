import React, { useState } from "react";

function Item({ card, key, className }) {
    const [showPic, setshowPic] = useState(true);

    return (
        <div
            key={key}
            className={className}
            onClick={() => setshowPic(!showPic)}
        >
            {showPic ? (
                <>
                    <img src={card.img} alt="card-img" />
                    <h3>{card.name}</h3>
                </>
            ) : (
                <ul>
                    {card.options.map((option, index) => (
                        <li key={index}>{option}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Item;
