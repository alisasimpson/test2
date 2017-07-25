jQuery.fn.foxholder = function() {
    //adding labels with placeholders content. Removing placeholders
    this.find('form').find('input').not(".tt").each(function () {
        var placeholderText, formItemId, inputType;

        //wrapping form elements in their oun <div> tags
        jQuery(this).wrap('<div class="form-item-block"></div>');

        //creating labels
        inputType = jQuery(this).attr('type');

        if (inputType == 'hidden') {

        } else {
            placeholderText = jQuery(this).attr('placeholder');
            formItemId = jQuery(this).attr('id')
            jQuery(this).after('<label for="' + formItemId + '"><span>' + placeholderText + '</span></label>');
            jQuery(this).removeAttr('placeholder');
        }
    });

    //adding class on blur
    jQuery('.input1 form').find('input').blur(function () {
        if (jQuery.trim(jQuery(this).val()) != "") {
            jQuery(this).addClass("active");
        } else {
            jQuery(this).removeClass("active");
        }
    });
        jQuery('input').focus(function () {
            var labelTop;
            labelTop = parseInt(jQuery(this).css('padding-top'));
            jQuery(this).next('label').css({'top': 0 - (labelTop + 6)});
            console.log(labelTop);
        });

        jQuery('input').blur(function () {
            if (jQuery(this).hasClass('active')) {
            } else {
                jQuery(this).next('label').css({'top': 0});
            }
        });

};

