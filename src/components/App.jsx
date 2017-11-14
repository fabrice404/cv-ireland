import React, {Component} from 'react';
import Experience from './Experience.jsx';
import Education from './Education.jsx';
import More from './More.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <header className="me">
          <h1 className="me--name">{this.props.cv.firstName}
            <span className="me--lastname">{this.props.cv.lastName}</span>
          </h1>
          <h2 className="me--jobTitle">{this.props.cv.jobTitle}</h2>
        </header>
        <section className="section summary">
          <h3 className="section--title">Summary</h3>
          {this.props.cv.summary}
        </section>
        <Experience experience={this.props.cv.experience}/>
        <Education education={this.props.cv.education}/>
        <More more={this.props.cv.more}/>
        <section className="section reference">
          <h3 className="section--title">Reference</h3>
          Will be available on request
        </section>
      </div>
    );
  }
}

export default App;
