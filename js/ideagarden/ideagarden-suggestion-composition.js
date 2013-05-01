IdeaGardenSuggestion.composition = {

	DOMidentifier: "ideagarden-suggestion-composition",
	suggestionID: "#ideagarden-suggestion-composition",
	suggestion: function(context) {
		console.log("IdeaGardenSuggestionComposition.suggestionContent");

		var content = "Do you need help with your " + IdeaGarden.ENVIRONMENT.PROGRAM + "? I think you need to use two web pages.";
		var parameters = IdeaGarden.ENVIRONMENT;
		var suggestionText = IdeaGardenSuggestion.suggestionUtils.content(this.DOMidentifier, content, parameters, context);

		console.log(suggestionText);

		console.log(this.suggestionID);
		$(this.suggestionID).toggle("slide", { direction: "up" });
		$("#helpSection").html(suggestionText);

	}
};

