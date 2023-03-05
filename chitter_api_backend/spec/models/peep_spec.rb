require 'rails_helper'

RSpec.describe Peep, type: :model do
  let(:user) { User.create!(handle: "Kay", password: "kay") }
  it { is_expected.to be }

  it "must have a body of under 280 characters" do
    invalid_peep = Peep.new(user: user, body: "a" * 281)
    valid_peep = Peep.new(user: user, body: "a" * 280)
    expect(invalid_peep).not_to be_valid
    expect(valid_peep).to be_valid
  end
end
