import { DateTime } from 'luxon'
import { column } from '@ioc:Adonis/Lucid/Orm'
import Base from './Base'

export default class AdminMenu extends Base {
  @column({ isPrimary: true })
  public id: number

  @column()
  public parentId: number

  @column()
  public order: number

  @column()
  public title: string

  @column()
  public icon: string

  @column()
  public uri: string

  @column()
  public permission: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true })
  public updatedAt: DateTime
}
