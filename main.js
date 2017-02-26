$(document).ready(function() {
    // variables
    // var api = "https://newsapi.org/v1/articles?source=techcrunch&apiKey=d647eb7abbc7414592db03051c5b2b5e";
    var leftArr = ["independent", "the-guardian-uk", "the-guardian-au", "the-huffington-post"];
    var cenLeftArr = ["associated-press", "bbc-news", "bloomberg", "business-insider", "buzzfeed", "newsweek", "the-new-york-times", "the-washington-post", "time"];
    var cenRightArr = ["cnbc", "cnn", "financial-times", "fortune", "reuters", "the-economist", "the-times-of-india", "the-wall-street-journal"];
    var rightArr = ["daily-mail", "metro", "mirror", "the-telegraph"];

    // Return a random integer in the range 0 through n - 1
    function randomInt(n) {
        return Math.floor(Math.random() * n);
    }
    // Return a random element from an array
    function randomElement(array) {
        return array[randomInt(array.length)];
    }
    function api(array) {
        return "https://newsapi.org/v1/articles?source="+ randomElement(array)+"&apiKey=d647eb7abbc7414592db03051c5b2b5e";
    }

    function removeFormatting(name){
      return name.replace( /-/gi," ").replace(/\b\w/g, l => l.toUpperCase()).replace(/uk/gi,"UK").replace(/au/gi,"AU").replace(/cnn/gi,"CNN").replace(/cnbc/gi,"CNBC");
    }
    // console.log(api(leftArr));
    // console.log(api(rightArr));
    // left data
    $.getJSON(api(leftArr), function(data) {
        var paperName= removeFormatting(data.source);
        // console.log(removeFormatting(paperName));

        $("#leftPaper").text(paperName);

    });
    // Center left data
    $.getJSON(api(cenLeftArr), function(data) {
        var paperName= removeFormatting(data.source);
        $("#cenLeftPaper").text(paperName);

    });

    // Center Right data
    $.getJSON(api(cenRightArr), function(data) {
        var paperName= removeFormatting(data.source);
        $("#cenRightPaper").text(paperName);

    });
    // Right data
    $.getJSON(api(rightArr), function(data) {
        var paperName= removeFormatting(data.source);
        // console.log(removeFormatting(paperName));

        $("#rightPaper").text(paperName);

    });


})
