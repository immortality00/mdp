import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => (
  <a target="_blank" href="https://goo.gl/maps/YkuU7hoRbJBRJe2y8"><div style={{
    color: 'white', 
    background: 'grey',
    padding: '15px 10px',
    display: 'inline-flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '100%',
    transform: 'translate(-50%, -50%)'
  }}>
    {text}
  </div></a>
);

class GMap extends Component {
  static defaultProps = {
    center: {
      lat: 25.184853,
      lng: 55.276924
    },
    zoom: 15
  };
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '70vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_KEY}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={25.184853}
            lng={55.276924}
            text={"Our Office"}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default GMap;