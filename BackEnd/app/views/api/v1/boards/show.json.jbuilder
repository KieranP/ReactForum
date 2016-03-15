json.(@board, :id, :name, :description)

json.topics @board.topics do |topic|
  json.(topic, :id, :name, :created_at)
end
