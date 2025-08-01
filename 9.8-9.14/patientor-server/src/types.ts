import { z } from 'zod';
import { NewPatientSchema } from './util';

export enum Gender {
 Male = 'male',
 Female = 'female',
 Other = 'other'   
}

export type NonSensitivePatient = Omit<Patient, 'ssn'>;

export type NewPatient = z.infer<typeof NewPatientSchema>;

export interface Diagnosis {
  code: string;
  name: string;
  latin?: string;
}

export interface Patient {
    id: string;
    name: string;
    dateOfBirth: string;
    ssn: string;
    gender: Gender;
    occupation: string;
}