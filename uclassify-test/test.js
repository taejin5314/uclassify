const analytics = require('uclassify');
const api_key = require('../api_key');

const analysis = new analytics(api_key.read, api_key.write);// The read and write api key can be obtained by creating an uclassify account in the https://www.uclassify.com for free..
//they provide 500 request for free daily..

//Ex: Here shown is a short news data that is being passed on and the response is as shown..
analysis.news_classifier({"data":["Genetic Factors May Contribute to Adverse Effects Produced by Synthetic Cannabinoids"]},function(err,data){
	if(err){console.log(err);
	}
	else{
		console.log(data);
	}
});
