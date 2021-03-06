import React, { Component } from 'react';

//tuodaan käytettävät kirjastot
import { BrowserRouter as Router, Route } from 'react-router-dom';

//tuodaan tyylimäärittelyt
import './App.css';

//tuodaan testidata
import testdata from './testdata';

//tuodaan sovelluksen komponentit
import Header from './components/Header/Header';
import Items from './components/Items/Items';
import Stats from './components/Stats/Stats';
import Settings from './components/Settings/Settings';
import Menu from './components/Menu/Menu';
import AddItem from './components/AddItem/AddItem';
import EditItem from './components/EditItem/EditItem';

class App extends Component {

  //luodaan konstruktori datalle
  constructor(props) {
    super(props);
    this.state = {
      data: testdata, 
      selectList: ["Polttoaine", "Huolto", "Vakuutus", "Varaosat"]
    }

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleSelectListForm = this.handleSelectListForm.bind(this);
    this.handleDeleteItem = this.handleDeleteItem.bind(this);
  }


  //luodaan käsittelijä uuden datan lisäämiselle
  handleFormSubmit(newdata) {
    let storeddata = this.state.data.slice();
    const index = storeddata.findIndex(item => item.id === newdata.id);
    if (index >= 0) {
      storeddata[index] = newdata;
    } else {
    storeddata.push(newdata);
    }
    storeddata.sort((a,b) => { 
      const aDate = new Date(a.kulupaiva);
      const bDate = new Date(b.kulupaiva);
      return bDate.getTime() - aDate.getTime();
     } );
    this.setState({
      data: storeddata
    });
    this.refData.doc('joku').set({});
  }

  //luodaan käsittelijä datan muokkaamiselle
  handleSelectListForm (newitem) {
    let selectList= this.state.selectList.slice();
    selectList.push(newitem); 
    selectList.sort();
    this.setState({
      selectList: selectList
    });
  }

  //luodaan käsittelijä datan poistamiselle
  handleDeleteItem (id) {
    let storeddata = this.state.data.slice();
    storeddata = storeddata.filter(item => item.id !== id);
    this.setState({
      data: storeddata 
    });
  }

  //renderöidään Router
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route path="/" exact render={() => <Items data={this.state.data} />} />
          <Route path="/stats" render={() => <Stats data={this.state.data} /> } />
          <Route path="/settings" render={() => <Settings selectList={this.state.selectList} onFormSubmit={this.handleSelectListForm} /> } />
          <Route path="/add" render={() => <AddItem onFormSubmit={this.handleFormSubmit} selectList={this.state.selectList} />} />
          <Route path="/edit/:id" render={(props) => <EditItem data={this.state.data} 
                                                               selectList={this.state.selectList} 
                                                               onFormSubmit={this.handleFormSubmit} 
                                                               onDeleteItem={this.handleDeleteItem}
                                                               {...props}/>} />
          <Menu />
        </div>
      </Router>
    );
  }
}

//exportataan App
export default App;