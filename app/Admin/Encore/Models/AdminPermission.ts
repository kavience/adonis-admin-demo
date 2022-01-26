import { DateTime } from 'luxon'
import { column } from '@ioc:Adonis/Lucid/Orm'
import Base from './Base'

export default class AdminPermission extends Base {
  @column({ isPrimary: true })
  public id: number

  @column()
  public slug: string

  @column()
  public name: string

  @column()
  public httpMethod: string

  @column()
  public httpPath: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true })
  public updatedAt: DateTime
}
