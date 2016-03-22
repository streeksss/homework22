$(document).ready (function(){
    $("select[name='country']").bind("change", function (){
        $.get("script.php", {country: $
        ("select[name='country']").val()}, function (data) {
            data = JSON.parse(data);
            $("select[name='city']").empty();
            for(var id in data){
                $("select[name='city']").append($("<option value='" + id +"'>" + data[id] + "</option>"));
            }
        });
    });
});






$(document).ready(function(){
    $('#button').click(function(){
        $.getJSON('task.json', {}, function(json){
            $('#textarea').html('');
            $('#textarea')
                .append('<strong>Lesson:</strong> '   + json.lesson + '<br/>')
                .append('<strong>Theme: </strong>'    + json.theme + '<br/>')
                .append('<strong>Date: </strong>'       + json.date + '</b><br/>')
                .append('<strong>Author: </strong>'       + json.author + '</b><br/>')
                .append(               json.ps + '<br/>');
        });
    })
});








