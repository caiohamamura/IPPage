  var legend = $('#legend');
  var div = $("<div></div>")
  div.css("font-size","14pt");
  div.append('<canvas id="myCanvas" width="100" height="20" style="border:none; lineWidth:100;">Your browser does not support canvas</canvas> 5<br>');
  div.append('<canvas id="myCanvas2" width="100" height="20" style="border:none; lineWidth:100;">Your browser does not support canvas</canvas> 10<br>');
  div.append('<canvas id="myCanvas3" width="100" height="20" style="border:none; lineWidth:100;">Your browser does not support canvas</canvas> 20');
  legend.append(div);
  var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.lineWidth=20;
ctx.strokeStyle="blue";
ctx.lineCap="round";
ctx.moveTo(5, 10);
ctx.lineTo(95, 10);
ctx.stroke();
var c = document.getElementById("myCanvas2");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.lineWidth=20;
ctx.strokeStyle="yellow";
ctx.lineCap="round";
ctx.moveTo(5, 10);
ctx.lineTo(95, 10);
ctx.stroke();
var c = document.getElementById("myCanvas3");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.lineWidth=20;
ctx.strokeStyle="red";
ctx.lineCap="round";
ctx.moveTo(5, 10);
ctx.lineTo(95, 10);
ctx.stroke();


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
      center: new google.maps.LatLng(-23.61239, -46.68207),
      zoom: 18,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });
    map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(document.getElementById('legend'))
    var MultiPolyline = 
[
[new google.maps.LatLng(-23.6125,-46.6788), new google.maps.LatLng(-23.61,-46.682)],
[new google.maps.LatLng(-23.6114,-46.6852), new google.maps.LatLng(-23.6148,-46.681)],
[new google.maps.LatLng(-23.6119,-46.6788), new google.maps.LatLng(-23.6128,-46.6796), new google.maps.LatLng(-23.6148,-46.6815)],
[new google.maps.LatLng(-23.61,-46.6836), new google.maps.LatLng(-23.6136,-46.6791), new google.maps.LatLng(-23.6138,-46.6788)],
[new google.maps.LatLng(-23.61,-46.6846), new google.maps.LatLng(-23.6107,-46.6852)],
[new google.maps.LatLng(-23.61,-46.6839), new google.maps.LatLng(-23.6114,-46.6853)],
[new google.maps.LatLng(-23.6102,-46.6834), new google.maps.LatLng(-23.6121,-46.6853)],
[new google.maps.LatLng(-23.61,-46.6826), new google.maps.LatLng(-23.6128,-46.6853)],
[new google.maps.LatLng(-23.61,-46.6853), new google.maps.LatLng(-23.6147,-46.6793)],
[new google.maps.LatLng(-23.6147,-46.6842), new google.maps.LatLng(-23.6101,-46.6799)],
[new google.maps.LatLng(-23.6143,-46.6788), new google.maps.LatLng(-23.6148,-46.6792)],
[new google.maps.LatLng(-23.614,-46.6789), new google.maps.LatLng(-23.6148,-46.6793)],
[new google.maps.LatLng(-23.614,-46.6853), new google.maps.LatLng(-23.6148,-46.6843)],
[new google.maps.LatLng(-23.614,-46.6819), new google.maps.LatLng(-23.6148,-46.6826)],
[new google.maps.LatLng(-23.6127,-46.6852), new google.maps.LatLng(-23.6148,-46.6827)],
[new google.maps.LatLng(-23.61,-46.6802), new google.maps.LatLng(-23.6103,-46.6798), new google.maps.LatLng(-23.6111,-46.6788)]
];

for (var i=0; i<MultiPolyline.length; i++)
{
    if (i < 7)
        var color = 'blue';
    else if (i < 13)
        var color = 'red';
    else
        var color = 'yellow';
    var polyline = new google.maps.Polyline({
    path: MultiPolyline[i],
    geodesic: true,
    strokeColor: color,
    strokeOpacity: 1.0,
    strokeWeight: 50
  });

  polyline.setMap(map);
}

$("#legend").show(500);
}
 
    
  
google.maps.event.addDomListener(window, 'load', initialize);

