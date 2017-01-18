import React from 'react';
import Immutable from 'seamless-immutable';
import Octicon from 'react-octicon';
import pureRender from '../../../decorators/pureRender';
import Cookieconsent from 'cookieconsent';

@pureRender
export default class Home extends React.Component {

  render() {
    return(
      <div id="home">
        <h1>EVIL
        	<span className="faux-nav">Bikes</span>
        	<span className="faux-nav">Gear</span>
        	<span className="faux-nav">Tech Crap</span>
        	<span className="faux-nav">Parts</span>
        </h1>
      </div>
    );
  }
}