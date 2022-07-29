import { render, screen , fireEvent} from '@testing-library/react';
import PrescriptionTable from "./PrescriptionTable";
import {onChanges} from "./../App";

test('renders Prescription table with Table headings', () => {
    let medicationName=['abc']
    let inputFieldsdata = [{ "name": "", "strength": "", "frequency": "", "dosageForm": "", "route": "", "duration": "", "startDateTime": "", "endDateTime": "", "timeOfMedication": "", "additionalComments": "" }];
  render(<PrescriptionTable data={inputFieldsdata} medicationName={medicationName}/>);
  const linkElement = screen.getByText(/duration/i);
  expect(linkElement).toBeInTheDocument();
});
test('renders Prescription table with child component as medication name list', () => {
    let medicationName=['abc']
    let inputFieldsdata = [{ "name": "", "strength": "", "frequency": "", "dosageForm": "", "route": "", "duration": "", "startDateTime": "", "endDateTime": "", "timeOfMedication": "", "additionalComments": "" }];
  render(<PrescriptionTable data={inputFieldsdata} medicationName={medicationName}/>);
  const linkElement = screen.getByText(/abc/i);
  expect(linkElement).toBeInTheDocument();
});

const setup = () => {
  let medicationName=['abc']
  const onChange = jest.fn();
    let inputFieldsdata = [{ "name": "", "strength": "", "frequency": "", "dosageForm": "", "route": "", "duration": "", "startDateTime": "", "endDateTime": "", "timeOfMedication": "", "additionalComments": "" }];
  const utils = render(<PrescriptionTable data={inputFieldsdata} medicationName={medicationName} change={onChange}/>)
  const input = utils.getByTestId("med-input0")
  return {
    input,
    ...utils,
  }
}



test('test input change for Medication names', () => {
  const {input} = setup()
  fireEvent.change(input, {target: {value: 'abc'}})
  expect(input.value).toBe('')
});


test('test Add new row for Medical Prescription', () => {
  let medicationName=['abc']
  const onChange = jest.fn();
  const addNewRow = jest.fn();
    let inputFieldsdata = [{ "name": "", "strength": "", "frequency": "", "dosageForm": "", "route": "", "duration": "", "startDateTime": "", "endDateTime": "", "timeOfMedication": "", "additionalComments": "" }];
  const utils = render(<PrescriptionTable data={inputFieldsdata} medicationName={medicationName} add={addNewRow} change={onChange}/>)
  const input = utils.getByTestId("add-input0");
  fireEvent.click(input);
  expect(addNewRow).toHaveBeenCalledTimes(1);
});

test('Test frequency input changes in Medication Prescription', () => {
  let medicationName=['abc']
  const Change = jest.fn();
  const addNewRow = jest.fn();
    let inputFieldsdata = [{ "name": "", "strength": "", "frequency": "", "dosageForm": "", "route": "", "duration": "", "startDateTime": "", "endDateTime": "", "timeOfMedication": "", "additionalComments": "" }];
  const utils = render(<PrescriptionTable data={inputFieldsdata} medicationName={medicationName} add={addNewRow} change={Change}/>)
  const input = utils.getByTestId("fre-input0");
  fireEvent.change(input, {target: {value: 'abc'}})
  expect(Change).toHaveBeenCalledTimes(1);
});

test('Test Strength input changes in Medication Prescription', () => {
  let medicationName=['abc']
  const Change = jest.fn();
  const addNewRow = jest.fn();
    let inputFieldsdata = [{ "name": "", "strength": "", "frequency": "", "dosageForm": "", "route": "", "duration": "", "startDateTime": "", "endDateTime": "", "timeOfMedication": "", "additionalComments": "" }];
  const utils = render(<PrescriptionTable data={inputFieldsdata} medicationName={medicationName} add={addNewRow} change={Change}/>)
  const input = utils.getByTestId("str-input0");
  fireEvent.change(input, {target: {value: 'abc'}})
  expect(Change).toHaveBeenCalledTimes(1);
});

test('Test Dose form input changes in Medication Prescription', () => {
  let medicationName=['abc']
  const Change = jest.fn();
  const addNewRow = jest.fn();
    let inputFieldsdata = [{ "name": "", "strength": "", "frequency": "", "dosageForm": "", "route": "", "duration": "", "startDateTime": "", "endDateTime": "", "timeOfMedication": "", "additionalComments": "" }];
  const utils = render(<PrescriptionTable data={inputFieldsdata} medicationName={medicationName} add={addNewRow} change={Change}/>)
  const input = utils.getByTestId("dos-input0");
  fireEvent.change(input, {target: {value: 'Tablet'}})
  expect(Change).toHaveBeenCalledTimes(1);
});

