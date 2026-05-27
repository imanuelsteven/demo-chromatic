import React from 'react';
import { createRoot } from 'react-dom/client';
import { CoverSlide } from './components/CoverSlide';
import { sampleAgenda } from './components/sampleData';
import './styles/theme.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
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
  </React.StrictMode>
);