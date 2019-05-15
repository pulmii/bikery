import React from 'react';

//tuodaan käytettävät komponentit
import Button from '../buttons';
import Content from '../Content/Content';

//tuodaan tyylimäärittelyt
import './Settings.css';

//luodaan käsittelijä ja tulostus kulutyyppien hallinnoinnille
function Settings(props) {

    const handleSubmit = function(event) {
      event.preventDefault();
      let kulutyyppi = event.target.elements.kulutyyppi.value;
      props.onFormSubmit(kulutyyppi);
      event.target.elements.kulutyyppi.value = "";
    }

    return (
      <Content>
        <div className="settings">
          <h2>Settings</h2>
          <h3>Kulutyypit </h3>
          <div className="settings__items">
            {props.selectList.map(item => <div key={item}>{item}</div>)}

            <form onSubmit={handleSubmit}>
              <div className="settingsForm">
                <input type="text" name="kulutyyppi" />
                <Button type="submit" primary>LISÄÄ</Button>
              </div>
            </form>
          </div>
        </div>
      </Content>
  
    );
  }

  export default Settings;