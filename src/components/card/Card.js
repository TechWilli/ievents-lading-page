import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  background-color: white;
  width: ${props => props.width ? `${props.width}px`: '0px'};
  height: ${props => props.height ? `${props.height}px`: '0px'};
  box-shadow: ${props => props.shadowColor ? `4px 4px 0px ${props.shadowColor}, 3px 4px 6px grey` : '3px 4px 6px grey'};
  margin-bottom: 1.5rem;
  padding: 1rem;
  transition: .2s;

  &:hover {
    box-shadow: ${props => props.shadowColor ? `4px 4px 0px ${props.shadowColor}, 5px 7px 9px grey` : '4px 4px 6px grey'};
  }
`


// #9D66D5
// #DD5890

const Card = ({ children, ...props }) => {
  return (
    <CardContainer
      width={props.width}
      height={props.height}
      shadowColor={props.shadowColor}
    >
      {children}
    </CardContainer>
  )
}

export default Card;
