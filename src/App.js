import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { TestForm, QuestionForm } from './vb-components';

class App extends Component {
  render() {
    // const userVal = {"id":"mike","email":"mzecca@vbgov.com","social":{"facebook":"facebook-acct","twitter":"twitter-acct"}};
    // const userVal = {"id":"mike","email":"mzecca@vbgov.com","social":{"facebook":"facebook-acct","twitter":"twitter-acct"},"social-types":[{"type":"facebook"},{"type":"instagram"},{"type":"twitter"}]};
    const userVal = {"id":"mike","email":"mzecca@vbgov.com","social":{"facebook":"facebook-acct","twitter":"twitter-acct"},"social-types":[{"type":"facebook","accounts":["social-acct1","social-acct2"]},{"type":"instagram","accounts":["social-acct1","social-acct2"]},{"type":"twitter","accounts":["social-acct1","social-acct2"]}]};
    const formData = [{"question":"standing","responseType":[{"type":"single-select","line-order":1,"label":"frequency","responses":["not applicable","sometimes","frequently","all the time"],"selected":null},{"type":"single-select","line-order":1,"label":"duration","responses":["not applicable","short","moderate","long"],"selected":null}]},{"question":"walking","responseType":[{"type":"single-select","line-order":1,"label":"frequency","responses":["not applicable","sometimes","frequently","all the time"],"selected":null},{"type":"single-select","line-order":1,"label":"duration","responses":["not applicable","short","moderate","long"],"selected":null}]},{"question":"lifting","responseType":[{"type":"single-select","line-order":1,"label":"condition/level/value","responses":["not applicable","up to 10lbs.","up to 25lbs.","up to 50lbs."],"selected":null},{"type":"single-select","line-order":1,"label":"frequency","responses":["not applicable","sometimes","frequently","all the time"],"selected":null},{"type":"single-select","line-order":1,"label":"duration","responses":["not applicable","short","moderate","long"],"selected":null},{"type":"single-select","line-order":2,"label":"condition/level/value","responses":["not applicable","up to 10lbs.","up to 25lbs.","up to 50lbs."],"selected":null},{"type":"single-select","line-order":2,"label":"frequency","responses":["not applicable","sometimes","frequently","all the time"],"selected":null},{"type":"single-select","line-order":2,"label":"duration","responses":["not applicable","short","moderate","long"],"selected":null}]}];

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        {/* <TestForm user={userVal} /> */}
        <QuestionForm data={formData} />
      </div>
    );
  }
}

export default App;
