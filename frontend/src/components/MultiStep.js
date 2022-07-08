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
              <i
                class='fa-solid fa-palette'
                style={{ color: 'pink', fontSize: '40px' }}
              ></i>
              {/* <div styles={stepStyles.stepHeader}>1</div> */}
            </Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Цвят</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        <Nav.Link disabled>
          <i
            class='fa-solid fa-arrow-right-long'
            style={{ fontSize: '40px' }}
          ></i>
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        {step2 ? (
          <LinkContainer to='/flowers'>
            <Nav.Link>
              <i
                class='fa-solid fa-spa'
                style={{ color: 'pink', fontSize: '40px' }}
              ></i>
            </Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Цветя</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        <Nav.Link disabled>
          <i
            class='fa-solid fa-arrow-right-long'
            style={{ fontSize: '40px' }}
          ></i>
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        {step3 ? (
          <LinkContainer to='/arrangments'>
            <Nav.Link>
              <i
                class='fa-solid fa-circle-plus'
                style={{ color: 'pink', fontSize: '40px' }}
              ></i>
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
