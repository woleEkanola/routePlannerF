
    // Initialize and add the map
    function initMap() {
        var directionsService = new google.maps.DirectionsService();
        var directionsDisplay = new google.maps.DirectionsRenderer();
        // The location of Lagos
        var Lagos = { lat: 6.5244, lng: 3.3792 };
        // The map, centered at Lagos
        var map = new google.maps.Map(
          document.getElementById('map'), {
            zoom: 8,
            center: Lagos,
            styles: [
              { elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
              { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
              { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
              {
                featureType: 'administrative.locality',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#d59563' }]
              },
              {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#d59563' }]
              },
              {
                featureType: 'poi.park',
                elementType: 'geometry',
                stylers: [{ color: '#263c3f' }]
              },
              {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#6b9a76' }]
              },
              {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{ color: '#38414e' }]
              },
              {
                featureType: 'road',
                elementType: 'geometry.stroke',
                stylers: [{ color: '#212a37' }]
              },
              {
                featureType: 'road',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#9ca5b3' }]
              },
              {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [{ color: '#746855' }]
              },
              {
                featureType: 'road.highway',
                elementType: 'geometry.stroke',
                stylers: [{ color: '#1f2835' }]
              },
              {
                featureType: 'road.highway',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#f3d19c' }]
              },
              {
                featureType: 'transit',
                elementType: 'geometry',
                stylers: [{ color: '#2f3948' }]
              },
              {
                featureType: 'transit.station',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#d59563' }]
              },
              {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [{ color: '#17263c' }]
              },
              {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#515c6d' }]
              },
              {
                featureType: 'water',
                elementType: 'labels.text.stroke',
                stylers: [{ color: '#17263c' }]
              }
            ]
          });
  
          directionsDisplay.setMap(map);
  
  
        function addMarker(props) {
  
          var marker = new google.maps.Marker({
            position: props.coords,
            map: map,
            label: props.label,
            animation: google.maps.Animation.DROP
          });
  
          if (props.iconImage) {
            marker.setIcon(props.iconImage);
          }
  
        marker.metadata = {
            id: props.id,
            name: props.name,
            address: props.address,
            driver: props.driver

        
        }
          marker.addListener('click', function () {
              
              displayInfo(this.metadata)
            });
            function toggleBounce() {
          if (marker.getAnimation() !== null) {
            marker.setAnimation(null);
          } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
          }
        }
  
          marker.addListener('click', toggleBounce);
  
        }
  var icon = 'https://firebasestorage.googleapis.com/v0/b/reacttenuapp.appspot.com/o/customer.svg?alt=media&token=cf0a5610-3bf9-4933-83d9-a022aefaffad'
        var markers = [
          {
            coords: { lat: 6.5536, lng: 3.3567 },
            content: `<h4>Lasissi</h4>`,
            iconImage: icon        },
          {
            coords: { lat: 6.4926, lng: 3.3490 },
            iconImage: icon        },
          {
            coords: { lat: 6.5095, lng: 3.3711 },
            iconImage: icon
  
          },
          {
            coords: { lat: 6.5381, lng: 3.3213 },
            iconImage: icon
          }
  
        ]
  
         const markersWithLabels = markers.map((marks, index)=>{
           return {
             ...marks,
             label:(index + 1).toString()
           }
        })
  
  drivers.map(dr=>{
    for(var i =0; i < dr.routes.length; i++){
        addMarker(dr.routes[i]);
      }
  })
        
    }  