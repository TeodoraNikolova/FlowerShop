import {
  WIZARD_LIST_SUCCESS,
  WIZARD_LIST_FAIL,
  WIZARD_LIST_REQUEST,
} from '../constants/wizardConstants'

export const wizardListReducer = (state = { wizards: [] }, action) => {
  switch (action.type) {
    case WIZARD_LIST_REQUEST:
      return {
        loading: true,
      }
    case WIZARD_LIST_SUCCESS:
      return {
        loading: false,
        orders: action.payload,
      }
    case WIZARD_LIST_FAIL:
      return {
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}
