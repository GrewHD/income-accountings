import React from 'react';
import './App.css';
import { v4 as uuid } from 'uuid';

import AccountingsList from "./views/AccountingsList";
import Current from "./components/Current";
import Total from "./components/Total";
import AddAccountingItem from "./views/AddAccountingItem";
import ChangeAccountingModal from "./views/ChangeAccountingModal";
import DotMenu from "./views/AccountingsList/components/components/DotMenu";

const stubAccounting = { text: "", value: "", type: ""}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       accountings: [
           {id: uuid(), text: "Income", value: 3000, type: 'income', date: this.getDate()},
           {id: uuid(), text: "Shopping", value: -200, type: 'outcome', date: this.getDate()},
           {id: uuid(), text: "Rent", value: -1000, type: 'outcome', date: this.getDate()},
       ],
       changeModal: {
           isOpen: false,
           id: null
       },
       // dotMenu: {
       //     isOpen: false,
       //     id: null
       // }
    }
    this.deleteAccounting = this.deleteAccounting.bind(this);
    this.addAccounting = this.addAccounting.bind(this);
    this.openChangeModal = this.openChangeModal.bind(this);
    this.changeAccounting = this.changeAccounting.bind(this);
    this.handleSubmitChangeForm = this.handleSubmitChangeForm.bind(this);
    this.handleCancelChangeForm = this.handleCancelChangeForm.bind(this);
    // this.openDotMenu = this.openDotMenu.bind(this);
    this.getDate = this.getDate.bind(this);
  }

  getDate() {
      let date = new Date();

      var dd = date.getDate();
      if (dd < 10) dd = '0' + dd;

      var mm = date.getMonth() + 1;
      if (mm < 10) mm = '0' + mm;

      var yy = date.getFullYear() % 100;
      if (yy < 10) yy = '0' + yy;

      return dd + '.' + mm + '.' + yy;
  }

  getCurrentAmount() {
    return this.state.accountings.reduce((sum, { value }) => sum + value, 0)
  }

  getCurrentIncomeTotalAmount() {
      return this.state.accountings
          .filter(({ type }) => type === 'income')
          .reduce((sum, { value }) => sum + value, 0)
  }

  getCurrentOutcomeTotalAmount() {
      return this.state.accountings
          .filter(({ type }) => type === 'outcome')
          .reduce((sum, { value }) => sum + value, 0)
  }

  deleteAccounting(itemToDeleteId) {
      this.setState({
          accountings: this.state.accountings.filter((item) => item.id !== itemToDeleteId )
      })
   }

   getAccountingTypeByValue(value){
      switch (true) {
          case value > 0: return "income";
          case value < 0: return "outcome";
          default: return "default";
      }
   }

  addAccounting(text, value, date) {
      if (text == '') {text = "Transaction"}
      value = Number(value)
      const newAccounting = {
          id: uuid(),
          text,
          value,
          date: this.getDate(),
          type: this.getAccountingTypeByValue(value),
      }
      this.setState({
          accountings: [...this.state.accountings, newAccounting]
      })
  }

  openChangeModal(id) {
      this.setState({
          changeModal: {
              isOpen: true,
              id
          }
      })
  }

  openDotMenu(id) {
      // if (this.state.dotMenu.isOpen == true) {
      //     this.setState({
      //         dotMenu: {
      //             isOpen: false,
      //             id
      //         }
      //     })
      // } else {
          this.setState({
              dotMenu: {
                  isOpen: true,
                  id
              }
          }, ()=>console.log(this.state.dotMenu, ))
      // }
  }

  changeAccounting(itemToChange) {
      console.log(itemToChange)
      this.setState({
          accountings: this.state.accountings.map((item) => item.id === itemToChange.id ? itemToChange : item)
      })
  }

  handleSubmitChangeForm(item) {
      this.setState({
          changeModal: {
              id: null,
              isOpen: false
          }
      })
      item.type = this.getAccountingTypeByValue(item.value)
      this.changeAccounting(item)
  }

  handleCancelChangeForm() {
    this.setState({
      changeModal: {
        id: null,
        isOpen: false
      }
    })
  }

  getAccountingById(id) {
      if (!id) return
      return this.state.accountings.find((item) => item.id === id)
  }

  render() {
    return (
        <div className={"wrapper"}>
            <div className={"app"}>
              {/*<DotMenu*/}
              {/*    onDelete={this.deleteAccounting}*/}
              {/*    openChangeModal={this.openChangeModal}*/}
              {/*    isOpen={this.state.dotMenu.isOpen}*/}
              {/*/>*/}
              <ChangeAccountingModal
                  isOpen={this.state.changeModal.isOpen}
                  onSubmit={this.handleSubmitChangeForm}
                  onCancel={this.handleCancelChangeForm}
                  accounting={this.getAccountingById(this.state.changeModal.id) || stubAccounting}
                  key={this.state.changeModal.id}
              />
              <main className={"mainBlock"}>
                <h1>Transactions</h1>
                <div className={"infoBlock"}>
                    <AccountingsList
                        accountings={this.state.accountings}
                        onDelete={this.deleteAccounting}
                        openChangeModal={this.openChangeModal}
                        openDotMenu={this.openDotMenu}
                        // isOpen={this.state.dotMenu.isOpen}
                        // dotMenuId={this.state.dotMenu.id}
                    />
                    <Total symbol="+" amount={this.getCurrentIncomeTotalAmount()}/>
                    <Total symbol="-" amount={this.getCurrentOutcomeTotalAmount()}/>
                    <div className={"line"}/>
                    <Current amount={this.getCurrentAmount()}/>
                </div>
              </main>
              <footer className={"footerBlock"}>
                  <div className={"footerContainer"}>
                      <div className={"addAccountingBlock"}>
                        <AddAccountingItem onAddAccounting={this.addAccounting}/>
                      </div>
                  </div>
              </footer>
            </div>
        </div>
    );
  }
  }

export default App;
