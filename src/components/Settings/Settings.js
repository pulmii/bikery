import React from 'react';
import Button from '../buttons';

import Content from '../Content/Content';
import './Settings.css';

function Settings(props) {

    const handleSubmit = function(event) {
      event.preventDefault();

    }

    return (
      <Content>
        <div className="settings">
          <h2>Settings</h2>
          <h3>Kulutyypit </h3>
          {props.selectList.map(item => <div key={item}>{item}</div>)}
          <form onSubmit={handleSubmit}>
            <div className="settingsForm">
              <input type="text" name="kulutyyppi" />
              <Button type="submit" primary>LISÄÄ</Button>
            </div>
          </form>
        </div>
      </Content>
  
    );
  }

  export default Settings;