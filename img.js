import ImgSrc from './img/6.jpg';


var img = {
  template:'<div>Img组件<img :src="imgSrc" alt=""></div>',
  data() {
    return {
      imgSrc:ImgSrc
    }
  }
};

export default img;