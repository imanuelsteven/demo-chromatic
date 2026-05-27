import { render, screen } from '@testing-library/react';
import { CoverSlide } from '../components/CoverSlide';

const agenda = [
  { title: 'Session A', detail: 'Detail A' },
  { title: 'Session B', detail: 'Detail B' }
];

describe('CoverSlide', () => {
  it('renders title and agenda items', () => {
    render(
      <CoverSlide
        dayLabel="Day 1"
        titleMain="Main"
        titleAccent="Accent"
        subtitle="Subtitle"
        duration="4h"
        sessions="2"
        level="Intermediate"
        agenda={agenda}
      />
    );

    expect(screen.getByText('Main')).toBeInTheDocument();
    expect(screen.getByText('Accent')).toBeInTheDocument();
    expect(screen.getByText('Session A')).toBeInTheDocument();
    expect(screen.getByText('Session B')).toBeInTheDocument();
  });
});