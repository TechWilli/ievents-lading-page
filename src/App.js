import React from 'react';
import './App.css';
import 'animate.css';
import LargeSection from './components/large-section/LargeSection';
import BusinessPurpose from './pages/business-purpose/BusinessPurpose';
import AboutApp from './pages/about-app/AboutApp';
import AppPrototype from './pages/app-prototype/AppPrototype';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';

function App() {

  const sectionContents = [
    {
      content: () => <BusinessPurpose />,
      bgColor: '#F7F7F7',
      id: 'purpose'
    },
    {
      content: () => <AboutApp />,
      bgColor: 'white',
      id: 'about'
    },
    {
      content: () => <AppPrototype />,
      bgColor: '#F7F7F7',
      id: 'app'
    }
  ]

  return (
    <div className="App">
      <Navbar />
      {sectionContents.map(({ content, bgColor, id }, index) => {
        return (
          <LargeSection key={index} id={id} backgroundColor={bgColor}>
            {content && content()}
          </LargeSection>
        )
      })}
      <Footer id="contact" />
    </div>
  );
}

export default App;
