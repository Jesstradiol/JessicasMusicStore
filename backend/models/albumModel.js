import mongoose from 'mongoose';

const albumSchema = new mongoose.Schema(
  {
    artists:  { type: String, required: true },
    AlbumTitle: { type: String, required: true},
    Genre: { type: String, required: true },
    copiesOnHand: { type: Number, required: true },
    AlbumRelease: { type: String, required: true },
    AlbumCost: { type: Number, required: true },
    TrackAmount: { type: Number, required: true },
    ProducerFName: { type: String, required: true },
    ProducerLName: { type: String, required: true },
    InPrint: { type: Boolean, required: false },
    image: { type: String, required: true },
    rating: { type: Number, required: true },
    numReviews: { type: Number, required: true },
},
{
  timestamps: true,
}
);
const Album = mongoose.model('Album', albumSchema);

export default Album;