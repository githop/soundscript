class User < ActiveRecord::Base
	has_many :languages
	has_many :tracks
	has_many :sentences, through: :tracks

	validates :username, presence: true
	validates :email, presence: true, uniqueness: true, format: {with: /\A([\w\.%\+\-]+)@([\w\-]+\.)+([\w]{2,})\Z/i}
	validates :password_digest, presence: true

	has_secure_password
end