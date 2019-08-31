import { createSelector } from 'reselect'

const selectUser = state => state.user;

export const selectCurrentuser = createSelector(
    [selectUser],
    user => user.currentUser
)

export const selectSignUp = createSelector(
    [selectUser],
    user => user.signUp
)