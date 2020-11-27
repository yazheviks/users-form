import React from 'react';
import './App.scss';
import { Form } from './components/Form';
import { Wave } from './components/Wave';

export const initialUser = {
  fullName: '',
  email: '',
  message: '',
};

export const initialErrors = {
  fullName: 'start',
  email: 'start',
  message: 'start',
};

export const App = () => (
  <div>
    <Wave />
    <Form initialInputs={initialUser} initialErrors={initialErrors} />
  </div>
);
