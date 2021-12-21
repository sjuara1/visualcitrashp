ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:32649").setExtent([424485.000000, -790065.000000, 432375.000000, -766605.000000]);
var wms_layers = [];

var format_shpvisualcitra_0 = new ol.format.GeoJSON();
var features_shpvisualcitra_0 = format_shpvisualcitra_0.readFeatures(json_shpvisualcitra_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32649'});
var jsonSource_shpvisualcitra_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_shpvisualcitra_0.addFeatures(features_shpvisualcitra_0);
var lyr_shpvisualcitra_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_shpvisualcitra_0, 
                style: style_shpvisualcitra_0,
                interactive: true,
    title: 'shpvisualcitra<br />\
    <img src="styles/legend/shpvisualcitra_0_0.png" /> WaterBody<br />\
    <img src="styles/legend/shpvisualcitra_0_1.png" /> Vegetasi Kanopi<br />\
    <img src="styles/legend/shpvisualcitra_0_2.png" /> Pertanian<br />\
    <img src="styles/legend/shpvisualcitra_0_3.png" /> Permukiman<br />'
        });

lyr_shpvisualcitra_0.setVisible(true);
var layersList = [lyr_shpvisualcitra_0];
lyr_shpvisualcitra_0.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', });
lyr_shpvisualcitra_0.set('fieldImages', {'fid': 'TextEdit', 'DN': 'TextEdit', });
lyr_shpvisualcitra_0.set('fieldLabels', {'fid': 'no label', 'DN': 'no label', });
lyr_shpvisualcitra_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});