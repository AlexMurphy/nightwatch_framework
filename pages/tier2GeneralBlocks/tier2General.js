module.exports = {
  url: function() { 
    return this.api.launchUrl + '/product/tier2-general'
  },
  elements: {
    body: 'body',
    applicationTitle: {
      selector: '#applicationTitle',
    },
    content: {
      selector: '.content-max-width',
    },
    applyNow: '.button'
    },
};