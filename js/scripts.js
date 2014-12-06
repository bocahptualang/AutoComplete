$(document).ready(function() {
    $('#cmbProvinsi').combobox({small: true});
    var provinsi = new Bloodhound({
        datumTokenizer: Bloodhound.tokenizers.obj.whitespace('text'),
        queryTokenizer: Bloodhound.tokenizers.whitespace,
        limit: 10,
        prefetch: "provinsi.php"
    });
    provinsi.initialize();
    provinsi.clearPrefetchCache(); //for debug only
    $("#txtProvinsi").typeahead({
        hint: true,
        highlight: true,
        itemSelected: function(obj) {
            console.log(obj);
        },
        minLength: 1
    }, {
        name: 'provinsi',
        displayKey: 'text',
        source: provinsi.ttAdapter()
    }).on('typeahead:selected', function(evt, item) {
        console.log(item);
    }).on('typeahead:autocompleted', function(evt, item) {
        console.log(item);
    }).on('typeahead:closed', function(evt, item, c) {});
});