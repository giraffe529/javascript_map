// JavaScript

const map = L.map('map').setView([33.667829, 130.313121], 15);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


//アイコン
//const whiteIcon = L.icon({
//    iconUrl: 'images/ico.png',
//    shadowUrl: 'images/ico_shadow.png',
  
//  iconSize:     [40, 40], // size of the icon
//  shadowSize:   [40, 40], // size of the shadow
//  iconAnchor:   [20, 40], // point of the icon which will correspond to marker's location
//  shadowAnchor: [20, 40],  // the same for the shadow
//  popupAnchor:  [0, -42] // point from which the popup should open relative to the iconAnchor
//  });

//  L.marker([33.667829, 130.313121], { icon: whiteIcon }).addTo(map).bindPopup('志賀海神社<br><img src="images/img01.JPG" alt="img">').openPopup();
  
  //複数アイコンをまとめて定義
const circleIcon = L.Icon.extend({
    options: {
      shadowUrl: 'images/ico_shadow.png',
      iconSize: [40, 40],
      shadowSize: [40, 40],
      iconAnchor: [20, 40],
      shadowAnchor: [20, 40],
      popupAnchor: [0, -42]
    }
  });
  
  const whiteIcon = new circleIcon({ iconUrl: 'images/ico.png' }),
    pinkIcon = new circleIcon({ iconUrl: 'images/ico_pink.png' });
  
  L.marker([33.667829, 130.313121], { icon: whiteIcon }).addTo(map).bindPopup('こんにちは！');
  L.marker([33.620734, 130.305301], { icon: pinkIcon }).addTo(map).bindPopup('こんにちは！');