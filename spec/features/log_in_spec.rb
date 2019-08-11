# As a user
# So I can make peeps etc
# I would like to be able to log in

feature 'Log in page' do
  scenario 'A user sees a log in form when they click the "Log in" button' do
    visit('/')
    click_button('Log in here')
    expect(page).to have_content('Handle:')
    expect(page).to have_content("Password:")
  end

  scenario 'A user can fill in their details' do
    sign_in()
    expect(page).to have_content('Log in Succesful')
  end
end
