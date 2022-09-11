import { AdditionalInfoType, UserDataType } from '../../utils/filebase.util'
import { Action, ActionWithPayload, createAction, withMatcher } from '../../utils/reducer/reducer.utils'
import { USER_ACTION_TYPES } from './user.type'

export type SetCurrentUserType = ActionWithPayload<USER_ACTION_TYPES.SET_CURRENT_USER, UserDataType>
export type CheckUserSession = Action<USER_ACTION_TYPES.CHECK_UER_SESSION>
export type GoogleSignInStart = Action<USER_ACTION_TYPES.COOGLE_SIGN_IN_START>
export type EmailSignInStart = ActionWithPayload<USER_ACTION_TYPES.EMAIL_SIGN_IN_START, { email: string; password: string }>
export type SignInSuccess = ActionWithPayload<USER_ACTION_TYPES.SIGN_IN_SUCCESS, UserDataType>
export type SignInFail = ActionWithPayload<USER_ACTION_TYPES.SIGN_IN_FAIL, Error>
export type SignUpStart = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_UP_START,
  { email: string; password: string; displayName: string }
>
export type SignUpSuccess = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_UP_SUCCESS,
  { user: UserDataType; additionalDetail: AdditionalInfoType }
>
export type SignUpFail = ActionWithPayload<USER_ACTION_TYPES.SIGN_UP_FAIL, Error>
export type SignOutStart = Action<USER_ACTION_TYPES.SIGN_OUT_START>
export type SignOutSuccess = Action<USER_ACTION_TYPES.SIGN_OUT_SUCCESS>
export type SignOutFail = ActionWithPayload<USER_ACTION_TYPES.SIGN_OUT_FIAL, Error>

// 登录相关
export const setCurrentUser = withMatcher(
  (user: UserDataType): SetCurrentUserType => createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user),
)

export const checkUserSession = withMatcher((): CheckUserSession => createAction(USER_ACTION_TYPES.CHECK_UER_SESSION))

export const googleSignInStart = withMatcher((): GoogleSignInStart => createAction(USER_ACTION_TYPES.COOGLE_SIGN_IN_START))

export const emailSignInStart = withMatcher(
  (email: string, password: string): EmailSignInStart =>
    createAction(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, { email, password }),
)

export const signInSuccess = withMatcher(
  (user: UserDataType): SignInSuccess => createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS, user),
)

export const signInFail = withMatcher((error: Error): SignInFail => createAction(USER_ACTION_TYPES.SIGN_IN_FAIL, error))

// 注册相关
export const signUpStart = withMatcher(
  (email: string, password: string, displayName: string): SignUpStart =>
    createAction(USER_ACTION_TYPES.SIGN_UP_START, { email, password, displayName }),
)

export const signUpSuccess = withMatcher(
  (user: UserDataType, additionalDetail: AdditionalInfoType): SignUpSuccess =>
    createAction(USER_ACTION_TYPES.SIGN_UP_SUCCESS, { user, additionalDetail }),
)

export const signUpFail = withMatcher((error: Error): SignUpFail => createAction(USER_ACTION_TYPES.SIGN_UP_FAIL, error))

// 注销
export const signOutStart = withMatcher((): SignOutStart => createAction(USER_ACTION_TYPES.SIGN_OUT_START))
export const signOutSuccess = withMatcher((): SignOutSuccess => createAction(USER_ACTION_TYPES.SIGN_OUT_SUCCESS))
export const signOutFail = withMatcher((error: Error): SignOutFail => createAction(USER_ACTION_TYPES.SIGN_OUT_FIAL, error))
