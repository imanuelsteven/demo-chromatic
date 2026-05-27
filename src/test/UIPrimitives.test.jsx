import { render, screen } from '@testing-library/react';
import { Badge } from '../components/Badge';
import { Button } from '../components/Button';
import { Panel } from '../components/Panel';

describe('UI primitives', () => {
  it('renders button label and variant class', () => {
    render(<Button label="Approve" variant="teal" />);

    const button = screen.getByRole('button', { name: 'Approve' });
    expect(button).toBeInTheDocument();
    expect(button.className).toContain('ui-button-teal');
  });

  it('renders panel with title and content', () => {
    render(
      <Panel title="Review Panel" tone="accent">
        Panel body content
      </Panel>
    );

    expect(screen.getByText('Review Panel')).toBeInTheDocument();
    expect(screen.getByText('Panel body content')).toBeInTheDocument();
  });

  it('renders badge tone class', () => {
    render(<Badge text="Blocked" tone="danger" />);

    const badge = screen.getByText('Blocked');
    expect(badge).toBeInTheDocument();
    expect(badge.className).toContain('ui-badge-danger');
  });
});