import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import store from './store/index.jsx'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';



test('renders learn react link', () => {
  const { getByText } = render(
  
  <Provider store={store}>
    <App />
</Provider>
  );
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
