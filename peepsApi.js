class PeepsApi {
  loadPeeps() {
    const peeps = [
      { username: "Goldie", peep: "First peep", date: "2022-04-09" },
      {
        username: "Gordon",
        peep: "Masters this year is shite",
        date: "2022-04-08",
      },
    ];

    return peeps;
  }
}

module.exports = PeepsApi;
