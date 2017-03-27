$(document).ready(function() {
    // variables
    // var api = "https://newsapi.org/v1/articles?source=techcrunch&apiKey=d647eb7abbc7414592db03051c5b2b5e";
    var leftArr = ["independent", "the-guardian-uk", "the-guardian-au", "the-huffington-post"];
    var cenLeftArr = ["associated-press", "bbc-news", "bloomberg", "business-insider", "buzzfeed", "newsweek", "the-new-york-times", "the-washington-post", "time"];
    var cenRightArr = ["cnbc", "cnn", "financial-times", "fortune", "reuters", "the-economist", "the-times-of-india", "the-wall-street-journal"];
    var rightArr = ["daily-mail", "metro", "mirror", "the-telegraph"];

    // FUNCTIONS
    // Functions for random array selection
    // Return a random integer in the range 0 through n - 1
    function randomInt(n) {
        return Math.floor(Math.random() * n);
    }
    // Return a random element from an array
    function randomElement(array) {
        return array[randomInt(array.length)];
    }
    // function to create API
    function api(array) {
        return "https://newsapi.org/v1/articles?source=" + randomElement(array) + "&apiKey=d647eb7abbc7414592db03051c5b2b5e";
    }
    // name formatting
    function removeFormatting(name) {
        return name.replace(/-/gi, " ").replace(/\b\w/g, l => l.toUpperCase()).replace(/uk/gi, "UK").replace(/au/gi, "AU").replace(/cnn/gi, "CNN").replace(/cnbc/gi, "CNBC").replace(/bbc/gi, "BBC");
    }

    function removeSlash(url) {
        if (url[url.length - 1] == "/") {
            url = url.slice(0, -1);
        }
        return url;
    }
    // function for creating articles
    function createArticle(data, paperID, articleID) {
        // console.log(data);
        var paperName = removeFormatting(data.source);

        $(paperID).text(paperName);
        $(articleID).html()
        for (i = 0; i < 5; i++) {
            var articleUrl = removeSlash(data.articles[i].url)
            $(articleID).append("<article><a href =" + articleUrl + "><h4>" + data.articles[i].title + "</h4>" + "<p>" + data.articles[i].description + "</p></a></article>")
        }
    }
    // title
    $("#title").hover(function(){
      $("ul").append("<li id='test'>Social media is incresingly used as a news source benefiting 'click bait headlines' over quality journalism. At <span style ='color:white; font-size:0.9em;font-family:Lalezar'>News Balance</span> you can view the top news stories from a range of papers and a variety of opinions.</li>");},
      function(){$("#test").remove()}

    );
    // left data
    $.getJSON(api(leftArr), function(data) {
        createArticle(data, "#leftPaper", "#leftArt");
    });
    // Center left data
    $.getJSON(api(cenLeftArr), function(data) {
        createArticle(data, "#cenLeftPaper", "#cenLeftArt");
    });

    // Center Right data
    $.getJSON(api(cenRightArr), function(data) {
        createArticle(data, "#cenRightPaper", "#cenRightArt");
    });
    // Right data
    $.getJSON(api(rightArr), function(data) {
        createArticle(data, "#rightPaper", "#rightArt");

    });


})
