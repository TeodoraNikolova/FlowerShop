import React from 'react'
import FormContainer from '../components/FormContainer'
import { Row, Form, Col } from 'react-bootstrap'
import WizardComponent from '../components/Stepper'

const FlowerCheck = () => {
  return (
    <FormContainer>
      <Form>
        <WizardComponent />
        <Row className='justify-content-center mb-4'>
          <Col md={2}>
            <h1>Цветя</h1>
            <Form.Check aria-label='option 1' label='рози' />
            <Form.Check aria-label='option 2' label='хризантеми' />
            <Form.Check aria-label='option 3' label='божури' />
            <Form.Check aria-label='option 4' label='лалета' />
          </Col>
        </Row>
      </Form>
    </FormContainer>
  )
}

export default FlowerCheck
