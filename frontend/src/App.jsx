import './App.css'
import { Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import ParticipantDashboard from './components/ParticipantDashboard';
import IQADashboard from './components/IQADashboard';
import CoordinatorDashboard from './components/CoordinatorDashboard';

function App() {

  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/participant-dashboard" element={<ParticipantDashboard />} />
      <Route path="/iqa-dashboard" element={<IQADashboard />} />
      <Route path="/coordinator-dashboard" element={<CoordinatorDashboard />} />
    </Routes>
  );
}

export default App
