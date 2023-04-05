import { useState, useEffect } from 'react';
import axios from 'axios';

interface Save {
  _id: string;
  test: string;
}

function App() {
  const [saves, setSaves] = useState<Save[]>([]);

  async function fetchSaves() {
    try {
      const response = await axios.get<Save[]>('/api/saves');
      setSaves(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchSaves();
  }, []);

  return (
    <div>
      <h1>List of Saves</h1>
      <ul>
        {saves.map((save) => (
          <li key={save._id}>{save.test}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;