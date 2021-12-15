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

admin = User.create!(username: 'Clare', email: 'clare@mail.com', password: 'password')

puts "#{User.count} users created!"

Product.create!(name: 'Magic - bath bombs', description: 'Drop one in the tub and you’ll see why... Pack of 5', price: '20', img_url: 'https://i.imgur.com/JPu6SCJ.png')
Product.create!(name: 'Necro - bath bombs', description: 'This bomb will take you to another realm. Pack of 5', price: '20', img_url: 'https://i.imgur.com/PVWW71t.png')
Product.create!(name: 'Daughter of Perses - bath bombs', description: 'Feel like a goddess of the sky, earth, and sea. Pack of 5', price: '20', img_url: 'https://i.imgur.com/bDRJBKs.png')

Product.create!(name: 'Erinyes - candle', description: 'Winged creatures who punished wrong-doers,', price: '10', img_url: 'https://i.imgur.com/gsLbYbY.png')
Product.create!(name: 'Offerings to the Gods - candle', description: 'Invoke goddess with three bodies and three heads', price: '10', img_url: 'https://i.imgur.com/pOZOZcQ.png')
Product.create!(name: 'Darkness - candle', description: 'Walk barefoot through the midnight mist', price: '10', img_url: 'https://i.imgur.com/nt4jDel.png')

Product.create!(name: 'Shadows - soap', description: 'Lurking in the shadows, clean away the bad vibes', price: '6', img_url: 'https://i.imgur.com/oWcbj4b.png')
Product.create!(name: 'Drones - soap', description: 'Toiling day and night for the betterment of the queen', price: '6', img_url: 'https://i.imgur.com/Mt4LAtC.png')
Product.create!(name: 'Honeycomb Morning - soap', description: 'The sun is rising, start the day off right', price: '6', img_url: 'https://i.imgur.com/D1ouree.png')


puts "#{Product.count} products created!"

Post.create!(title: "The hive has arrived", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras. Pharetra convallis posuere morbi leo urna molestie. Duis ultricies lacus sed turpis. Eget nullam non nisi est sit amet. Aliquet eget sit amet tellus cras. Lobortis feugiat vivamus at augue eget arcu dictum varius.", user: admin)
Post.create!(title: "The little works have awoken", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sagittis orci a scelerisque purus semper eget duis. Et odio pellentesque diam volutpat commodo sed egestas. Luctus accumsan tortor posuere ac ut consequat. Purus gravida quis blandit turpis cursus in. Vel eros donec ac odio. Tortor condimentum lacinia quis vel eros donec. Malesuada nunc vel risus commodo viverra maecenas accumsan. Adipiscing bibendum est ultricies integer quis.", user: admin)

puts "#{Post.count} posts created!"
