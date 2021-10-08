class SignupSerializer < ActiveModel::Serializer
  attributes :id
  has_one :person
  has_one :chore 
end
