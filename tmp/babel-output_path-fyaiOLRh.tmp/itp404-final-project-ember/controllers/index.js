define('itp404-final-project-ember/controllers/index', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({});

  //import Ember from 'ember';
  //
  // export default Ember.Route.extend({});

  //   // the table object will contain the data from our TSV file.
  //   var table;
  //   // hold highest populated place
  //   var highestPop;
  //   var maxArea = 5000;
  //   var areaScale;
  //
  //   // the preload function occurs once before setup(), and is used for loading
  //   // assets that will be utilized by the sketch.
  //   function preload(){
  //     // loadTable() creates an object that holds the data from a CSV file.
  //     table = loadTable("citiesnum.csv", "csv");
  //   }
  //
  //   // setup is automatically called once when the page loads.
  //   function setup(){
  //     // createCanvas() creates the canvas element we will be drawing to.
  //     var canvas = createCanvas(windowWidth, windowHeight);
  //     canvas.parent("sketch");
  //
  //     // scale everything to most populated city.
  //     highestPop = int(table.getNum(0,3));
  //     areaScale = maxArea / highestPop;
  //
  //     ellipseMode(CENTER);
  //     noStroke();
  //     fill(0,32);
  //     noLoop();
  //   }
  //
  //   function draw(){
  //     background(255);
  //     // translate the coordinate system to be centered
  //     translate(width/2, height/2);
  //
  //     // cycle through the table
  //     for (var r=0; r<table.getRowCount(); r++){
  //       // get all the data about the city
  //       var row = table.getRow(r);
  //       var city = row.get(0);
  //       var lat = float(row.get(1));
  //       var lon = float(row.get(2));
  //       var pop = int(row.get(3));
  //
  //       // translate lat/lon to screen x/y
  //       var x = (lon / 180) * width/2;
  //       var y = (0-lat / 90) * width/4;
  //
  //       // calculate circle area based on population
  //       var area = pop * areaScale;
  //       var d = sqrt(area/PI) * 2;
  //       ellipse(x, y, d, d);
  //       //point(x, y);
  //     }
  //
  //   }

  //   function windowResized(){
  //     resizeCanvas(windowWidth, windowHeight);
  //   }
});