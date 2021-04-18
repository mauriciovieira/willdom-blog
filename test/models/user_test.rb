require 'test_helper'

class UserTest < ActiveSupport::TestCase
	test "should be a valid factory" do
		user = build(:user)
		assert user.valid?
	end

  test "login can not be blank" do
    user = build(:user, email: "", password: "")
  	assert_not user.valid?, "login can not be blank"
  end

  test "email should be present" do
    user = build(:user, email: "")
		assert_not user.valid?, "email must be present."
  end

  test "password should be present" do
    user = build(:user, password: "")
  	assert_not user.valid?, "password must be present."
  end

  test "should not allow duplicate users." do
    create(:user, email: "user@example.com", password: "password")
    user = build(:user, email: "user@example.com", password: "password")
  	assert_not user.valid?, "Duplicate users are not allowed."
  end

  test "username should return name or email if first and last name are missing" do
    user = build(:user)
    assert_equal user.username, "Jose Vega"
  	user = build(:user, first_name: "")
  	assert_equal user.username, "Vega"
    user = build(:user, first_name: "", last_name: "")
  	assert_equal user.username, "test@example.com"
  end
end
