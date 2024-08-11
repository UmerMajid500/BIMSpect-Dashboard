import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { DataGrid } from '@mui/x-data-grid';
import userColumns from './utils/userTableColumns';

function App() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const usersList = await axios.get('http://127.0.0.1:5000/api/users');
      setUsers(usersList?.data)
    } catch (error) {
      console.log("Error: ", error)
    }
  }

  return (
    <div className="App">
      <div className='title'>
        BIMSpect Dashboard
      </div>
      <div className='table-section'>
        <DataGrid
          rows={users}
          columns={userColumns}
        />
      </div>
    </div>
  );
}

export default App;
