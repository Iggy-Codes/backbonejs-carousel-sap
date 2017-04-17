var app = app || {}

app.BlocksAPICollection = Backbone.Collection.extend({ // eslint-disable-line no-undef

  model: app.SingleBlock,
  url: '/api',
  parse: function (data) {
    return data.images
  }
})

