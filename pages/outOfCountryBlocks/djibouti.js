module.exports = {
  url: function() { 
    return this.api.launchUrl + '/product/private-beta/uk-visit-visa/djibouti'
  },
  elements: {
    body: 'body',
    applicationTitle: {
      selector: '#applicationTitle',
    },
    content: {
      selector: '.content-max-width',
    },
    iCanGo: {
      selector: 'input[id=vacAvailabilityConfirmed_true]'
    },
    iCantGo: {
      selector: 'input[id=vacAvailabilityConfirmed_false]'
    },
    next: 'input[id=submit]'
  }
};