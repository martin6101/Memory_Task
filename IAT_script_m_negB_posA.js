define(['pipAPI', 'https://martin6101.github.io/Memory_Task/fullscript_m_negB_posA.js'], function(APIConstructor, stiatExtension){

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
      title : { media : {word : 'Group A'}, css : {color:'#525252','font-size':'2em'}, height : 7 },
      media : [
        {word: 'Kind'},
        {word: 'Trustworthy'},
        {word: 'Honest'},
        {image: 'https://uva.fra1.qualtrics.com/CP/Graphic.php?IM=IM_UTHnMsw4ZIeSCY6'},
        {image: 'https://uva.fra1.qualtrics.com/CP/Graphic.php?IM=IM_F4BUOy64qlKACr4'},
        {image: 'https://uva.fra1.qualtrics.com/CP/Graphic.php?IM=IM_PGO7SqnWU97ZkFQ'},
        {image: 'https://uva.fra1.qualtrics.com/CP/Graphic.php?IM=IM_Gd8lpQLH2abYpM5'}
      ],
      css : {color:'#525252','font-size':'3em'}
    },

    attribute2 : {
      name : 'Group B',
      title : { media : {word : 'Group B'}, css : {color:'#525252','font-size':'2em'}, height : 7 },
      media : [
        {word: 'Hostile'},
        {word: 'Untrustworthy'},
        {word: 'Dishonest'},
        {image: 'https://uva.fra1.qualtrics.com/CP/Graphic.php?IM=IM_Ldl7quMfN4yPgRE'},
        {image: 'https://uva.fra1.qualtrics.com/CP/Graphic.php?IM=IM_gNd8T6CXG81iLEV'},
        {image: 'https://uva.fra1.qualtrics.com/CP/Graphic.php?IM=IM_iT7kICvvGckhMjw'},
        {image: 'https://uva.fra1.qualtrics.com/CP/Graphic.php?IM=IM_eFDmHa5gMwQN3Yt'}
      ],
      css : {color:'#525252','font-size':'3em'}
    },

    base_url : { image : '' }
  });
});