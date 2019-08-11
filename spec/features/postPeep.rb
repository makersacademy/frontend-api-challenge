# As a user
# So I can tell my fellow users what I am up to
# I want to be able to post a new peep

feature 'Post a Peep' do
  scenario 'A user sees a post a peep form when they click the "Make a new post" button' do
    sign_in()
    click_button('Make a new post')
    expect(page).to have_content("What's happening?")
  end
end
