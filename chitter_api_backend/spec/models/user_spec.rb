require 'rails_helper'

RSpec.describe User, type: :model do
  subject(:user) { User.create!(handle: "Kay", password: "rockhudson") }
  it { is_expected.to be }

  describe "#authenticate" do
    context "with valid details" do
      it "authenticates" do
        expect(user.authenticate("rockhudson")).to be_truthy
      end
    end

    context "with invalid details" do
      it "does not authenticate" do
        expect(user.authenticate("rockhudson")).to be_truthy
      end
    end
  end

  describe "#generate_session_key!" do
    it "saves & returns a session key" do
      key = user.generate_session_key!
      user.reload
      expect(user.session_key).to eq key
    end
  end

  it "must have a handle of under 30 characters" do
    invalid_user = User.new(handle: "a" * 31, password: "horse")
    valid_user = User.new(handle: "a" * 30, password: "horse")
    expect(invalid_user).not_to be_valid
    expect(valid_user).to be_valid
  end
end
