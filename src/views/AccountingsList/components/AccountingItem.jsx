import React from "react";

import styles from './AccountingItem.module.css';
import incomeIcon from '../../../img/income.png';
import outcomeIcon from '../../../img/outcome.png';
import menuIcon from '../../../img/menu-icon.png';
import DotMenu from "./components/DotMenu";

class AccountingItem extends React.Component {
    constructor(props) {
        super(props);
        this.setSymbol = this.setSymbol.bind(this)
        this.setValueColor = this.setValueColor.bind(this)
    }

    setSymbol() {
        const symbols = {
            income: "+",
            outcome: "-"
        }

        return symbols[this.props.type];
    }

    setValueColor() {
        const { value } = this.props

        switch (true) {
            case value > 0:
                return { color: "#39DA51" }
            default:
                return { color: "black" }
        }
    }

    setIconRoot() {
        const { value } = this.props

        switch (true) {
            case value > 0:
                return incomeIcon
            default:
                return outcomeIcon
        }
    }

    // dotMenuHandler() {
    //
    // }

    render() {
        return (
            <li className={styles.accountingItem}>
                <div className={styles.iconItemNameDate}>
                    <img className={styles.iconImg} src={this.setIconRoot()} alt="icon"/>
                    <div>
                        <p className={styles.itemName}>{this.props.text}</p>
                        <p className={styles.itemDate}>{this.props.date}</p>
                    </div>
                </div>
                <div className={styles.valueButtons}>
                    <p style={this.setValueColor()}>
                        {this.setSymbol()}{Math.abs(this.props.value)}$
                    </p>
                    <div className={styles.buttonsBlock}>
                        <button onClick={this.props.onDelete}>Delete</button>
                        <button onClick={this.props.openChangeModal}>Change</button>
                    </div>

                    {/*<button onClick={this.props.openDotMenu}><img src={menuIcon}/></button>*/}

                    {/*<DotMenu*/}
                    {/*    openDotMenu={this.props.openDotMenu}*/}
                    {/*    onDelete={this.props.onDelete}*/}
                    {/*    openChangeModal={this.props.openChangeModal}*/}
                    {/*    isOpen={this.props.isOpen}*/}
                    {/*/>*/}
                </div>
            </li>
        )
    }
}

export default AccountingItem