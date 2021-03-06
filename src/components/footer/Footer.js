import React from 'react';
import styled from 'styled-components';
import MarketplaceLogos from '../../assets/images/app-store-google-play-logo.png';

const FooterContainer = styled.footer`
  background-color: #333333;
  width: 100%;
  height: 15rem;
  display: flex;
  padding: 0 3rem;
`
const GroupContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 2rem;
`

const MadeByConainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const ContactContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-left: 2rem;
  padding-top: 2rem;
`

const Title = styled.span`
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  display: block;
  line-height: 2.5rem;
`

const Text = styled.span`
  color: white;
  font-size: 1rem;
  display: block;
  line-height: 1.5rem;
`

const Footer = (props) => {

  const group = ['Anderson dos Santos Galvão', 'José Lino de Brito Júnior', 'João Ricardo dos Santos', 'Matheus Fernandes Gonçalves', 'Wagner de Sousa', 'William Araujo de Assis'];

  return (
    <FooterContainer id={props.id}>
      <GroupContainer>
        <div>
          <Title>Idealizadores</Title>
          {group.map((member, index) => {
            return (
              <Text key={index}>{member}</Text>
            );
          })}
        </div>
      </GroupContainer>

      <MadeByConainer>
        <Text>Feito com <span role="img" aria-label="coração">💚</span> por iEvents!</Text>
        <br />
        <img src={MarketplaceLogos} alt="logo play store e app store" height="100"/>
      </MadeByConainer>

      <ContactContainer>
        <div>
          <Title>Contate-nos</Title>
          <Text>e-mail: ievents-eventos@gmail.com</Text>
          <Text>Whatsapp: +55 11 97070-7070</Text>
        </div>
      </ContactContainer>
    </FooterContainer>
  )
}

export default Footer;
