import models from '../models'

async function createFirstUser(): Promise<any> {
  const existingUsers = await models.User.findAll()

  if (existingUsers.length === 0) {
    const newUser: any = await models.User.create({
      username: 'admin',
      password: '12345678',
      email: 'admin@ranchosanpancho.com',
      role: 'god',
      active: true
    })

    return newUser
  }

  return null
}

async function createGuests(): Promise<any> {
  const existingGuests = await models.Guest.findAll()

  if (existingGuests.length === 0) {
    const newGuests: any = await models.Guest.bulkCreate([
      {
        fullName: 'Carlos Santana',
        email: 'carlos@ranchosanpancho.com',
        photo: 'carlos.jpg',
        phone: '+1 555 555 5555',
        socialMedia: 'https://www.facebook.com/carlos.santana',
        location: 'Colima, Mexico',
        gender: 'Male',
        birthday: '11/21/1987'
      },
      {
        fullName: 'Cristina Santana',
        email: 'cristina@ranchosanpancho.com',
        photo: 'cristina.jpg',
        phone: '+1 444 444 4444',
        socialMedia: 'https://www.facebook.com/cristina.santana',
        location: 'Colima, Mexico',
        gender: 'Female',
        birthday: '1/20/1989'
      }
    ])

    return newGuests
  }

  return null
}

function setInitialSeeds(): void {
  createFirstUser()
  createGuests()
}

export default setInitialSeeds
