import React from 'react';
import LoanRegister from '../../src/components/LoanRegister';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/LoanRegister',
  component: LoanRegister
};

const Template = (args) => <LoanRegister {...args} />;

export const Default = Template.bind({});
Default.args = {
  onSubmit: action('loan-submit')
};
