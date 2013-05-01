IdeaGarden.SuggestionComposition = {
	this.parameterList = {
		"PROGRAM":"script",
		"PROGRAMS":"scripts",
		"ELEMENT":"row",
		"ELEMENTS":"rows", "LOOP CONSTRUCT":"repeat"
	};
	
	this.DOMidentifier = "ideaGarden-suggestion-composition"
	
	this.produceSuggestion = function() {
		IdeaGardenSuggestion.parameterReplace();
		return "<div id=" + this.DOMidentifier + ">" +  + "</div>";
	}
	

	this.suggestionContent = function(context) {
		var content = "Do you need help?";

		var suggestion = produceSuggestion(content, context);

		return suggestion;

	};

	this.encloseDiv = function() {

	};
	
	IdeaGarden.compositionSuggestion.getContents
};

