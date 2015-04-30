var firstCity = null;
var numCities = 0;
var cityName, cityPop, cityArea, cityDensity;


$(document).ready(function () {

    $("#get-city-btn").on("click", function() {
        if (numCities == 0) {
            $.get('cities.html', function (data) {
                $("#cityList").append(data);
            });
        } else if (numCities == 5) {
            numCities = 0;
            $(".citiesListed").empty();
        }

        $.get('data.json', function (data) {
            console.log(".get data function is running");
            cityData = data;
            cityName = cityData.cities[numCities].name;
            cityPop = cityData.cities[numCities].population;
            cityArea = cityData.cities[numCities].landArea;
            cityDensity = cityData.cities[numCities].density;
            console.log(cityName, cityPop, cityArea, cityDensity);
            $('.citiesListed').append("<div class='oneCity'><p>Name: " + cityName + "</p><p>Population: " + cityPop +
                    "</p><p>Land Area: " + cityArea + "</p><p>Density: " + cityDensity + "</p></div>");
            numCities++;
        });
    });

    $("#cityList").on("click", ".button-remove", function() {
        console.log("this button works");
        $(".citiesListed").empty();
        numCities = 0;
    });
});

