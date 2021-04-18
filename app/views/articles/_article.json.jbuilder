json.extract! article, :id, :title, :content, :created_at, :updated_at
json.url article_url(article)
if article.image.attached?
	json.urlToImage rails_blob_path(article.image, format: :json)
else
	json.urlToImage "https://source.unsplash.com/daily"
end
