json.(@topic, :id, :name, :created_at)

json.posts @topic.posts do |post|
  json.(post, :id, :body)
  json.user post.user, :id, :username, :email
end
