import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import data from '../data.js';
import Album from '../models/albumModel.js';

const albumRouter = express.Router();

albumRouter.get(
  '/',
  expressAsyncHandler(async (req, res) => {
    const albums = await Album.find({});
    res.send(albums);
  })
);

albumRouter.get(
  '/seed',
  expressAsyncHandler(async (req, res) => {
    await Album.remove({});
    const createdAlbums = await Album.insertMany(data.albums);
    res.send({ createdAlbums });
  })
);

albumRouter.get(
  '/:id',
  expressAsyncHandler(async (req, res) => {
    const album = await Album.findById(req.params.id);
    if (album) {
      res.send(album);
    } else {
      res.status(404).send({ message: 'Album Not Found' });
    }
  })
);

export default albumRouter;
