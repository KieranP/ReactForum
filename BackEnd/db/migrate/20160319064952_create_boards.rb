class CreateBoards < ActiveRecord::Migration
  def self.up
    create_table :boards do |t|
      t.text     :name
      t.text     :description
      t.datetime :created_at
      t.datetime :updated_at
    end
  end

  def self.down
    drop_table :boards
  end
end
