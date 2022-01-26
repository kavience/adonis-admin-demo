import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AuthController {
  public async login({ view }: HttpContextContract) {
    return view.render('admin/login')
  }

  public async dologin({ request, response, adminAuth }: HttpContextContract) {
    const { username, password } = request.only(['username', 'password'])
    console.log('dologin')
    if (await adminAuth.attempt(username, password)) {
      return response.redirect().toRoute('admin.dashboard')
    }

    return response.badRequest('Invalid credentials')
  }
}
