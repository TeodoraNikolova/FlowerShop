import React from 'react'
import MultiStep from '../components/MultiStep'
import FormContainer from '../components/FormContainer'
import { Row, Form,Col,Button } from 'react-bootstrap'

const ArrangmentCheck = () => {

  return (    
    <FormContainer>
        <Form>
      <MultiStep step1 step2 step3 />
      <Row className='justify-content-center mb-4'>
      <Col xs={10} md={4}>
      <h1>Аранжировка</h1>
      <Row className='justify-content-center'>
      <Col md={6}>
      <Form.Check aria-label="option 1" label="кутия" />
      <Form.Check aria-label="option 2" label="чекмедже" />
      <Form.Check aria-label="option 3" label="играчка" />
      </Col>
        </Row>
</Col>
      </Row>
      <Row className='justify-content-center'>
      <Col md={2}>
      <Button 
      type='submit' 
      variant='dark'>
          Създай
        </Button>
        </Col>
        </Row>
      </Form>
      </FormContainer>
  )
}

export default ArrangmentCheck