import React from 'react';

//tuodaan käytettävät kirjastot
import moment from 'moment';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import { Link } from 'react-router-dom';

//tuodaan tyylimäärittely
import './Kulukortti.css';

//luodaan logiikka ja tulostus kulukortille, vaatii vielä tarkennusta ja korjausta
function Kulukortti(props) {

    let kulupaiva = moment(props.data.kulupaiva);
    let kausi = "";
    let keskiarvo;

    if (props.data.kaudenalku && props.data.kaudenloppu) {
      let kaudenalku = moment(props.data.kaudenalku);
      let kaudenloppu = moment(props.data.kaudenloppu);
      kausi = kaudenalku.format("MM, YYYY");
      let paivat = kaudenloppu.diff(kaudenalku, 'days');
      keskiarvo = props.data.summa / paivat * 30;
    }

    return (
      <div className="kulukortti">
        <div className="kulukortti__ryhma">
            <div className="kulukortti__rivi">
              <div className="kulukortti__tyyppi">{props.data.tyyppi}</div>
              <div className="kulukortti__summa">{props.data.summa.toFixed(2)} €</div>
            </div>
            <div className="kulukortti__rivi">
              <div className="kulukortti__kulupaiva">{kulupaiva.format("D.M.Y")}</div>
              <div className="kulukortti__ajanjakso">{kausi}</div>
            </div>

            <div className="kulukortti__rivi">
            <div className="kulukortti__keskiarvo">{ keskiarvo ? keskiarvo.toFixed(2) + " € / kk" : ""}</div>
            <div className="kulukortti__kilometrit">{props.data.kilometrit + " km"}</div>
            </div>
          </div>
        <div className="kulukortti__linkki">
          <Link to={"/edit/" + props.data.id}><KeyboardArrowRight /></Link>
        </div>
      </div>
    );  
}

export default Kulukortti;