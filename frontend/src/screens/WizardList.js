import React, { useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { listWizards } from '../actions/wizardActions'

const WizardList = ({ history }) => {
  const dispatch = useDispatch()

  const wizardList = useSelector((state) => state.orderList)
  const { loading, error, wizards } = wizardList

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listWizards())
    } else {
      history.push('/wizard')
    }
  }, [dispatch, history, userInfo])

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='dark'>{error}</Message>
      ) : (
        <Table striped bordered hover responsive className='table-sm'>
          <thead>
            <tr>
              <th>Код на потребителя</th>
              <th>Цвят</th>
              <th>Цветя</th>
              <th>Аранжировка</th>
            </tr>
          </thead>
          <tbody>
            {wizards.map((wizard) => (
              <tr key={wizard._id}>
                <td>{wizard._id}</td>
                <td>{wizard.createdAt.substring(0, 10)}</td>
                <td>{wizard.totalPrice}лв</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  )
}

export default WizardList
