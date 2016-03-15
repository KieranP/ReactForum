json.array! @boards do |board|
  json.(board, :id, :name, :description)
  json.topics_count board.topics.count
end
