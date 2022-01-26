import { DateTime } from 'luxon'
import { column } from '@ioc:Adonis/Lucid/Orm'
import Base from './Base'

export default class AdminOperationLog extends Base {
  @column({ isPrimary: true })
  public id: number

  @column()
  public userId: number

  @column()
  public path: string

  @column()
  public method: string

  @column()
  public ip: string

  @column()
  public input: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true })
  public updatedAt: DateTime
}
