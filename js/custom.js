// menu
$('.t-icon').click(function(){ 
  $('.toggle').toggleClass("mobile-hide");
});

// sticky header
function stickyHeader () {
    if ($('.fixed-menu').length) {
        var strickyScrollPos = 0;
        if($(window).scrollTop() > strickyScrollPos) {
            $('.fixed-menu').addClass('sticky');
        }
        else if($(this).scrollTop() <= strickyScrollPos) {
            $('.fixed-menu').removeClass('sticky');
        }
    };
}

// instance of fuction while Window Scroll event
jQuery(window).on('scroll', function () {   
    (function ($) {
        stickyHeader();
    })(jQuery);
});

$(window).scroll(function() {
    if ($(this).scrollTop()) {
        $('.toTop').fadeIn();
    } else {
        $('.toTop').fadeOut();
    }
});

$(".toTop").click(function () {
   $("html, body").animate({scrollTop: 0}, 1000);
});

$('.banner-home-img').owlCarousel({
        loop: true,
        autoplay: 80000,
        nav: false,
        dots: true,
        autoHeight: true,
        touchDrag: true,
        mouseDrag: true,
        margin: 0,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                autoHeight: false,
            },
            768: {
                items: 1,
                autoHeight: false,
            },
            1200: {
                items: 1,
            }
        },
    });


$('.product-carousel').owlCarousel({
        loop: true,
        autoplay: false,
        nav: true,
        dots: false,
        autoHeight: true,
        touchDrag: false,
        mouseDrag: true,
        margin: 10,
        navText: ["<img src='image/prev.png'>","<img src='image/next.png'>"],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                autoHeight: false,
            },
            360: {
                items: 1,
                autoHeight: false,
            },
            568: {
                items: 2,
                autoHeight: false,
            },
            667: {
                items: 2,
                autoHeight: false,
            },
            768: {
                items: 3,
                autoHeight: false,
            },
            
            1200: {
                items: 4,
            }
        },
    });


var __slice = [].slice;

(function($, window) {
    var Starrr;

    Starrr = (function() {
        Starrr.prototype.defaults = {
            rating: void 0,
            numStars: 5,
            change: function(e, value) {}
        };

        function Starrr($el, options) {
            var i, _, _ref,
                _this = this;

            this.options = $.extend({}, this.defaults, options);
            this.$el = $el;
            _ref = this.defaults;
            for (i in _ref) {
                _ = _ref[i];
                if (this.$el.data(i) != null) {
                    this.options[i] = this.$el.data(i);
                }
            }
            this.createStars();
            this.syncRating();
            this.$el.on('mouseover.starrr', 'i', function(e) {
                return _this.syncRating(_this.$el.find('i').index(e.currentTarget) + 1);
            });
            this.$el.on('mouseout.starrr', function() {
                return _this.syncRating();
            });
            this.$el.on('click.starrr', 'i', function(e) {
                return _this.setRating(_this.$el.find('i').index(e.currentTarget) + 1);
            });
            this.$el.on('starrr:change', this.options.change);
        }

        Starrr.prototype.createStars = function() {
            var _i, _ref, _results;

            _results = [];
            for (_i = 1, _ref = this.options.numStars; 1 <= _ref ? _i <= _ref : _i >= _ref; 1 <= _ref ? _i++ : _i--) {
                _results.push(this.$el.append("<i class='fa fa-star-o'></i>"));
            }
            return _results;
        };

        Starrr.prototype.setRating = function(rating) {
            if (this.options.rating === rating) {
                rating = void 0;
            }
            this.options.rating = rating;
            this.syncRating();
            return this.$el.trigger('starrr:change', rating);
        };

        Starrr.prototype.syncRating = function(rating) {
            var i, _i, _j, _ref;

            rating || (rating = this.options.rating);
            if (rating) {
                for (i = _i = 0, _ref = rating - 1; 0 <= _ref ? _i <= _ref : _i >= _ref; i = 0 <= _ref ? ++_i : --_i) {
                    this.$el.find('i').eq(i).removeClass('fa-star-o').addClass('fa-star');
                }
            }
            if (rating && rating < 5) {
                for (i = _j = rating; rating <= 4 ? _j <= 4 : _j >= 4; i = rating <= 4 ? ++_j : --_j) {
                    this.$el.find('i').eq(i).removeClass('fa-star').addClass('fa-star-o');
                }
            }
            if (!rating) {
                return this.$el.find('i').removeClass('fa-star').addClass('fa-star-o');
            }
        };

        return Starrr;

    })();
    return $.fn.extend({
        starrr: function() {
            var args, option;

            option = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
            return this.each(function() {
                var data;

                data = $(this).data('star-rating');
                if (!data) {
                    $(this).data('star-rating', (data = new Starrr($(this), option)));
                }
                if (typeof option === 'string') {
                    return data[option].apply(data, args);
                }
            });
        }
    });
})(window.jQuery, window);

$(function() {
    return $(".starrr").starrr();
});

$( document ).ready(function() {
      
  $('#stars').on('starrr:change', function(e, value){
    $('#count').html(value);
  });
  
  $('#stars-existing').on('starrr:change', function(e, value){
    $('#count-existing').html(value);
  });
});
