module.exports = {
  url: function() { 
    return this.api.launchUrl + '/product/tier-4-student'
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