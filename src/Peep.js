class Peep {

  constructor(id, body, createdAt, user, likes) {
    this.id = id,
    this.body = body,
    this.createdAt = createdAt
    this.user = user
    this.likes = likes
  }

  static async all() {
    let result = await peepApi.getPeeps()
    return result.map(peep => {
    return new Peep(peep.id, peep.body, peep.created_at, peep.user, peep.likes)
  })
  }

  static async find(id) {
    let result = await peepApi.getPeepById(id)
    return new Peep(result.id, result.body, result.created_at, result.user, result.likes)
  }

  static addPeep() {
    peepApi.addPeep();
  }






}
