define(['pipAPI', 'https://cdn.jsdelivr.net/gh/umisrcps/minno-tasks/amp/qualtrics/qamp.js'], function(APIConstructor, ampExtension){

	var API = new APIConstructor();
	var global = API.getGlobal();
	
	return ampExtension({
		primeCats :  [
			{
				nameForFeedback : 'positive',  //Will be used in the user feedback 
				nameForLogging : 'positive', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
                    {image: 'pos1.jpg'},
                    {image: 'pos2.jpg'},
                    {image: 'pos3.jpg'},
                    {image: 'pos4.jpg'},
                    {image: 'pos5.jpg'},
                    {image: 'pos6.jpg'},
                    {image: 'pos7.jpg'},
                    {image: 'pos8.jpg'},
                    {word: 'Paradise'},
                    {word: 'Pleasure'},
                    {word: 'Cheer'},
                    {word: 'Splendid'},
                    {word: 'Love'},
                    {word: 'Smile'},
                    {word: 'Friend'},
                    {word: 'Enjoy'}
        		]
			}, 
			{
				nameForFeedback : 'negative',  //Will be used in the user feedback 
				nameForLogging : 'negative', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
                    {image: 'neg1.jpg'},
                    {image: 'neg2.jpg'},
                    {image: 'neg3.jpg'},
                    {image: 'neg4.jpg'},
                    {image: 'neg5.jpg'},
                    {image: 'neg6.jpg'},
                    {image: 'neg7.jpg'},
                    {image: 'neg8.jpg'},
                    {word: 'Bomb'},
                    {word: 'Abuse'},
                    {word: 'Sadness'},
                    {word: 'Pain'},
                    {word: 'Grief'},
                    {word: 'Ugly'},
                    {word: 'Poison'},
                    {word: 'Stink'}]
			}
		],

		examplePrimeStimulus : 
		{
			nameForLogging : 'examplePrime', //Will be used in the logging
			//An array of all media objects for this category.
			//mediaArray : [{word : 'Table'}, {word : 'Chair'}]
			mediaArray : [{image : 'ampchair.jpg'}, {image : 'amplamp.jpg'}, {image : 'ampumbrella.jpg'}]
		},

		base_url : {//Where are your images at?
			image : 'https://umisrcps.github.io/minno-tasks/images/ampImages'
		}
	});
});
