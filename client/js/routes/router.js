var app = app || {}

app.Router = Backbone.Router.extend({// eslint-disable-line no-undef

  routes: {
    ':id': 'loadOffset'
  },

  loadOffset: function (id) {
    if (isNaN(id) || id < 1) id = 1
    app.config.startingGroup = (id > app.config.endingGroup) ? app.config.endingGroup : parseInt(id)
    let start = (app.config.startingGroup - 1) * app.config.imgsGroup
    app.carBlocks.set(app.allBlocks.slice(start, start + app.config.imgsGroup))
  }

})
