# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Product.destroy_all
Post.destroy_all
User.destroy_all

@admin = User.create!(username: 'Clare', email: 'clare@mail.com', password: 'password')

puts "#{User.count} users created!"

Product.create!(name: 'Magic Honey Stick', description: 'this is the description', price: '100', img_url: 'https://i.imgur.com/0VdnToQ.png')

puts "#{Product.count} products created!"

Post.create!(title: "The Very First Title", content: "lorem epsum", id: @admin)
Post.create!(title: "The Second Title", content: "lorem epsum", id: @admin)
Post.create!(title: "The Third Title", content: "lorem epsum", id: @admin)

puts "#{Post.count} posts created!"
