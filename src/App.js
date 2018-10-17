import React, { Component } from 'react';
import  GenerateEmployee  from  './GenerateEmployee';
import  DisplayEmployee  from  './DisplayEmployee';
import './App.css';


    const  sampleEmployee = {
      quote: "Shoplifting is a victimless crime, like punching someone in the dark.",
      character: "Nelson Muntz",
      image : "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185",

    };


class App extends Component { 
  constructor (props) {
    super (props);
    this.state = {
      employee: sampleEmployee
    };
  }
  getEmployee() {
    // Récupération de l'employé via fetch
    fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
      .then(results  =>  results.json())
      .then(data  => {
        // Une fois les données récupérées, on va mettre à jour notre state avec les nouvelles données
        this.setState({
          employee:  data[0],
        });
    });
}

  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Simpsons Citations</h1>
        </header>
        <footer className="App-footer">
        
        <DisplayEmployee  employee={this.state.employee}  />
        <GenerateEmployee  selectEmployee={() => this.getEmployee()}/>
         </footer>
        
        
      </div>
    )
  }
}

export default App;
