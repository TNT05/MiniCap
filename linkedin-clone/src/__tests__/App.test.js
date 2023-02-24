import { render, screen } from '@testing-library/react';
import App from '../App';
import {Provider} from "react-redux"
import store from "../store"

test('renders the App component', () => {
  render(<Provider store={store}>
    <App />
  </Provider>);
  const linkElement = screen.getByText("Welcome to your professional community");
  expect(linkElement).toBeInTheDocument();
  
});
