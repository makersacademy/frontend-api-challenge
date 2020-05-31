feature 'has a homepage' do

  before do
    visit('/')
  end

  it 'says Welcome to Chitter!' do
    expect(page).to have_content 'Welcome to Chitter!'
  end

  it 'shows the first Peep' do
    expect(page).to have_content 'Congrats for successfully requesting the peeps from the Chitter API! This is the first peep :)'
  end

end
