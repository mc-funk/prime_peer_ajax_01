var firstCity = null;
var numCities = 0;
var cityName, cityPop, cityArea, cityDensity;


$(document).ready(function () {
    $.get('cities.html', function (data) {
        $("#cityList").append(data);
    });
    $.get('data.json', function (data) {
            console.log(".get data function is running");
            cityData = data;
    });

    $("#get-city-btn").on("click", function() {
        if (numCities == 5) {
            numCities = 0;
            $(".citiesListed").empty();
        } else {
            addCity();
        }
    });

    $("#cityList").on("click", ".button-remove", function() {
        console.log("this button works");
        $(".citiesListed").empty();
        numCities = 0;
    });

    function addCity() {
        cityName = cityData.cities[numCities].name;
        cityPop = cityData.cities[numCities].population;
        cityArea = cityData.cities[numCities].landArea;
        cityDensity = cityData.cities[numCities].density;
        console.log(cityName, cityPop, cityArea, cityDensity);
        $('.citiesListed').append("<div class='oneCity'><p>Name: " + cityName + "</p><p>Population: " + cityPop +
            "</p><p>Land Area: " + cityArea + "</p><p>Density: " + cityDensity + "</p></div>");
        numCities++;
    }
});

