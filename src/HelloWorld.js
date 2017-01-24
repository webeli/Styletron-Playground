import React from 'react';

import {styled} from 'styletron-react';

// Create a <Title> react component that renders an <h1> which is centered, salmon and sized at 1.5em
const Title = styled('h1', () => ({
  fontSize: '1.5em',
  color: 'blue',
}));

//// Create a <Wrapper> react component that renders a <section> with some padding and a honeydew background
const Wrapper = styled('section', (props) => ({
  background: 'honeydew',
  display: props.show ? 'flex' : 'none',
  alignItems: 'center',
  flexDirection: 'column'
}));

const Description = styled('p', () => ({
  fontSize: '1.1em',
  color: 'blue',
}));

export default function HelloWorld() {
  // Render these styled components like normal react components. They will pass on all props and work
  // like normal react components – except they're styled!
  return (
    <Wrapper show={true}>
      <Title>Hello World, this is my first styletron!</Title>
      <Description>This is a description to test styletron, and its pretty cool, but i can't edit in style in Chrome DevTools.... Why is that?</Description>
    </Wrapper>
  );
}