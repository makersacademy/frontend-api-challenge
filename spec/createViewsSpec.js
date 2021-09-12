describe("CreateViews", () => {
  let createViews = new CreateViews();

  beforeEach(() => {
    let peep = { id: 7, body: "red" };
    spyOn(createViews, "fillFields").and.returnValue(true);
    createViews.add(peep);
  });

  it("should add another inner child to the peepContainer", () => {
    let container = document.querySelector("#peepContainer");
    expect(container.children.length).toEqual(1);
  });
});
