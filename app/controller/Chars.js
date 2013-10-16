/**
* Chars controller
*/
Ext.define('Ladr.controller.Chars', {
  extend: 'Ext.app.Controller',
  
  models: ['Char', 'ClickedChar', 'Address'],
  stores: ['Chars', 'ClickedChars', 'Addresses'],

  char_to_store: {},

  me: {},
  
  refs: [
    {ref: 'charTopBar',     selector: 'chartopbar'},
    {ref: 'charSideBar',    selector: 'charsidebar'},
    {ref: 'addressList',    selector: 'addressview'},
    {ref: 'chartPanel', selector: 'chartpanel'},
    {ref: 'chartWindow', selector: 'chratwindow'},
    {ref: 'chartView', selector: 'chartview'}
  ],
  
  init: function() {
    me = this;
    
    me.control({
      'chartopbar': {
        itemclick: me.initCharAdr
      },
      'charsidebar': {
        selectionchange: me.showNestedAddress
      },
      '#showchartwindow': {
        click: me.showChart
      }
    });
  },
  
  onLaunch: function() {
      this.getCharTopBar().bindStore(this.getCharsStore());
  },

  showChart: function() {
    
    clicked_char_store = this.getClickedCharsStore();
    
    chart_window = Ext.create('Ladr.view.chart.Window');
    chart = chart_window.child('#charschart');
    chart.bindStore(clicked_char_store);
    chart_window.show();

    // chart_view = this.getChartView();
    // chart = chart_view.child('#charschart');
    // chart.bindStore(clicked_char_store);
    // chart.redraw();
  },

  showNestedAddress: function(view, records) {
    me.getAddressList().bind(records[0], me.getAddressesStore());
  },

  initCharAdr: function(view, records){
    char_to_store = {
      id: records.get('id'),
      char: records.get('char'),
      data: 0,
      addresses: []
    };
    this.initialize(records.get('char'));
  },

  initialize: function(pchar) {

    var pyrmont = new google.maps.LatLng(-33.8665433,151.1956316);
    map = new google.maps.Map(document.getElementById('map-canvas'), {
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      center: pyrmont,
      zoom: 15
    });

    var request = {
      location: pyrmont,
      radius: '500',
      query: pchar
    };

    service = new google.maps.places.PlacesService(map);
    service.textSearch(request, me.callback);
  },

  callback: function(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      var addresses = [];
      for (var i = 0; i < results.length; i++) {
        addresses.push({
          id: i,
          address: results[i].formatted_address
        });
        current_adrr = results[i].formatted_address.toUpperCase();
        char_to_store.data += current_adrr.split(char_to_store.char).length - 1
      }
      char_to_store.addresses = addresses;
      me.getClickedCharsStore().loadRawData(char_to_store, true);
      me.getCharSideBar().bindStore(me.getClickedCharsStore());
    }
  }

});