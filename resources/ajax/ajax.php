<?php

   // if( $curl = curl_init() ) {
   //   // curl_setopt($curl, CURLOPT_URL, 'http://free.worldweatheronline.com/feed/weather.ashx?key=23f6a0ab24185952101705&q=94301&format=json&num_of_days=5');
   //   curl_setopt($curl, CURLOPT_URL, 'https://maps.googleapis.com/maps/api/place/textsearch/json?query='.$_POST['query'].'&sensor=false&key=AIzaSyCBrg8f9434YkwVMtL5aZ6nqAeSt7WAUOo');
   //   curl_setopt($curl, CURLOPT_RETURNTRANSFER,true);
   //   $out = curl_exec($curl);
   //   echo $out;
   //   curl_close($curl);
   // }
  echo '{
   "debug_info" : [],
   "html_attributions" : [],
   "results" : [
      {
         "formatted_address" : "Augsburg, Germany",
         "geometry" : {
            "location" : {
               "lat" : 48.37144070000001,
               "lng" : 10.8982552
            },
            "viewport" : {
               "northeast" : {
                  "lat" : 48.458654,
                  "lng" : 10.959519
               },
               "southwest" : {
                  "lat" : 48.2581444,
                  "lng" : 10.7633614
               }
            }
         },
         "icon" : "http://maps.gstatic.com/mapfiles/place_api/icons/geocode-71.png",
         "id" : "49011ef7156cb76ebd8101248566476aebe9b66b",
         "name" : "Augsburg",
         "reference" : "CoQBeQAAAIUXShvs4l9MMF3T9DjGKcZ5SWzTk3HRdQYyH5Y-WIrYrWPb7PylGvVXHoZ_MMRiPSzea-mvULXnbv5BNgHi4bJFEQ8ZOHvGPrxI0qTNF0ZoQIX6EvIz1jCLL7r_b7MfDtwMre4jBo-HRnz8CepZGWbqVkL6wO8ef1KWAk5Ex2RDEhAv_s41Ty3GYtu2UukZsCAdGhRThjgQXm_NEfCWD85fIuViXC3--Q",
         "types" : [ "locality", "political" ]
      },
      {
         "formatted_address" : "RRRRRRRRR, USA",
         "geometry" : {
            "location" : {
               "lat" : 48.37144070000001,
               "lng" : 10.8982552
            },
            "viewport" : {
               "northeast" : {
                  "lat" : 48.458654,
                  "lng" : 10.959519
               },
               "southwest" : {
                  "lat" : 48.2581444,
                  "lng" : 10.7633614
               }
            }
         },
         "icon" : "http://maps.gstatic.com/mapfiles/place_api/icons/geocode-71.png",
         "id" : "49011ef7156cb76ebd8101248566476aebe9b66b",
         "name" : "RRRRRRRRR",
         "reference" : "CoQBeQAAAIUXShvs4l9MMF3T9DjGKcZ5SWzTk3HRdQYyH5Y-WIrYrWPb7PylGvVXHoZ_MMRiPSzea-mvULXnbv5BNgHi4bJFEQ8ZOHvGPrxI0qTNF0ZoQIX6EvIz1jCLL7r_b7MfDtwMre4jBo-HRnz8CepZGWbqVkL6wO8ef1KWAk5Ex2RDEhAv_s41Ty3GYtu2UukZsCAdGhRThjgQXm_NEfCWD85fIuViXC3--Q",
         "types" : [ "locality", "political" ]
      }
   ],
   "status" : "OK"
}';