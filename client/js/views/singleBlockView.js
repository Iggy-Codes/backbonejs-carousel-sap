var app = app || {}

app.getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

app.SingleBlockView = Backbone.View.extend({// eslint-disable-line no-undef

  tagName: 'article',
  className: 'carouselItem',

  template: _.template($('#carouselElement').html()), // eslint-disable-line no-undef

  render: function () {
    if (this.model.attributes.images.constructor === Array) {
      let random = app.getRandomIntInclusive(0, this.model.attributes.images.length - 1)
      this.model.attributes.imgUrl = this.model.attributes.images[random]
    } else if (this.model.attributes.images) {
      this.model.attributes.imgUrl = this.model.attributes.images
    }
    var blockTemplate = this.template(this.model.toJSON())
    this.$el.html(blockTemplate)
    return this
  }

})
