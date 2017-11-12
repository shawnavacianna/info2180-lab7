// JavaScript File
$(document).ready(function()
{
    var searchButton = $("#search");
    var url = "https://info2180-lab7-shawnavacianna.c9users.io/world.php?country=";
    
    
    searchButton.on('click', queryJamaica);
    
    
    function queryJamaica(event)
    {
        event.preventDefault();
        
        var termEntered = $("#country").val();
        
        $.ajax({
          url: url + termEntered,
        })
        .done(function(data) 
        {
           $("#result").html("");
           alert(data); 
           $("#result").append(data);
        }).fail(function()// In the event request is not able to find request page
        {
            alert("ERROR");
        });
        
    }
    
    
});