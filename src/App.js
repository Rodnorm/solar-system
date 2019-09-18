import React from 'react';
import './App.scss';
import axios from 'axios';
import loader from './assets/imgs/loader.gif';
import neptune from './assets/imgs/neptune.jpg';
import uranus from './assets/imgs/uranus.jpg';
import jupiter from './assets/imgs/jupiter.jpg';
import saturn from './assets/imgs/saturn.jpg';
import mars from './assets/imgs/mars.jpg';
import earth from './assets/imgs/earth.jpg';
import venus from './assets/imgs/venus.jpg';
import mercury from './assets/imgs/mercury.jpg';


const illustrations = { neptune,uranus, jupiter, saturn, mars, earth,venus, mercury };

class App extends React.Component {
  constructor (props) {
    super(props);
      this.state = {
        minimizeCard: true,
        planet: null,
        loading: false,
        neptune: false,
        uranus: false,
        saturn: false,
        jupiter: false,
        mars: false,
        earth: false,
        venus: false,
        mercury: false,
      }
  }

  async getData(planet) {
    this.setState({ loading: true });
    const response = 
    await axios.get(`https://cors-anywhere.herokuapp.com/https://dry-plains-91502.herokuapp.com/planets/${planet}`);
    this.mountPlanet(response.data);
    this.setState({ loading: false });
  }

  mountPlanet(data) {
    const planet = {
      illustration: illustrations[data.name.toLowerCase()],
      name: data.name,
      diameter: data.diameter,
      density: data.density,
      gravity: data.gravity,
      mass: data.mass,
      distanceFromSun: data.distance_from_sun,
      numberOfMoons: data.number_of_moons,
      rotationPeriod: data.rotation_period
    }
    this.setState({ planet });
  }

  render() {
    const toggleState = (planet) => {
      let planets = this.state;
      Object.keys(planets).forEach(pl => pl === planet ? planets[planet] = !planets[planet] : planets[pl] = false);
      this.setState(planets);
      this.getData(planet);
    }
    const { planet } = this.state;
    return(
    <div className="Container">
      <div className="neptune">
        <div className="uranus">
          <div className="saturn">
            <div className="jupiter">
              <div className="mars">
                <div className="earth">
                  <div className="venus">
                    <div className="mercury"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sun"></div>
      <div className="planets-container">
        <div className={this.state.neptune ? 'neptune-planet selected' : 'neptune-planet' } onClick={() => toggleState('neptune')}></div>
        <div className={this.state.uranus ? 'uranus-planet selected' : 'uranus-planet' } onClick={() => toggleState('uranus')}></div>
        <div className={this.state.saturn ? 'saturn-planet selected' : 'saturn-planet'} onClick={() => toggleState('saturn')}></div>
        <div className={this.state.jupiter ? 'jupiter-planet selected' : 'jupiter-planet'} onClick={() => toggleState('jupiter')}></div>
        <div className={this.state.mars ? 'mars-planet selected' : 'mars-planet'} onClick={() => toggleState('mars')}></div>
        <div className={this.state.earth ? 'earth-planet selected' : 'earth-planet'} onClick={() => toggleState('earth')}></div>
        <div className={this.state.venus ? 'venus-planet selected' : 'venus-planet'} onClick={() => toggleState('venus')}></div>
        <div className={this.state.mercury ? 'mercury-planet selected' : 'mercury-planet'} onClick={() => toggleState('mercury')}></div>
      </div>
      
        <section className="card-container">
          {(!planet && !this.state.loading) && (
            <div className="info-panel">
              <p>Click a planet on the left to see some data xD</p>
            </div>
          )}
          { (this.state.loading) && (
            <div className="loader">
              <img src={loader} alt="Loader"/>
              <p>Collecting data...</p>
            </div>
          )}
        {(planet && !this.state.loading) && (
          <>
          <div className="card-head">
            <img src={planet.illustration} alt={planet.name}/>
          </div>
          <div className="card-body">
            <h3>{planet.name}</h3>
            <ul>
              <li>Diameter: {planet.diameter}</li>
              <li>Density: {planet.density}</li>
              <li>Gravity: {planet.gravity}</li>
              <li>Mass: {planet.mass}</li>
              <li>Distance from Sun: {planet.distanceFromSun}</li>
              <li>Number of Moons: {planet.numberOfMoons}</li>
              <li>Rotation Period: {planet.rotationPeriod}</li>
            </ul>
          </div>
          </>
        )}
        </section>
    </div>
    )
  }

}
export default App;
