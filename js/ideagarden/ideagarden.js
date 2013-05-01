var IdeaGarden = (function() {

	var suggestions = {}; // The host namespace where the suggestions live
	var DOMidentifier = "ideaGarden-suggestion";

	suggestions.ENVIRONMENT = {
		PROGRAM:"script",
		PROGRAMS:"scripts",
		ELEMENT:"row",
		ELEMENTS:"rows", "LOOP CONSTRUCT":"repeat",
		image:"js/ideagarden/ideagarden-cell.png"
	};

	function produceSuggestion(content, parameters, context) {
		console.log("private ProduceSuggestion");
		return "<div id=" + this.DOMidentifier + ">" + parameters + "</div>";
	}

	suggestions.repeatSuggestion = function(context) {
		console.log("host.repeatSuggestion");
		// Need to add a module file for this.
	};

	suggestions.compositionSuggestion = function(context) {
		console.log("IdeaGarden.compositionSuggestion");
		IdeaGardenSuggestion.composition.suggestion(context);
	};
	
	return suggestions;
})();
