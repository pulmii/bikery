import React from 'react';
import { Line } from 'react-chartjs-2';

//tuodaan käytettävät komponentit
import Content from '../Content/Content';

//tuodaan tyylimäärittelyt
import './Stats.css';

//luodaan logiikka ja tulostus statseille
function Stats(props) {

  let linedata = props.data.map( item => ({x: item.kilometrit, y: item.summa }));
  let data = {
    datasets: [
      {
        label: "kulut",
        data: linedata,
        fill: false, 
      }      
    ]
  }

    let options = {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        xAxes: [
        {
          type: "time"
        }
      ]
      }
    }

    return (
      <Content>
        <div className="stats">
            <h2>Stats</h2>
              <div className="stats__graph">
                <Line data={data} options={options} />
              </div>
          </div>
      </Content>
  
    );
  }

export default Stats;