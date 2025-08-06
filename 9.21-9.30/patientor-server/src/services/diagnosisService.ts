import diagnoses from '../../data/diagnoses.ts';
import { Diagnosis } from '../types.ts';

const getDiagnoses = () : Diagnosis[] => {
  return diagnoses
}

// const getNonSensitiveEntries = (): NonSensitiveDiaryEntry[] => {
//   return diaries.map(({ id, date, weather, visibility }) => ({
//     id,
//     date,
//     weather,
//     visibility,
//   }));
// };

export default {
  getDiagnoses
}