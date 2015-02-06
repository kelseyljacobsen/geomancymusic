// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require bootstrap-sprockets
//= require jquery_ujs
//= require turbolinks
//= require globe
//= require_tree .

			// *** JAVASCRIPT FOR GLOBE ***

function initialize() {
    var options = {atmosphere: true};
        var earth = new WE.map('earth_div', options);
        // WE.tileLayer('/new_tiles/{z}/{x}/{y}.png').addTo(earth);
        WE.tileLayer('../../blue/{z}/{x}/{y}.png').addTo(earth);

  
        // var marker = WE.marker([51.5, -0.09]).addTo(earth);
        // marker.bindPopup("<b>Hello world!</b><br>I am a popup.<br /><span style='font-size:10px;color:#999'>Tip: Another popup is hidden in Cairo..</span>", {maxWidth: 150, closeButton: true}).openPopup();


        var marker = WE.marker([34.048961, -118.226624]).addTo(earth);
        marker.bindPopup("<b>Los Angeles</b><br>California", {maxWidth: 120, closeButton: true});

        var marker1 = WE.marker([-37.965042, -57.593079]).addTo(earth);
        marker1.bindPopup("<b>Mar Del Plata</b><br>Argentina", {maxWidth: 120, closeButton: true});

        var marker2 = WE.marker([32.722599, -117.163696]).addTo(earth);
        marker2.bindPopup("<b>San Diego</b><br>California", {maxWidth: 120, closeButton: true});

        var marker3 = WE.marker([-22.897683, -43.17627]).addTo(earth);
        marker3.bindPopup("<b>Rio de Janeiro</b><br>Brazil", {maxWidth: 120, closeButton: true});

        var marker4 = WE.marker([40.712784, -74.005941]).addTo(earth);
        marker4.bindPopup("<b>New York City</b><br>New York", {maxWidth: 120, closeButton: true});  

        var marker5 = WE.marker([-32.950741, -60.6665]).addTo(earth);
        marker5.bindPopup("<b>Rosario</b><br>Argentina", {maxWidth: 120, closeButton: true});

        var marker6 = WE.marker([-34.603723, -58.381593]).addTo(earth);
        marker6.bindPopup("<b>Buenos Aires</b><br>Argentina<br><li>Tango</li>", {maxWidth: 120, closeButton: true});

        var marker7 = WE.marker([-34.901113, -56.164531]).addTo(earth);
        marker7.bindPopup("<b>Montevideo</b><br>Uruguay", {maxWidth: 120, closeButton: true});

        var marker8 = WE.marker([-23.967882, -46.328887]).addTo(earth);
        marker8.bindPopup("<b>Santos</b><br>Brazil", {maxWidth: 120, closeButton: true});  

        var marker9 = WE.marker([-30.034647, -51.217658]).addTo(earth);
        marker9.bindPopup("<b>Porto Alegre</b><br>Brazil", {maxWidth: 120, closeButton: true});     

        var marker10 = WE.marker([-23.550520, -46.633309]).addTo(earth);
        marker10.bindPopup("<b>Samba</b><br>Brazil", {maxWidth: 120, closeButton: true});

        var marker11 = WE.marker([-33.469120, -70.641997]).addTo(earth);
        marker11.bindPopup("<b>Santiago</b><br>Chile", {maxWidth: 120, closeButton: true});
        
        var marker12 = WE.marker([-33.047238, -71.612688]).addTo(earth);
        marker12.bindPopup("<b>Valparaiso</b><br>Chile", {maxWidth: 120, closeButton: true});

        var marker13 = WE.marker([-12.046374, -77.042793]).addTo(earth);
        marker13.bindPopup("<b>Lima</b><br>Peru", {maxWidth: 120, closeButton: true});

        var marker14 = WE.marker([4.598056, -74.075833]).addTo(earth);
        marker14.bindPopup("<b>Bogota</b><br>Colombia", {maxWidth: 120, closeButton: true});   

        var marker15 = WE.marker([10.469640, -66.803719]).addTo(earth);
        marker15.bindPopup("<b>Caracas</b><br>Venezuela", {maxWidth: 120, closeButton: true});  

        var marker16 = WE.marker([-0.180653, -78.467838]).addTo(earth);
        marker16.bindPopup("<b>Quito</b><br>Ecuador", {maxWidth: 120, closeButton: true}); 

        var marker17 = WE.marker([-16.500000, -68.15]).addTo(earth);
        marker17.bindPopup("<b>La Paz</b><br>Bolivia", {maxWidth: 120, closeButton: true});

        var marker18 = WE.marker([20.659699, -103.349609]).addTo(earth);
        marker18.bindPopup("<b>Guadalajara</b><br>Mexico", {maxWidth: 120, closeButton: true});

        var marker19 = WE.marker([17.983333, -76.8]).addTo(earth);
        marker19.bindPopup("<b>Kingston</b><br>Jamaica", {maxWidth: 120, closeButton: true});

        var marker20 = WE.marker([18.466667, -69.95]).addTo(earth);
        marker20.bindPopup("<b>Santo Domingo</b><br>Dominican Republic", {maxWidth: 120, closeButton: true});

        var marker21 = WE.marker([42.812526, -1.645775]).addTo(earth);
        marker21.bindPopup("<b>Pamplona</b><br>Spain", {maxWidth: 120, closeButton: true});
        
        var marker22 = WE.marker([40.416775, -3.70379]).addTo(earth);
        marker22.bindPopup("<b>Madrid</b><br>Spain<br><li>Zarzuela</li>", {maxWidth: 120, closeButton: true});

        var marker23 = WE.marker([30.044420, 31.235712]).addTo(earth);
        marker23.bindPopup("<b>Riyadh</b><br>Egypt", {maxWidth: 120, closeButton: true});
        
        var marker24 = WE.marker([24.633333, 46.716667]).addTo(earth);
        marker24.bindPopup("<b>Cairo</b><br>Saudi Arabia", {maxWidth: 120, closeButton: true});

        var marker25 = WE.marker([37.983917, 23.72936]).addTo(earth);
        marker25.bindPopup("<b>Athens</b><br>Greece", {maxWidth: 120, closeButton: true});

        var marker26 = WE.marker([41.902783, 12.496366]).addTo(earth);
        marker26.bindPopup("<b>Rome</b><br>Italy", {maxWidth: 120, closeButton: true});

        var marker27 = WE.marker([55.755826, 37.6173]).addTo(earth);
        marker27.bindPopup("<b>Moscow</b><br>Russia", {maxWidth: 120, closeButton: true});

        var marker28 = WE.marker([8.983333, -79.516667]).addTo(earth);
        marker28.bindPopup("<b>Panama</b><br>Panama", {maxWidth: 120, closeButton: true});

        var marker29 = WE.marker([24.027720, -104.653176]).addTo(earth);
        marker29.bindPopup("<b>Durango</b><br>Mexico", {maxWidth: 120, closeButton: true});

        var marker30 = WE.marker([25.761680, -80.19179]).addTo(earth);
        marker30.bindPopup("<b>Miami</b><br>Florida", {maxWidth: 120, closeButton: true});

        var marker31 = WE.marker([41.878114, -87.629798]).addTo(earth);
        marker31.bindPopup("<b>Chicago</b><br>Illinois", {maxWidth: 120, closeButton: true});

        var marker32 = WE.marker([32.776475, -79.931051]).addTo(earth);
        marker32.bindPopup("<b>Charleston</b><br>South Carolina", {maxWidth: 120, closeButton: true});

        var marker33 = WE.marker([47.606209, -122.332071]).addTo(earth);
        marker33.bindPopup("<b>Seattle</b><br>Washington", {maxWidth: 120, closeButton: true});

        var marker34 = WE.marker([52.520007, 13.404954]).addTo(earth);
        marker34.bindPopup("<b>Berlin</b><br>Germany", {maxWidth: 120, closeButton: true});

        var marker35 = WE.marker([52.229676, 21.012229]).addTo(earth);
        marker35.bindPopup("<b>Warsaw</b><br>Poland", {maxWidth: 120, closeButton: true});

        var marker36 = WE.marker([30.267153, -97.743061]).addTo(earth);
        marker36.bindPopup("<b>Austin</b><br>Texas", {maxWidth: 120, closeButton: true});

        var marker37 = WE.marker([19.075984, 72.877656]).addTo(earth);
        marker37.bindPopup("<b>Mumbai</b><br>India", {maxWidth: 120, closeButton: true});

        var marker38 = WE.marker([36.162664, -86.781602]).addTo(earth);
        marker38.bindPopup("<b>Nashville</b><br>Tennessee", {maxWidth: 120, closeButton: true});

        var marker39 = WE.marker([33.748995, -84.387982]).addTo(earth);
        marker39.bindPopup("<b>Atlanta</b><br>Georgia", {maxWidth: 120, closeButton: true});

        var marker40 = WE.marker([18.466334, -66.105722]).addTo(earth);
        marker40.bindPopup("<b>San Juan</b><br>Puerto Rico", {maxWidth: 120, closeButton: true});

        var marker41 = WE.marker([37.774929, -122.419416]).addTo(earth);
        marker41.bindPopup("<b>San Francisco</b><br>California", {maxWidth: 120, closeButton: true});

        var marker42 = WE.marker([51.507351, -0.127758]).addTo(earth);
        marker42.bindPopup("<b>London</b><br>United Kingdom", {maxWidth: 120, closeButton: true});

        var marker43 = WE.marker([21.306944, -157.858333]).addTo(earth);
        marker43.bindPopup("<b>Honolulu</b><br>Hawaii", {maxWidth: 120, closeButton: true});

        var marker44 = WE.marker([35.709026, 139.731992]).addTo(earth);
        marker44.bindPopup("<b>Tokyo</b><br>Japan", {maxWidth: 120, closeButton: true});

        var marker45 = WE.marker([48.856614, 2.352222]).addTo(earth);
        marker45.bindPopup("<b>Paris</b><br>France", {maxWidth: 120, closeButton: true});

        var marker46 = WE.marker([50.850340, 4.35171]).addTo(earth);
        marker46.bindPopup("<b>Brussels</b><br>Belgium", {maxWidth: 120, closeButton: true});

        var marker47 = WE.marker([47.497912, 19.040235]).addTo(earth);
        marker47.bindPopup("<b>Budapest</b><br>Hungary", {maxWidth: 120, closeButton: true});

        var marker48 = WE.marker([55.864237, -4.251806]).addTo(earth);
        marker48.bindPopup("<b>Glasgow</b><br>Scotland", {maxWidth: 120, closeButton: true});

        var marker49 = WE.marker([-25.282197, -57.6351]).addTo(earth);
        marker49.bindPopup("<b>Asuncion</b><br>Paraguay", {maxWidth: 120, closeButton: true});

        var marker50 = WE.marker([64.133333, -21.933333]).addTo(earth);
        marker50.bindPopup("<b>Reykjavik</b><br>Iceland", {maxWidth: 120, closeButton: true});

        var marker51 = WE.marker([59.329323, 18.068581]).addTo(earth);
        marker51.bindPopup("<b>Stockholm</b><br>Sweden", {maxWidth: 120, closeButton: true});

        var marker52 = WE.marker([50.110922, 8.682127]).addTo(earth);
        marker52.bindPopup("<b>Frankfurt</b><br>Germany", {maxWidth: 120, closeButton: true});

        var marker53 = WE.marker([45.501689, -73.567256]).addTo(earth);
        marker53.bindPopup("<b>Montreal</b><br>Canada", {maxWidth: 120, closeButton: true});

        var marker54 = WE.marker([33.950000, -83.383333]).addTo(earth);
        marker54.bindPopup("<b>Athens</b><br>Georgia", {maxWidth: 120, closeButton: true});

        var marker55 = WE.marker([42.331427, -83.045754]).addTo(earth);
        marker55.bindPopup("<b>Detroit</b><br>Michigan", {maxWidth: 120, closeButton: true});

        var marker56 = WE.marker([53.349805, -6.26031]).addTo(earth);
        marker56.bindPopup("<b>Dublin</b><br>Ireland", {maxWidth: 120, closeButton: true});

        var marker57 = WE.marker([38.906734, 1.420598]).addTo(earth);
        marker57.bindPopup("<b>Ibiza</b><br>Spain", {maxWidth: 120, closeButton: true});

        var marker58 = WE.marker([6.524379, 3.379206]).addTo(earth);
        marker58.bindPopup("<b>Lagos</b><br>Nigeria", {maxWidth: 120, closeButton: true});

        var marker59 = WE.marker([55.953252, -3.188267]).addTo(earth);
        marker59.bindPopup("<b>Edinburgh</b><br>Scotland", {maxWidth: 120, closeButton: true});

        var marker60 = WE.marker([-26.204103, 28.047305]).addTo(earth);
        marker60.bindPopup("<b>Johannesburg</b><br>South Africa", {maxWidth: 120, closeButton: true});

        var marker61 = WE.marker([-1.455755, -48.49018]).addTo(earth);
        marker61.bindPopup("<b>Belém</b><br>Brazil", {maxWidth: 120, closeButton: true});

        var marker62 = WE.marker([41.252363, -95.997988]).addTo(earth);
        marker62.bindPopup("<b>Omaha</b><br>Nebraska", {maxWidth: 120, closeButton: true});

        var marker63 = WE.marker([3.139003, 101.686855]).addTo(earth);
        marker63.bindPopup("<b>Kuala Lumpur</b><br>Malaysia", {maxWidth: 120, closeButton: true});

        var marker64 = WE.marker([52.486243, -1.890401]).addTo(earth);
        marker64.bindPopup("<b>Birmingham</b><br>United Kingdom", {maxWidth: 120, closeButton: true});

        var marker65 = WE.marker([53.381129, -1.470085]).addTo(earth);
        marker65.bindPopup("<b>Sheffield</b><br>United Kingdom", {maxWidth: 120, closeButton: true});

        var marker66 = WE.marker([51.454513, -2.58791]).addTo(earth);
        marker66.bindPopup("<b>Bristol</b><br>United Kingdom", {maxWidth: 120, closeButton: true});

        var marker67 = WE.marker([53.480759, -2.242631]).addTo(earth);
        marker67.bindPopup("<b>Manchester</b><br>United Kingdom", {maxWidth: 120, closeButton: true});

        var marker68 = WE.marker([-1.292066, 36.821946]).addTo(earth);
        marker68.bindPopup("<b>Niarobi</b><br>Kenya", {maxWidth: 120, closeButton: true});

        var marker69 = WE.marker([31.230416, 121.473701]).addTo(earth);
        marker69.bindPopup("<b>Shanghai</b><br>China", {maxWidth: 120, closeButton: true});

        var marker70 = WE.marker([22.396428, 114.109497]).addTo(earth);
        marker70.bindPopup("<b>Hong Kong</b><br>China", {maxWidth: 120, closeButton: true});

        var marker71 = WE.marker([37.566535, 126.977969]).addTo(earth);
        marker71.bindPopup("<b>Seoul</b><br>South Korea", {maxWidth: 120, closeButton: true});

        var marker72 = WE.marker([1.352083, 103.819836]).addTo(earth);
        marker72.bindPopup("<b>Singapore</b><br>Asia", {maxWidth: 120, closeButton: true});

        var marker73 = WE.marker([13.756331, 100.501765]).addTo(earth);
        marker73.bindPopup("<b>Bangkok</b><br>Thailand", {maxWidth: 120, closeButton: true});

        var marker74 = WE.marker([-37.814107, 144.96328]).addTo(earth);
        marker74.bindPopup("<b>Melbourne</b><br>Australia", {maxWidth: 120, closeButton: true});


        earth.setView([34.137952, -118.232117], 3);


                 // **** ROTATING ANIMATION ****

   var before = null;
        requestAnimationFrame(function animate(now) {
            var c = earth.getPosition();
            var elapsed = before? now - before: 0;
            before = now;
            earth.setCenter([c[0], c[1] + 0.1*(elapsed/30)]);
            requestAnimationFrame(animate);
        });


        
      }
