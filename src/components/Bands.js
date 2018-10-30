import React, {Component} from 'react'
import Band from './Band'
import { connect } from 'react-redux'

class Bands extends Component {
  render(){
    return(
      <ul>
        {this.props.bands.map(band => <Band key={band.id} band={band}/>)}
      </ul>
    )
  }
}

const mapStateToProps = (state) => {
  return {bands: state.bands}
}

export default connect(mapStateToProps)(Bands)
