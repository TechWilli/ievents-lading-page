import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  width: 100%;
  height: 100vh;
  background-color: ${props => props.backgroundColor ? props.backgroundColor : 'transparent' };
`

const LargeSection = ({ children, ...props }) => {
  return (
    <Section id={props.id} backgroundColor={props.backgroundColor}>
      {children}
    </Section>
  )
}

export default LargeSection;
