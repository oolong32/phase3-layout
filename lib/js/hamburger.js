/**
 * hamburger.js
 *
 * Mobile Menu Hamburger
 * =====================
 * A hamburger menu for mobile websites
 *
 * Curtesy of Thomas Zinnbauer YMC AG  |  http://www.ymc.ch
 * Date: 21.05.13
 */

jQuery(document).ready(function() {

	//.ym-wrapper = .ym-wrapper
	
    //Open the menu
    jQuery("#hamburger").click(function() {

        //set the width of primary content container -> content should not scale while animating
        var contentWidth = jQuery('.content-col').width();

        //set the content with the width that it has originally
        jQuery('.content-col').css('width', contentWidth);

        //display a layer to disable clicking and scrolling on the content while menu is shown
        jQuery('#contentLayer').css('display', 'block');

        //disable all scrolling on mobile devices while menu is shown
        jQuery('.ym-wrapper').bind('touchmove', function(e){e.preventDefault()});

        //set margin for the whole container with a jquery UI animation
        jQuery(".ym-wrapper").animate({"marginLeft": ["70%", 'easeOutExpo']}, {
            duration: 700
        });

    });

    //close the menu
    jQuery("#contentLayer").click(function() {

        //enable all scrolling on mobile devices when menu is closed
        jQuery('.ym-wrapper').unbind('touchmove');

        //set margin for the whole container back to original state with a jquery UI animation
        jQuery(".ym-wrapper").animate({"marginLeft": ["0", 'easeOutExpo']}, {
            duration: 700,
            complete: function() {
                  jQuery('.content-col').css('width', 'auto');
                jQuery('#contentLayer').css('display', 'none');

            }
        });
    });

});
