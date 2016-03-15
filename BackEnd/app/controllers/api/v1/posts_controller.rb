class Api::V1::PostsController < Api::V1::BaseController

  before_filter :find_topic, only: %w( create )
  before_filter :find_post, only: %w( destroy )

  def create
    @post = @topic.posts.new(post_params)
    @post.user = current_user

    if @post.save
      render status: 201
    else
      render status: 400, text: @post.errors.to_json
    end
  end

  def destroy
    if @post.destroy
      render status: 200
    else
      render status: 400, text: @post.errors.to_json
    end
  end

  private

  def find_topic
    @topic = Topic.find(post_params[:topic_id])
  end

  def find_post
    @post = Post.find(params[:id])
  end

  def post_params
    params.require(:post).permit(:topic_id, :body)
  end

end
