class CreateUsers < ActiveRecord::Migration
  def self.up
    create_table :users do |t|
      t.string   :access_token
      t.string   :username
      t.string   :email
      t.datetime :created_at
      t.datetime :updated_at
      t.string   :password_digest
    end
  end

  def self.down
    drop_table :users
  end
end
