class Post < ActiveRecord::Base

  fields do
    body :text
    timestamps
  end

  validates_presence_of :topic, :user, :body

  belongs_to :topic
  belongs_to :user

end
