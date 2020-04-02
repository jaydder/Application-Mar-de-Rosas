import React, {Component} from 'react';

import {Container} from "./style";

class About extends Component {
  render() {
    return (
      <Container>
        <div className="about-wrapper">
          <div className="about-text">
            <div className={this.props.className}>
              <div className="triangulo"> </div>
            </div>
          </div>
        </div>
      </Container>
    )
  }
}

export default About;