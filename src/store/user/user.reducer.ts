import { AnyAction } from 'redux'
import { UserDataType } from '../../utils/filebase.util'
import { signInFail, signInSuccess, signOutFail, signOutSuccess } from './user.action'

export type UserStateType = {
  readonly currentUser: null | UserDataType
  readonly error: Error | null
}

const INITIAL_STATE: UserStateType = {
  currentUser: null,
  error: null,
}

const UserReducer = (state = INITIAL_STATE, action: AnyAction): UserStateType => {
  if (signInSuccess.match(action)) {
    return {
      ...state,
      currentUser: action.payload,
    }
  }

  if (signOutSuccess.match(action)) {
    return {
      ...state,
      currentUser: null,
    }
  }

  if (signInFail.match(action) || signOutFail.match(action) || signOutFail.match(action)) {
    return {
      ...state,
      error: action.payload,
    }
  }

  return state
}

export default UserReducer
