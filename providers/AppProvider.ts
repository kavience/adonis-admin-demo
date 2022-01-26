import { ApplicationContract } from '@ioc:Adonis/Core/Application'

export default class AppProvider {
  constructor(protected app: ApplicationContract) {}

  public register() {
    // Register your own bindings

    // adonis admin provider
    this.app.container.singleton('Adonis/Addons/AdminAuth', () => {
      const authConfig = {
        guard: 'web',
        guards: {
          web: {
            driver: 'session',

            provider: {
              driver: 'lucid',
              identifierKey: 'id',
              uids: ['username'],
              model: () => import('App/Admin/Encore/Models/AdminUser'),
            },
          },
        },
      }
      const authManager = require('@ioc:Adonis/Addons/Auth')
      const adminAuthManager = new authManager.constructor(this.app, authConfig)

      return adminAuthManager
    })
  }

  public async boot() {
    // IoC container is ready

    // adonis admin provider
    this.app.container.withBindings(
      ['Adonis/Core/HttpContext', 'Adonis/Addons/AdminAuth'],
      (HttpContext, Auth) => {
        HttpContext.getter(
          'adminAuth',
          function adminAuth() {
            return Auth.getAuthForRequest(this)
          },
          true
        )
      }
    )
  }

  public async ready() {
    // App is ready
  }

  public async shutdown() {
    // Cleanup, since app is going down
  }
}
