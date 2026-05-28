import  React  from 'react';
import { createRoot } from 'react-dom/client';
import { CoverSlide } from './components/CoverSlide';
import { sampleAgenda } from './components/sampleData';
import { LoginForm } from './components/LoginForm';
import LoanRegister  from './components/LoanRegister';
import { Button } from './components/Button';
import './styles/theme.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LoginForm />
    <LoanRegister onSubmit={(data) => alert(JSON.stringify(data, null, 2))} />
    <CoverSlide
      dayLabel="Day 4 of 4"
      titleMain="Design Literacy"
      titleAccent="Review & Storybook"
      subtitle="A Storybook-ready version of your presentation design system."
      agenda={sampleAgenda}
      duration="8 Hours"
      sessions="3 + Mini-Project"
      level="Mid-Level Dev"
    />
    <Button label="Riko woi" onClick={() => alert('Woi')}
     variant="muted" />
  </React.StrictMode>
);