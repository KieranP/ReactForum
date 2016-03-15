class Api::V1::BoardsController < Api::V1::BaseController

  def index
    @boards = Board.all
  end

  def show
    @board = Board.find(params[:id])
  end

end
