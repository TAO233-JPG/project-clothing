import { createSelector } from 'reselect'
import { UserStateType } from './user.reducer'

export const selectUserReducer = (state): UserStateType => state.user


export const selectCurrentUser = createSelector(selectUserReducer, (user) => user.currentUser)
