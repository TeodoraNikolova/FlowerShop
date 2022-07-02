import React from 'react'
import MultiStep from '../components/MultiStep'
import FormContainer from '../components/FormContainer'
import { Row, Form,Col,Button } from 'react-bootstrap'

const FlowerCheck = ({history}) => {

  const moveToArrangmentCheck = () => {
    history.push(`/arrangments`)
  }

  return (    
    <FormContainer>
        <Form>
      <MultiStep step1 step2 step3 />
      <Row className='justify-content-center mb-4'>
      <Col md={2}>
      <h1>Цветя</h1>
      <Form.Check aria-label="option 1" label="рози" />
      <Form.Check aria-label="option 2" label="хризантеми" />
      <Form.Check aria-label="option 3" label="божури" />
      <Form.Check aria-label="option 4" label="лалета" />
</Col>
      </Row>
      <Row className='justify-content-center'>
      <Col md={2}>
      <Button 
      type='submit' 
      variant='dark'
      onClick={moveToArrangmentCheck}
      >
          Напред
        </Button>
        </Col>
        </Row>
      </Form>
      </FormContainer>
  )
}

export default FlowerCheck
