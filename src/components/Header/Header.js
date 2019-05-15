import React from 'react';

//tuodaan tyylimäärittelyt
import './Header.css';

//luodaan headerin tiedot, esim. logo
function Header(props) {
    return (
      <div className="header">
        <h1>BIKERY</h1>
      </div>
    );
}

export default Header;