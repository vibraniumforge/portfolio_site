import React, { Component } from "react";
import "./App.css";

import { Switch, Route } from "react-router-dom";

import Home from "./containers/Home";
import About from "./containers/About";
import Projects from "./containers/Projects";
import Header from "./containers/Header";

import PDFViewer from "./components/PDFViewer/PDFViewer";
import PDFJSBackend from "./backends/pdfjs";
// import WebviewerBackend from "./backends/webviewer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="main-content">
          <Switch>
            <Route exact path="/" render={() => <Home />} />
            <Route path="/about" render={() => <About />} />
            <Route path="/projects" render={() => <Projects />} />
            <Route
              path="/resume"
              render={() => (
                <PDFViewer backend={PDFJSBackend} src="/myPDF.pdf" />
              )}
            />
          </Switch>
        </div>
      </div>
    );
  }
}
export default App;
