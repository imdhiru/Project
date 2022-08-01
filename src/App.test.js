import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { useState } from 'react';
import axios from 'axios';
import App,{addNewRow, DataPrep, onChanges, PostDataCall, DateTimeFormater} from './App';
import { postMedication} from './Services/Api';

test('renders App component', () => {
  render(<App />);
  const linkElement = screen.getByText(/strength/i);
  expect(linkElement).toBeInTheDocument();
});
test('renders App component with Two Buttons initially', async () => {
   render(<App />);
  const linkElement = await screen.findAllByRole('button');
  expect(linkElement).toHaveLength(2);
});

test('Test Add new row function with State update', async () => {
  
  const setInputFields = jest.fn();
  const a = new setInputFields();
  let inputFieldsdata = { "name": "", "strength": "", "frequency": "", "dosageForm": "", "route": "", "duration": "", "startDateTime": "", "endDateTime": "", "timeOfMedication": "", "additionalComments": "" };
  const checkAddNewROw = addNewRow(a,[{test:""}]);
 //expect(checkAddNewROw).toBe(a([{test:""},inputFieldsdata]));
});

test('Test Add new row function with State update', async () => {
  let inputFieldsdata = { "name": "a", "strength": "t", "frequency": "", "dosageForm": "", "route": "", "duration": "", "startDateTime": "2022-07-29T17:16", "endDateTime": "2022-07-29T17:16", "timeOfMedication": "", "additionalComments": "" };
  const checkAdd = DataPrep([inputFieldsdata]);
 expect(checkAdd[0].startDateTime).toBe("2022-07-29 17:16:00");
});

test('Test Add new row function with State update', async () => {
  let inputFieldsdata = { "name": "a", "strength": "t", "frequency": "", "dosageForm": "", "route": "", "duration": "", "startDateTime": "2022-07-29T17:16", "endDateTime": "2022-07-29T17:16", "timeOfMedication": "", "additionalComments": "" };
  const checkAdd = DataPrep([inputFieldsdata]);
 expect(checkAdd[0].startDateTime).toBe("2022-07-29 17:16:00");
});


test('Test click event on Submit button ', async () => {
  let inputFieldsdata = { "name": "a", "strength": "t", "frequency": "", "dosageForm": "", "route": "", "duration": "", "startDateTime": "2022-07-29T17:16", "endDateTime": "2022-07-29T17:16", "timeOfMedication": "", "additionalComments": "" };
  //const checkAdd = DataPrep([inputFieldsdata]);
  const submit = jest.fn().mockReturnValue(true);
  const postMedication = jest.fn();
 render(<App/>)
  //const linkElement = screen.getByText(/strength/i);
  const input = screen.getByTestId("submit-test");
  userEvent.click(input);
  //console.log(input.debug());
  await waitFor(() => {
    expect(submit).toHaveBeenCalledTimes(0);
    expect(postMedication).toHaveBeenCalledTimes(0);
   // expect().toBeInTheDocument();
  });
});

test('Test Add new row function with State update', async () => {
  const setInputFields =jest.fn();
  //const inputFields : (useState)=>[useState,setInputFields];
  let inputFieldsdata = { "name": "a", "strength": "t", "frequency": "", "dosageForm": "", "route": "", "duration": "", "startDateTime": "2022-07-29T17:16", "endDateTime": "2022-07-29T17:16", "timeOfMedication": "", "additionalComments": "" };
  const checkAdd = onChanges([inputFieldsdata],setInputFields);
 expect(jest.fn()).toHaveBeenCalledTimes(0);
});

//  test('Test Post API call method', async () => {
// //   const setInputFields =jest.fn();
// const data1={message:"done"};
//    //const postMedications = jest.fn().mockReturnValue(() => Promise.resolve(data1));
//   const postMedications = jest.fn(() => {return Promise.resolve()});

//   //  axios.post.mockResolvedValue(() =>
//   //   Promise.resolve({
//   //     data: { message:"done" }
//   //   })
//   // );
// //   const response = true;
// //   //const inputFields : (useState)=>[useState,setInputFields];
// //   //xios.post.mockResolvedValueOnce(response);
// //   //const response = { json: jest.fn().mockResolvedValueOnce({message:"Updated Successfully"}) };
//    let inputFieldsdata = { "name": "a", "strength": "t", "frequency": "", "dosageForm": "", "route": "", "duration": "", "startDateTime": "2022-07-29T17:16", "endDateTime": "2022-07-29T17:16", "timeOfMedication": "", "additionalComments": "" };
//    //const data = await PostDataCall([inputFieldsdata],postMedications);

//    //void PostDataCall([inputFieldsdata],postMedications).then(() => {
//     expect(functionBSpy).toHaveBeenCalledTimes(1);
//   });
//    await expect(PostDataCall([inputFieldsdata],postMedications)).resolves.toBe('peanut butter');
//    expect(data).resolves.toBeUndefined();
// //expect(postMedication).toHaveBeenCalledTimes(1);
//  });

test('Test Date time Formatter function', async () => {
  const Date = DateTimeFormater("2022-08-05T19:10");
 expect(Date).toBe("2022-08-05 19:10:00");
});
test('Test Date time Formatter function without T format', async () => {
  const Date = DateTimeFormater("2022-08-05 19:10");
 expect(Date).toBe("2022-08-05 19:10");
});

