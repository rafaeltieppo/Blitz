const alerta = document.querySelector("#alerta");
const cadastrar = document.querySelector("#cadastrar");

var map;
var meuAlerta;

function initMap() {
    map = new google.maps.Map(document.querySelector(".map"), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 18,
      });

      map.addListener("click", (data) => {
          let coord = { lat: data.latLng.lat(), lng: data.latLng.lng() };
          console.log(coord);
        //   addMarker(coord, "Teste", "../assets/radar.png");

          meuAlerta = coord;

          alerta.hidden = false;
          cadastrar.hidden = false;
      });

      navigator.geolocation.getCurrentPosition((Location) => {
        let coord = { lat: Location.coords.latitude, lng: Location.coords.longitude };

        map.setCenter(coord);

        addMarker(coord, "Minha Localizacao");
    });
}

function cadastro() {
    let tipo = alerta.value;
    addMarker(meuAlerta, tipo, "../assets/radar.png");
    alerta.hidden = true;
    cadastrar.hidden = true;
    console.log(tipo);
}

function addMarker(coord, title, image) {
    new google.maps.Marker({
        position: coord,
        map: map,
        title: title,
        icon: image
    })
}