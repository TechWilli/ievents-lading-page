import React from 'react';
import styled from 'styled-components';
import Card from '../../components/card/Card';
import IEventsLogo from '../../assets/images/ievents-logo-landing.png'

const Container = styled.div`
  width: 85%;
  height: 70%;
  display: flex;
  align-items: center;
  justify-content: space-around; 
`

const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const VerticalDivider = styled.div`
  border-left: 1.5px solid #b9b9b9;
  height: 100%;
  padding: 2rem 0;
`

const TitleContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const CardContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Title = styled.span`
  font-size: 2.5rem;
  color: var(--green-app-color);
  font-weight: bold;
  margin: 2rem;
  text-align: center;
`

const CardText = styled.span`
  font-size: 0.85rem;
`

const CardTitle = styled.span`
  font-size: 1.3rem;
  color: var(--green-app-color);
  font-weight: bold;
  display: block;

  &::after {
    content: '';
    width: 100px;
    display: block;
    border-bottom: 5px solid var(--green-app-color);
    margin: 8px 0;
  }
`

const BusinessPurpose = () => {
  return (
    <ContentWrapper>
      <Container>
        <TitleContainer>
          <img src={IEventsLogo} alt="logo ievents" width="550"/>
        </TitleContainer>

        <VerticalDivider />

        <CardContainer>
          <Card shadowColor={'#63EC85'} width={'500'} height={'130'}>
            <CardTitle>Missão</CardTitle>
            <CardText>
              Nossa missão é ajudar pessoas a realizar organização de eventos, festas e diversas outras formas de confraternização por meio da tecnologia
            </CardText>
          </Card>

          <Card shadowColor={'#63EC85'} width={'500'} height={'130'}>
            <CardTitle>Visão</CardTitle>
            <CardText>
              Unificar os mais variados tipos de eventos em um único aplicativo de busca e gestão para nossos usuários, sendo uma plataforma de relevância no mercado
           </CardText>
          </Card>

          <Card shadowColor={'#63EC85'} width={'500'} height={'130'}>
            <CardTitle>Valores</CardTitle>
            <CardText>
              Eficiência, Performance, Foco no cliente, Flexibilidade, Resultado
            </CardText>
          </Card>
        </CardContainer>
      </Container>
    </ContentWrapper>
  )
}

export default BusinessPurpose;
