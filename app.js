
console.log("App.js is running");

$('button#get_movie').on('click', function() {

    var baseUrl = 'http://www.omdbapi.com/?';
    var movieName = $('input#movie_input').val();
    $.ajax({
         url: baseUrl + "t=" + movieName,
         method: 'GET',
         dataType: 'json',
         success: function(response, status) {


             var imageSRC = response.Poster;
             var title = response.Title;
             var year = response.Year;
             var rating = response.Rated;
             var plot = response.Plot;


            $('img#moviePosterDefault').attr('src', imageSRC);

             $('h4#movieTitle').text(`Movie title: ${title}`);
             $('h4#movieYear').text(`Year: ${year}`);
             $('h4#movieRating').text(`Rating: ${rating}`);
             $('h4#moviePlot').text(`Plot: ${plot}`);


           }
    });
$("input").val("");
});
