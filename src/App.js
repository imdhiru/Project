import React from "react";
import UserInfo from "./Layouts/UserInfo";
import PrescriptionTable from "./Components/PrescriptionTable";
import { postMedication } from "./Services/Api";
import './App.css';


const patientData = {
  name: "John Smith",
  dob: "May 9, 1993",
  age: "25 Years",
  gender: "Male"
}
const medicationName = ["Asprin", "Azithromycin","Amoxicillin","Asthalin","Augmentin" ,"Ibuprofen","","Paracetamol","Pantop"];

function App() {
  // Define Intial State to add empty input row
  const [inputFields, setInputFields] = React.useState([{ "name": "", "strength": "", "frequency": "", "dosageForm": "", "route": "", "duration": "", "startDateTime": "", "endDateTime": "", "timeOfMedication": "", "additionalComments": "" }]);
  //Define onchange event for input fields
  const onChange = onChanges(inputFields, setInputFields);
  //Submit Input Form function 
  const submit = (e) => {
    e.preventDefault();
    PostDataCall(DataPrep(inputFields), postMedication);
  }
  return (
    <div className="App">
      <UserInfo details={patientData} />
      <form onSubmit={submit}>
        <PrescriptionTable medicationName={medicationName} data={inputFields} add={addNewRow(setInputFields, inputFields)} change={onChange} />
        <button className="btn btn-primary ml-3" data-testid={"submit-test"} onClick={submit}>Submit</button>
      </form>
    </div>
  );
}

export default App;

// Post API call method
export function PostDataCall(postAPIData, postMedication) {
  postMedication(postAPIData).then(response => {
    alert("Prescription Updated Successfully", response);
  })
    .catch(err => {
      alert(err.message);
    });
}
//Update and set input fields value in state
export function onChanges(inputFields, setInputFields) {
  return (e, index) => {
    let updateData = [...inputFields];
    updateData[index][e.target.name] = e.target.value;
    setInputFields(updateData);
    return true;
  };
}
// add Patient ID and Date formatupdate for  API data  
export function DataPrep(inputFields) {
  return inputFields.map((data) => {
    data.startDateTime = DateTimeFormater(data.startDateTime);
    data.endDateTime = DateTimeFormater(data.endDateTime);
    data.patientId = "0";
    return data;
  });
}
//Date format handle
export function DateTimeFormater(data) {
  if (data.includes('T')) {
    return data.split('T')[0] + " " + data.split('T')[1] + ":00";
  }
  else {
    return data;
  }
}
// Add new Row for input
export function addNewRow(setInputFields, inputFields) {
  let inputFieldsdata = { "name": "", "strength": "", "frequency": "", "dosageForm": "", "route": "", "duration": "", "startDateTime": "", "endDateTime": "", "timeOfMedication": "", "additionalComments": "" };
  return () => {
    setInputFields([...inputFields, inputFieldsdata]);
  };
}

