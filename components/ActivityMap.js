import {ExpoLeaflet} from 'expo-leaflet'
import {centroid} from "leaflet/src/geometry/PolyUtil";
import {EPSG3857} from "leaflet/src/geo/crs/CRS.EPSG3857";
import {ActivityIndicator, Pressable} from 'react-native'
import "leaflet/dist/leaflet.css"
import {Polyline} from "leaflet/src/layer";
import {Map} from "leaflet/src/map";

//wtf https://stackoverflow.com/questions/34215394/leaflet-finding-the-zoom-level-of-bounds-without-using-a-map-instance
Map.include({
    getSize: function () {
        return new L.Point(260, 260);
    }
})

export const ActivityMap = (props) => {

    //const [bounds, setBounds] = useState([[new Polyline(props.positions.latlng).getBounds()._southWest.lat, new Polyline(props.positions.latlng).getBounds()._southWest.lng], [new Polyline(props.positions.latlng).getBounds()._northEast.lat, new Polyline(props.positions.latlng).getBounds()._northEast.lng]])
    const zoom = new Map(document.createElement("div"), {'center': [0, 0], 'zoom': 0}).fitBounds(new Polyline(props.positions.latlng).getBounds()).getZoom()
    const center = centroid(props.positions.latlng, EPSG3857)

    const mapLayers = [{
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        baseLayerIsChecked: true,
        baseLayerName: 'OpenStreetMap',
        //bounds: bounds,
        layerType: 'TileLayer',
        url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    }]

    const mapShapes = [
        {
            shapeType: 'polyline',
            color: "#123123",
            id: "1",
            positions: props.positions.latlng.map(el => ({lat: el[0], lng: el[1]}))
        }
    ]

    if (props.positions.fastestLatlng.length > 0) {
        mapShapes.push({
            shapeType: 'polyline',
            color: "#fc5200",
            id: "2",
            positions: props.positions.fastestLatlng.map(el => ({lat: el[0], lng: el[1]}))
        })
    }

    const mapOptions = {
        zoomControl: false,
        minZoom: 1,
        //maxBounds: bounds,
        //maxBoundsViscosity: 1
    }

    const initialPosition = {
        lat: center.lat,
        lng: center.lng,
    }

    return (
        <Pressable style={{width: "100%", height: "260px"}}>
            <ExpoLeaflet
                loadingIndicator={() => <ActivityIndicator/>}
                onMessage={() => {}}
                mapCenterPosition={initialPosition}
                mapLayers={mapLayers}
                mapOptions={mapOptions}
                mapShapes={mapShapes}
                zoom={zoom <= 18 ? zoom : 18}
            />
        </Pressable>
    )
}