import React from 'react';

//tuodaan käytettävät kirjastot
import { withRouter } from 'react-router';
import uuid from 'uuid'; 
import Button from '../buttons';

//tuodaan tyylimäärittelyt
import './ItemForm.css';

//luodaan luokka ja käsittelijät lomakkeelle
class ItemForm extends React.Component {

    constructor(props) {
        super(props);
        const data = props.data ? props.data : {
                tyyppi: "",
                summa: "",
                kilometrit: "",
                kulupaiva: "",
             }
        this.state = {
            data: data
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleDeleteItem = this.handleDeleteItem.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          data: {
              ...this.state.data,
              [name]: value
          }
        });
    }

    handleCancel(event) {
        event.preventDefault();
        this.props.history.goBack();
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log("lähetä lomake");
        let data = Object.assign({}, this.state.data);
        data.summa = parseFloat(data.summa);
        data.id = data.id ? data.id : uuid.v4();
        this.props.onFormSubmit(data);
        this.props.history.push("/");
    }

    handleDeleteItem(event) {
      event.preventDefault();
      this.props.onDeleteItem(this.state.data.id);
      this.props.history.push("/");
    }

    //renderöidään lomakkeen tiedot
    render() {
        return (
            <form onSubmit={this.handleSubmit}>

            <div className="itemform">          
  
              <div className="itemform__row">
                <div>
                  <label htmlFor="name">Kulutyyppi</label>
                  <select name="tyyppi" value={this.state.data.tyyppi} onChange={this.handleInputChange}>

                    {this.props.selectList.map(item => <option value={item} key={item}>{item}</option>)}

                  </select>                
                </div>
              </div>
  
              <div className="itemform__row">
                <div>
                  <label htmlFor="summa">Summa</label>
                  <input type="number" name="summa" step="0.01" value={this.state.data.summa} onChange={this.handleInputChange} />
                </div>
                <div>
                  <label htmlFor="kulupaiva">Kulupäivä</label>
                  <input type="date" name="kulupaiva" size="10" value={this.state.data.kulupaiva} onChange={this.handleInputChange} />
                </div>
              </div>
              
              <div className="itemform__row">
                <div>
                  <label htmlFor="kilometrit">Kilometrit</label>
                  <input type="text" name="kilometrit" value={this.state.data.kilometrit} onChange={this.handleInputChange}/>
                </div>
              </div>
  
              <div className="itemform__row">
                <div>
                  <Button onClick={this.handleCancel}>PERU</Button>
                </div>
                <div>
                  <Button type="submit" secondary>{this.state.data.id ? "TALLENNA" : "LISÄÄ"}</Button>                  
                </div>
              </div>
  
              {this.props.onDeleteItem ? <Button onClick={this.onDeleteItem}>POISTA</Button> : ""}

            </div>  
  
          </form>
        );
    }

}

export default withRouter(ItemForm);