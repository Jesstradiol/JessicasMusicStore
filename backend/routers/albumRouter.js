import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import data from '../data.js';
import Album from '../models/albumModel.js';
import { isAdmin, isAuth } from '../utils.js';

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

albumRouter.post(
  '/',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const album = new Album({
      artists: 'Artist/Group name',
      AlbumTitle: 'sample title' + Date.now(),
      Genre: 'sample genre',
      copiesOnHand: 0,
      AlbumRelease: 'sample year',
      AlbumCost: 0,
      TrackAmount: 0,
      ProducerFName:'Producer First Name',
      ProducerLName:'Producer Last Name',
      InPrint:true,
      image: '/images/Covers/Login.jpg',
      rating: 0,
      numReviews: 0,
    });
    const createdAlbum = await album.save();
    res.send({ message: 'Album Created', album: createdAlbum });
  })
);
albumRouter.put(
  '/:id',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const albumId = req.params.id;
    const album = await Album.findById(albumId);
    if (album) {
      album.artists = req.body.artists;
      album.AlbumTitle = req.body.AlbumTitle;
      album.Genre = req.body.Genre;
      album.copiesOnHand = req.body.copiesOnHand;
      album.AlbumRelease = req.body.AlbumRelease;
      album.AlbumCost = req.body.AlbumCost;
      album.TrackAmount = req.body.TrackAmount;
      album.ProducerFName = req.body.ProducerFName;
      album.ProducerLName = req.body.ProducerLName;
      album.InPrint = req.body.InPrint;
      album.image = req.body.image;
      const updatedAlbum = await album.save();
      res.send({ message: 'Album Updated', album: updatedAlbum });
    } else {
      res.status(404).send({ message: 'Album Not Found' });
    }
  })
);

albumRouter.delete(
  '/:id',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const album = await Album.findById(req.params.id);
    if (album) {
      const deleteAlbum = await album.remove();
      res.send({ message: 'Album Deleted', product: deleteAlbum });
    } else {
      res.status(404).send({ message: 'Album Not Found' });
    }
  })
);

export default albumRouter;
