class PeopleController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def index
        people = Person.all 
        render json: people 
    end

    def show
        person = find_person
        render json: person, serializer: PersonWithChoresSerializer
    end

    def create 
        person = Person.create!(person_params)
        render json: person, status: :created
    end

    def destroy
        person = Person.find(params[:id])
        person.destroy
        head :no_content
    end


    private

    def person_params
        params.permit(:name, :image)
    end

    def find_person
        Person.find(params[:id])
    end

    def render_unprocessable_entity_response(exception)
        render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity 
    end

    def render_not_found_response
        render json: { error: "Person not found" }, status: :not_found 
    end 

end
