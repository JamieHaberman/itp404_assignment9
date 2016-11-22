import Ember from 'ember';

export default Ember.Route.extend({
    model: function() {
        console.log("map");

        $.ajax({
                    type: "GET",
                    url: "app/routes/sample.json",
                    success: function(data) {
                       console.log("here", data);
                    }
                });
                
        $.ajax({
        type: "POST",
        url: "http://api.reliefweb.int/v1/disasters?appname=apidoc&filter[field]=date.created&limit=1000&filter[value][from]=1990-06-01T00:00:00%2B00:00&filter[value][to]=2017-12-30T23:59:59%2B00:00",
        dataType: 'json',
        success: function (response) {

            geojsonLayer = L.geoJson(response, {
                style: yourLeafletStyle
            }).addTo(map);
        }
    });

        function renderMap()
        {
            console.log("here");
            var mymap = L.map('mapid').setView([51.505, -0.09], 13);

            L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpandmbXliNDBjZWd2M2x6bDk3c2ZtOTkifQ._QA7i5Mpkd_m30IGElHziw', {
                maxZoom: 18,
                attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
                    '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
                    'Imagery © <a href="http://mapbox.com">Mapbox</a>',
                id: 'mapbox.streets'
            }).addTo(mymap);
              var marker = L.marker([51.5, -0.09]).addTo(mymap);
              var circle = L.circle([51.508, -0.11], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(mymap);
marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
circle.bindPopup("I am a circle.");
                }


                renderMap();

                return;
    }



});
