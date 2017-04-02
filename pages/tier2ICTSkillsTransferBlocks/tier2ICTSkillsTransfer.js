module.exports = {
  url: function() { 
    return this.api.launchUrl + '/product/tier2-ict-skills-transfer'
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