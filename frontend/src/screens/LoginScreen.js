import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { login } from '../actions/userActions'
import uiImg from '../images/Computer login-bro.png'
import ReCAPTCHA from 'react-google-recaptcha'

const LoginScreen = ({ location, history }) => {
  const [recaptcha, setRecaptcha] = useState(null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const reCaptchaRef = React.createRef()

  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInfo } = userLogin

  const redirect = location.search ? location.search.split('=')[1] : '/'

  useEffect(() => {
    if (userInfo) {
      history.push(redirect)
    }
  }, [history, userInfo, redirect])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(login(email, password))
  }

  const handleChange = (value) => {
    console.log(value)
    setRecaptcha(value)
  }

  return (
    <Row className='justify-content-md-left'>
      <Col lg={4} md={6} sm={12}>
        <h1>Вход</h1>
        {error && <Message variant='danger'>{error}</Message>}
        {loading && <Loader />}
        <Form onSubmit={submitHandler}>
          <Form.Group controlId='email'>
            <Form.Label>Имейл</Form.Label>
            <Form.Control
              type='email'
              placeholder=''
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId='password'>
            <Form.Label>Парола</Form.Label>
            <Form.Control
              type='password'
              placeholder=''
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <div className='d-flex align-items-center my-2'>
            <ReCAPTCHA
              ref={reCaptchaRef}
              sitekey='6Ldct7MgAAAAAAQzRCgcRXZ2nWYdIbROFA-46OUv'
              onChange={handleChange}
            />
          </div>

          <Button type='submit' variant='dark' disabled={recaptcha === null}>
            Вход
          </Button>
        </Form>

        <Row className='py-3'>
          <Col>
            Нямаш акаунт?{' '}
            <Link
              to={redirect ? `/register?redirect=${redirect}` : '/register'}
            >
              Регистрация
            </Link>
          </Col>
        </Row>
      </Col>
      <Col lg={8} md={6} sm={12}>
        <img className='w-75' src={uiImg} alt='' />
      </Col>
    </Row>
  )
}

export default LoginScreen
