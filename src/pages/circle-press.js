import React from 'react';
import P5Wrapper from 'react-p5-wrapper';
import sketch from '../sketches/circle-press.js';

const IndexPage = () => (
  <P5Wrapper sketch={sketch} />
);

export default IndexPage;
