window.onload = () => {
     let places = staticLoadPlaces();
     renderPlaces(places);
};

function staticLoadPlaces() {
    return [
        {
            name: 'PSB Fish Pond',
            files: './assets/simple-spotted-jellyfish-baked-animation/Spotted-Jelly.gltf',
            location: {
                lat: 52.415741,
                lng: -4.065626,
            }
        },
        {
            name: 'Wood nr Robotics Workshop',
            files: './assets/old_chest/scene.gltf',
            location: {
                lat: 52.415450,
                lng: -4.065079,
            }
        },
        {
            name: 'Arts Centre Plaza',
            files: './assets/azeria/scene.gltf',
            location: {
                lat: 52.415666,
                lng: -4.063480,
            }
        },
    ];
}

function renderPlaces(places) {
    let scene = document.querySelector('a-scene');

    places.forEach((place) => {
        let latitude = place.location.lat;
        let longitude = place.location.lng;
        let files = place.files;

        let model = document.createElement('a-entity');
        model.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);
        model.setAttribute('gltf-model', '${files}');
        model.setAttribute('rotation', '0 180 0');
        model.setAttribute('animation-mixer', '');
        model.setAttribute('scale', '0.5 0.5 0.5');

        model.addEventListener('loaded', () => {
            window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
        });

        scene.appendChild(model);
    });
}
