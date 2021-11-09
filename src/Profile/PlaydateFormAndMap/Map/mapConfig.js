import mapStyles from './mapStyles'

const containerDimensions = {
  width: '28rem',
  height: '28rem',
  borderRadius: '10px'
}

const center = {
  lat: 39.74121768558487,
  lng: -104.9915066575683
}

const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true
}

const libraries = ['places']

export { containerDimensions, center, options, libraries }
