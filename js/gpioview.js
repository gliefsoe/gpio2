var GPIOView = function(store) {
    
    this.render = function() {
        this.el.html(GPIOView.template());
        return this;
    };

    this.findByName = function() {
        store.gpio_findByName($('.gpio-search-key').val(), function(lstGPIOResult) {
            $('.gpio-list').html(GPIOView.liTemplate(lstGPIOResult));
        });
    };
    
    this.initialize = function() {
        // Define a div wrapper for the view. The div wrapper is used to attach events.
        this.el = $('<div/>');
        this.el.on('keyup', '.gpio-search-key', this.findByName);
        
        store.gpio_findByName("", function(lstGPIOResult) {
            $('.gpio-list').html(GPIOView.liTemplate(lstGPIOResult));
        });
    };
 
    this.initialize();
 
}
 
GPIOView.template = Handlebars.compile($("#gpio-tpl").html());
GPIOView.liTemplate = Handlebars.compile($("#gpio-li-tpl").html());