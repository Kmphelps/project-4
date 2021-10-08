class ChoresController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    def index
        chores = Chore.all 
        render json: chores
    end

    def create 
        chore = Chore.create!(chore_params)
        render json: chore, status: :created
    end

    def destroy
        chore = Chore.find(params[:id])
        chore.destroy
        head :no_content
    end

    private

    def chore_params
        params.permit(:name, :frequency, :time_estimate_minutes)
    end

    def render_unprocessable_entity_response(exception)
        render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity 
    end

    def render_not_found_response
        render json: { error: "Chore not found" }, status: :not_found 
    end

end
