import { render, screen } from '@testing-library/react';
import UserInfo from "./UserInfo";

test('renders learn react link', () => {
    const listofmed ={
        name:"test1",
        age:20,
        dob:"20 May,1998"
    }
  render(<UserInfo details={listofmed} />);
  const linkElement = screen.getByText(/Test1/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders of User Info component without age key', () => {
    const list ={
        name:"test1",
        dob:"20 May,1998"
    }
  render(<UserInfo details={list} />);
  const linkElement = screen.getByText(/20 May,1998/i);
  expect(linkElement).toBeInTheDocument();
});
test('renders of User Info component without dob key', () => {
    const list ={
        name:"test1",  
    }
  render(<UserInfo details={list} />);
  const linkElement = screen.getByText(/Test1/i);
  expect(linkElement).toBeInTheDocument();
});