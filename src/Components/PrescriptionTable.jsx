import React from "react";
import MedicationNameList from "./MedicationNameList";

const PrescriptionTable = ({add,change,data,medicationName}) => {
    
    return <>
        <table className="table table-striped">
            <thead>
                <tr>
                    <td></td>
                    <td>Medication Name<span>*</span></td>
                    <td>Strength<span>*</span></td>
                    <td>Frequency<span>*</span></td>
                    <td>Dosage Form<span>*</span></td>
                    <td>Route<span>*</span></td>
                    <td>Duration<span>*</span></td>
                    <td>Start Date time<span>*</span></td>
                    <td>End Date time<span>*</span></td>
                    <td>Time Of Medication<span>*</span></td>
                    <td>Comments</td>
                </tr>
            </thead>
            <tbody>
                {data && data.map((dat, index) => {
                    return <tr key={index}>
                        <td><button data-testid={"add-input"+index} className="btn btn-secondary" onClick={() => add()}>+ </button></td>
                        <td><MedicationNameList data={medicationName} /> 
                        <input data-testid={"med-input"+index} required className={`form-control`} name="name" autoComplete="on" value={dat.name} list="suggestions" placeholder="Search..." 
                        onChange={ (e) => change(e, index)} />
                   
                          </td>
                        <td><input type="text" data-testid={"str-input"+index} required value={dat.strength} className="form-control" name="strength" onChange={e => change(e, index)}  /></td>                                                       
                        <td><input type="text" data-testid={"fre-input"+index} required value={dat.frequency} className="form-control" name="frequency" onChange={e => change(e, index)} /></td>
                        <td>
                            <select className="form-select" data-testid={"dos-input"+index} aria-label="Default select example" required defaultValue={dat.dosageForm} name="dosageForm" onChange={e => change(e, index)}>
                                <option disabled value="" hidden> -select- </option>
                                <option>Tablet</option>
                                <option>Powder</option>
                                <option>Syrup</option>
                            </select>
                        </td>

                        <td>
                            <select className="form-select" data-testid={"rou-input"+index} required aria-label="Default select example" defaultValue={dat.route} name="route" onChange={e =>change(e, index)}>
                                <option disabled hidden value=""> -select- </option>
                                <option>Oral</option>
                                <option>Intravenous</option>
                                <option>Spray</option>
                            </select>
                        </td>
                        <td><input className="form-control"  data-testid={"dur-input"+index} required type="text" value={dat.duration} name="duration" onChange={e => change(e, index)} /></td>
                        <td><input className="form-control" data-testid={"strtime-input"+index} required type="datetime-local" value={dat.startDateTime} min={new Date().toISOString().slice(0,16)} name="startDateTime" onChange={e => change(e, index)} /></td>
                        <td><input className="form-control" data-testid={"endtime-input"+index} required  type="datetime-local" value={dat.endDateTime} min={new Date().toISOString().slice(0,16)} name="endDateTime" onChange={e => change(e, index)} /></td>
                        <td><input className="form-control" data-testid={"timemed-input"+index} required  type="text" value={dat.timeOfMedication} name="timeOfMedication" onChange={e => change(e, index)} /></td>
                        <td><input className="form-control" data-testid={"comment-input"+index} type="text" value={dat.additionalComments} name="additionalComments" onChange={e => change(e, index)} /></td>
                    </tr>
                }
                )}
            </tbody>

        </table>
    </>;
};
export default PrescriptionTable;