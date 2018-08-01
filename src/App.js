import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { TestForm, QuestionForm, RadioForm } from './vb-components';

class App extends Component {
  render() {
    // const userVal = {"id":"mike","email":"mzecca@email.com","social":{"facebook":"facebook-acct","twitter":"twitter-acct"}};
    // const userVal = {"id":"mike","email":"mzecca@email.com","social":{"facebook":"facebook-acct","twitter":"twitter-acct"},"social-types":[{"type":"facebook"},{"type":"instagram"},{"type":"twitter"}]};
    const userVal = {"id":"mike","email":"mzecca@email.com","social":{"facebook":"facebook-acct","twitter":"twitter-acct"},"social-types":[{"type":"facebook","accounts":["social-acct1","social-acct2"]},{"type":"instagram","accounts":["social-acct1","social-acct2"]},{"type":"twitter","accounts":["social-acct1","social-acct2"]}]};
    const formData = [{"question":"standing","responseType":[{"type":"single-select","line-order":1,"label":"frequency","responses":["not applicable","sometimes","frequently","all the time"],"selected":null},{"type":"single-select","line-order":1,"label":"duration","responses":["not applicable","short","moderate","long"],"selected":null}]},{"question":"walking","responseType":[{"type":"single-select","line-order":1,"label":"frequency","responses":["not applicable","sometimes","frequently","all the time"],"selected":null},{"type":"single-select","line-order":1,"label":"duration","responses":["not applicable","short","moderate","long"],"selected":null}]},{"question":"lifting","responseType":[{"type":"single-select","line-order":1,"label":"condition/level/value","responses":["not applicable","up to 10lbs.","up to 25lbs.","up to 50lbs."],"selected":null},{"type":"single-select","line-order":1,"label":"frequency","responses":["not applicable","sometimes","frequently","all the time"],"selected":null},{"type":"single-select","line-order":1,"label":"duration","responses":["not applicable","short","moderate","long"],"selected":null},{"type":"single-select","line-order":2,"label":"condition/level/value","responses":["not applicable","up to 10lbs.","up to 25lbs.","up to 50lbs."],"selected":null},{"type":"single-select","line-order":2,"label":"frequency","responses":["not applicable","sometimes","frequently","all the time"],"selected":null},{"type":"single-select","line-order":2,"label":"duration","responses":["not applicable","short","moderate","long"],"selected":null}]}];
    const mentalData = [{"question":"Comprehend and Follow Oral Instructions","responseType":[{"type":"rate","start":1,"end":5,"start-desc":"Job requires ability to understand and follow a clear set of oral instructions without deviation.","end-desc":"Job requires ability to perform complex work with little guidance or reliance on oral instructions from others.","selected":null}]},{"question":"Communicate Orally","responseType":[{"type":"rate","start":1,"end":5,"start-desc":"Job requires communicating the most basic information to co-workers, supervisors, or peers.","end-desc":"Job requires communicating complex information to others that is likely to require clarification.","selected":null}]},{"question":"Comprehend and Follow Wirtten Material or Instructions","responseType":[{"type":"rate","start":1,"end":5,"start-desc":"Job requires ability to understand and follow written instructions without deviation; work will likely require guidance or an explanation to ensure full comprehension.","end-desc":"Job requires performing complex work with little guidance or reliance on wirtten instructions; or ability to fully comprehend, interpet, and successfully apply complex wirtten material without guidance from others.","selected":null}]}];

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        {/* <TestForm user={userVal} /> */}
        {/* <QuestionForm data={formData} /> */}
        <RadioForm data={mentalData} />
      </div>
    );
  }
}

export default App;
