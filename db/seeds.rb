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
Chore.destroy_all

puts "Creating people..."
person1 = Person.create(name: "Jessica", image: "https://sweetjanemag.com/wp-content/uploads/2019/11/edward-cisneros-_H6wpor9mjs-unsplash-1080x675.jpg")
person2 = Person.create(name: "Mike", image: "https://i.insider.com/5df272bffd9db22295266cd8?width=1136&format=jpeg")
person3 = Person.create(name: "Sally", image: "https://www.oshonews.com/wp-content/uploads/2021/08/School-girl.jpg")
person4 = Person.create(name: "Jake", image: "https://i.guim.co.uk/img/media/1c6376fa37a46be68388842b8b1a7c90ac68222e/0_261_3513_2108/master/3513.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=55d0e4a9bd46157dd5d28debdd37bdc4")

puts "Creating chores..."
chore1 = Chore.create(name: "Wash dishes", frequency: "Daily", time_estimate_minutes: "20")
chore2 = Chore.create(name: "Vacuum Floors", frequency: "Weekly", time_estimate_minutes: "30")
chore3 = Chore.create(name: "Clean Fridge", frequency: "Weekly", time_estimate_minutes: "15")
chore4 = Chore.create(name: "Wash Laundry", frequency: "Weekly", time_estimate_minutes: "90")
chore5 = Chore.create(name: "Mow Lawn", frequency: "Weekly", time_estimate_minutes: "60")
chore6 = Chore.create(name: "Wash Windows", frequency: "Weekly", time_estimate_minutes: "30")

puts "Creating signups..."
Signup.create(person_id: person1.id, chore_id: chore1.id)

puts "✅ Done seeding!"