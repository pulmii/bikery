import React from 'react';

//tuodaan käytettävät kirjastot
import { Link } from 'react-router-dom';

//tuodaan käytettävät komponentit
import Kulukortti from '../Kulukortti/Kulukortti';
import Content from '../Content/Content';
import { FloatingButton } from '../buttons';

//mapataan itemit ja luodaan kelluva lisäys-button
function Items(props) {

    let rows = props.data.map(invoice => {
        return (
          <Kulukortti data={invoice} key={invoice.id} />
        );
      }
    );

    return (
      <Content>
        {rows}
        <Link to="/add"><FloatingButton primary>+</FloatingButton></Link>
      </Content>
    );
}

export default Items;