import patients from '../../data/patients-full.ts';
import diagnoses from '../../data/diagnoses.ts';
import { Patient, NonSensitivePatient, NewPatient, Entry, Diagnosis } from '../types.ts';
import { v1 as uuid } from 'uuid';

const id = uuid();

const getPatients = () : Patient[] => {
  return patients;
}

const getPatientsById = (id: string) : Patient => {
  console.log('in getPatientsById');
  let replacementDiagnosisCodes: string[] = [];
  //Get patient with id
  const patient = patients.find(patients => patients.id === id);
  if (!patient) {
    throw new Error(`Patient with id ${id} not found`);
  }

  patient.entries.forEach(entry => {
    if(entry.diagnosisCodes){
      
      entry.diagnosisCodes.forEach(s => {
        const foundDiagnosis:Diagnosis | undefined = diagnoses.find(x => x.code === s);
        if(foundDiagnosis && entry.diagnosisCodes){
          const newDiagnosisCodes = getNewDiagnosisCodes(entry.diagnosisCodes);
          console.log('newDiagnosisCodes', newDiagnosisCodes);
          s = foundDiagnosis.code + ": " + foundDiagnosis?.name;
          replacementDiagnosisCodes.push(s);
        }
      })
      console.log('replacementDiagnosisCodes', replacementDiagnosisCodes);
      entry.diagnosisCodes = replacementDiagnosisCodes;
    }
  })
  console.log('patient',JSON.stringify(patient));
  return patient;
}

const getNewDiagnosisCodes = (diagnosisCodes:string[]) => {
  let foundDiagnosis:Diagnosis | undefined = undefined; 
  let foundDiagnosisIndex:number = -1;

  diagnosisCodes.forEach(s => {
  foundDiagnosis = diagnoses.find(x => x.code === s);
    if(foundDiagnosis){
      foundDiagnosisIndex = diagnoses.indexOf(foundDiagnosis,0);
      s = foundDiagnosis.code + ": " + foundDiagnosis.name;
    } 
  })
  console.log('foundDiagnosis',JSON.stringify(foundDiagnosis));
  return {"foundDiagnosis": foundDiagnosis, "foundDiagnosisIndex": foundDiagnosisIndex};
}

const getNonSensitivePatients = (): NonSensitivePatient[] => {
  return patients.map(({ id, name, dateOfBirth, gender, occupation, entries }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
    entries
  }));
};

const addPatient = (patient:NewPatient): Patient => {
  
  const newPatient = {
    id: id,
    ...patient
  }

  patients.push(newPatient);
  console.log('newPatient', newPatient);

  return newPatient;
}

export default {
  getPatients,
  getPatientsById,
  getNonSensitivePatients,
  addPatient
}