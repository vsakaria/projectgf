var xray = require('x-ray');

this.link = '.jsPaginationItem article.c-assetOverlay div.c-assetOverlay__container a.c-assetOverlay__imageContainer[href]';

xray('http://www.blinkbox.com/movies')
  .select([{
    $root: '.jsPaginationItem',
    title: '.c-assetOverlay .c-assetCollectionItem__info h2',
    link: this.link
  }])
  .limit(5)
  .write('blinkbox.json');