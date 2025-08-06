import { Gender, NewPatient, Entry } from "./types";
import { z } from 'zod';

const BaseEntrySchema = z.object({
  id: z.string(),
  description: z.string(),
  date: z.string(),
  specialist: z.string(),
  diagnosisCodes: z.array(z.string()).optional()
});

// HealthCheckEntry schema
const HealthCheckEntrySchema = BaseEntrySchema.extend({
  type: z.literal("HealthCheck"),
  healthCheckRating: z.number() // you can use z.nativeEnum(HealthCheckRating) if it's an enum
});

// OccupationalHealthcareEntry schema
const OccupationalHealthcareEntrySchema = BaseEntrySchema.extend({
  type: z.literal("OccupationalHealthcare"),
  employerName: z.string()
});

// HospitalEntry schema
const HospitalEntrySchema = BaseEntrySchema.extend({
  type: z.literal("Hospital"),
  discharge: z.object({
    date: z.string(),
    criteria: z.string()
  })
});

// Final EntrySchema (discriminated union)
export const EntrySchema = z.discriminatedUnion("type", [
  HealthCheckEntrySchema,
  OccupationalHealthcareEntrySchema,
  HospitalEntrySchema
]);

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
