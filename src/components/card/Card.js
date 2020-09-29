import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  background-color: white;
  width: 500px;
  height: 130px;
  box-shadow: 4px 4px 0px #63EC85, 3px 4px 6px grey;
  margin-bottom: 1.5rem;
  padding: 1rem;
`


// #9D66D5
// #DD5890

const Card = ({ children }) => {
  return (
    <CardContainer>
      {children}
    </CardContainer>
  )
}

export default Card;
