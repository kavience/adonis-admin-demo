import { DateTime } from 'luxon'
import { column } from '@ioc:Adonis/Lucid/Orm'
import Base from './Base'

export default class AdminRoleMenu extends Base {
  @column()
  public roleId: number

  @column()
  public menuId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true })
  public updatedAt: DateTime
}
