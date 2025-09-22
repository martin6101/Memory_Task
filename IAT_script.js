define(['pipAPI', 'https://martin6101.github.io/Memory_Task/fullscript.js'], function(APIConstructor, stiatExtension){
	
	var API = new APIConstructor();
		  return stiatExtension({
		  category : { 
		    name : 'Black people', //Will appear in the data.
		    title : {
		      media : {word : 'Black people'}, //Name of the category presented in the task.
		      css : {color:'#31b404','font-size':'2em'}, //Style of the category title.
		      height : 7 //Used to position the "Or" in the combined block.
		    }, 
		    media : [ //Stimuli content as PIP's media objects
    		    	{image : 'black1.jpg'}, 
    			{image : 'black2.jpg'}, 
    			{image : 'black3.jpg'}, 
    			{image : 'black4.jpg'}, 
    			{image : 'black5.jpg'}, 
    			{image : 'black6.jpg'}
		    ], 
		    //Stimulus css (style)
		    css : {color:'#31b404','font-size':'3em'}
		  },	

  		attribute1 : 
			{
			name : 'Group A', //Attribute label
			title : {
				media : {word : 'Group A'}, //Name of the category presented in the task.
				css : {color:'#525252','font-size':'2em'}, //Style of the category title.
				height : 7 //Used to position the "Or" in the combined block.
			}, 
			media : [ //Stimuli
				{word: 'Hostile'},
				{word: 'Untrustworthy'},
				{word: 'Dishonest'},
				{image: 'https://uva.eu.qualtrics.com/ControlPanel/Graphic.php?IM=IM_G7dzmAFBBZJ3Sam'},
    			{image: 'https://uva.eu.qualtrics.com/ControlPanel/Graphic.php?IM=IM_pq3rphyuaCYqef7'},
   				{image: 'https://uva.eu.qualtrics.com/ControlPanel/Graphic.php?IM=IM_ioIJ7nNskVNNeLB'},
    			{image: 'https://uva.eu.qualtrics.com/ControlPanel/Graphic.php?IM=IM_tAhYxhqgb3kaKms'}
			], 
			//Can change color and size of the targets here.
			css : {color:'#525252','font-size':'3em'}
			},
		attribute2 : 
			{
			name : 'Group B', //Attribute label
			title : {
				media : {word : 'Group B'}, //Name of the category presented in the task.
				css : {color:'#525252','font-size':'2em'}, //Style of the category title.
				height : 7 //Used to position the "Or" in the combined block.
			}, 
			media : [ //Stimuli
				{word: 'Kind'},
				{word: 'Trustworthy'},
				{word: 'Honest'},
				{image: 'https://uva.eu.qualtrics.com/ControlPanel/Graphic.php?IM=IM_LnG4QFtCiIOFhZE'},
    			{image: 'https://uva.eu.qualtrics.com/ControlPanel/Graphic.php?IM=IM_Wa2XUnE0KTDAFIC'},
   				{image: 'https://uva.eu.qualtrics.com/ControlPanel/Graphic.php?IM=IM_TcGQJa3hWQK6LoJ'},
    			{image: 'https://uva.eu.qualtrics.com/ControlPanel/Graphic.php?IM=IM_VO1bNhZlSPcta2n'}
			], 
			//Can change color and size of the targets here.
			css : {color:'#525252','font-size':'3em'}
			},

  base_url : {//Where are your images at?
    image : 'https://baranan.github.io/minno-tasks/images/'
  }}
  );
  });
