import React from 'react'
import { Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const MultiStep = ({ step1, step2, step3 }) => {
  return (
    <Nav className='justify-content-center mb-4'>
      <Nav.Item>
        {step1 ? (
          <LinkContainer to='/wizard'>
            <Nav.Link>
              <i className='fa-solid fa-1'></i>
            </Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Цвят</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        <Nav.Link disabled>
          <i class='fa-solid fa-arrow-right-long'></i>
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        {step2 ? (
          <LinkContainer to='/flowers'>
            <Nav.Link>
              <i class='fa-solid fa-circle-1'>2</i>
            </Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Цветя</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        <Nav.Link disabled>
          <i class='fa-solid fa-arrow-right-long'></i>
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        {step3 ? (
          <LinkContainer to='/arrangments'>
            <Nav.Link>
              <i class='fa-solid fa-circle-1'>3</i>
            </Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Аранжировка</Nav.Link>
        )}
      </Nav.Item>
    </Nav>
  )
}

export default MultiStep
