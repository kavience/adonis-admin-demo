import View from '@ioc:Adonis/Core/View'

View.global('admin_asset', function (path) {
  return `/${path}`
})
