
var idCounter = 1;

var canopyPer = 0;

var classifications = {1:
                        [{ "text":"High Intensity Urban" , "value":"11" }, 
                        { "text":"Low Intensity Urban" , "value":"12"}],
               
               2:       [{"text":"Row Crops", "value":"21" },
                        {  "text": "Forage Crops", "value":"22"}],
               
               3:       [{"text":"Coniferous", "value":"31" },
                        {  "text": "Broad-leaved Deciduous", "value":"32"},
                        {  "text": "Mixed Coniferous/Broad-leaved Deciduous", "value":"33"},
                        {  "text": "Clearcut/Young Plantation", "value":"34"}],
               
               4:       [{"text":"Upland Shrub", "value":"41" }],

               5:       [{"text":"Grassland", "value":"51" }],

               6:       [{"text":"Open Water", "value":"61" }],
               
               7:       [{"text":"Sand", "value":"71" },
                        {  "text": "Bare Soil", "value":"72"},
                        {  "text": "Exposed Rock", "value":"73"},
                        {  "text": "Mixed", "value":"74"}],
               
               8:       [{"text":"Emergent/Wet Meadow", "value":"81" },
                        {  "text": "Lowland Shrub", "value":"82"},
                        {  "text": "Broad-leaved Evergreen", "value":"83"},
                        {  "text": "Forested Wetland", "value":"84"}],

              82:       [{ "text":"Coniferous" , "value":"821" }, 
                        { "text":"Broad-leaved Deciduous" , "value":"822"}],

              84:       [{"text":"Coniferous", "value":"841" },
                        {  "text": "Broad-leaved Deciduous", "value":"842"},
                        {  "text": "Mixed Coniferous/Broad-leaved Deciduous", "value":"843"}]

                };

var species = {

                1: [{ "text":"Alder" , "value":"1" },
                   { "text":"Almer. Elm" , "value":"2" },
                   { "text":"Aspen" , "value":"3" },
                   { "text":"Balsam Fir" , "value":"4" },
                   { "text":"Basswood" , "value":"5" },
                   { "text":"Beech" , "value":"6" },
                   { "text":"Black Ash" , "value":"7" },
                   { "text":"Black Cherry" , "value":"8" },
                   { "text":"Black Spruce" , "value":"9" },
                   { "text":"Black Willow" , "value":"10" },
                   { "text":"Cottonwood" , "value":"11" },
                   { "text":"Green Ash" , "value":"12" },
                   { "text":"Hemlock" , "value":"13" },
                   { "text":"Jack Pine" , "value":"14" },
                   { "text":"N. Pin Oak" , "value":"15" },
                   { "text":"Red Maple" , "value":"16" },
                   { "text":"Red Pine" , "value":"17" },
                   { "text":"Red/Black Oak" , "value":"18" },
                   { "text":"River Birch" , "value":"19" },
                   { "text":"Silver Maple" , "value":"20" },
                   { "text":"Slippery Elm" , "value":"21" },
                   { "text":"Supar Maple" , "value":"22" },
                   { "text":"Tamarack" , "value":"23" },
                   { "text":"White Birch" , "value":"24" },
                   { "text":"White Cedar" , "value":"25" },
                   { "text":"White Pine" , "value":"26" },
                   { "text":"White Spruce" , "value":"27" },
                   { "text":" White/Bur Oak" , "value":"28" },
                   { "text":"Yellow Birch" , "value":"29" }]

                };
function init() {

 document.addEventListener("deviceready", deviceReady, true);
 delete init;
}


function login(){

        var u = $("#email").val();
        var p = $("#password").val();
        $.ajax({
                url: "http://localhost:3000/users/sign_in.json",
                type: "POST",
              
                data: JSON.stringify({user: {email: u, password: p}}),
                dataType: "json",
                contentType: "application/json; charset=utf-8",
                success: function(data){
                    localStorage.setItem('user_id',data.user)
                    localStorage.setItem('loggedin','true')

                    $(':mobile-pagecontainer').pagecontainer('change', '#tasksPage', {
                transition: 'slide',
                changeHash: false,
                showLoadMsg: true
            });
                     
                },
                
                error: function(error) {
                    localStorage.setItem('loggedin','false')
                    console.log(error.responseText)
                    alert(error.responseText);
                }
        
        });
}


$("#loginBtn").click(function (e) {

login();

$(document).on("pagecreate", "#tasksPage", function( event ) {

        var map = L.map('map');
            
            var osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    var osmAttrib='Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
    var osm = new L.TileLayer(osmUrl, {minZoom: 2, maxZoom: 20, attribution: osmAttrib}).addTo(map);       

    // start the map in South-East England
    map.setView(new L.LatLng(44.4, -89.7),7);
    map.addLayer(osm);
    

            var polygon = L.polygon([
    [43.1, -89.5],
    [43.0, -89.5],
    [43.1, -90]
]).addTo(map);

            var popup = L.popup()
//     .setLatLng([51.5, -0.09])
//     .setContent("I am a standalone popup.")
//     .openOn(map);
//     var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

function onPolygonClick(e) {
    alert("test click");
}

map.on('click', onMapClick);
polygon.on('click', onPolygonClick);
$('#map').trigger('create');
 setTimeout(function(){
    map.invalidateSize();
        },1);
        // $.ajax({
        // url: "http://localhost:3000/users/1/assignments",
        // type: "POST",
      
        // data: JSON.stringify({user: {id: 1}}),
        // dataType: "json",
        // contentType: "application/json; charset=utf-8",
        // success: function(data){
        //     // console.log(data);
        //     // alert(data);
             
        // },
        
        // error: function(error) {
        //     // alert(error.responseText)
        //     // alert("error alert");
        // }
        
        });

});



// });

