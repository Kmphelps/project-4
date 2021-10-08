class PersonWithChoresSerializer < ActiveModel::Serializer
  attributes :id, :name, :image
  has_many :chores 
end
