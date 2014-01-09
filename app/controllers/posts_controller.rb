class PostsController < ApplicationController
  def index
    @posts = Post.all
    render :json => @posts
  end

  def create
    @post = Post.new(params[:post])
    if @post.save!
      render :json => @post
    else
      render :json => @post.errors
    end
  end

  def destroy
    post = Post.find(params[:id])
    post.destroy
    render :json => post
  end
end
