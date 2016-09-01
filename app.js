
console.log("App.js is running");

$('button#get_movie').on('click', function() {

    var baseUrl = 'http://www.omdbapi.com/?t=';
    var movieName = $('input#movie_input').val();
    $.ajax({
         url: baseUrl + movieName,
         method: 'GET',
         dataType: 'json',
         success: function(response, status) {
            var imageSRC = response.Poster;
            var title = response.Title;
            var year = response.Year;
            var rating = response.Rated;
            var plot = response.Plot;
            // debugger
        $('img#moviePosterDefault').attr('src', imageSRC);
        $('h4#movieTitle').text(title);
        $('h4#movieYear').text(year);
        $('h4#movieRating').text(rating);
        $('h4#moviePlot').text(plot);




       }
    });
$("input").val("");
});
