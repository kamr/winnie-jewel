import React from 'react';

import SERVER_URL from '../../Constants/server';

class PreviewImage extends React.Component {
  render() {
    return (
      <img
        src={SERVER_URL + '/images/test.png'}
        alt="img"
        width="260px"
        height="260px"
      />
    );
  }
}

export default PreviewImage;
