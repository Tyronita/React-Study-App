import React from 'react'
import Subject from './Subject'
const Subjects = ({subjects, onDelete}) => {
    
    return (
      <div>
          {subjects.map((subject) => (
            <div>
                <Subject key={subject.id} subject={subject} onDelete={onDelete} />
            </div>
          ))}
      </div>
    )
  }
  
  export default Subjects