# As a makersacademy
# So that I can see one peep by just one user
# I want to click on a specific peep all that user's peeps

feature 'Viewing one users peeps' do

  scenario 'User can click on a username see all peeps by that user' do
    click_link('#1251')
    expect(page).to have_content("One more test.")
    expect(page).to have_content("Posted on 2019-08-10 at 11:23:34")
    expect(page).to have_no_content("I think I have a peep problem.")
  end

end
