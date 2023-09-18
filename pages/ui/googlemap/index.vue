<script setup>
import { GoogleMap, Marker, CustomMarker } from "vue3-google-map";
import { useI18n } from "vue-i18n";


const { locale } = useI18n();

const center = { lat: 49.19925828417682, lng: 16.62502384171279 };
const mapStyles = [
    { "stylers": [ { "lightness": -59 }, { "hue": "#ffb300" }, { "gamma": 0.92 }, { "saturation": -83 } ] },
    { "featureType": "road.local", "elementType": "labels", "stylers": [ { "visibility": "off" } ] },
    { "featureType": "road.local", "elementType": "geometry.fill", "stylers": [ { "color": "#898582" }, { "gamma": 0.72 } ] },
    { "featureType": "road.arterial", "elementType": "geometry.fill", "stylers": [ { "visibility": "on" }, { "color": "#898582" } ] },
    { "featureType": "road.arterial", "elementType": "geometry.stroke", "stylers": [ { "color": "#48413b" } ] },
    { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [ { "color": "#898582" } ] },
    { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [ { "weight": 1.2 }, { "gamma": 1.42 } ] },
    { "elementType": "labels.text.stroke", "stylers": [ { "visibility": "on" }, { "invert_lightness": true }, { "weight": 2.6 } ] },
    { "featureType": "water", "elementType": "geometry", "stylers": [ { "visibility": "on" }, { "color": "#4d4c44" }, { "hue": "#00c3ff" }, { "saturation": -70 }, { "lightness": 21 } ] },
    { "featureType": "transit", "elementType": "labels", "stylers": [ { "visibility": "off" }] },
    { "featureType": "poi", "stylers": [ { "visibility": "off" }]}
];

</script>

<template>
    <div :class="[
      containerMaxW,
      'pt-6'
  ]">
        <h1 class="text-2xl font-bold text-center">UI / Google Mapy</h1>
        <div class="mx-auto text-center max-w-[700px] my-6">
            <p class="pb-6">Toto je modul pro Google Mapy. Má jako základ nastaven api-key (převzato z webu BV2), výchozí center bod na Foreground a nějaké základní styly, které je možné změnit/odstranit.</p>
            <p class="py-3 px-6 rounded-lg text-center bg-gray-100 mb-6"><strong>Implementace:</strong> Daniel Kužela 09/2023
                <br /><strong>Odkaz na dokumentaci:</strong> <a href="https://www.npmjs.com/package/vue3-google-map" target="_blank" class="underline underline-offset-2">https://www.npmjs.com/package/vue3-google-map</a></p>
            <p class="py-3 px-6 rounded-lg text-center bg-gray-100 mb-6"><strong>Odkaz na šablony stylů:</strong> <a href="https://snazzymaps.com/explore" target="_blank" class="underline underline-offset-2">https://snazzymaps.com/explore</a></p>
        </div>

        <GoogleMap
            api-key="AIzaSyB5nb5x4zqnAdpuGk1SJ-qKqT-FJswMDV0"
            class="w-full h-[500px]"
            :center="center"
            :styles="mapStyles"
            :zoom="15"
            :language="locale"
            :disableDefaultUi="false"
            controlSize="20"
            backgroundColor="#000000"
            mapTypeId="roadmap">
            <CustomMarker :options="{ position: center, anchorPoint: 'BOTTOM_CENTER' }">
                <div class="text-center flex justify-center flex-col items-center">
                    <div class="text-sm text-white">Foreground Office</div>
                    <img src="https://vuejs.org/images/logo.png" class="w-10 h-10 mt-2" />
                </div>
            </CustomMarker>
        </GoogleMap>

    </div>
</template>
