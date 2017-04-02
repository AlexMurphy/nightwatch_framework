module.exports = {
  url: function() { 
    return this.api.launchUrl + '/product/mvp/beta/customer-change-of-details'
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