class CreateTopics < ActiveRecord::Migration
  def self.up
    create_table :topics do |t|
      t.text     :name
      t.datetime :created_at
      t.datetime :updated_at
      t.integer  :board_id
    end
    add_index :topics, [:board_id]
  end

  def self.down
    drop_table :topics
  end
end
