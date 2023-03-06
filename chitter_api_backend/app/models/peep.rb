class Peep < ApplicationRecord
  belongs_to :user
  has_many :likes, dependent: :destroy

  validates_presence_of :user, :body
  validates_length_of :body,
    maximum: 280,
    message: 'Peeps must be under 280 characters.'

  def as_json(options = {})
    super({ except: :user_id, methods: [:user, :likes] }.merge(options))
  end
end
