export default function manageBand(state = {
  bands: []
}, action) {
  debugger
  console.log("action in red", action)
  console.log("state in red", state)
  switch (action.type) {
    case 'ADD_BAND':
      const band = {
      id: Math.random()*10000000000000000,
      bandName: action.bandName
    }
    return {...state, bands: [...state.bands, band]};

    case 'DELETE_BAND':
      const filtered = state.bands.filter(band => band.id !== action.band.id)
      return {...state, bands: filtered}

    default:
      return state;
  }
};
