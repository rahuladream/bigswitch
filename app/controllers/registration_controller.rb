class RegistrationController < ApplicationController

	def create
		@user = User.new(user_params)

		if @user.save
			format.html { data: 'Comment was successfully created.' }
			format.js   { }
        	format.json { data: 'registered' }
        else
        	format.json { data: 'Error Found' }
end
