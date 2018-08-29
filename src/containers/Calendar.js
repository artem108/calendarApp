import React, { Component } from 'react';
import { connect } from 'react-redux'
import CalendarView from '../components/Calendar'
import CreateEvent from '../components/CreateEvent'
import { loadCelendar, addEvent, eventDelete } from '../modules/celendar'
import { reset } from 'redux-form';

class Calendar extends Component {
  state = {
      show: false,
      eventDay: null,
      value: ''
    }

  componentDidUpdate(prevProps) {
      if (prevProps.daysWithEvents.length < this.props.daysWithEvents.length) {
        this.setState({...this.state})
      }
    }

  componentDidMount() {
    this.props.dispatch(loadCelendar())
  }

  showModal = () => {
    this.setState({show: !this.state.show})
  }

  addEvent = ev => {
    const day = ev.target.id

    this.props.daysWithEvents.map(item => item[day]
      ? this.setState({value: item[day].event})
      : null)

    this.setState({show: true})
    this.setState({eventDay: day})
  }

  createEvent = () => {
    this.showModal()
    const { eventDay } = this.state
    const { eventname, dispatch } = this.props
    const name = eventname.values

      dispatch(addEvent({[eventDay]:name}))
      dispatch(reset('event'));
  }

  deleteEvent = day => {
    this.props.dispatch(eventDelete(day))
    this.showModal()
    this.setState({value: ''})
  }

  render()  {
    const {
      month,
      days,
      months,
      dayInMonths,
      daysWithEvents,
      logout
    } = this.props

    return (
      <section>
        <CalendarView
          logout={this.props.logout}
          month={month}
          days={days}
          months={months}
          dayInMonths={dayInMonths}
          addEvent={this.addEvent}
          daysWithEvents={daysWithEvents}
          logout={logout}
        />
        <CreateEvent
          show={this.state.show}
          showModal={this.showModal}
          createEvent={this.createEvent}
          value={this.state.value}
          eventDay={this.state.eventDay}
          deleteEvent={this.deleteEvent}
        />
      </section>
    )
  }
}

const mapStateToProps = state => {
  return {
    month: state.celendar.month,
    days: state.celendar.days,
    months: state.celendar.months,
    dayInMonths: state.celendar.dayInMonths,
    eventname: state.form.event,
    daysWithEvents: state.celendar.daysWithEvents
  }
}

export default connect(mapStateToProps)(Calendar)
