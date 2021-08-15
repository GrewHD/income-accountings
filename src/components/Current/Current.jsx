import React from "react";

import styles from "./Current.module.css"

function Current({ amount }) {
    let symbol
    if (amount >= 0) symbol = "+"

    return (
        <div className={styles.current}>
            <span>Current:</span>
            <span>{symbol}{amount}$</span>
        </div>

    )
}

export default Current