# As a maker
# So that I can see what others are saying
# I want to see the last 50 peeps in reverse chronological order.

feature 'Viewing peeps on page' do
  scenario 'User sees last 50 peeps in reverse chronological order' do
    visit('/')
    expect(find(id: 'latestPeeps')).to have_selector('li', count: 50)
    expect(page).to have_content("Latest Peeps")
  end
end
