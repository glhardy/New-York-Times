$(document).ready(function() {

var articleInfoDiv = $("<div>");

    $("#submit").on("click", function() {

        event.preventDefault();

        var searchTerm = $("#searchTerm").val();
        var retrieveThisMany = $("#retrieveThisMany").val();
        var startYear = $("#startYear").val();
        var endYear = $("#endYear").val();


        var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
        url += '?' + $.param({
            'api-key': "60064f02c0cb48578b7deb817fa16075",
            'q': searchTerm,
            'begin_date': "20170221",
            'end_date': "20170513",
            'sort': "newest",
            'page': 0

        });
        $.ajax({
            url: url,
            method: 'GET',
        }).done(function(result) {
        	console.log(result);
            console.log(result.response.docs[0].headline.main);
            console.log(result.response.docs[0].byline.original);
            console.log("Section: " + result.response.docs[0].subsection_name);
            console.log(result.response.docs[0].pub_date);
            console.log("Section: " + result.response.docs[0].web_url);

            articleInfoDiv.append("<h4>" + result.response.docs[0].headline.main + "</h4>");
            articleInfoDiv.append("<h6>" + result.response.docs[0].byline.original + "</h6>");
            articleInfoDiv.append("<h6> Section: " + result.response.docs[0].subsection_name + "</h6>");
            articleInfoDiv.append("<h6>" + result.response.docs[0].pub_date + "</h6>");
            articleInfoDiv.append("<h6> Section: " + result.response.docs[0].web_url + "</h6>");

            $(".articleDiv").append(articleInfoDiv);

        }).fail(function(err) {
            throw err;
        });



    });



});
