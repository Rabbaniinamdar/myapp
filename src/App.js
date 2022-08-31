import './App.css';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import React, { useState } from 'react';
import Alert from './component/Alert';
// import {
//   BrowserRouter as Router,
//   BrowserRouter as Switch,
//   Route,
// } from "react-router-dom";

function App(props) {

  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setalert] = useState(null)
  const showAlert = (msg, type) => {
    setalert({
      msg: msg,
      type: type
    })
  }


  setTimeout(() => {
    setalert(null)
  }, 1500);


  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode has been enable", "success")
      document.title = "TextUtils-Dark mode"
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = "white"
      showAlert("Light Mode has been enable", "success")
      document.title = "TextUtils-Light mode"

    }
  }

  return (
    <>
      {/* <Router> */}
      <Navbar title="TextUtils" About="About us" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className='container my-3'>
        {/* <About /> */}
        <TextForm showAlert={showAlert} heading="Enter the text to Analyze below" mode={mode} />

        {/* <Switch>
            <Route path="about">
              <About />
            </Route>
            <Route path="/">
              <TextForm showAlert={showAlert} heading="Enter the text to Analyze below" mode={mode} />
            </Route>
          </Switch> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;

