
$(document).ready(function() {
    FootballScraper.JsonParser.Init();
});

var FootballScraper = {
    
    JsonParser: {
        Init : function() {
            
        },
        ParseData: function () {

            var $container = $("#today-games-container");

            $.ajax({
                headers: { 'X-Auth-Token': "773f3ef29abe49f09eef2be258742028" },
                url: "http://api.football-data.org/v1/fixtures?timeFrame=n1",
                dataType: "json",
                type: "GET"
            }).done(function (response) {

                $.ajax({
                    url: $container.data("url"),
                    data: {
                        jsonData: JSON.stringify(response)
                    },
                    type: "POST"
                }).done(function (data) {

                    $container.html($("<div></div>").html(data));

                    
                        $(".sortable-table").DataTable({
                            "order": [[3, "desc"]]
                        });
                   

                    $(".game-data").each(function () {

                        var $row = $(this);

                        $.ajax({
                                headers: { 'X-Auth-Token': "773f3ef29abe49f09eef2be258742028" },
                                url: $row.data("head2head"),
                                dataType: "json",
                                type: "GET"
                        }).done(function (result) {

                            var $headtohead = result.head2head;
                            var $hometowin = $row.find(".home-team-to-win");
                            var $draw = $row.find(".draw");
                            var $awaytowin = $row.find(".away-team-to-win");
                            var $gameplayed = $row.find(".game-played");
                            var $gamesplayedtotal = (parseInt($headtohead.homeTeamWins) +
                                parseInt($headtohead.draws) +
                                parseInt($headtohead.awayTeamWins));

                            $hometowin.html(Math.floor((parseInt($headtohead.homeTeamWins) / $gamesplayedtotal) * 100) + "%");
                            $draw.html(Math.floor((parseInt($headtohead.draws) / $gamesplayedtotal) * 100) + "%");
                            $awaytowin.html(Math.floor((parseInt($headtohead.awayTeamWins) / $gamesplayedtotal) * 100) + "%");
                            $gameplayed.html("Based on: " + $gamesplayedtotal + " games played.");
                        });
                    });

                }).fail(function (error) {
                    alert(error.message);
                });

            });
            
        }
    }
}