import { Panel } from './Panel';

const meta = {
  title: 'Presentation/Panel',
  component: Panel,
  tags: ['autodocs'],
  args: {
    title: 'Scope Lock Notes',
    subtitle: 'What is in and out of this sprint',
    tone: 'accent',
    footer: 'Updated by FE team · May 2026',
    children:
      'Include button states, panels, and badges in Storybook before implementation starts in feature branches.'
  }
};

export default meta;

export const Accent = {};

export const Teal = {
  args: {
    tone: 'teal',
    title: 'Review Outcome',
    subtitle: 'All teams aligned on token usage',
    footer: 'Approved'
  }
};

export const Danger = {
  args: {
    tone: 'danger',
    title: 'Risk Alert',
    subtitle: 'Unreviewed component variant detected',
    footer: 'Needs follow-up in design review'
  }
};