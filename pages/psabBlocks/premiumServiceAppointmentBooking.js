module.exports = {
  url: function() { 
    return this.api.launchUrl + '/product/premium-service-appointment-booking'
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