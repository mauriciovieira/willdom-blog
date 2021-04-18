require 'test_helper'

class ArticlesControllerTest < ActionDispatch::IntegrationTest
  include Devise::Test::IntegrationHelpers

  setup do
    @article = create(:article)
    @user = create(:user)
  end

  test "should get index" do
    get articles_url
    assert_response :success
  end

  test "should get new only signed in users" do
    sign_in(@user)
    get new_article_url
    assert_response :success
  end

  test "should create article only signed in users" do
    sign_in(@user)
    assert_difference('Article.count') do
      post articles_url, params: { article: { content: @article.content, title: @article.title } }
    end

    assert_redirected_to root_path
  end

  test "should show article" do
    get article_url(@article)
    assert_response :success
  end

  test "should get edit only signed in users" do
    sign_in(@user)
    get edit_article_url(@article)
    assert_response :success
  end

  test "should update article only signed in users" do
    sign_in(@user)
    patch article_url(@article), params: { article: { content: @article.content, title: @article.title } }
    assert_redirected_to article_url(@article)
  end

  test "should destroy article only signed in users" do
    sign_in(@user)
    assert_difference('Article.count', -1) do
      delete article_url(@article)
    end

    assert_redirected_to articles_url
  end
end
