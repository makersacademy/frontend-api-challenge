# As a maker
# So that I can see what others are saying
# I want to see the last 50 peeps in reverse chronological order.

feature 'Viewing peeps on page' do
  scenario 'User sees last 50 peeps in reverse chronological order' do
    visit('/')
    expect(page).to have_content("Latest Peeps")
    expect(page).to have_content("Peep: test")
    expect(page).to have_content("Posted by: chuckles")
    expect(page).to have_content("Posted on 2019-08-08 at 13:49:15")
  end
end
