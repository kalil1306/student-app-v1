import logo from './logo.svg';
import './App.css';
import data from './Data/data';
import { useEffect, useState } from 'react';
import Students from './Components/Students';

function App() {

  const [students, setStudents] = useState(data);

  useEffect(()=>{
    console.log(students)
  }, [])

  return (
    <div className="App">
      <Students
      students = {students}
      setStudents = {setStudents}
      />
    </div>
  );
}

export default App;
