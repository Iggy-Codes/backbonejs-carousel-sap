var app = app || {}

app.BlocksView = Backbone.View.extend({ // eslint-disable-line no-undef

  tagName: 'section',
  className: 'carousel-imgs',

  initialize: function () {
    this.listenTo(this.collection, 'update', this.render)
  },

  render: function () {
    this.$el.html('')
    let status = (app.config.startingGroup <= 1) ? ' DISABLED ' : ''
    let element = `<button id='car-prev' class='control' ${status} onclick="location.href='#${+app.config.startingGroup - 1}'">prev</button>`
    this.$el.append(element)
    this.collection.each(this.addBlock, this)
    status = (app.config.startingGroup >= app.config.endingGroup) ? ' DISABLED ' : ''
    element = `<button id='car-next' class='control' ${status} onclick="location.href='#${+app.config.startingGroup + 1}'">next</button>`
    this.$el.append(element)

    return this
  },

  addBlock: function (block) {
    var blockView = new app.SingleBlockView({ model: block })
    this.$el.append(blockView.render().el)
  }
})
