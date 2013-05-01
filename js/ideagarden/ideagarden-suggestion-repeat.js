/**
 * This is a customized Idea Garden Suggestion.
 * You should use the utilities available in IdeaGardenSuggestion.suggestionUtils 
 * and aliased here as utils to easily assemble the suggestion itself.
 */
IdeaGardenSuggestion.repeat = {
	// This is for convenience.
	utils: IdeaGardenSuggestion.suggestionUtils,

	/** 
	* Change this identifier to the
	* DOM ID the Idea Garden template will have.
	*/
	DOMidentifier: 'ideagarden-suggestion-repeat',

	/**
	* @private Returns the ID of the Idea Garden DOM element.
	*
	* Please don't modify this.
	*/
	getSuggestionID: function() {
		return '#' + this.DOMidentifier;
	},

	/**
	* Identifies if this particular suggestion should be shown to the user
	* in the event-driven model.
	*
	* @returns Boolean value indicating if the suggestion should be shown
	* given the current programText and context.
	*
	* Please imolement this!
	*/
	chooseToShow: function(programText, context) {
		return programText.indexOf("for") >= 0;
	},

	/**
	* Defines the content of the suggestion.
	*
	* Please implement this!
	*/
	suggestionContent: function(context) {
		return "Are you trying to use a loop in your " + this.utils.emphasize(IdeaGarden.ENVIRONMENT.PROGRAM) + "?";
	},

	/**
	* Implements the behavior of the suggestion.
	* 
	* Please implement this!
	*/
	suggestionBehavior: function(suggestionHTML) {
		console.log("SuggestionBehavior: " + suggestionHTML);

		// User implements this.
		$(this.getSuggestionID()).toggle("slide", { direction: "left" });
		$("#helpSection").html(suggestionHTML);
		$(this.getSuggestionID()).delay(4000).fadeOut(500);
	},

	/**
	* @private Assembles the suggestion.
	*
	* Please don't modify this.
	*/
	suggestion: function(context) {
		console.log("IdeaGardenSuggestionComposition.suggestionContent");

		suggestionHTML = this.utils.content(this.DOMidentifier, this.suggestionContent(context), IdeaGarden.ENVIRONMENT, context);
		this.suggestionBehavior(suggestionHTML);
	}
};

