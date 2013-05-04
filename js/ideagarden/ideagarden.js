/**
 * @class
 * The main IdeaGarden class.
 * @singleton
 *
 * If you add any suggestions, they should be added here.
 */
var IdeaGarden = (function() {

	var suggestions = {};
	var listener = {};

	/**
	* @cfg
	* Change these to match your host environment.
	*/
	suggestions.ENVIRONMENT = {
		PROGRAM:"script",
		PROGRAMS:"scripts",
		ELEMENT:"row",
		ELEMENTS:"rows", "LOOP CONSTRUCT":"repeat",
		image:"js/ideagarden/img/ideagarden-cell.png"
	};

	/**
	* In case we do want to process which Idea Garden suggestion to show
	* based on incoming data, we can call the "chooseSuggestion"
	* function that will analyze incoming data and then choose
	* the appropriate suggestion.
	*
	* @param {Object} [programText] The user's current program.
	* @param {Object} [context] The user's environment context, which may include
	* a number of keys and values used in the suggestion itself.
	*/
	suggestions.chooseSuggestion = function(programText, context) {
		console.log("processEvent - program: " + programText);
		listener(programText, context);
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
	* A non-event-driven suggestion
	*/
	suggestions.compositionSuggestion = function(context) {
		console.log("IdeaGarden.compositionSuggestion");
		IdeaGardenSuggestion.composition.suggestion(context);
	};

	
	return suggestions;
})();
