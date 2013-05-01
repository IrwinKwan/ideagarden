var IdeaGarden = (function() {

	var suggestions = {}; // The host namespace where the suggestions live. Don't change this.
	var listener = {};
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
	* In case we do want to process which Idea Garden suggestion to show
	* based on incoming data, we can call the "chooseSuggestion"
	* function that will analyze incoming data and then choose
	* the appropriate suggestion.
	*
	* @args: dataAndContext: A JSON object that contains at least two
	* parameters: data, which is an object, and context,
	* which is also an object.
	*/
	suggestions.chooseSuggestion = function(programText, context) {
		console.log("processEvent - program: " + programText);
		listener(programText);
	};

	/**
	* The event-driven framework
	*/
	listener = function(programText, context) {
		if (IdeaGardenSuggestion.repeat.chooseToShow(programText, context)) {
			console.log("For loop identified.");
			IdeaGardenSuggestion.repeat.suggestion({
				program: programText
			});
		}
		// Add additional conditions to check here.
	};

	/**
	* Add your own customized suggestions here.
	*/

	/**
	* A non-event-driven suggestion
	*/
	suggestions.compositionSuggestion = function(context) {
		console.log("IdeaGarden.compositionSuggestion");
		IdeaGardenSuggestion.composition.suggestion(context);
	};

	
	return suggestions;
})();
