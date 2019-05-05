import React from 'react';
import { withRouter } from 'react-router';
import uuid from 'uuid'; 


import Button from '../buttons';

import './ItemForm.css';

class ItemForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {
                tyyppi: "Vesi",
                summa: 0,
                kilometrit: 0,
                maksupaiva: "",
                kaudenalku: "",
                kaudenloppu: "",
                saaja: ""
             }
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
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
        data.id = uuid.v4();
        this.props.onFormSubmit(data);
        this.props.history.push("/");
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>

            <div className="itemform">          
  
              <div className="itemform__row">
                <div>
                  <label htmlFor="name">Kulutyyppi</label>
                  <select name="tyyppi" value={this.state.data.tyyppi} onChange={this.handleInputChange}>

                    {this.props.selectList.map(item => <option value={item}>{item}</option>)}

                  </select>                
                </div>
              </div>
  
              <div className="itemform__row">
                <div>
                  <label htmlFor="summa">Summa</label>
                  <input type="number" name="summa" step="0.01" value={this.state.data.summa} onChange={this.handleInputChange} />
                </div>
                <div>
                  <label htmlFor="maksupaiva">Maksupäivä</label>
                  <input type="date" name="maksupaiva" size="10" value={this.state.data.maksupaiva} onChange={this.handleInputChange} />
                </div>
              </div>
              
              <div className="itemform__row">
                <div>
                  <label htmlFor="saaja">Kilometrit</label>
                  <input type="text" name="kilometrit" value={this.state.data.saaja} onChange={this.handleInputChange}/>
                </div>
              </div>
  
              <div className="itemform__row">
                <div>
                  <label htmlFor="kaudenalku">Laskutuskauden alku</label>
                  <input type="date" name="kaudenalku" size="10" value={this.state.data.kaudenalku} onChange={this.handleInputChange} />
                </div>
                <div>
                  <label htmlFor="kaudenloppu">Laskutuskauden loppu</label>
                  <input type="date" name="kaudenloppu" size="10" value={this.state.data.kaudenloppu} onChange={this.handleInputChange} />          
                </div>
              </div>
  
              <div className="itemform__row">
                <div>
                  <label htmlFor="saaja">Laskuttaja</label>
                  <input type="text" name="saaja" value={this.state.data.saaja} onChange={this.handleInputChange}/>
                </div>
              </div>
  
              <div className="itemform__row">
                <div>
                  <Button onClick={this.handleCancel}>PERU</Button>
                </div>
                <div>
                  <Button type="submit" secondary>LISÄÄ</Button>                  
                </div>
              </div>
  
            </div>  
  
          </form>
        );
    }

}

export default withRouter(ItemForm);