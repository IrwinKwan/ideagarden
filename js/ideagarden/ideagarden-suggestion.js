var IdeaGardenSuggestion = {};

IdeaGardenSuggestion.suggestionUtils = {

	content: function(DOMidentifier, content, parameters, context) {
		console.log("Producing the default suggestion");
		return "<div id=" + DOMidentifier + "><img src='" + parameters.image + "'/>" + content + "</div>";
	}
};

