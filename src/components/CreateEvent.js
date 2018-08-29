import React from 'react';
import { Modal } from 'react-bootstrap'
import { Field, reduxForm } from 'redux-form'

const CreateEvent = ({show, showModal, createEvent, value, deleteEvent, eventDay}) => {
  const deletes = () => deleteEvent(eventDay)
  return (
    <Modal show={show}>
      <Modal.Header className="modalHeader">
          <h3 >Add event</h3>
          <button onClick={showModal} className="btn btn-danger">X</button>
      </Modal.Header>
      <Modal.Body className="modalFooter">
        <section className="listEvents">
          {value &&  <div><h3>Current event: {value}</h3></div>}
          {value && <button onClick={deletes} className="btn btn-danger">Delete</button>}
        </section>
        <Field name="event" type="text" component={'input'} className={'form-control'} value={value}/>
        <button onClick={createEvent} className="btn btn-primary">Add</button>
      </Modal.Body>
    </Modal>
  )
}

export default reduxForm({
    form: 'event'
})(CreateEvent)
