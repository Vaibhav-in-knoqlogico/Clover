import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Landing_page from './Components/Landing_page/Landing_page';
import AwardsClover from './Components/AwardsClover/AwardClover';
import TrainingsClover from './Components/TrainingsClover/TrainingClover';
import EventClover from './Components/EventClover/EventClover';
import Impact from './Components/Impact/Impact';
import CareerClover from './Components/CareerClover/CareerClover';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Landing_page />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/events" element={<EventClover />} />
          <Route path="/awards" element={<AwardsClover />} />
          <Route path="/trainings" element={<TrainingsClover />} />
          <Route path="/careers" element={<CareerClover />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
        <Footer />
    </Router>
  );
}

export default App;