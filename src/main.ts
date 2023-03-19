import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
 
mapboxgl.accessToken = 'pk.eyJ1IjoibWF1cmljaW8wNCIsImEiOiJjbGY0NjFnZ3UweXc1M3dwamU2cnB5YXpxIn0.9zRtUsALCpid493vpkGRUw';
import { AppModule } from './app/app.module';

if(!navigator.geolocation){
  alert('Navegador no soporta la Geolocation');
  throw  new Error('Navegador no soporta la Geolocation');
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
