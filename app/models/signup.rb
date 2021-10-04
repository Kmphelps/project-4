class Signup < ApplicationRecord
    belongs_to :person 
    belongs_to :chore 
end
