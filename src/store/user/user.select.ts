import { createSelector } from 'reselect'
import { RootState } from '../store'
import { UserStateType } from './user.reducer'

export const selectUserReducer = (state: RootState): UserStateType => state.user


export const selectCurrentUser = createSelector(selectUserReducer, (user) => user.currentUser)
