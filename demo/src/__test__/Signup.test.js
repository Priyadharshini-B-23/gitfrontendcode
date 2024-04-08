import { getByTestId, render, screen} from "@testing-library/react";
import axios from 'axios';
import { BrowserRouter, Routes } from 'react-router-dom';
import userEvent from "@testing-library/user-event";
import Signup from '../components/Code/Signup'
 
jest.mock('axios');
jest.mock('react-router-dom');
 
describe("Test the Signup Component", () => {
    test("render the signup form with signup button", async () => {
 
        render(<Signup/>);
 
        const buttonList = await screen.findAllByRole("button");
        console.log();
        expect(buttonList).toHaveLength(1);
    });
  })