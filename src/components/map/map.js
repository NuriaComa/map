import React from 'react'
import GoogleMapReact from 'google-map-react'
import {connect} from 'react-redux';
import './map.css'
import {selectActiveWord} from "../../store/search/reducer";
import LocationPin from '../locationPin/locationPin'

const Map = ({ search, zoomLevel }) => (
    <div className="map">
        <div className="google-map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyCkc5rkhIYAJATZWdUv72r0MfL_kFW1MmQ' }}
                defaultCenter={{lat: 41.38879, lng: 2.15899}}
                center={search[0]}
                defaultZoom={zoomLevel}
            >
                {(Object.keys(search).length > 0) ?
                    search.map((item, index) => (
                        <LocationPin
                            key = {index}
                            lat={item.lat}
                            lng={item.lng}
                        />
                        )
                    )
                 : undefined}

            </GoogleMapReact>
        </div>
    </div>
);

function mapStateToProps(state) {
    return {
        search: selectActiveWord(state)
    }
}


export default connect(mapStateToProps)(Map);
