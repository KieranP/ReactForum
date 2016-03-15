class Topic < ActiveRecord::Base

  fields do
    name :text
    timestamps
  end

  validates_presence_of :board, :name

  belongs_to :board

  has_many :posts, dependent: :destroy

end
