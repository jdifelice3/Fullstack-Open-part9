import patients from '../../data/patients.ts';
import { Patient, NonSensitivePatient, NewPatient } from '../types.ts';
import { v1 as uuid } from 'uuid';

const id = uuid();

const getPatients = () : Patient[] => {
  return patients;
}

const getPatientsById = (id: string) : Patient => {
  const patient = patients.find(patients => patients.id === id);
  if (!patient) {
    throw new Error(`Patient with id ${id} not found`);
  }
  return patient;
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