import { DateTime } from 'luxon'
import { beforeSave, column, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import Base from './Base'
import AdminUserPermission from './AdminUserPermission'
import AdminRoleUser from './AdminRoleUser'
import Hash from '@ioc:Adonis/Core/Hash'

export default class AdminUser extends Base {
  @column({ isPrimary: true })
  public id: number

  @column()
  public username: string

  @column({ serializeAs: null })
  public password: string

  @column()
  public name: string

  @column()
  public avatar: string

  @column()
  public rememberToken: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true })
  public updatedAt: DateTime

  @manyToMany(() => AdminUserPermission, {
    localKey: 'id',
    pivotForeignKey: 'user_id',
    relatedKey: 'id',
    pivotRelatedForeignKey: 'permission_id',
  })
  public permissions: ManyToMany<typeof AdminUserPermission>

  @manyToMany(() => AdminRoleUser, {
    localKey: 'id',
    pivotForeignKey: 'user_id',
    relatedKey: 'id',
    pivotRelatedForeignKey: 'role_id',
  })
  public roles: ManyToMany<typeof AdminRoleUser>

  @beforeSave()
  public static async hashPassword(user: AdminUser) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password)
    }
  }
}
