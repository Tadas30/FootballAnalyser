$(document).ready(function() {

    var $data;
    $.ajax({
        headers: { 'X-Auth-Token': '773f3ef29abe49f09eef2be258742028' },
        url: 'http://api.football-data.org/v1/fixtures?timeFrame=n1',
        dataType: 'json',
        type: 'GET'
    }).done(function (response) {
        $data = response;
        console.log(response);
    });

    //$("#json-table").click(function() {

    //    var $that = $(this);
    //        $data.forEach(function() {
    //            $that.html($("<div></div>").html($(this).));
    //        });
    //        $data.forEach(function() {
                
    //        })));
    //    });

   