import { DataType } from '../../../types'

export default (sequelize: any, dataType: DataType) => {
  const Guest = sequelize.define('Guest', {
    id: {
      primaryKey: true,
      allowNull: false,
      type: dataType.UUID,
      defaultValue: dataType.UUIDV4()
    },
    fullName: {
      type: dataType.STRING,
      allowNull: false
    },
    email: {
      type: dataType.STRING,
      allowNull: false,
      unique: true
    },
    photo: {
      type: dataType.STRING,
      allowNull: true
    },
    phone: {
      type: dataType.STRING,
      allowNull: true
    },
    socialMedia: {
      type: dataType.STRING,
      allowNull: true
    },
    location: {
      type: dataType.STRING,
      allowNull: true
    },
    gender: {
      type: dataType.STRING,
      allowNull: true
    },
    birthday: {
      type: dataType.STRING,
      allowNull: true
    }
  })

  return Guest
}
