import React from 'react';

//tuodaan käytettävät komponentit
import Content from '../Content/Content';
import ItemForm from '../ItemForm/ItemForm';

//tuodaan tyylimäärittelyt
import './EditItem.css';

//luodaan logiikka ja tulostus datan muokkaamiselle
function EditItem(props) {

    const index = props.data.findIndex(item => item.id === props.match.params.id);
    let itemData = props.data[index];

    return (
      <Content>

        <div className="edititem">

        <h2>Kulun muokkaaminen</h2>

        <ItemForm onFormSubmit={props.onFormSubmit} selectList={props.selectList} 
                                                    data= {itemData} onDeleteItem={props.onDeleteItem}/>

        </div>

      </Content>
    );
}

export default EditItem;