import React from "react";

import styles from "./Total.module.css"

const Total = ({ amount, symbol }) => (
        <div className={styles.total}>
            <span>Total:</span>
            <span>{`${symbol}${Math.abs(amount)}`}$</span>
        </div>
)

export default Total

