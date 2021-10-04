class CreateSignups < ActiveRecord::Migration[6.1]
  def change
    create_table :signups do |t|
      t.integer :person_id
      t.integer :chore_id

      t.timestamps
    end
  end
end