$(document).on("pagecreate", "#data_entry", function( event ) {
    $("#selectCoverType2_div").hide();
    $("#selectCoverType3_div").hide();
    $("#forestSpecies_div").hide();

    species_data = species[1];

    for( var i = 0 ; i < species_data.length; i++ ) {
        $('#selectForestSpecies').append('<option value='+ species_data[i].value +'> ' + species_data[i].text + ' </option>');

    }

    $("#selectForestSpecies").selectmenu("refresh");
    

});


$("#btnData_Entry").click(function (e) {
    $(':mobile-pagecontainer').pagecontainer('change', '#data_entry', {
        transition: 'slide',
        changeHash: false,
        showLoadMsg: true
    });
});


$("#selectCoverType").change(function() {

    var selected = $(this).val();

    $("#selectCoverType3").empty();
    $("#selectCoverType3_div").hide();

    $("#selectCoverType2").empty();
    $("#forestSpecies_div").hide();

    if(selected == ""){
        $("#selectCoverType2_div").hide();
        $("#selectCoverType3").selectmenu("refresh");
        return;
    }
     if(selected == "3"){
            $("#forestSpecies_div").show();
            $("#forestSpecies_grid").show();
        }

    $("#selectCoverType2_div").show();


    var children = classifications[selected];

    $('#selectCoverType2').append('<option value=""> Select One </option>');

    for( var i = 0 ; i < children.length; i++ ) {

        $('#selectCoverType2').append('<option value='+ children[i].value +'> ' + children[i].text + ' </option>');

    }

    $("#selectCoverType2").selectmenu("refresh");

});

$("#selectCoverType2").change(function() {

    $("#selectCoverType3").empty();
    
    var selected = $(this).val();
    var children = classifications[selected];
    var covType1 = $("#selectCoverType").val();
    
    if(covType1 != "3"){
        $("#forestSpecies_div").hide();
         $("#forestSpecies_grid").hide();
    }
      if(selected == "84"){
        $("#forestSpecies_grid").show();
        $("#forestSpecies_div").show();
    }
    if(children == null){
        $("#selectCoverType3_div").hide();

        return;
    }

    $("#selectCoverType3_div").show();

    $('#selectCoverType3').append('<option value=""> Select One </option>');

    for( var i = 0 ; i < children.length; i++ ) {

        $('#selectCoverType3').append('<option value='+ children[i].value +'> ' + children[i].text + ' </option>');

    }

    $("#selectCoverType3").selectmenu("refresh");

});


function newSpecies(){
    $('#forestSpecies_grid').append('<div id="speciesDivId'+idCounter+'" class="ui-block-a"><select id="selectForestSpecies'+idCounter+'" name="ForestSpecies'+idCounter+'"><option value=' +$('#selectForestSpecies').val() +'>' + $('#selectForestSpecies option:selected').text()+ '</option></select></div><div class="ui-block-b"><input type="number" name="ForestSpeciesPer'+idCounter+'" pattern="^[1-9][0-9]?$|^100$" onchange="canopyPercentage()" id="speciesPercentage'+idCounter+'" value=' +$('#speciesPercentage').val()+'></div><div class="ui-block-c"><button id="deleteSpecies'+idCounter+'" data-role="button" data-icon="delete" data-iconpos="notext" onClick="return deleteRow(this);"></button></div>');

    $('#selectForestSpecies').val("");
    $('#speciesPercentage').val("");
    $("#selectForestSpecies").selectmenu("refresh");
    idCounter++;
    canopyPercentage();

    $('#forestSpecies_grid').trigger('create');

}

$("#newSpeciesEntry").click(function (e) {

    newSpecies()
    e.preventDefault();

});

function populateSpecies(){

    species_data = species[1];
    for( var i = 0 ; i < species_data.length; i++ ) {
        $('#selectForestSpecies'+idCounter+'').append('<option value='+ species_data[i].value +'> ' + species_data[i].text + ' </option>');

    }

    // $('#selectForestSpecies'+speciesSelectId+'').selectmenu("refresh");

}

function deleteRow(currentRow){
    var rowNum = currentRow.id.replace( "deleteSpecies", '');

    // $( ".speciesRow"+rowNum+"" ).remove();
    $( "#speciesDivId"+rowNum+"").remove();
    $( "#selectForestSpecies"+rowNum+"").remove();
    $( "#deleteSpecies"+rowNum+"").remove();
    $( "#speciesPercentage"+rowNum+"").remove();
    canopyPercentage()

    return false;
}

function canopyPercentage(){ 
    canopyPer = 0;

    for(var i = 1; i < idCounter; i++){
        if($("#speciesPercentage"+i).length){
            canopyPer += parseInt($( "#speciesPercentage"+i).val());
        }
    }

    $("#canopyCoverage").val(canopyPer);

    if(canopyPer >= 80){
        $('#vegetation_div').hide();
    }
    else{
        $('#vegetation_div').show();
    }

}
function composeSpecies(){ 
    speciesList=[]
    for(var i = 1; i < idCounter; i++){
        if($("#speciesPercentage"+i).length){
            species={}
            species['percentage']=parseInt($( "#speciesPercentage"+i).val())
            species['forest_type_id']= $( "#selectForestSpecies"+i).val()
            speciesList.push(species)
        }
    }
    return speciesList
}

$.fn.serializeObject = function()
{
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};

$(function() {
    $('form').submit(function() {

        var formData=$('form').serializeObject();
        formData['species']=composeSpecies();
     //   formData['user_id']=localStorage.getItem("user_id")
        $.ajax({
            url: "http://localhost:3000/field_datas/submit",
            type: "POST",
            data: JSON.stringify(formData),
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            contentType: "application/json",
            success: function(data){


            },
            
            error: function(error) {
              console.log(error.responseText)
          }});
        return false;
    });
});
