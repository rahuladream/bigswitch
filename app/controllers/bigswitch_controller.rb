class BigswitchController < ApplicationController
	skip_before_action :verify_authenticity_token
	# def set_csrf_header
  	# response.headers['X-CSRF-Token'] = form_authenticity_token
	# end
	def edit
	end

	def index 
		@bigswitch = Users.new(name: params[:name], email: params[:email], designation: params[:designation], company: params[:company], address: params[:address], phone: params[:phone], city: params[:city], pin: params[:pin])
		if @bigswitch.save
			render :success
        else
        	render :edit
	end
end

end
