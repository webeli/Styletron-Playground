import React from 'react';
import {render} from 'react-dom';
import Styletron from 'styletron-client';
import {StyletronProvider} from 'styletron-react';

import HelloWorld from './HelloWorld.js'

const styleSheet = document.createElement('style');
document.head.appendChild(styleSheet);
const styletron = new Styletron([styleSheet]);

render(<StyletronProvider styletron={styletron}>
  <HelloWorld/>
</StyletronProvider>, document.querySelector('#root'));