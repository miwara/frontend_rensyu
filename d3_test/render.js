var d3 = require('./node_modules/d3/d3.min.js');

/**
 *  CSVの内容を表示
 */
d3.csv("./data.csv", function(error, list) {
    d3.select("#result")
	.append("table")
	.selectAll("tr")
	.data(list)
	.enter()
	.append("tr")
	.append("td")
	.text(function(d){
	    return d["value"];
	})
});


/**
 *  棒グラフを描く
 */
d3.csv('./data.csv', function(csvdata) {
    var dataset = [];
    for (var i = 0; i < csvdata.length; i++) {
	dataset.push(csvdata[i]['value']);
    };
    make(dataset);
});

function make(dataset) {
    d3.select('svg').selectAll('rect')
	.data(dataset)
	.enter()
	.append('rect')
	.attr({
	    x : function(d, i){ return i * 30; },
	    y : function(d){ return 300 -d; },
	    width : 15,
	    height : function(d){ return d; },
	    fill : '#6fbadd'
	});
}
