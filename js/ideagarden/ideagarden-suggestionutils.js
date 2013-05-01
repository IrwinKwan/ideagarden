var IdeaGardenSuggestion = {};

IdeaGardenSuggestion.suggestionUtils = {

	/**
	* Adds emphasis to elements in the suggestion.
	*/
	emphasize: function(emphasizedText) {
		return "<em>" + emphasizedText + "</em>";
	},

	/**
	* Emphasizes values from the ENVIRONMENT.
	*/
	emphasizeEnvironment: function(ENV, parameter) {
		if (parameter === 'PROGRAM') {
			return this.emphasize(ENV.parameter);
		}
	},


	/**
	* Encloses the suggestion in the proper tags.
	*/
	encloseInDiv: function(DOMidentifier, suggestionHTML) {
		return '<div id=' + DOMidentifier + ' class="ideagarden">' + suggestionHTML + '</div>';
	},

	/**
	* Assembles the HTML of the suggestion.
	*/
	content: function(DOMidentifier, content, parameters, context) {
		console.log("Producing the suggestion");

		return this.encloseInDiv(DOMidentifier, "<img src='" + parameters.image + "'/>" + content);
	}
};
