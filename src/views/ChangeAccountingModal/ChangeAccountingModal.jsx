import React from "react";

import styles from "./ChangeAccountingModal.module.css"

class ChangeAccountingModal extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    state = {
        text: this.props.accounting.text,
        value: this.props.accounting.value
    }

    handleSubmit() {
        this.props.onSubmit({
            id: this.props.accounting.id,
            value: Number(this.state.value),
            text: this.state.text
        })
    }

    render() {
        if (!this.props.isOpen) return <></>

        return (
            <div className={styles.modalOverlay}>
                <div className={styles.modalWindow}>
                    <p>Edit transaction</p>
                    <div className={styles.modalValueInputs}>
                        <input value={this.state.text} onChange={e => this.setState({text: e.target.value})}/>
                        <input value={this.state.value} onChange={e => this.setState({value: e.target.value})}/>
                    </div>
                    <div className={styles.modalButtons}>
                        <button className={styles.submitButton} onClick={this.handleSubmit}></button>
                        <button className={styles.cancelButton} onClick={this.props.onCancel}></button>
                    </div>
                </div>
            </div>
        )
    }

}

export default ChangeAccountingModal