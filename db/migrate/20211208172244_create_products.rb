class CreateProducts < ActiveRecord::Migration[6.1]
  def change
    create_table :products do |t|
      t.string :product
      t.string :description
      t.integer :price
      t.string :img_url

      t.timestamps
    end
  end
end
