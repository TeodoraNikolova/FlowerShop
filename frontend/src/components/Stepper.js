import React, { useEffect } from 'react'
import { useState } from 'react'
import { Stepper, Step } from 'react-form-stepper'
import FlowerCheck from '../screens/FlowerCheck'
import WizardScreen from '../screens/ColorScreen'
import ArrangmentCheck from '../screens/ArrangmentCheck'

const WizardComponent = () => {
  const [activeStep, setActiveStep] = useState(0)

  const onBackButtonClicked = () => {
    if (activeStep === 0) return
    setActiveStep(activeStep - 1)
  }

  const onForwardButtonClicked = () => {
    if (activeStep === 2) return
    setActiveStep(activeStep + 1)
  }

  return (
    <>
      <Stepper activeStep={activeStep}>
        <Step label='Цвят' />
        <Step label='Вид цветя' />
        <Step label='Аранжировка' />
      </Stepper>
      <div>{activeStep === 0 ? <WizardScreen /> : null}</div>
      <div>{activeStep === 1 ? <FlowerCheck /> : null}</div>
      <div>{activeStep === 2 ? <ArrangmentCheck /> : null}</div>
      <div>
        <button
          type='button'
          className='btn btn-primary'
          onClick={onBackButtonClicked}
          disabled={activeStep === 0}
        >
          Назад
        </button>
        <button
          type='button'
          className='btn btn-primary'
          onClick={onForwardButtonClicked}
          disabled={activeStep === 2}
        >
          Напред
        </button>
      </div>
    </>
  )
}

export default WizardComponent
