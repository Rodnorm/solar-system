import React from 'react';
import './App.scss';


class App extends React.Component {
  constructor (props) {
    super(props);
      this.state = {
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

  render() {
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
        <div className={this.state.neptune ? 'neptune-planet selected' : 'neptune-planet' } onClick={() => this.setState({ neptune : !this.state.neptune })}></div>
        <div className="uranus-planet" onClick={() => this.setState({ uranus : !this.state.uranus })}></div>
        <div className="saturn-planet" onClick={() => this.setState({ saturn : !this.state.saturn })}></div>
        <div className="jupiter-planet" onClick={() => this.setState({ jupiter : !this.state.jupiter })}></div>
        <div className="mars-planet" onClick={() => this.setState({ mars : !this.state.mars })}></div>
        <div className="earth-planet" onClick={() => this.setState({ earth : !this.state.earth })}></div>
        <div className="venus-planet" onClick={() => this.setState({ venus : !this.state.venus })}></div>
        <div className="mercury-planet" onClick={() => this.setState({ mercury : !this.state.mercury })}></div>
      </div>
      <section className="card-container">
        <div className="card-head">
          <img src="https://static01.nyt.com/images/2014/08/19/science/19timetravel-neptune-1989/19timetravel-neptune-1989-articleLarge.jpg"/>
        </div>
        <div className="card-body">
          <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make 
          a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
          Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions
          of Lorem Ipsum
          </p>
        </div>
      </section>
    </div>
    )
  }

}

// function App() {
//   return (
//   );
// }

export default App;
