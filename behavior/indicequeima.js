  var legend = $('#legend');
  var div = $("<div></div>")
  div.css("font-size","11pt");
  div.append('<img src="icons/small_green.png"/> Em conformidade com a vida útil.<br>');
  div.append('<img src="icons/small_yellow.png"/> Antes do término vida útil.<br>');
  div.append('<img src="icons/small_red.png"/> 30% ou + antes do término da vida útil.<br>');
  legend.append(div);
  

  function initialize() {
    google.maps.visualRefresh = true;
    var isMobile = (navigator.userAgent.toLowerCase().indexOf('android') > -1) ||
      (navigator.userAgent.match(/(iPod|iPhone|iPad|BlackBerry|Windows Phone|iemobile)/));
    if (isMobile) {
      var viewport = document.querySelector("meta[name=viewport]");
      viewport.setAttribute('content', 'initial-scale=1.0, user-scalable=no');
    }
    var mapDiv = document.getElementById('map');
    var map = new google.maps.Map(mapDiv, {
      center: new google.maps.LatLng(-23.6128678,-46.68755722),
      zoom: 18,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });
    map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(document.getElementById('legend'))
    
    layer = new google.maps.FusionTablesLayer({
      map: map,
      heatmap: { enabled: false },
      query: {
        select: "col13",
        from: "13KuDScSEjFU39i2tSrm3dHVJxL8nOUOHqRawDSE_",
        where: ""
      },
      options: {
        styleId: 2,
        templateId: 2
      }
    });
    $("#legend").show(500);
}
 
    
  
google.maps.event.addDomListener(window, 'load', initialize);

