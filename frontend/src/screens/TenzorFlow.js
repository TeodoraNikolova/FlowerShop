import React from 'react'
import { Form,Col,Row,Button } from 'react-bootstrap'

const TenzorFlow = () => {
  return (
    <Form>
        <Row className="justify-content-center align-items-center">
    <Row className='justify-content-center  xs={1} md={2}'>
    <Col md={3}>
    <Form.Group controlId="formFileSm" className="mb-3">
    <Form.Control type="file" size="sm" />
  </Form.Group>
  </Col>
  </Row>
  <Row className='justify-content-center'>
      <Col md={1}>
      <Button 
      type='submit' 
      variant='dark'
      >
          Търси
        </Button>
        </Col>
        </Row>
        </Row>
  </Form>
  )
}

export default TenzorFlow