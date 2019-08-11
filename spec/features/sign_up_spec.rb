# As a maker
# So that I can post peeps
# I want to be able to register as a user.

feature 'Sign up page' do
  scenario 'A user sees a sign up form when they click the "Register here" button' do
    visit('/')
    click_button('Register here')
    expect(page).to have_content('Handle:')
    expect(page).to have_content("Password:")
  end
end
