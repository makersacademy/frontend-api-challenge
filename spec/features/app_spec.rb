feature 'has a homepage' do

  before do
    visit('/')
  end

  it 'says Welcome to Chitter!' do
    expect(page).to have_content 'Welcome to Chitter!'
  end

end
