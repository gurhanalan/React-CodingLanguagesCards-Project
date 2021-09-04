import React from "react";
import styles from "./cards.module.scss";
import { categories } from "../../helpers/data";
import Item from "../item/Item";
function Cards() {
    return (
        <div className={styles.cards}>
            {categories.map((card, index) => (
                <Item className={styles.card} card={card} key={index} />
            ))}
        </div>
    );
}

export default Cards;