test('Test Route input changes in Medication Prescription', () => {
  let medicationName=['abc']
  const Change = jest.fn();
  const addNewRow = jest.fn();
    let inputFieldsdata = [{ "name": "", "strength": "", "frequency": "", "dosageForm": "", "route": "", "duration": "", "startDateTime": "", "endDateTime": "", "timeOfMedication": "", "additionalComments": "" }];
  const utils = render(<PrescriptionTable data={inputFieldsdata} medicationName={medicationName} add={addNewRow} change={Change}/>)
  const input = utils.getByTestId("rou-input0");
  fireEvent.change(input, {target: {value: 'Oral'}})
  expect(Change).toHaveBeenCalledTimes(1);
});

test('Test Duration input changes in Medication Prescription', () => {
  let medicationName=['abc']
  const Change = jest.fn();
  const addNewRow = jest.fn();
    let inputFieldsdata = [{ "name": "", "strength": "", "frequency": "", "dosageForm": "", "route": "", "duration": "", "startDateTime": "", "endDateTime": "", "timeOfMedication": "", "additionalComments": "" }];
  const utils = render(<PrescriptionTable data={inputFieldsdata} medicationName={medicationName} add={addNewRow} change={Change}/>)
  const input = utils.getByTestId("dur-input0");
  fireEvent.change(input, {target: {value: '1 week'}})
  expect(Change).toHaveBeenCalledTimes(1);
});

test('Test Start datetime input changes in Medication Prescription', () => {
  let medicationName=['abc']
  const Change = jest.fn();
  const addNewRow = jest.fn();
    let inputFieldsdata = [{ "name": "", "strength": "", "frequency": "", "dosageForm": "", "route": "", "duration": "", "startDateTime": "", "endDateTime": "", "timeOfMedication": "", "additionalComments": "" }];
  const utils = render(<PrescriptionTable data={inputFieldsdata} medicationName={medicationName} add={addNewRow} change={Change}/>)
  const input = utils.getByTestId("strtime-input0");
  fireEvent.change(input, {target: {value: '2022-07-18T18:12'}})
  expect(Change).toHaveBeenCalledTimes(1);
});

test('Test End datetime input changes in Medication Prescription', () => {
  let medicationName=['abc']
  const Change = jest.fn();
  const addNewRow = jest.fn();
    let inputFieldsdata = [{ "name": "", "strength": "", "frequency": "", "dosageForm": "", "route": "", "duration": "", "startDateTime": "", "endDateTime": "", "timeOfMedication": "", "additionalComments": "" }];
  const utils = render(<PrescriptionTable data={inputFieldsdata} medicationName={medicationName} add={addNewRow} change={Change}/>)
  const input = utils.getByTestId("endtime-input0");
  fireEvent.change(input, {target: {value: '2022-07-18T18:12'}})
  expect(Change).toHaveBeenCalledTimes(1);
});
test('Test Time of medication input changes in Medication Prescription', () => {
  let medicationName=['abc']
  const Change = jest.fn();
  const addNewRow = jest.fn();
    let inputFieldsdata = [{ "name": "", "strength": "", "frequency": "", "dosageForm": "", "route": "", "duration": "", "startDateTime": "", "endDateTime": "", "timeOfMedication": "", "additionalComments": "" }];
  const utils = render(<PrescriptionTable data={inputFieldsdata} medicationName={medicationName} add={addNewRow} change={Change}/>)
  const input = utils.getByTestId("timemed-input0");
  fireEvent.change(input, {target: {value: '1-1-1'}})
  expect(Change).toHaveBeenCalledTimes(1);
});

test('Test Extra comment input changes in Medication Prescription', () => {
  let medicationName=['abc']
  const Change = jest.fn();
  const addNewRow = jest.fn();
    let inputFieldsdata = [{ "name": "", "strength": "", "frequency": "", "dosageForm": "", "route": "", "duration": "", "startDateTime": "", "endDateTime": "", "timeOfMedication": "", "additionalComments": "" }];
  const utils = render(<PrescriptionTable data={inputFieldsdata} medicationName={medicationName} add={addNewRow} change={Change}/>)
  const input = utils.getByTestId("comment-input0");
  fireEvent.change(input, {target: {value: 'test comment'}})
  expect(Change).toHaveBeenCalledTimes(1);
});

