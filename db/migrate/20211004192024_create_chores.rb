class CreateChores < ActiveRecord::Migration[6.1]
  def change
    create_table :chores do |t|
      t.string :chore
      t.string :frequency
      t.integer :time_estimate_minutes

      t.timestamps
    end
  end
end
