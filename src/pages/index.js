import Link from 'gatsby-link';
import React from 'react';
import P5Wrapper from 'react-p5-wrapper';
import sketch from '../sketches/square-spiral-calculated.js';

const IndexPage = () => (
  <ul style={{listStyleType: 'none'}}>
    <li>
      <Link to='/circle-press'>Circle Press</Link>
    </li>
    <li>
      <Link to='/rainbow-circles'>Rainbow Circles</Link>
    </li>
    <li>
      <Link to='/square-spiral-calculated'>Square Spiral Calculated</Link>
    </li>
    <li>
      <Link to='/square-spiral-left-corner'>Square Spiral Left Corner</Link>
    </li>
    <li>
      <Link to='/square-spiral-left-corner'>Square Spiral Left Corner</Link>
    </li>
    <li>
      <Link to='/square-spiral-centre-top-edge'>Square Spiral Center Top Edge</Link>
    </li>
  </ul>
);

export default IndexPage;
