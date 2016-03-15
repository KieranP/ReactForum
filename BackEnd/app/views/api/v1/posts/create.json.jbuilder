json.(@post, :id, :body)
json.user @post.user, :id, :username, :email
