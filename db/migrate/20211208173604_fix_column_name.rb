class FixColumnName < ActiveRecord::Migration[6.1]
  def change
    rename_column :products, :product, :name
  end
end
