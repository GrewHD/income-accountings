import React from "react";

import styles from "./DotMenu.module.css"
import menuIcon from '../../../../img/menu-icon.png';

class DotMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dotMenu: {
                isOpen: false,
                id: null
            }
        }
    }

    render() {
        if (!this.state.isOpen) return <button onClick={this.props.openDotMenu}><img src={menuIcon}/></button>

        return (
            <div>
                 <div className={styles.dotMenuWindow}>
                     <button onClick={this.props.openChangeModal}>Edit</button>
                        <span></span>
                     <button onClick={this.props.onDelete} className={styles.redButton}>Delete</button>
                </div>
                <div>
                    <button onClick={this.props.openDotMenu}><img src={menuIcon}/></button>
                </div>
            </div>
        )
    }
}

export default DotMenu
