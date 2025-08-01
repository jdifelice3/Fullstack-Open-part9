import { Gender, NewPatient } from "./types";
import { z } from 'zod';

export const NewPatientSchema = z.object({
    //id: z.string(),
    name: z.string(),
    dateOfBirth: z.string().date(),
    ssn: z.string(),
    gender: z.enum(Gender),
    occupation: z.string()
});


export const toNewPatient = (object: unknown): NewPatient => {
    return NewPatientSchema.parse(object);
}
