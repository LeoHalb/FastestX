import {ExpoLeaflet} from 'expo-leaflet'
import {polygonCenter} from "leaflet/src/geometry/PolyUtil";
import {EPSG3857} from "leaflet/src/geo/crs/CRS.EPSG3857";
import {ActivityIndicator, Pressable} from 'react-native'

export const ActivityMap = (props) => {

    const center = polygonCenter(props.positions.latlng, EPSG3857)

    const mapLayers = [{
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>',
        baseLayerIsChecked: true,
        baseLayerName: 'OpenStreetMap',
        layerType: 'TileLayer',
        url:
            'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    }]

    const mapShapes = [
        {
            shapeType: 'polyline',
            color: "#123123",
            id: "1",
            positions: props.positions.latlng.map(el => ({lat: el[0], lng: el[1]}))
        },
        {
            shapeType: 'polyline',
            color: "#fc5200",
            id: "2",
            positions: props.positions.fastestLatlng.map(el => ({lat: el[0], lng: el[1]}))
        }
    ]

    const mapOptions = {
        zoomControl: false,
    }

    const initialPosition = {
        lat: center.lat,
        lng: center.lng,
    }

    return (
        <>
            <link rel="stylesheet" href="https://unpkg.com/leaflet@1.0.3/dist/leaflet.css"/>
            <Pressable onPressOut={e => console.log(e)} style={{width: "100%", height: 260}}>
                <ExpoLeaflet
                    loadingIndicator={() => <ActivityIndicator/>}
                    onMessage={() => {
                    }}
                    mapCenterPosition={initialPosition}
                    mapLayers={mapLayers}
                    mapOptions={mapOptions}
                    mapShapes={mapShapes}
                />
            </Pressable>

        </>
    )

}