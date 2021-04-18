FactoryBot.define do
	factory :user do
		email  	   { "test@example.com" }
		password   { "password" }
		first_name { "Jose" }
		last_name  { "Vega" }
	end

	factory :article do
		title  	{ "I Am A Title" }
		content { "I am some contet" }
	end
end
