import React, {Component} from 'react';
import Experience from './Experience.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <header class="me">
          <h1 className="me--name">{this.props.cv.firstName} {this.props.cv.lastName}</h1>
          <h2 className="me--jobTitle">{this.props.cv.jobTitle}</h2>
        </header>
        <section>
          <h3>Summary</h3>
          {this.props.cv.summary}
        </section>
        <Experience experience={this.props.cv.experience}/>
      </div>
    );
  }
}

export default App;
