import React from 'react';
import {Map, GoogleApiWrapper} from 'google-maps-react';

const mapStyles = {
    width: '100%',
    height: '50vh'
};

export class MapContainer extends React.Component {
    render() {
        return (
            <Map
                google={this.props.google}
                zoom={14}
                style={mapStyles}
                initialCenter={{
                    lat: this.props.coordinates.lat,
                    lng: this.props.coordinates.long
                }}
            />
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDxecS6-4llq9SxzrpLxwCNUuMt01eN3iI'
})(MapContainer);