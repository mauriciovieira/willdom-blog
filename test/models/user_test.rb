require 'test_helper'

class UserTest < ActiveSupport::TestCase
	test "should be a valid user" do
		user = build(:user)
		assert user.valid?
	end
end
