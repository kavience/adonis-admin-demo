import { DateTime } from 'luxon'
import { column, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import Base from './Base'
import AdminRolePermission from './AdminRolePermission'
import AdminRoleMenu from './AdminRoleMenu'

export default class AdminRole extends Base {
  @column({ isPrimary: true })
  public id: number

  @column()
  public slug: string

  @column()
  public name: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true })
  public updatedAt: DateTime

  @manyToMany(() => AdminRolePermission, {
    localKey: 'id',
    pivotForeignKey: 'role_id',
    relatedKey: 'id',
    pivotRelatedForeignKey: 'permission_id',
  })
  public permissions: ManyToMany<typeof AdminRolePermission>

  @manyToMany(() => AdminRoleMenu, {
    localKey: 'id',
    pivotForeignKey: 'role_id',
    relatedKey: 'id',
    pivotRelatedForeignKey: 'menu_id',
  })
  public menus: ManyToMany<typeof AdminRoleMenu>
}
