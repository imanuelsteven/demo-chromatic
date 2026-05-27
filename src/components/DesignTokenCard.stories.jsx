import { DesignTokenCard } from './DesignTokenCard';

const meta = {
  title: 'Presentation/DesignTokenCard',
  component: DesignTokenCard,
  tags: ['autodocs'],
  args: {
    token: '--accent',
    value: '#E8A020',
    usage: 'Primary highlight for CTAs, key labels, and important status text.',
    type: 'accent'
  }
};

export default meta;

export const Accent = {};

export const Teal = {
  args: {
    token: '--teal',
    value: '#2EC4B6',
    usage: 'Used for positive cues and process progress.',
    type: 'teal'
  }
};

export const Danger = {
  args: {
    token: '--red',
    value: '#E63946',
    usage: 'Used for anti-pattern warnings and high-risk states.',
    type: 'danger'
  }
};