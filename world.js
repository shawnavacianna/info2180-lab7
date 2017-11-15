$(document).ready(function()
{
    $("#lookup").on('click', function(){
        if($("#check").is(":checked")){
            searchAll();
        }
        else if ($("#country").val() != ""){
            querySearch($("#country").val());
        }
    });
});
    
    
    function querySearch(event)
    {
        var url = 'https://info2180-lab7-shawnavacianna.c9users.io/world.php?country='+ event;
        //event.preventDefault();
        
        //var termEntered = $("#country").val();
        
        $.ajax({
          url: url + event,
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
    
   
    function searchAll(){
     var link = 'https://info2180-lab7-shawnavacianna.c9users.io/world.php?all=true';
     
     $.ajax(link,{
         method: 'GET',
     }).done(function(res){
         $("#result").html(res);
     }).fail(function(fail){
         $("#result").html('<b> FAIL 500 - AJAX ERROR!</b>');
     });
    }
