import React, {Component} from 'react';
import Experience from './Experience.jsx';

class App extends Component {
  render() {
    return (<div>
      <header class="me">
        <h1 className="me--name">{this.props.cv.firstName}
          <span class="me--lastname">{this.props.cv.lastName}</span>
        </h1>
        <h2 className="me--jobTitle">{this.props.cv.jobTitle}</h2>
      </header>
      <section className="section summary">
        <h3 className="section--title">Summary</h3>
        {this.props.cv.summary}
      </section>
      <Experience experience={this.props.cv.experience}/>
      <section className="section reference">
        <h3 className="section--title">Reference</h3>
        Will be available on request
      </section>
    </div>);
  }
}

export default App;
