/**
 * @class IdeaGardenSuggestion.repeat
 *
 * This is a customized Idea Garden Suggestion.
 * You should use the utilities available in IdeaGardenSuggestion.suggestionUtils 
 * and aliased here as utils to easily assemble the suggestion itself.
 */
IdeaGardenSuggestion.repeat = (function() {
	var suggestion = {},
	utils = IdeaGardenSuggestion.suggestionUtils;

	/** 
	* Change this identifier to the
	* DOM ID the Idea Garden template will have.
	*/
	DOMidentifier = 'ideagarden-suggestion-repeat';
	DOMclass = 'ideagarden-suggestion-repeat';

	/**
	* @method
	* Returns the ID of the Idea Garden DOM element.
	*
	* Please don't modify 
	*/
	function getSuggestionID() {
		return '#' + DOMidentifier;
	}

	/**
	* @method
	* Returns the class of the Idea Garden DOM element.
	*
	* Please don't modify 
	*/
	function getClassID() {
		return '#' + DOMclass;
	}

	/**
	* @method
	* @template
	* Identifies if this particular suggestion should be shown to the user
	* in the event-driven model.
	*
	* @returns Boolean value indicating if the suggestion should be shown
	* given the current programText and context.
	*
	* Please imolement this!
	*/
	suggestion.chooseToShow = function(programText, context) {
		return programText.indexOf("for") >= 0;
	};

	/**
	* @method
	* @template
	* Defines the content of the suggestion.
	*
	* Please implement this!
	*/
	function suggestionContent(context) {
		return sprintf("Are you trying to use a loop in your %s? You just typed <code>%s</code>.",
			utils.emphasize(IdeaGarden.ENVIRONMENT.PROGRAM),
			context.program);
	}

	/**
	* @method
	* @template
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
	* @method
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
