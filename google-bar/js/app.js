(function() {
	var app = angular.module('search', []);

	app.controller('SearchController',  function($http){
		var search = this;
		search.query = "";
		search.results = [];
		search.country = "";
		searching = false;

		search.changed = function(){
			if(search.query.length > 0){
				search.searching = true;
				$http.get('https://restcountries.eu/rest/v1/name/' + this.query).success(function(data){
					search.results = data;
				}).error(function(){
					search.results = [];
				});
			} else{
				search.results = [];
			}
		};

		search.select = function(country){
			search.searching = false;
			this.country = country;
			this.query = country;
			showCountry(country);
		};


	});

})()
