class Article < ApplicationRecord
	extend FriendlyId
	friendly_id :title, use: :slugged

	validates_presence_of :title, :content

	# IMAGE
	has_one_attached :image
	validates :image, content_type: [:png, :jpg, :jpeg]
end
