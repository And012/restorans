import { YMaps, Map } from "react-yandex-maps";

import PlacemarkList from "./placemark-list";

const MapComponent = () => {
    return (
        <YMaps className="map">
            <Map
                height="calc(100vh - 48px)"
                width="50%"
                defaultState={{
                    center: [55.75, 37.57],
                    zoom: 3,
                }}
            >
                <PlacemarkList />
            </Map>
        </YMaps>
    );
};

export default MapComponent;
