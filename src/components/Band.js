import React, { Component } from 'react';
import { connect } from 'react-redux'

class Band extends Component {

  render() {
    return(

        <li>{this.props.band.name}<button onClick= {() => this.props.deleteBand(this.props.band.id)}>DELETE</button></li>
    );
  }
};


const mapDispatchToProps = dispatch => ({
  deleteBand: id => dispatch({ type: "DELETE_BAND", id })
})

export default connect(null, mapDispatchToProps)(Band);
