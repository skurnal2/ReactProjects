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
                zoom={this.props.zoom}                 
                style={mapStyles}
                initialCenter={{
                    lat: 53.5461,
                    lng: -113.4938
                }}                
                center={{
                    lat: this.props.coordinates.lat,
                    lng: this.props.coordinates.long
                }}                
            />
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ''
})(MapContainer);