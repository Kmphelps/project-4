class RemoveChoreColumn < ActiveRecord::Migration[6.1]
  def change
    remove_column :chores, :chore 
  end
end
