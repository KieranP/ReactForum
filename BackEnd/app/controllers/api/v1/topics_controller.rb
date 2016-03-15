class Api::V1::TopicsController < Api::V1::BaseController

  def show
    @topic = Topic.
      includes(posts: :user).
      find(params[:id])
  end

end
