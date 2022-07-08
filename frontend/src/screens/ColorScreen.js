import React, { useState } from 'react'
import MultiStep from '../components/MultiStep'
import FormContainer from '../components/FormContainer'
import { Row, Form, Col, Button } from 'react-bootstrap'

const WizardScreen = ({ history }) => {
  const convertStringToArray = (input) => {
    let array = []
    if (input) {
      array = [...input.split(',')]
    }

    return array
  }

  const [selectedOptions, setSelectedOptions] = useState(
    convertStringToArray(localStorage.getItem('wizardColors'))
  )

  const submitHandler = (e) => {
    e.preventDefault()
    history.push('/flowers')
  }

  const onOptionClicked = (optionKey) => {
    let value = []
    let currentState = localStorage.getItem('wizardColors')
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

    localStorage.setItem('wizardColors', value.toString())
  }

  return (
    <FormContainer>
      <Form onSubmit={submitHandler}>
        <MultiStep step1 step2 step3 />
        <Row className='d-flex flex-col justify-content-center mb-4'>
          <Col xs={12} md={2}>
            <h1>Цвят</h1>
            <Form.Check
              aria-label='option 1'
              label='бял'
              onClick={() => onOptionClicked('white')}
              checked={selectedOptions.includes('white')}
            />
            <Form.Check
              aria-label='option 2'
              label='жълт'
              onClick={() => onOptionClicked('yellow')}
              checked={selectedOptions.includes('yellow')}
            />
            <Form.Check
              aria-label='option 3'
              label='оранжев'
              onClick={() => onOptionClicked('orange')}
              checked={selectedOptions.includes('orange')}
            />
            <Form.Check
              aria-label='option 4'
              label='червен'
              onClick={() => onOptionClicked('red')}
              checked={selectedOptions.includes('red')}
            />
            <Form.Check
              aria-label='option 5'
              label='розов'
              onClick={() => onOptionClicked('pink')}
              checked={selectedOptions.includes('pink')}
            />
            <Form.Check
              aria-label='option 6'
              label='син'
              onClick={() => onOptionClicked('blue')}
              checked={selectedOptions.includes('blue')}
            />
            <Form.Check
              aria-label='option 7'
              label='лилав'
              onClick={() => onOptionClicked('purple')}
              checked={selectedOptions.includes('purple')}
            />
          </Col>
        </Row>
        <Row className='justify-content-center'>
          <Col md={2}>
            <Button type='submit' variant='dark'>
              Напред
            </Button>
          </Col>
        </Row>
      </Form>
    </FormContainer>
  )
}

export default WizardScreen
