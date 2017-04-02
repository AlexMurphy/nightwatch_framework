module.exports = {
  url: function() { 
    return this.api.launchUrl + '/product/uk-visit-visa'; 
  },
  elements: {
  	body: 'body',
  	english: {
  		selector: 'input[id=languageCode_en]'
  	},
    gujrati: {
      selector: 'input[id=languageCode_gu]'
    },
  	next: 'input[id=submit]'
  },
};