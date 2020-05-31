import { createFeatureSelector, createSelector } from '@ngrx/store';
import { adapter, userFeatureKey, UserState } from '../reducers';


// Lookup the 'User' feature state managed by NgRx
const getUserState = createFeatureSelector<UserState>(userFeatureKey);

// get the selectors
const { selectIds, selectAll, selectTotal } = adapter.getSelectors();

// select the array of User ids
export const selectUserIds = createSelector(
  getUserState,
  selectIds
);

// select the array of Users
export const selectAllUsers = createSelector(
  getUserState,
  selectAll
);

// select the total User count
export const selectUserCount = createSelector(
  getUserState,
  selectTotal
);

// select entity loaded flag
export const selectUserLoaded = createSelector(
  getUserState,
  state => state.loaded
);

// select entity error
export const selectError = createSelector(
  getUserState,
  state => state.error
);
