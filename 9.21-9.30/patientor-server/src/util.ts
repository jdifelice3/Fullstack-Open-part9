import { Gender, NewPatient, Entry } from "./types";
import { z } from 'zod';

const EntrySchema = z.object({

});

export const NewPatientSchema = z.object({
    //id: z.string(),
    name: z.string(),
    dateOfBirth: z.string().date(),
    ssn: z.string(),
    gender: z.enum(Gender),
    occupation: z.string(),
    entries: z.array(EntrySchema).default([])
});


export const toNewPatient = (object: unknown): NewPatient => {
    return NewPatientSchema.parse(object);
}
