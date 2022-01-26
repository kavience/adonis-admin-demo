import { DateTime } from 'luxon'
import { column } from '@ioc:Adonis/Lucid/Orm'
import Base from './Base'

export default class AdminRoleUser extends Base {
  @column()
  public roleId: string

  @column()
  public userId: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true })
  public updatedAt: DateTime
}
