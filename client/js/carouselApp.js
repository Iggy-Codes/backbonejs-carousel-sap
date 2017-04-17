/* eslint no-undef: "off" */
var app = app || {}
app.allBlocks = new app.BlocksAPICollection()
app.allBlocks.fetch({
  success: () => {
    app.config.endingGroup = parseInt(app.allBlocks.length / app.config.imgsGroup)
    if (app.allBlocks.length % app.config.imgsGroup) app.config.endingGroup++
    if (app.config.startingGroup > app.config.endingGroup) app.config.startingGroup = app.config.endingGroup
    let start = (app.config.startingGroup - 1) * app.config.imgsGroup
    let finish = start + app.config.imgsGroup

    app.carBlocks = new app.BlocksCarouselCollection(app.allBlocks.slice(start, finish))

    app.blocksView = new app.BlocksView({ collection: app.carBlocks })
    $('#carousel').html(app.blocksView.render().el)

    var carouselRouter = new app.Router()// eslint-disable-line no-unused-vars
    Backbone.history.start()
  },
  error: () => {
    console.log('Error')
    $('#carousel').html(`<h2>No JSON received. Please check the server</h2>`)
  }
})

