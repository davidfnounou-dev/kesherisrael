import { ComposableMap, Geographies, Geography, Marker, Line } from 'react-simple-maps'
import { donorCountries, destinationCountry } from '../translations'

const GEO_URL = `${import.meta.env.BASE_URL}countries-110m.json`

function WorldMap({ lang }) {
  return (
    <div className="world-map">
      <ComposableMap
        projectionConfig={{ scale: 148, center: [10, 15] }}
        style={{ width: '100%', height: 'auto' }}
      >
        <Geographies geography={GEO_URL}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                className="world-map-country"
              />
            ))
          }
        </Geographies>

        {donorCountries.map((country) => (
          <Line
            key={`line-${country.code}`}
            from={country.coords}
            to={destinationCountry.coords}
            stroke="#4fc3e0"
            strokeWidth={1.2}
            strokeDasharray="4 3"
            strokeLinecap="round"
          />
        ))}

        {donorCountries.map((country) => (
          <Marker key={country.code} coordinates={country.coords}>
            <circle r={5} className="world-map-marker" />
            <text textAnchor="middle" y={-12} className="world-map-marker-label">
              {country.flag} {country.name[lang]}
            </text>
          </Marker>
        ))}

        <Marker coordinates={destinationCountry.coords}>
          <circle r={8} className="world-map-marker world-map-marker-destination" />
          <text textAnchor="middle" y={-16} className="world-map-marker-label world-map-marker-label-destination">
            {destinationCountry.flag} {destinationCountry.name[lang]}
          </text>
        </Marker>
      </ComposableMap>
    </div>
  )
}

export default WorldMap
