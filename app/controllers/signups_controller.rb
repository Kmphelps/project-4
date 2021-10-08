class SignupsController < ApplicationController
rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

def create
    signup = Signup.create!(signup_params)
    render json: signup.chore, status: :created 
end

def destroy
    signup = Signup.find(params[:id])
    signup.destroy 
    head :no_content 
end

private

def signup_params
    params.permit(:person_id, :chore_id)
end

def render_unprocessable_entity_response(exception)
    render json: { errors: exception.record.errors.full_messages },
    status: :unprocessable_entity 
end

def render_not_found_response
    render json: { error: "Signup not found" }, status: :not_found 
end

end
