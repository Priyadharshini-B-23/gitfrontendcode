import { getByTestId, render, screen} from "@testing-library/react";
import axios from 'axios';
import App from './App';
import { BrowserRouter, Routes } from 'react-router-dom';
import userEvent from "@testing-library/user-event";
import Login from "./components/Code/Login";
 
jest.mock('axios');
jest.mock('react-router-dom');
 
describe("Test the Signin Component", () => {
    test("render the login form with login button", async () => {
 
        render(<Login />);
 
        const buttonList = await screen.findAllByRole("button");
        console.log();
        expect(buttonList).toHaveLength(1);
    });
   
  });