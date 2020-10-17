import Image from '../models/Image';

export default {
  render(image: Image) {
    return {
      id: image.id,
<<<<<<< HEAD
      url: `http://192.168.0.27:3333/uploads/${image.path}`,
=======
      url: `http://localhost:3333/uploads/${image.path}`,
>>>>>>> 6645203565b2ebcabceac73ad18154a34b2c81e3
    };
  },

  renderMany(images: Image[]) {
<<<<<<< HEAD
    return images.map(image => this.render(image));
  }
};
=======
    return images.map((image) => this.render(image));
  },
};
>>>>>>> 6645203565b2ebcabceac73ad18154a34b2c81e3
