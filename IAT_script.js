define(['pipAPI', 'https://martin6101.github.io/Memory_Task/fullscript.js'], function(APIConstructor, stiatExtension){

  var API = new APIConstructor();

  return stiatExtension({

    category : { 
      name : 'Black people',
      title : {
        media : {word : 'Black people'},
        css : {color:'#31b404','font-size':'2em'},
        height : 7
      },
      media : [
        {image : 'https://baranan.github.io/minno-tasks/images/black1.jpg'},
        {image : 'https://baranan.github.io/minno-tasks/images/black2.jpg'},
        {image : 'https://baranan.github.io/minno-tasks/images/black3.jpg'},
        {image : 'https://baranan.github.io/minno-tasks/images/black4.jpg'},
        {image : 'https://baranan.github.io/minno-tasks/images/black5.jpg'},
        {image : 'https://baranan.github.io/minno-tasks/images/black6.jpg'}
      ],
      css : {color:'#31b404','font-size':'3em'}
    },

    attribute1 : {
      name : 'Group A',
      title : { media : {word : 'Group A'}, css : {color:'#525252','font-size':'1.8em'}, height : 7 },
      media : [
        {word: 'Hostile'},
        {word: 'Untrustworthy'},
        {word: 'Dishonest'},
        {image: 'https://uva.fra1.qualtrics.com/CP/Graphic.php?IM=IM_G7dzmAFBBZJ3Sam'},
        {image: 'https://uva.fra1.qualtrics.com/CP/Graphic.php?IM=IM_pq3rphyuaCYqef7'},
        {image: 'https://uva.fra1.qualtrics.com/CP/Graphic.php?IM=IM_ioIJ7nNskVNNeLB'},
        {image: 'https://uva.fra1.qualtrics.com/CP/Graphic.php?IM=IM_tAhYxhqgb3kaKms'}
      ],
      css : {color:'#525252','font-size':'2m'}
    },

    attribute2 : {
      name : 'Group B',
      title : { media : {word : 'Group B'}, css : {color:'#525252','font-size':'1.8em'}, height : 7 },
      media : [
        {word: 'Kind'},
        {word: 'Trustworthy'},
        {word: 'Honest'},
        {image: 'https://uva.fra1.qualtrics.com/CP/Graphic.php?IM=IM_LnG4QFtCiIOFhZE'},
        {image: 'https://uva.fra1.qualtrics.com/CP/Graphic.php?IM=IM_Wa2XUnE0KTDAFIC'},
        {image: 'https://uva.fra1.qualtrics.com/CP/Graphic.php?IM=IM_TcGQJa3hWQK6LoJ'},
        {image: 'https://uva.fra1.qualtrics.com/CP/Graphic.php?IM=IM_VO1bNhZlSPcta2n'}
      ],
      css : {color:'#525252','font-size':'2em'}
    },

    base_url : { image : '' }
  });
});