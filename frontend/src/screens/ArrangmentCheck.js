import React from 'react'
import FormContainer from '../components/FormContainer'
import { Row, Form, Col } from 'react-bootstrap'
import WizardComponent from '../components/Stepper'

const ArrangmentCheck = () => {
  return (
    <FormContainer>
      <Form>
        <Row className='justify-content-center mb-4'>
          <Col xs={10} md={4}>
            <h1>Аранжировка</h1>
            <Row className='justify-content-center'>
              <Col md={6}>
                <Form.Check aria-label='option 1' label='кутия' />
                <Form.Check aria-label='option 2' label='чекмедже' />
                <Form.Check aria-label='option 3' label='играчка' />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className='justify-content-center'>
          <Col md={2}></Col>
        </Row>
      </Form>
    </FormContainer>
  )
}

export default ArrangmentCheck
