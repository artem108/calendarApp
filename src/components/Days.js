import React from 'react';

const Days = ({ days, names, num, dayInMonths, addEvent, daysWithEvents }) => {
  return (
     <tr>
      { days.map((day, i) => {
        let classname = ''
        daysWithEvents && daysWithEvents.map(event => event[num + i] ? classname = 'bg-success' : null)

        return(
         <td key={i} className={classname} onClick={addEvent} id={names ? null : num + i}>
           { names ? day : num + i <= dayInMonths ? num + i : null }
         </td>
       )}
     )}
    </tr>
  )
}

export default Days
