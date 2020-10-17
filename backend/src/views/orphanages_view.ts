import Orphanage from '../models/Orphanage';
import imagesView from './images_view';

export default {
  render(orphanage: Orphanage) {
    return {
      id: orphanage.id,
      name: orphanage.name,
      latitude: orphanage.latitude,
      longitude: orphanage.longitude,
      about: orphanage.about,
      instructions: orphanage.instructions,
      opening_hours: orphanage.opening_hours,
      open_on_weekends: orphanage.open_on_weekends,
<<<<<<< HEAD
      images: imagesView.renderMany(orphanage.images)
=======
      images: imagesView.renderMany(orphanage.images),
>>>>>>> 6645203565b2ebcabceac73ad18154a34b2c81e3
    };
  },

  renderMany(orphanages: Orphanage[]) {
<<<<<<< HEAD
    return orphanages.map(orphanage => this.render(orphanage));
  }
};
=======
    return orphanages.map((orphanage) => this.render(orphanage));
  },
};
>>>>>>> 6645203565b2ebcabceac73ad18154a34b2c81e3
