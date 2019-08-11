def sign_in
  visit('/')
  click_button('Log in here')
  fill_in 'logInHandle', with: 'weggy'
  fill_in 'logInPassword', with: 'weggy'
  click_button('Log in')
end
