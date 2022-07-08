import axios from 'axios'
import {
  WIZARD_LIST_FAIL,
  WIZARD_LIST_SUCCESS,
  WIZARD_LIST_REQUEST,
} from '../constants/wizardConstants'

export const listWizards = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: WIZARD_LIST_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.get(`/api/wizards`, config)

    dispatch({
      type: WIZARD_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: WIZARD_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
