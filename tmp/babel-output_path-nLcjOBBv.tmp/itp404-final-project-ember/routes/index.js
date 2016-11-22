define("itp404-final-project-ember/routes/index", ["exports", "ember"], function (exports, _ember) {
    exports["default"] = _ember["default"].Route.extend({
        model: function model() {
            console.log("map");

            $.ajax({
                type: "GET",
                url: "app/routes/sample.json",
                success: function success(data) {
                    console.log("here", data);
                }
            });

            function renderMap() {
                console.log("here");
                var mymap = L.map('mapid').setView([51.505, -0.09], 13);

                L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpandmbXliNDBjZWd2M2x6bDk3c2ZtOTkifQ._QA7i5Mpkd_m30IGElHziw', {
                    maxZoom: 18,
                    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' + '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' + 'Imagery © <a href="http://mapbox.com">Mapbox</a>',
                    id: 'mapbox.streets'
                }).addTo(mymap);
            }

            renderMap();

            return;
        }

    });
});