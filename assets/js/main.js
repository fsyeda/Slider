jQuery(document).ready(function($){
    
    var WB_accodion = function(el){
        this.el         = el;
        this.accordion  = el.find('.wb_accodion_wrap');
        this.swiper     = null;
        
        

        this.run();
    }
    WB_accodion.prototype.run = function()
    {
        var me = this,
            swiper_tab  = me.el.find('.tab_slider'),
            swiper = swiper_tab.find('.swiper');
        this.accordion.accordion({
            heightStyle: "content",
            animate: { duration: 500, opacity: "toggle" },
            // activate: function(e,ui){
            //     //me.gennerateSlider(ui.newHeader);
            //     me.goto_slide(ui.newHeader);
            // },
            // create: function(e,ui){
            //     //me.gennerateSlider(ui.header);
            //     me.goto_slide(ui.header);
            // },
        });
        this.swiper = new Swiper(swiper[0],{
            loop: false,
            navigation: {
                nextEl: swiper_tab.find('.swiper-button-next')[0],
                prevEl: swiper_tab.find('.swiper-button-prev')[0],
            },
            on: {
                slideChange: function() {
                    // Get index of active slide
                    var index = me.swiper.activeIndex;
                    console.log(index);
                    
                    // Update active accordion header
                    me.accordion.accordion("option", "active", index);
                }
            }
        });
        this.accordion.on("click",'._heading', function() {
            // Get index of clicked header
            var index = $(this).data('index');
            console.log(index);

            
            // Change active slide in Swiper
            me.swiper.slideTo(index);
          });
        
        
    }
    WB_accodion.prototype.goto_slide = function(header)
    {
        var slide_index = header.data('index');
        this.swiper.slideTo(slide_index);
        

    }
    // WB_accodion.prototype.gennerateSlider = function(header)
    // {
    //     var imgs    = header.data('imgs'),
    //         self    = this,
    //         tabsw   = header.data('swiper'),
    //         swiper_tab  = self.el.find('.tab_slider'),
            
    //         swiper = swiper_tab.find('.swiper');
    //         console.log(swiper);
    //     if(imgs && imgs.length){
    //         if(!self.swiper){
    //             $(imgs).each(function(){
    //                 var html = '<div class="swiper-slide"><div class="item-wrap"><div class="holder"><img src="'+this+'"></div></div></div>';
    //                 swiper.find('.swiper-wrapper').append(html);
    //             });
    //             self.swiper = new Swiper(swiper[0],{
    //                 loop: true,
    //                 navigation: {
    //                     nextEl: swiper_tab.find('.swiper-button-next')[0],
    //                     prevEl: swiper_tab.find('.swiper-button-prev')[0],
    //                 },
    //             })
    //         }else{
    //             self.swiper.removeAllSlides();
    //             $(imgs).each(function(){
    //                 var html = '<div class="swiper-slide"><div class="item-wrap"><div class="holder"><img src="'+this+'"></div></div></div>';
    //                 self.swiper.appendSlide(html);
    //             });

    //         }
            
    //     }
    // }
    $('.wb_accodion').each(function(){
        new WB_accodion($(this));
    })
})