export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      let band = {
        id: Math.random()*10000000000000000,
        name: action.name
      }
      let newBands = [...state.bands, band]
      let newState = {...state, bands: newBands}
      // newState.bands.push(band)
      return newState
    case "DELETE_BAND":
      console.log(action.id)
      return {bands: state.bands.filter(band=> band.id !== action.id)}
    default:
      return state;
  }
};
