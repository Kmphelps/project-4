class Person < ApplicationRecord
    has_many :signups
    has_many :chores, through: :signups 
end
