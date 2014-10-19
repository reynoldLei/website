function AppViewModel() {
    var that = this;
    that.homeTab = true;
    that.eventsTab = false;
    // that.newsTab = false;
    that.aboutTab = false;
    Path.map("#home").to(function() {
        that.homeTab = true;
        that.eventsTab = false;
        that.aboutTab = false;
        that.newsTab = false;
        $("html, body").animate({ scrollTop: 0 }, "slow");
    });

    // Path.map("#news").to(function() {
    //     that.homeTab = false;
    //     that.eventsTab = false;
    //     that.aboutTab = false;
    //     that.newsTab = true;
    // });
    Path.map("#events").to(function() {
        that.homeTab = false;
        that.eventsTab = true;
        that.aboutTab = false;
        $("html, body").animate({ scrollTop: 0 }, "slow");
        // that.newsTab = false;
    });

    Path.map("#about").to(function() {
        that.homeTab = false;
        that.eventsTab = false;
        that.aboutTab = true;
        $("html, body").animate({ scrollTop: 0 }, "slow");
        // that.newsTab = false;
    });

    Path.root("#home");

    Path.listen();
    $('body').addClass('domReady');
    // Instead of declaring ko.observable properties, we just have one call to ko.track 
    ko.track(that);
}


$(document).ready(function() {
    
    $(window).scroll(function() {
        var eTop = $(window).scrollTop();
        $('#navbar').toggleClass('navbar-fixed-top',
            eTop > $('.header-container').height());
    });
    $('#navbar .navbar-nav').on('click', 'li a', function(){
        $('#navbar .navbar-toggle').trigger('click');
    });
    ko.applyBindings(new AppViewModel());
})
