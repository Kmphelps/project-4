class ChoreSerializer < ActiveModel::Serializer
  attributes :id, :name, :frequency, :time_estimate_minutes
end
