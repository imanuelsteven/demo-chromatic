import { Badge } from './Badge';

const meta = {
  title: 'Presentation/Badge',
  component: Badge,
  tags: ['autodocs'],
  args: {
    text: 'In Review',
    tone: 'accent'
  }
};

export default meta;

export const Accent = {};

export const Teal = {
  args: {
    text: 'Approved',
    tone: 'teal'
  }
};

export const Danger = {
  args: {
    text: 'Blocked',
    tone: 'danger'
  }
};

export const Muted = {
  args: {
    text: 'Draft',
    tone: 'muted'
  }
};