import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../src/redux/store';
import { render, screen, fireEvent, act } from '@testing-library/react-native';

import LoginScreen from '../src/screens/LoginScreen';
// import App from '../App';

describe('Login Screen test', () => {
  const LoginComponent = (
    <Provider store={store}>
      <LoginScreen />
    </Provider>
  )

  it("renders default elements", () => {
    const { getAllByText, getByPlaceholderText } = render(LoginComponent);

    expect(getAllByText("Login").length).toBe(2);
    getByPlaceholderText("Email");
    getByPlaceholderText("Password");
  });

  it("login function", () => {
    const { getByTestId, getByPlaceholderText, getByText, getAllByTestId } = render(LoginComponent);

    const emailInput = getByPlaceholderText(/Email/)
    const passwordInput = getByPlaceholderText(/Password/)
    expect(emailInput).toBeTruthy();
    expect(passwordInput).toBeTruthy();

    const textToEnter = {
      email: "user12@mail.com",
      password: "asd1123asdasda"
    };

    fireEvent.changeText(emailInput, textToEnter.email);
    fireEvent.changeText(passwordInput, textToEnter.password);

    act(() => {
      fireEvent.press(getByTestId('LoginButton'))
    })
    // expect(emailInput).toHaveStyle({ borderColor: 'red' })

    const userState = store.getState().user;
    expect(userState.email === textToEnter.email)
  })
})