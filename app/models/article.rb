class Article < ApplicationRecord
	extend FriendlyId
	friendly_id :title, use: :slugged

	validates_presence_of :title, :content
end
