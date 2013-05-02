/**
 * @class IdeaGardenSuggestion.composition
 *
 * This is a customized Idea Garden Suggestion.
 * You should use the utilities available in IdeaGardenSuggestion.suggestionUtils 
 * and aliased here as utils to easily assemble the suggestion itself.
 */
IdeaGardenSuggestion.composition = (function() {
	var suggestion = {},
	utils = IdeaGardenSuggestion.suggestionUtils;

	/** 
	* Change this identifier to the
	* DOM ID the Idea Garden template will have.
	*/
	DOMidentifier = 'ideagarden-suggestion-composition';
	DOMclass = DOMidentifier;

	/**
	* @private Returns the ID of the Idea Garden DOM element.
	*
	* Please don't modify 
	*/
	function getSuggestionID() {
		return '#' + DOMidentifier;
	}

	/**
	* @private Returns the class of the Idea Garden DOM element.
	*
	* Please don't modify 
	*/
	function getClassID() {
		return '#' + DOMclass;
	}

	/**
	* Identifies if this particular suggestion should be shown to the user
	* in the event-driven model.
	*
	* @returns Boolean value indicating if the suggestion should be shown
	* given the current programText and context.
	*
	* Please imolement this!
	*/
	suggestion.chooseToShow = function(programText, context) {
		return true;
	};

	/**
	* Defines the content of the suggestion.
	*
	* Please implement this!
	*/
	function suggestionContent(context) {
		return sprintf("Do you need help with your %s? You may need to use multiple commands in your %s.",
			utils.emphasize(IdeaGarden.ENVIRONMENT.PROGRAM),
			utils.emphasize(IdeaGarden.ENVIRONMENT.PROGRAM));
	}

	/**
	* Implements the behavior of the suggestion.
	* 
	* Please implement this!
	*/
	function suggestionBehavior(suggestionHTML) {
		console.log("SuggestionBehavior: " + suggestionHTML);

		// User implements 
		$(getSuggestionID()).toggle("slide", { direction: "left" });
		$("#helpSection").html(suggestionHTML);
		$(getSuggestionID()).delay(4000).fadeOut(500);
	}

	/**
	* Assembles the suggestion.
	*
	* Please don't modify 
	*/
	suggestion.suggestion = function(context) {
		console.log("IdeaGardenSuggestionComposition.suggestionContent");

		suggestionHTML = utils.content(DOMidentifier, DOMclass, suggestionContent(context), IdeaGarden.ENVIRONMENT, context);
		suggestionBehavior(suggestionHTML);
	};

	return suggestion;
}());



