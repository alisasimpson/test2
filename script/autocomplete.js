jQuery('document').ready(function () {
    jQuery(function ($) {
        $('input[name="company"]').autoComplete({
            minChars: 1,
            source: function (term, response) {
                $.getJSON('https://autocomplete.clearbit.com/v1/companies/suggest', {query: term}, function (data) {
                    response(data);
                });
            },
            renderItem: function (item, search) {
                default_logo = 'https://s3.amazonaws.com/clearbit-blog/images/company_autocomplete_api/unknown.gif'

                if (item.logo == null) {
                    logo = default_logo
                } else {
                    logo = item.logo + '?size=25'
                }

                container = '<div class="autocomplete-suggestion" data-name="' + item.name + '" data-val="' + search + '">'
                container += '<span class="icon"><img align="center" src="' + logo + '" onerror="this.src=\'' + default_logo + '\'"></span> '
                container += item.name + '<span class="domain">' + item.domain + '</span></div>';
                return container
            },
            onSelect: function (e, term, item) {
                $('input[name="company"]').val(item.data('name'))
            },
        });
    });
});