import { render, screen } from '@testing-library/react';
import Header from '../components/Header';
import {Provider} from "react-redux"
import store from "../store"

test('renders the Header component', () => {
  render(
    <Provider store={store}>
    <Header />);
  </Provider>);
    
  const linkElement = screen.getByText("Notifications");
  expect(linkElement).toBeInTheDocument();
  const linkElement2 = screen.getByText("Messaging");
  expect(linkElement2).toBeInTheDocument();
  const linkElement3 = screen.getByText("Home");
  expect(linkElement3).toBeInTheDocument();
  const linkElement4 = screen.getByText("My Network");
  expect(linkElement4).toBeInTheDocument();
  const linkElement5 = screen.getByText("Jobs");
  expect(linkElement5).toBeInTheDocument();
});
