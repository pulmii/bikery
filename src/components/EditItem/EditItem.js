import React from 'react';

import Content from '../Content/Content';
import ItemForm from '../ItemForm/ItemForm';

import './EditItem.css';

function EditItem(props) {

    const index = props.data.findIndex(item => item.id === props.match.params.id);

    return (
      <Content>

        <div className="edititem">

        <h2>Kulun muokkaaminen</h2>

        <p>Match: {index }</p>

        <ItemForm onFormSubmit={props.onFormSubmit} selectList={props.selectList} />

        </div>

      </Content>
    );
}

export default EditItem;