/**
 * Created by thoriampas on 3/27/2018.
 */
import parserWKT from 'wellknown'
export const geometriesFromTrail = (trail) =>{
    const geometries = trail.map(data => {

            return {
                ...data,
                coordinates: parserWKT(data.node['Leaflet _trailstobechecked'] ?
                    data.node['Leaflet _trailstobechecked'] :
                    data.node.Leaflet_trails).geometries
            }
        }
    )
    const trailPolylines = geometries.map(trail => {
        return trail.coordinates.filter(tr => tr.type === 'LineString').map(linestring => {
            return linestring.coordinates.map(co => {
                return {latitude: co[1], longitude: co[0]}
            })
        })[0]
    })
    const trailPoints = geometries.map(trail => {
        return {
            ...trail, ...{
                coordinates: trail.coordinates.filter(tr => tr.type === 'Point').map(point => {
                    return {latitude: point.coordinates[1], longitude: point.coordinates[0]}
                })
            }
        }
    })
    return {points:trailPoints,polylines:trailPolylines}
}