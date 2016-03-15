class User < ActiveRecord::Base

  fields do
    access_token :string
    username :string
    email :string
    timestamps
  end

  has_secure_password

  has_many :posts, dependent: :destroy

  validates_presence_of :access_token, :username, :email
  validates_uniqueness_of :access_token, :username, :email

  before_validation :set_access_token

  private

  def set_access_token
    self.access_token = generate_access_token
  end

  def generate_access_token
    loop do
      token = SecureRandom.hex(24)
      break token unless User.where(access_token: token).exists?
    end
  end

end
