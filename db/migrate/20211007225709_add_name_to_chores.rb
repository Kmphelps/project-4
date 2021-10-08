class AddNameToChores < ActiveRecord::Migration[6.1]
  def change
    add_column :chores, :name, :string
  end
end
