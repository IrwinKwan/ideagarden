var IdeaGarden = (function() {

	var suggestions = {}; // The host namespace where the suggestions live. Don't change this.

	/**
	* Change these to match your host environment.
	*/
	suggestions.ENVIRONMENT = {
		PROGRAM:"script",
		PROGRAMS:"scripts",
		ELEMENT:"row",
		ELEMENTS:"rows", "LOOP CONSTRUCT":"repeat",
		image:"js/ideagarden/ideagarden-cell.png"
	};

	/**
	* Add your own customized suggestion here.
	*/
	suggestions.repeatSuggestion = function(context) {
		console.log("host.repeatSuggestion");

		// You will need to add a module file for this!
		// Copy the template given for ideagarden-suggestion-composition.js
		// and use those methods as a starting point.
	};

	suggestions.compositionSuggestion = function(context) {
		console.log("IdeaGarden.compositionSuggestion");
		IdeaGardenSuggestion.composition.suggestion(context);
	};

	/**
	* In case we do want to process which Idea Garden suggestion to show
	* based on incoming data, we can call the "chooseSuggestion"
	* function that will analyze incoming data and then choose
	* the appropriate suggestion.
	*
	* @args: dataAndContext: A JSON object that contains at least two
	* parameters: data, which is an object, and context,
	* which is also an object.
	*/
	suggestions.chooseSuggestion = function(dataAndContext) {
		console.log("processEvent: ");
	};
	
	return suggestions;
})();
