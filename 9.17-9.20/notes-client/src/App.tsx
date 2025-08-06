import { useState, useEffect } from 'react';
import axios from 'axios';
import { type DiaryEntry, type NewDiaryEntry, Weather, Visibility } from './types';

const PORT = 3000;

const App = () => {
  const [diaries, setDiaryEntry] = useState<DiaryEntry[]>([]);
  const [newDiaryEntry, setNewDiaryEntry] = useState<NewDiaryEntry>();
  const [newDate, setNewDate] = useState('');
  const [newVisibility, setNewVisibility] = useState('');
  const [newWeather, setNewWeather] = useState('');
  const [newComment, setNewComment] = useState('');

  useEffect(() => {

    axios.get<DiaryEntry[]>(`http://localhost:${PORT}/api/diaries`).then(response => {
      setDiaryEntry(response.data);
      //console.log(response.data);
    });
    
  }, [])

  const diaryEntryCreation = (event: React.SyntheticEvent) => {
    event.preventDefault();
    console.log('newWeather', newWeather);

    const weatherEnum = Object.values(Weather).includes(newWeather as Weather)
      ? (newWeather as Weather)
      : Weather.Rainy;

    const visibilityEnum = Object.values(Visibility).includes(newVisibility as Visibility)
      ? (newVisibility as Visibility)
      : Visibility.Poor;

    const diaryEntryToAdd: NewDiaryEntry = {
      date: newDate,
      weather: weatherEnum,
      visibility: visibilityEnum,
      comment: newComment
    }

    console.log('diaryEntryCode', diaryEntryToAdd);

    axios.post<NewDiaryEntry>(`http://localhost:${PORT}/api/addDiaryEntry`,diaryEntryToAdd).then(response => {
      //console.log(response.data);
      setNewDiaryEntry(response.data);
    });
  };

  return (
    <div>
      <h2>Add new entry</h2>
      <div>
        <span id='error' style={{color: 'red'}}/>
      </div>
      <form onSubmit={diaryEntryCreation}>
        <div>
        Date:
        <input
          type='date'
          min='2025-01-01'
          max='2025-08-05'
          value={newDate}
          onChange={(event) => setNewDate(event.target.value)}
        />
        </div>
        <div>
          
          
            Weather:
            <input type="radio" id="sunny" name="weather" value="sunny" onChange={(event) => setNewWeather(event.target.value)}/>
            <label htmlFor="sunny">Sunny</label>
            <input type="radio" id="rainy" name="weather" value="rainy" onChange={(event) => setNewWeather(event.target.value)}/>
            <label htmlFor="rainy">Rainy</label>
            <input type="radio" id="cloudy" name="weather" value="cloudy" onChange={(event) => setNewWeather(event.target.value)}/>
            <label htmlFor="cloudy">Cloudy</label>
            <input type="radio" id="stormy" name="weather" value="stormy" onChange={(event) => setNewWeather(event.target.value)}/>
            <label htmlFor="stormy">Stormy</label>
            <input type="radio" id="windy" name="weather" value="windy" onChange={(event) => setNewWeather(event.target.value)}/>
            <label htmlFor="windy">Windy</label>
          
        </div>
        <div>
          Visibility:
            <input type="radio" id="great" name="visibility" value="great" onChange={(event) => setNewVisibility(event.target.value)}/>
            <label htmlFor="great">Great</label>
            <input type="radio" id="good" name="visibility" value="good" onChange={(event) => setNewVisibility(event.target.value)}/>
            <label htmlFor="good">Good</label>
            <input type="radio" id="ok" name="visibility" value="ok" onChange={(event) => setNewVisibility(event.target.value)}/>
            <label htmlFor="ok">OK</label>
            <input type="radio" id="poor" name="visibility" value="poor" onChange={(event) => setNewVisibility(event.target.value)}/>
            <label htmlFor="poor">Poor</label>
        </div>
        {/* <p>
        Weather:
        <input
          value={newWeather}
          onChange={(event) => setNewWeather(event.target.value)} 
        />
        </p> */}
        {/* <p>
        Visibility:

        <input
          value={newVisibility}
          onChange={(event) => setNewVisibility(event.target.value)} 
        />
        </p> */}
        <p>
        Comment:
        <input
          value={newComment}
          onChange={(event) => setNewComment(event.target.value)} 
        />
        </p>
        <button type='submit'>add</button>
      </form>
      <h2>
        Diary Entries
      </h2>
      <ul>
        {diaries.map(de =>
          <div key={de.id}>
            <p><b>Date: {de.date}</b></p>
            <p>Weather: {de.weather}</p>
            <p>Visibility: {de.visibility}</p>
            <p>&nbsp;</p>
            {/* <p>Comment: {de.comment}</p> */}
          </div>
        )}
      </ul>
    </div>
  )
}
export default App;