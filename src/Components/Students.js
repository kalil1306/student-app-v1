import React from 'react'

function Students({students, setStudents}) {
  return (
    <div className='student-list'>
        {students.map((stud, idx) => (
            <div className='student-card'>
            <h1>{stud.name}</h1>
            <p>Batch : <span>{stud.batch}</span></p>
            <p>Education : <span>{stud.education}</span></p>
            <p>Gender : <span>{stud.gender}</span></p>
            <p>Skills : <span>{stud.skills}</span></p>
            <button>Edit</button>
            <button>Delete</button>
            </div>
        ))}
        
    </div>
  )
}

export default Students;

/*

Delete the operation need to use filter :

const arr = [1, 2, 3, 4, 5]

const newArr = arr.filter((value, idx) => 
    value != 5
)

console.log(newArr)

o/p : 
[ 1, 2, 3, 4 ]

*/