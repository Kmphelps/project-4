class PeopleController < ApplicationController

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
end
