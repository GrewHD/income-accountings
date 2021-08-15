1. Изменить структуру проекта

```
    src/
        App.js
        App.css
        components/
            Button/
                index.js
                Button.jsx
        views/
            Header/
                index.js // export { default } from './Header.jsx'
                Header.jsx
                Header.module.css
            AccountingsList/
                index.js
                AccountingsList.jsx
                components/
                    AccountingItem.jsx
```

Header.jsx
```jsx
import styles from './Header.module.css'

const Header = () => (
    <div className={styles.header}>Header</div>
)

export default Header
```

Header.css
```css
.header {
    font-size: 24px;
}
```


------MODAL

App
    state: accountings
    changeAccounting(id)
    AccList
        AccItem
            props: item
            Button-Change onClick={() => openChangeModal(item.id)}

```jsx
const state = {
    accountings: [],
    changeModal: {
        isOpen: false,
        id: null
    }
};

function openChangeModal(id) {
    this.setState({
        changeModal: {
            isOpen: true,
            id
        }
    })
}

function changeAccounting(itemToChange) {
    this.setState({
        accountigns: accountings.map((item) => {
            if (item.id !== itemToChange.id) return item
            
            // Return updated item
        })
    })
}

function handleSubmitChangeForm(item) {
    this.setState({
        changeModal: {
            id: null,
            isOpen: false
        }
    })
    this.changeAccounting(item)
}

return (
    <ChangeModal
        isOpen={this.state.changeModal.isOpen}
        onSubmit={handleSubmitChangeForm}
        accounting={this.getAccountingById(this.state.changeModal.id)} />
)
```

```jsx
const ChangeModal = ({ isOpen, onSubmit, accounting }) => {
    if (!isOpen) return

    return (
        <div>
            <button onClick={onSubmit}>Save</button>
        </div>
    )
}
```