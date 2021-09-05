import React from "react";
import logo from "../../assets/react.svg";
import styles from "./header.module.scss";

function Header() {
    return (
        <div className={styles.header}>
            <img src={logo} alt="Logo" />
            <h3>Language Cards</h3>
            <p>Click the cards for details</p>
        </div>
    );
}

export default Header;
