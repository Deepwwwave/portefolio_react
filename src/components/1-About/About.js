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
        return(  <section class="resume-section p-3 p-lg-5 d-flex align-items-center">
        <div class="w-100">{this.state.first}
          <h1 class="mb-0">{this.state.last}
        <span class="text-primary"></span>
          </h1>
          <div class="subheading mb-5">{this.state.address}
    <a href="mailto:name@email.com">{this.state.email}</a>
          </div>
          <p class="lead mb-5"></p>
          <div class="social-icons">
            <a href={this.state.social.linkedin}>
              <i class="fab fa-linkedin-in"></i>
            </a>
            <a href={this.state.social.github}>
              <i class="fab fa-github"></i>
            </a>
            <a href={this.state.social.twitter}>
              <i class="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </section>)
    }
}