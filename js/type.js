(function ($) {
    var self = this;
    // Insert cursor
    if (this.showCursor === true) {
        this.cursor = $("<span class=\"typed-cursor\">" + this.cursorChar + "</span>");
        this.el.after(this.cursor);
    }
    if (this.stringsElement) {
        self.strings = [];
        this.stringsElement.hide();
        var strings = this.stringsElement.find('p');
        $.each(strings, function(key, value){
            self.strings.push($(value).html());
        });
    }
    this.init();
   
   })(jQuery);