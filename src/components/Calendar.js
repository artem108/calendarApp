import React from 'react';
import Days from './Days'
import { getDayInMonths } from '../helpers'

const CalendarView = ({
    logout,
    month,
    days,
    months,
    dayInMonths,
    addEvent,
    daysWithEvents
  }) => {

  const dayInMonthsArr = getDayInMonths(dayInMonths)

  return (
    <section className="home">
    {months[month]}
      <table className="table table-bordered">
         <thead>
            <Days days={days} names={true}/>
         </thead>
        <tbody>
            {
              dayInMonthsArr.map((day, index) => {
                if (index%7 === 0)
                  return (
                    <Days
                      key={index}
                      days={days}
                      names={false}
                      num={day}
                      dayInMonths={dayInMonths}
                      addEvent={addEvent}
                      daysWithEvents={daysWithEvents}
                    />
                )})
              }
          </tbody>
        </table>
      <button onClick={logout} className="btn btn-primary">Logout</button>
    </section>
  )
}

export default CalendarView
