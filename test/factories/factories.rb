FactoryBot.define do
	factory :user do
		email  	 { "test@example.com" }
		password { "password" }
		first_name { "Jose" }
		last_name  { "Vega" }
	end
end
