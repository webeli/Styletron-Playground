import React from 'react';

import {styled} from 'styletron-react';

// Create a <Title> react component that renders an <h1> which is centered, salmon and sized at 1.5em
const Title = styled('h1', () => ({
  fontSize: '1.5em',
  textAlign: 'center',
  color: 'salmon'
}));

// Create a <Wrapper> react component that renders a <section> with some padding and a honeydew background
const Wrapper = styled('section', () => ({
  padding: '4em',
  background: 'honeydew'
}));

export default function HelloWorld() {
  // Render these styled components like normal react components. They will pass on all props and work
  // like normal react components – except they're styled!
  return (
    <Wrapper>
      <Title>Hello World, this is my first styletron!</Title>
    </Wrapper>
  );
}