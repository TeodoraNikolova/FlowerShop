import React, { useState } from 'react'
import FormContainer from '../components/FormContainer'
import { Row, Form, Col, Button } from 'react-bootstrap'
import WizardComponent from '../components/Stepper'
import MultiStep from '../components/MultiStep'

const ArrangmentCheck = ({ history }) => {
  const onBackButtonClicked = (e) => {
    e.preventDefault()
    history.push('/flowers')
  }
  const convertStringToArray = (input) => {
    let array = []
    if (input) {
      array = [...input.split(',')]
    }

    return array
  }

  const [selectedOptions, setSelectedOptions] = useState(
    convertStringToArray(localStorage.getItem('wizardArrangment'))
  )
  const onOptionClicked = (optionKey) => {
    let value = []
    let currentState = localStorage.getItem('wizardArrangment')
    console.log('currentState', currentState)
    console.log('optionKey', optionKey)
    if (currentState) {
      value = [...currentState.split(',')]
      console.log(' VALUE >>', value)
      let index = value.findIndex((el) => el === optionKey)
      console.log('first,', index)
      if (index > -1) {
        value = value.splice(index, 1)
      } else {
        value.push(optionKey)
      }
    } else {
      value.push(optionKey)
    }

    setSelectedOptions(value)

    localStorage.setItem('wizardArrangment', value.toString())
  }

  const submitHandler = (e) => {
    e.preventDefault()

    //TODO: CLEAR PREVIOUS STATES
    history.push('/arrangments')
  }
  return (
    <FormContainer>
      <Form onSubmit={submitHandler}>
        <MultiStep step1 step2 step3 />
        <Row className='justify-content-center mb-4'>
          <Col xs={10} md={4}>
            <h1>Аранжировка</h1>
            <Row className='justify-content-center'>
              <Col md={6}>
                <Form.Check
                  aria-label='option 1'
                  label='кутия'
                  onClick={() => onOptionClicked('box')}
                  checked={selectedOptions.includes('box')}
                />
                <Form.Check
                  aria-label='option 2'
                  label='балон'
                  onClick={() => onOptionClicked('balloon')}
                  checked={selectedOptions.includes('balloon')}
                />
                <Form.Check
                  aria-label='option 3'
                  label='играчка'
                  onClick={() => onOptionClicked('toy')}
                  checked={selectedOptions.includes('toy')}
                />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className='justify-content-center'>
          <Col md={2}></Col>
        </Row>
        <Row className='justify-content-center'>
          <Col md={4} className='float-right'>
            <Button type='button' variant='dark' onClick={onBackButtonClicked}>
              Назад
            </Button>
            <Button type='submit' variant='dark'>
              Изведи
            </Button>
          </Col>
        </Row>
      </Form>
    </FormContainer>
  )
}

export default ArrangmentCheck
