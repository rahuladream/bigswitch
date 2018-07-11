class Users < ActiveRecord::Migration[5.2]
  
  def self.up 
  	create_table :users do |t|
  		t.column :name, :string, :limit => 32, :null => false
  		t.column :email, :string, :null => false
  		t.column :designation, :string
  		t.column :company, :string
  		t.column :address, :text
  		t.column :phone, :text, :limit => 12, :null => false
  		t.column :city, :string
  		t.column :pin, :integer
  	end
end

	def self.down
		drop_table :users
	end
end