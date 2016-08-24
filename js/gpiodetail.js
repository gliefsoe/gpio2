var GPIODetail = function(gpio) {

    this.initialize = function() {
        this.el = $('<div/>');
    };

    this.render = function() {
        this.el.html(GPIODetail.template(gpio));
        return this;
    };

    this.initialize();

 }

GPIODetail.template = Handlebars.compile($("#gpio-detail-tpl").html());

