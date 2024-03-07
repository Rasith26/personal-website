import React from 'react'
import '../../css/Contact.css'
import Card from '../Contact/Card.js'
import Message from '../Contact/Message.js'


export const Contact = () => {
  return (
    <div class="container-fluid con-f d-flex flex-column min-vh-100 p-0 mb-0">
      <Card />
      <Message />
    </div>
  )
}
