export default {
  Query: {
    getGuests: async (_: any, _args: any, { models }: { models: any }): Promise<any> => {
      const guests = await models.Guest.findAll({
        order: [['fullName', 'ASC']]
      })

      // If there are guests, return them with a GuestResponse type
      if (guests.length > 0) {
        return {
          __typename: 'GuestResponse',
          guests
        }
      }

      // If there are no guests, return an Error type with a 404 code and message 'No guests found'
      return {
        __typename: 'Error',
        error: {
          code: 404,
          message: 'No guests found'
        }
      }
    }
  }
}
