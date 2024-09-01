import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';


describe('App', () => {
  it('renders without crashing', () => {
    expect(() => {
      const root = createRoot(document.createElement('div'));
      root.render(<App />);
    }).not.toThrow();
  });
});
