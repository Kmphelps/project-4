class PeopleController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    def index
        people = Person.all 
        render json: people 
    end

    def show
        person = find_person
        render json: person
    end


    private

    def find_person
        Person.find(params[:id])
    end

    def render_not_found_response
        render json: { error: "Person not found" }, status: :not_found 
    end 
    
end
