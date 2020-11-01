import React from 'react';
import styled from 'styled-components';
import Card from '../../components/card/Card';

const Container = styled.div`
  width: 85%;
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  /* text-align: center; */
`

const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const TitleContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Title = styled.span`
  font-size: 2.5rem;
  /* color: #DD5890; */
  font-weight: bold;
  margin: 2rem;
  text-align: center;
`

const TextContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
`

const Text = styled.span`
  font-size: 1.2rem;
`
const TextWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
`

const Highlighter = styled.span`
  font-size: 1.5rem;
  color: var(--pink-app-color);
  font-weight: bold;
`

const AboutApp = () => {

  return (
    <ContentWrapper>
      <Container>
        <TitleContainer>
          <Title>
            "Nosso grande desejo é ser a maior plataforma de administração de eventos festivos"
          </Title>
        </TitleContainer>

        <TextContainer>
          <TextWrapper>
            <Card shadowColor={'#DD5890'} width={'1200'} height={'100'}>
              <Text>
                Através da <Highlighter>tecnologia</Highlighter>, queremos <Highlighter>facilitar</Highlighter> a organização e realização de <Highlighter>eventos, festas casamentos, aniversários, churrascos, formaturas</Highlighter> e diversas outras formas de confraternização.
              </Text>
            </Card>
          </TextWrapper>

          <TextWrapper>
            <Card shadowColor={'#DD5890'} width={'1200'} height={'100'}>
              <Text>
                Nós unimos a <Highlighter>Tecnologia da Informação e a Organização de Eventos</Highlighter> disponibilizados em um aplicativo mobile no qual os usuários têm e um só lugar, diversas opções de locação de espaços para festas e afins. <Highlighter>TUDO NA PALMA DA SUA MÃO.</Highlighter>
              </Text>
            </Card>
          </TextWrapper>

          <TextWrapper>
            <Card shadowColor={'#DD5890'} width={'1200'} height={'100'}>
              <Text>
                Cuidamos do <Highlighter>planejamento</Highlighter>, fazemos a <Highlighter>logística</Highlighter> e <Highlighter>gestão de recursos</Highlighter> para sua festa oferecendo os melhores prestadores de serviço no ramo.
              </Text>
            </Card>
          </TextWrapper>
        </TextContainer>
      </Container>
    </ContentWrapper>
  )
}

export default AboutApp;