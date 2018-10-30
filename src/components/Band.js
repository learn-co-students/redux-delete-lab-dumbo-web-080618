import React, { Component } from 'react';
import {connect} from 'react-redux';

class Band extends Component {

  render() {
    console.log("band props", this.props)
    return(
      <div>
        <ul>
        <li>{this.props.bandInfo.bandName}</li>
      </ul>
      <button onClick={() => this.props.deleteBand(this.props.bandInfo)}> DELETE
      </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteBand: (band) => {
      dispatch({type: "DELETE_BAND", band});
    }
  };
};


export default connect(null, mapDispatchToProps)(Band);
