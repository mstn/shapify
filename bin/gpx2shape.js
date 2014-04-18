/*
 *   transform a gpx track into a GTFS shape.txt file
 *   @see https://developers.google.com/transit/gtfs/reference#shapes_fields
 */

var _ = require('underscore'),
    fs = require('fs'),
    parseString = require('xml2js').parseString,
    dir = fs.readdirSync('./compressed');

_.each( dir, function(file){
	var content = fs.readFileSync( './compressed/' + file );

	fs.appendFileSync('./output/shapes.txt', '\n');

	parseString(content, function (err, result) {
		var points;
		if ( err ){
			return console.error(err);
		}
		points = result.gpx.trk[0].trkseg[0].trkpt;
		_.each( points, function(point, index){
			fs.appendFileSync('./output/shapes.txt', file + ',' + point.$.lat + ',' + point.$.lon +',' + index +',\n');
		});
	});
});

