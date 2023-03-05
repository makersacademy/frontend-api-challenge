class Like < ApplicationRecord
  belongs_to :user
  belongs_to :peep

  validates_presence_of :user, :peep
  validates_uniqueness_of :user, scope: :peep

  def as_json(options = {})
    super({ only: [], methods: [:user] }.merge(options))
  end
end
