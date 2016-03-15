class CreatePosts < ActiveRecord::Migration
  def self.up
    create_table :posts do |t|
      t.text     :body
      t.datetime :created_at
      t.datetime :updated_at
      t.integer  :topic_id
      t.integer  :user_id
    end
    add_index :posts, [:topic_id]
    add_index :posts, [:user_id]
  end

  def self.down
    drop_table :posts
  end
end
