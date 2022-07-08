import React, { useState } from 'react'
import MultiStep from '../components/MultiStep'
import FormContainer from '../components/FormContainer'
import { Row, Form, Col, Button } from 'react-bootstrap'
import WizardComponent from '../components/Stepper'

const FlowerCheck = ({ history }) => {
  const convertStringToArray = (input) => {
    let array = []
    if (input) {
      array = [...input.split(',')]
    }

    return array
  }

  const [selectedOptions, setSelectedOptions] = useState(
    convertStringToArray(localStorage.getItem('wizardFlowers'))
  )
  const onOptionClicked = (optionKey) => {
    let value = []
    let currentState = localStorage.getItem('wizardFlowers')
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

    localStorage.setItem('wizardFlowers', value.toString())
  }

  const submitHandler = (e) => {
    e.preventDefault()

    history.push('/arrangments')
  }

  const onBackButtonClicked = (e) => {
    e.preventDefault()
    history.push('/wizard')
  }

  return (
    <FormContainer>
      <Form onSubmit={submitHandler}>
        <MultiStep step1 step2 step3 />
        <WizardComponent />
        <Row className='justify-content-center mb-4'>
          <Col md={2}>
            <h1>Цветя</h1>
            <Form.Check
              aria-label='option 1'
              label='рози'
              onClick={() => onOptionClicked('rose')}
              checked={selectedOptions.includes('rose')}
            />
            <Form.Check
              aria-label='option 2'
              label='хризантеми'
              onClick={() => onOptionClicked('chrysanthemums')}
              checked={selectedOptions.includes('chrysanthemums')}
            />
            <Form.Check
              aria-label='option 3'
              label='божури'
              onClick={() => onOptionClicked('peonies')}
              checked={selectedOptions.includes('peonies')}
            />
            <Form.Check
              aria-label='option 4'
              label='лалета'
              onClick={() => onOptionClicked('tulip')}
              checked={selectedOptions.includes('tulip')}
            />
          </Col>
        </Row>
        <Row className='justify-content-center'>
          <Col md={4} className='float-right'>
            <Button type='button' variant='dark' onClick={onBackButtonClicked}>
              Назад
            </Button>

            <Button type='button' variant='dark' onClick={submitHandler}>
              Напред
            </Button>
          </Col>
        </Row>
      </Form>
    </FormContainer>
  )
}

export default FlowerCheck
