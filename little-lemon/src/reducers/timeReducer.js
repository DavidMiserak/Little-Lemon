const initialState = {
  availableTimes: [],
};

const timeReducer = (state = initialState, action) => {
  const selectedDate = action.payload;
  const dayOfWeek = new Date(selectedDate).getDay();
  const isWeekend = dayOfWeek === 5 || dayOfWeek === 6;

  const times = isWeekend
    ? ['5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM', '10:00 PM']
    : ['6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM'];

  switch (action.type) {
    case 'SET_AVAILABLE_TIMES':
      return {
        ...state,
        availableTimes: times,
      };

    default:
      return state;
  }
};

export default timeReducer;
