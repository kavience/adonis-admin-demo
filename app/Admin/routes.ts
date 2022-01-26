import Route from '@ioc:Adonis/Core/Route'

// Admin encore
Route.group(() => {
  Route.get('login', 'AuthController.login')
  Route.post('login', 'AuthController.dologin')

  Route.group(() => {
    Route.get('/', async ({ response }) => {
      return response.redirect().toRoute('admin.dashboard')
    })
    Route.get('/dashboard', async ({ view }) => {
      return view.render('admin/index')
    }).as('admin.dashboard')
    Route.get('logout', 'AuthController.dologout')

    Route.resource('users', 'UserController')
    Route.resource('roles', 'RoleController')
    Route.resource('permissions', 'PermissionController')
    Route.resource('menu', 'MenuController')
    Route.resource('logs', 'LogController')
  }).middleware(['adminAuth'])
})
  .prefix('admin')
  .namespace('App/Admin/Encore/Controllers')
