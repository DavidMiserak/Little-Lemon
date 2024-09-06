import { useEffect } from 'react';
import { fetchAPI } from '../api';

const initialState = {
  availableTimes: [],
};

const timeReducer = (state = initialState, action) => {
  const selectedDate = action.payload;

  const newTimes = fetchAPI(selectedDate);

  switch (action.type) {
    case 'SET_AVAILABLE_TIMES':
      return {
        ...state,
        availableTimes: newTimes,
      };

    default:
      return state;
  }
};

export default timeReducer;
