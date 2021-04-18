require 'test_helper'

class ArticleTest < ActiveSupport::TestCase
	test "should be a valid factory" do
		user = build(:article)
		assert user.valid?
	end

  test "title should be present" do
    user = build(:article, title: "",)
  	assert_not user.valid?, "title can not be blank"
  end

  test "content should be present" do
    user = build(:article, content: "")
		assert_not user.valid?, "content must be present."
  end
end
