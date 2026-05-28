import React from 'react';
import { LoginForm } from '../../src/components/LoginForm';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/LoginForm',
  component: LoginForm
};

const Template = (args) => <LoginForm {...args} onSubmit={action('login-submit')} />;

export const Default = Template.bind({});
Default.args = {};

export const WithError = Template.bind({});
WithError.args = {
  errorMessage: 'Invalid credentials. Please check your email and password.'
};
