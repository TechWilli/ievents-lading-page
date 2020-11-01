import React from 'react';
import styled from 'styled-components';
import Card from '../../components/card/Card';
import iEventsImage1 from '../../assets/images/ievents_1.png';
import iEventsImage2 from '../../assets/images/ievents_2.png';
import iEventsImage3 from '../../assets/images/ievents_3.png';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  /* text-align: center; */
`
const AppInformation = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 1rem;
`

const AppImagesContainer = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`

const AppPrototypeImages = styled.img`
  height: 70%;
  box-shadow: 2px 2px 10px rgb(0, 0, 0, 0.3);
`

const Text = styled.span`
  font-size: 1.1rem;
`

const CardTitle = styled.span`
  font-size: 1.3rem;
  color: var(--purple-app-color);
  font-weight: bold;
  display: block;

  &::after {
    content: '';
    width: 100px;
    display: block;
    border-bottom: 5px solid var(--purple-app-color);
    margin: 8px 0;
  }
`

const AppPrototype = props => {

  const appPrototypeImages = [iEventsImage1, iEventsImage2, iEventsImage3]

  return (
    <Container>
      <AppInformation>
        <Card width={'400'} height={'530'} shadowColor={'#9D66D5'}>
          <CardTitle>Protótipo</CardTitle>
          <br />
          <Text>
            Nosso app conta com uma interface única que auxilia no uso e experiência do usuário durante todo o tempo em que ele navega pela plataforma em busca de um evento.
            <br />
            <br />
            Ao lado temos algumas das telas em desenvolvimento do projeto mobile.
            <br />
            <br />
            O gerenciamento dos eventos escolhidos pelo usuário será prioridade, nosso aplicativo é o ponto que use quem quer realizar um evento e quem quer disponibilizar este serviço.
          </Text>
        </Card>
      </AppInformation>
      <AppImagesContainer>
        {appPrototypeImages.map((image, index) => <AppPrototypeImages key={index} src={image} alt="imagens do protótipo mobile" />)}
      </AppImagesContainer>
    </Container>
  )
}

export default AppPrototype;
