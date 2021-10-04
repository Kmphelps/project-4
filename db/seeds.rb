# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "🌱 Seeding..."

puts "Deleting old data..."
Person.destroy_all

puts "Creating people..."
person1 = Person.create(name: "Sally", image: "https://m.media-amazon.com/images/M/MV5BNWI0ZjU4MzUtMTdmMy00OWVkLThhNWItNzQ4NDEyNTBiY2ZjXkEyXkFqcGdeQXVyNjg4NzAyOTA@._V1_.jpg")
person2 = Person.create(name: "Mike", image: "https://i.insider.com/5df272bffd9db22295266cd8?width=1136&format=jpeg")

