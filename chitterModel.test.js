const ChitterModel = require('./chitterModel')

describe('chitterModel', () => {
  let model
  beforeEach(() => {
    model = new ChitterModel;
  });
  
  it(' returns the list of notes', () => {
    expect(model.getPosts()).toEqual([])
  })
  it('adds a note to the notes list', () => {
    model.addPost('Post1')
    expect(model.getPosts()).toEqual(['Post1'])
  })
  it('resets the notes list to empty', () => {
    expect(model.getPosts()).toEqual([])
    model.addPost('Post2')
    expect(model.getPosts()).toEqual(['Post2'])
    model.resetPosts()
    expect(model.getPosts()).toEqual([])
  })
  it('sets the notes to a given data structure', () => {
    model.addPost('Post1');
    model.setPosts(['Brazil']);
    expect(model.getPosts()).toEqual(['Brazil'])
  });
});