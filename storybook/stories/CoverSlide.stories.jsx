import { CoverSlide } from '../../src/components/CoverSlide';
import { sampleAgenda } from '../../src/components/sampleData';

const meta = {
  title: 'Presentation/CoverSlide',
  component: CoverSlide,
  tags: ['autodocs'],
  args: {
    dayLabel: 'Day 4 of 4',
    titleMain: 'Design Literacy',
    titleAccent: 'Review & Storybook',
    subtitle: 'Reading design specs, facilitating reviews, and keeping implementation aligned.',
    duration: '8 Hours',
    sessions: '3 + Mini-Project',
    level: 'Mid-Level Dev',
    agenda: sampleAgenda
  }
};

export default meta;

export const Default = {};

export const ShortAgenda = {
  args: {
    agenda: sampleAgenda.slice(0, 3)
  }
};