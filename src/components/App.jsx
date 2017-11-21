import React, {Component} from 'react';
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import Experience from './Experience.jsx';
import Education from './Education.jsx';
import SideProject from './SideProject.jsx';
import Knowledge from './Knowledge.jsx';

import { faPhone, faEnvelopeOpen } from '@fortawesome/fontawesome-free-solid';
import { faSkype } from '@fortawesome/fontawesome-free-brands';

class App extends Component {
  render() {
    return (
      <div>
        <header className="me">
          <h1 className="me--name">{this.props.cv.firstName}
            <span className="me--lastname">{this.props.cv.lastName}</span>
          </h1>
          <h2 className="me--jobTitle">{this.props.cv.jobTitle}</h2>
          <div className="me--contact">
            <span>
              <FontAwesomeIcon icon={faPhone} />
              {this.props.cv.phone}
            </span>
            <span>
              <FontAwesomeIcon icon={faEnvelopeOpen} />
              {this.props.cv.email}
            </span>
            <span>
              <FontAwesomeIcon icon={faSkype} />
              {this.props.cv.skype}
            </span>
          </div>
        </header>
        <section className="section summary">
          <h3 className="section--title">Summary</h3>
          {this.props.cv.summary}
        </section>
        <Experience experience={this.props.cv.experience}/>
        <Education education={this.props.cv.education}/>
        <SideProject sideProject={this.props.cv.sideProject}/>
        <Knowledge knowledge={this.props.cv.knowledge}/>
        <section className="section reference">
          <h3 className="section--title">Reference</h3>
          Will be available on request
        </section>
      </div>
    );
  }
}

export default App;
