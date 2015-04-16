module.exports = (function () {

    /**
     * Budeal est une Startup qui développe une application mobile gratuite
     * permettant aux particuliers d'acheter et de vendre des produits 
     * d'occasion rapidement, simplement et en toute confiance. 
     *
     * http://budeal.com/app
     */
    var Parse  = require('Parse');
    var Budeal = require('cloud/budeal.js');

    function beforeHire (request, response) {
        
        // Presentations
        console.log("Nous sommes une équipe de 3 personnes : " +
                    "Stephane dirige la société et s'assure d'avoir les moyens de la faire grandir, " +
                    "Damien s'occupe du design et moi même, Jérôme " + 
                    "je développe les applications mobiles et peaufine le backend (Parse.com)");
        
        // Check skills from Parse database
        var developer = request.object;
        if (Budeal.canReadThisCode(developer) && developer.lookingForInternship) {
            
            var query = new Parse.Query('Candidate');
            query.greaterThan('NodeJSLevel', 6);   // Level is from 0 to 10 (10 is the best)
            query.greaterThan('ParseAPILevel', 1); // It will be usefull but easy to learn
            query.find().then(function (array candidates) {
                
                for (var i = 0, max = candidates.length; i < max; i++) {
                    var candidate = candidates[i];
                    if (Budeal.canYouTellMe("Pourquoi ce code ne compile pas ?")) {
                        // Say welcome
                        console.log("Nous recherchons quelqu'un qui maîtrise le Javascript && NodeJS " +
                                    "pour travailler sur le backend de l'application (Parse.com)");
                                    
                        response.success();
                    }
                }
                // Other posibilities for a dev@budeal
                response.error("Peut être un autre langage ?");
                
            }, function (error) {
                
                console.error(error);
                response.error('Une erreur est survenue :(');
                
            });
        }
    }

    return {
        beforeHire: beforeHire
    };
})();