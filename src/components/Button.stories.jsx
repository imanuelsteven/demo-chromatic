import { Button } from './Button';

const meta = {
  title: 'Presentation/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    label: 'Review Design',
    variant: 'accent',
    size: 'md'
  }
};

export default meta;

export const Accent = {};

export const Teal = {
  args: {
    variant: 'teal',
    label: 'Approve Scope'
  }
};

export const GhostSmall = {
  args: {
    variant: 'ghost',
    size: 'sm',
    label: 'View Notes'
  }
};

export const Danger = {
  args: {
    variant: 'danger',
    label: 'Reject Change'
  }
};