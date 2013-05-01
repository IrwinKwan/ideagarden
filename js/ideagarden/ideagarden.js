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
	
	return suggestions;
})();
