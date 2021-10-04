class Chore < ApplicationRecord
    has_many :signups 
    has_many :people, through: :signups 
end
