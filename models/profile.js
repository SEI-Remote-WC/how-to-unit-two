import mongoose from 'mongoose'
const Schema = mongoose.Schema

const commentSchema = new Schema({
  content: String,
  author: {type: Schema.Types.ObjectId, ref: 'Profile'}
}, {
  timestamps: true
})

const pokemonSchema = new Schema ({
  name: String,
  weight: Number,
  imageUrl: String,
  comments: [commentSchema]
}, {
  timestamps: true
})

const profileSchema = new Schema({
  name: String,
  avatar: String,
  pokemon: [pokemonSchema]
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}