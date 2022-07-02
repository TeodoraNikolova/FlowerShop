import React from 'react'
import MultiStep from '../components/MultiStep'
import FormContainer from '../components/FormContainer'
import { Row, Form,Col,Button } from 'react-bootstrap'

const WizardScreen = ({history}) => {

  const moveToFlowerCheck = () => {
    history.push(`/flowers`)
  }

  return (    
    <FormContainer>
        <Form>
      <MultiStep step1 step2 step3 />
      <Row className='justify-content-center mb-4'>
      <Col xs={12} md={2}>
      <h1>Цвят</h1>
      <Form.Check aria-label="option 1" label="бял" />
      <Form.Check aria-label="option 2" label="жълт" />
      <Form.Check aria-label="option 3" label="оранжев" />
      <Form.Check aria-label="option 4" label="червен" />
      <Form.Check aria-label="option 5" label="розов" />
      <Form.Check aria-label="option 6" label="син" />
      <Form.Check aria-label="option 7" label="лилав" />
</Col>
      </Row>
      <Row className='justify-content-center'>
      <Col md={2}>
      <Button 
      type='submit' 
      variant='dark'
      onClick={moveToFlowerCheck}
      >
          Напред
        </Button>
        </Col>
        </Row>
      </Form>
      </FormContainer>
  )
}

export default WizardScreen