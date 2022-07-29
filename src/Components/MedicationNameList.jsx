import React from "react";

const MedicationNameList = (props) => {
    return <datalist id="suggestions">
        {props.data && props.data.map((data, index) => {
            return <option key={index}> {data}</option>
        })}
    </datalist>
}
export default MedicationNameList;