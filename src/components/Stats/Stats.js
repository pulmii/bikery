import React from 'react';
import { Line } from 'react-chartjs-2';
import { Doughnut } from 'react-chartjs-2';

//tuodaan käytettävät komponentit
import Content from '../Content/Content';

//tuodaan tyylimäärittelyt
import './Stats.css';

//luodaan logiikka ja tulostus statseille
function Stats(props) {

  const reducer =  (groupedData, currentItem) => {
    const index = groupedData.findIndex(item => item.tyyppi === currentItem);
      if (index >= 0) {
         groupedData[index].summa = groupedData[index].summa + currentItem.summa;
      } else {
        groupedData.push({tyyppi: currentItem.tyyppi, summa: currentItem.summa});
      }
      return groupedData;
  }

  let groupedData = props.data.reduce(reducer, [] );

  let doughnutData = {
    labels: groupedData.map(item => item.tyyppi),
    datasets: [
      {
        data: groupedData.map(item => item.summa),
        backgroundColor: [
          '#FFA45B',
          '#ffe4ce',
          '#8c4810',
        ],
      }
    ]
  }

  let linedata = props.data.map( item => ({x: item.kilometrit, y: item.summa }));

  let data = {
    datasets: [
      {
        label: "kulut",
        data: linedata,
        fill: false, 
        backgroundColor: 'rgba(0,0,0,0.2',
        borderColor: 'rgba(0,0,0,0.1'
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
            <h2>Tilastot</h2>
            <h3>Kulut ja kilometrit</h3>
              <div className="stats__graph">
                <Line data={data} options={options} />
              </div>
              <h3>Kulut tyypeittäin</h3>
              <div className="stats__graph">
                <Doughnut data={doughnutData} />
              </div>
          </div>
      </Content>
  
    );
  }

export default Stats;