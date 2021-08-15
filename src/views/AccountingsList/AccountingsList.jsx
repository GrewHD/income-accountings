import React from 'react'

import styles from './AccountingsList.module.css';

import AccountingItem from "./components/AccountingItem";

class AccountingsList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ul className={styles.accountingsList}>
                {this.props.accountings.map(accounting =>
                    <AccountingItem
                        {...accounting}
                        onDelete={() => this.props.onDelete(accounting.id)}
                        openChangeModal={() => this.props.openChangeModal(accounting.id)}
                        openDotMenu={() => this.props.openDotMenu(accounting.id)}
                        key={accounting.id}
                        isOpen={this.props.isOpen}
                        // dotMenuId={this.props.dotMenuId.id}
                    />
                )}
            </ul>
        )
    }
}

export default AccountingsList