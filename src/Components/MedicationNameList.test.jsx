import { render, screen } from '@testing-library/react';
import MedicationnameList from "./MedicationNameList";

test('renders medication list component with list of medicines', () => {
    const listofmed =['Asprin','Peracetamol'];
  render(<MedicationnameList data={listofmed} />);
  const linkElement = screen.getByText(/Asprin/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders medication list component without list of array', () => {
    const listofmed =[];
  render(<MedicationnameList data={listofmed} />);
  const linkElement = screen.queryByText('option');
  expect(linkElement).not.toBeInTheDocument();
});