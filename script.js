window.onload = () => {
     let places = staticLoadPlaces();
     renderPlaces(places);
};

function staticLoadPlaces() {
    return [
        {
            name: 'PSB Fish Pond',
            files: './assets/simple-spotted-jellyfish-baked-animation/Spotted-Jelly.gltf',
            scale: '0.3 0.3 0.3',
            location: {
                lat: 52.415741,
                lng: -4.065626,
            }
        },
        {
            name: 'Wood nr Workshop',
            files: './assets/old_chest/scene.gltf',
            scale: '0.5 0.5 0.5',
            location: {
                lat: 52.415450,
                lng: -4.065079,
            }
        },
        {
            name: 'Arts Centre Plaza',
            files: './assets/azeria/scene.gltf',
            scale: '1 1 1',
            location: {
                lat: 52.415666,
                lng: -4.063480,
            }
        },
        {
            name: 'CS',
            files: './assets/wood_chopping_trunk_base_log/scene.gltf',
            scale: '1 1 1',
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
        let modelfiles = place.files;
        let modelscale = place.scale;

        let model = document.createElement('a-entity');
        model.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);
        model.setAttribute('gltf-model', modelfiles);
        model.setAttribute('rotation', '0 180 0');
        model.setAttribute('animation-mixer', '');
        model.setAttribute('scale', modelscale);

        model.addEventListener('loaded', () => {
            window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
        });

        scene.appendChild(model);
    });
}
