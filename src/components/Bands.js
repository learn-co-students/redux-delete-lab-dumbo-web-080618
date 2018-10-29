import React from 'react';
import Band from './Band'

const Bands = ({bands, deleteBand}) => {

  const bandList = bands.map(band => <Band key={band.id} band={band} deleteBand={deleteBand} />)

  return (
    <ul>
      {bandList}
    </ul>
  );

};

export default Bands;
