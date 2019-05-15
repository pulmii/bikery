import React from 'react';

//tuodaan käytettävät komponentit
import Content from '../Content/Content';
import ItemForm from '../ItemForm/ItemForm';

//tuodaan tyylimäärittelyt
import './AddItem.css';

//palautetaan lomakkeelle syötetyt uuden kulun tiedot
function AddItem(props) {
    return (
      <Content>

        <div className="additem">

        <h2>Lisää moottoripyörän kulu</h2>

        <ItemForm onFormSubmit={props.onFormSubmit} selectList={props.selectList} />

        </div>

      </Content>
    );
}

export default AddItem;