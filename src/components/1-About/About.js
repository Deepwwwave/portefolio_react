import React, {Component} from 'react';

export default class About extends Component {
    constructor(props) {
      super(props);
      this.state = {
        first: 'Lucas',
        last:'Nandan',
        email:'deepwwwave@gmail.com',
        bio:'I am experienced in leveraging agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.',
        social:{
          twitter:'https://twitter.com/San10Ludosky',
          github:'https://github.com/SandyLudosky',
          linkedin:'https://www.linkedin.com/in/sandyludosky/',
        }
      };
    }

    render() {
        return(  <section className="resume-section p-3 p-lg-5 d-flex align-items-center">
        <div className="w-100">
          <h1 className="mb-0">{this.state.first}
        <span className="text-primary">{this.state.last}</span>
          </h1>
          <div className="subheading mb-5">
    <a href="mailto:name@email.com">{this.state.email}</a>
          </div>
          <p className="lead mb-5">{this.state.bio}</p>
          <div className="social-icons">
            <a href={this.state.social.linkedin}>
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href={this.state.social.github}>
              <i className="fab fa-github"></i>
            </a>
            <a href={this.state.social.twitter}>
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </section>)
    }
}