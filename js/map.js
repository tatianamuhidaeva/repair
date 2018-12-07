ymaps.ready(function () {
  var myMap = new ymaps.Map('footer-map', {
      center: [55.683372, 37.414188],
      zoom: 15
    }, {
      searchControlProvider: 'yandex#search'
    }),    

    myPlacemark = new ymaps.Placemark([55.685266, 37.410705], {
      hintContent: 'ООО Ремонт квартир, г.Москва, ул. Ленинга, д. 10',
      balloonContent: 'Приезжайте к нам в гости!'
    }, 
    {
      // Опции.
      // Необходимо указать данный тип макета.
      iconLayout: 'default#image',
      // Своё изображение иконки метки.
      iconImageHref: 'img/geo-placemark.png',
      // Размеры метки.
      iconImageSize: [64, 64],
      // Смещение левого верхнего угла иконки относительно
      // её "ножки" (точки привязки).
      iconImageOffset: [0, 0]
    });

  myMap.behaviors.disable('drag'),
  myMap.behaviors.disable('scrollZoom'),
  myMap.geoObjects.add(myPlacemark)
});