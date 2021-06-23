describe("User can view a list of peeps", () => {
  it("shows a list of peeps", () => {
    let controller = new PeepListController();
    controller.display();
    let container = document.querySelector('#main');
    expect(container.innerHTML).toEqual("<ul><li>Hello, world!</li></ul>");
  });
});