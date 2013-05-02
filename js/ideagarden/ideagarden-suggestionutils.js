var IdeaGardenSuggestion = {};

/**
 * @class
 * SuggestionUtils contains a number of utilities to build Idea Garden suggestions.
 */
IdeaGardenSuggestion.suggestionUtils = (function() {

	var util = {};
	/**
	* Adds emphasis to elements in the suggestion.
	*/
	util.emphasize = function (emphasizedText) {
		return "<em>" + emphasizedText + "</em>";
	};

	/**
	* Emphasizes values from the ENVIRONMENT.
	*/
	util.emphasizeEnvironment = function(ENV, parameter) {
		if (parameter === 'PROGRAM') {
			return this.emphasize(ENV.parameter);
		}
	};

	/**
	* Encloses the suggestion in the proper tags.
	*/
	util.encloseInDiv = function(DOMidentifier, DOMclass, suggestionHTML) {
		return sprintf("<div id='%s' class='ideagarden %s'>%s</div>",
			DOMidentifier, DOMclass, suggestionHTML);
	};

	/**
	* Assembles the HTML of the suggestion.
	*/
	util.content = function(DOMidentifier, DOMclass, content, parameters, context) {
		console.log("Producing the suggestion");

		return this.encloseInDiv(DOMidentifier, DOMclass,
			sprintf("<img src='%s'/>%s", parameters.image, content));
	};

	return util;
}());
