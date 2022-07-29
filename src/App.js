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
const medicationName = ["Asprin", "Amoxicillin", "Ibuprofen", "Azithromycin"];

function App() {
  
  const [inputFields, setInputFields] = React.useState([{ "name": "", "strength": "", "frequency": "", "dosageForm": "", "route": "", "duration": "", "startDateTime": "", "endDateTime": "", "timeOfMedication": "", "additionalComments": "" }]);


  
  const onChange = onChanges(inputFields, setInputFields);
  
  

  const submit = (e) => {
    e.preventDefault();
    //const postAPIData = DataPrep(inputFields);
    PostDataCall(DataPrep(inputFields),postMedication);
  }
  return (
    <div className="App">
      <UserInfo details={patientData} />
      <form onSubmit={submit}>
        <PrescriptionTable medicationName={medicationName} data={inputFields} add={addNewRow(setInputFields, inputFields)} change={onChange}/>
        <button className="btn btn-primary ml-3" data-testid={"submit-test"} onClick={submit}>Submit</button>
      </form>
    </div>
  );
}

export default App;


export function PostDataCall(postAPIData,postMedication) {
  postMedication(postAPIData).then(response => {
    alert("Prescription Updated Successfully", response);
    return true;
  })
    .catch(err => {
    alert(err.message);
    });
}

export function onChanges(inputFields, setInputFields) {
  return (e, index) => {
    let updateData = [...inputFields];
    updateData[index][e.target.name] = e.target.value;
    setInputFields(updateData);
    return true;
  };
}

export function DataPrep(inputFields) {
  return inputFields.map((data) => {
    data.startDateTime = data.startDateTime.split('T')[0] + " " + data.startDateTime.split('T')[1] + ":00";
    data.endDateTime = data.endDateTime.split("T")[0] + " " + data.endDateTime.split('T')[1] + ":00";
    data.patientId = "0";
    return data;
  });
}

export function addNewRow(setInputFields, inputFields) {
  let inputFieldsdata = { "name": "", "strength": "", "frequency": "", "dosageForm": "", "route": "", "duration": "", "startDateTime": "", "endDateTime": "", "timeOfMedication": "", "additionalComments": "" };
  return () => {
    setInputFields([...inputFields, inputFieldsdata]);
  };
}

