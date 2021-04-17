module ApplicationHelper
	def bootstrap_class_for(flash_type)
	  { success: "alert-success", error: "alert-danger", alert: "alert-warning", info: "alert-info", notice: "alert-info" }[flash_type] || flash_type.to_s
	end

	def flash_messages
		flash.each do |msg_type, message|
			concat(
				content_tag(:div, id: "flash-wrapper", class: "container-fluid",
					style: "padding-top:0.5rem;margin-top: 10px;position: fixed;") do
					concat(
						content_tag(:div, message, class: "alert alert-dismissible #{bootstrap_class_for(msg_type.to_sym)}", role: "alert") do
							concat content_tag(:span, message.html_safe, class: 'alert-message')
						end
					)
				end
			)
		end
		nil
	end
end
