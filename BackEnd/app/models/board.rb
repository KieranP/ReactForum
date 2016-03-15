class Board < ActiveRecord::Base

  fields do
    name :text
    description :text
    timestamps
  end

  validates_presence_of :name

  has_many :topics, dependent: :destroy

end
