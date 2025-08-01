import patients from '../../data/patients.ts';
import { Patient, NonSensitivePatient, NewPatient } from '../types.ts';
import { v1 as uuid } from 'uuid';

const id = uuid();

const getPatients = () : Patient[] => {
  return patients;
}

const getNonSensitivePatients = (): NonSensitivePatient[] => {
  return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation
  }));
};

const addPatient = (patient:NewPatient): Patient => {
  
  const newPatient = {
    id:id,
    ...patient
  }

  patients.push(newPatient);
  console.log('newPatient', newPatient);

  return newPatient;
}

export default {
  getPatients,
  getNonSensitivePatients,
  addPatient
}