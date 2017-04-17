const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  const images = [{
    title: 'First Block',
    images: [
      'https://cdn.pixabay.com/photo/2017/04/07/18/43/aston-2211620__340.jpg',
      'https://cdn.pixabay.com/photo/2017/04/06/16/26/aston-2208718__340.jpg',
      'https://cdn.pixabay.com/photo/2017/04/07/09/22/aston-2210518__340.jpg' ]},
    {
      title: 'Second Block',
      images: [
        'https://cdn.pixabay.com/photo/2017/04/06/19/05/daisies-2209084__340.jpg',
        'https://cdn.pixabay.com/photo/2017/04/07/16/47/spring-2211353__340.jpg',
        'https://cdn.pixabay.com/photo/2017/04/07/22/42/water-lily-2212046__340.jpg']},
    {
      title: 'Third Block',
      images: [
        'https://cdn.pixabay.com/photo/2017/04/05/10/25/penguin-2204566__340.jpg',
        'https://cdn.pixabay.com/photo/2017/04/05/10/25/penguin-2204569__340.jpg']},
    {
      title: 'Fourth Block',
      images: [
        'https://cdn.pixabay.com/photo/2017/04/07/01/01/butterfly-2209814__340.jpg',
        'https://cdn.pixabay.com/photo/2017/04/04/21/45/gray-sandy-bee-2203251__340.jpg' ]},
    {
      title: 'Fifth Block',
      images: [
        'https://cdn.pixabay.com/photo/2017/03/29/11/48/meadow-2184989__340.jpg',
        'https://cdn.pixabay.com/photo/2017/03/26/12/13/countryside-2175353__340.jpg']},
    {
      title: 'Sixth Block',
      images: [
        'https://cdn.pixabay.com/photo/2017/02/19/09/20/fig-2079166__340.jpg',
        'https://cdn.pixabay.com/photo/2017/04/05/10/59/pumpkins-2204643__340.jpg'
      ]},
    {
      title: 'Seventh Block',
      images: [
        'https://cdn.pixabay.com/photo/2017/03/29/15/18/tianjin-2185510__340.jpg',
        'https://cdn.pixabay.com/photo/2017/04/08/10/42/burj-khalifa-2212978__340.jpg'
      ]},
    {
      title: 'Eight Block',
      images: [
        'https://cdn.pixabay.com/photo/2017/04/11/21/34/giraffe-2222908__340.jpg',
        'https://cdn.pixabay.com/photo/2017/04/03/00/16/shire-horse-2197214__340.jpg'
      ]},
    {
      title: 'Ninth Block',
      images: [
        'https://cdn.pixabay.com/photo/2017/03/10/13/57/cooking-2132874__340.jpg',
        'https://cdn.pixabay.com/photo/2017/03/16/20/39/noodles-2150181__340.jpg',
        'https://cdn.pixabay.com/photo/2017/03/17/16/27/shell-2152029__340.jpg'
      ]}
  ]
  res.status(200).json({images})
})

module.exports = router
