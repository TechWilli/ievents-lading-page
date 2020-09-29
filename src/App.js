import React from 'react';
import './App.css';
import 'animate.css';
import LargeSection from './components/large-section/LargeSection';
import BusinessPurpose from './pages/business-purpose/BusinessPurpose';
import AboutApp from './pages/about-app/AboutApp';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <LargeSection backgroundColor="#F7F7F7">
        <BusinessPurpose />
      </LargeSection>
      <LargeSection backgroundColor="white">

      </LargeSection>
      <LargeSection backgroundColor="#F7F7F7">

      </LargeSection>

      <Footer />
    </div>
  );
}

export default App;
