import React from "react";

import styles from "./AddAccountingItem.module.css"

class AddAccountingItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            value: '',
            date: '',
        }
        this.handleAddAccounting = this.handleAddAccounting.bind(this)
    }

    handleAddAccounting() {
        this.props.onAddAccounting(this.state.text, this.state.value, this.state.date)
        this.setState({text:'', value: ''})
    }

    render() {
        return (
            <div className={styles.addAccounting}>
                <h2>New transaction</h2>
                <div>
                    <p><input type="text" onChange={e => this.setState({text: e.target.value})} value={this.state.text} placeholder="Transaction name"/></p>
                </div>
                <div>
                    <p><input type="number" onChange={e => this.setState({value: e.target.value})} value={this.state.value} placeholder="Value" /></p>
                </div>
                <button className={styles.submitBtn} onClick={this.handleAddAccounting}></button>
            </div>
        )
    }
}

export default AddAccountingItem