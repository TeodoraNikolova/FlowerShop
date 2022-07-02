import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { register } from '../actions/userActions'
import uiImg from '../images/Sign up-amico (3).png';

const RegisterScreen = ({ location, history }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState(null)

  const dispatch = useDispatch()

  const userRegister = useSelector((state) => state.userRegister)
  const { loading, error, userInfo } = userRegister

  const redirect = location.search ? location.search.split('=')[1] : '/'

  useEffect(() => {
    if (userInfo) {
      history.push(redirect)
    }
  }, [history, userInfo, redirect])

  const submitHandler = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setMessage('Паролите не съвпадат!')
    } else {
      dispatch(register( email, password))
    }
  }

  return (
    <Row className='justify-content-md-left'>
    <Col lg={4} md={6} sm={12}>
      <h1>Регистрация</h1>
      {message && <Message variant='danger'>{message}</Message>}
      {error && <Message variant='danger'>{error}</Message>}
      {loading && <Loader />}
      <Form onSubmit={submitHandler}>
      <Form.Group controlId='email'>
          <Form.Label>Имейл:</Form.Label>
          <Form.Control
            type='email'
            placeholder=''
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='password'>
          <Form.Label>Парола:</Form.Label>
          <Form.Control
            type='password'
            placeholder=''
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='confirmPassword'>
          <Form.Label>Повторете паролата:</Form.Label>
          <Form.Control
            type='password'
            placeholder=''
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type='submit' variant='dark'>
          Регистрация
        </Button>
      </Form>

      <Row className='py-3'>
        <Col>
          Вече имаш акаунт?{' '}
          <Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>
            Вход
          </Link>
        </Col>
      </Row>
      </Col>
      <Col lg={8} md={6} sm={12}>
                        <img className="w-75" src={uiImg} alt=""/>
                    </Col>
      </Row>
  )
}

export default RegisterScreen