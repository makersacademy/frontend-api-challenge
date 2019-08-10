# As a maker
# So that I can see what others are saying
# I want to see all peeps

feature 'See page works' do
  scenario 'Basic page works ' do
    visit('/')
    expect(page).to have_content("Hello World")
  end
end
