import React, { Fragment } from "react";
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
const containerStyle = {
    width: '100%',
    height: '720px'
};

const center = {
    lat: 20.5937,
    lng: 78.9629
};
const App = () => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "Your Google API Key"  //need to define your google api key 
    })

    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);
        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])


    return <div style={{ position: 'relative' }}>
        {/* <div style={{ position: 'absolute', top: 10, left: 10, backgroundColor: 'orange', padding: 25, zIndex: 999 }}>
            <h1>Google Map In react App.</h1>
        </div> */}
        {isLoaded ? <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={7}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >
            { /* Child components, such as markers, info windows, etc. */}
            <></>
        </GoogleMap>
            : <></>
        }

    </div>


}

export default App;