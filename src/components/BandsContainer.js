import React, { Component } from 'react'
import BandInput from './BandInput';
import Band from './Band'

import { connect } from 'react-redux'

class BandsContainer extends Component {
  render() {
    return (
      <div>
        <BandInput addBand={this.props.addBand}/>
        {this.props.bands.map(band => <Band bandInfo={band}/>)}
      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => ({ bands })

const mapDispatchToProps = dispatch => ({
  addBand: bandName => dispatch({ type: "ADD_BAND", bandName })
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
