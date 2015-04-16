package com.budeal.budeal.Models;

import ...

/**
 * Budeal est une Startup qui développe une application mobile gratuite
 * permettant aux particuliers d'acheter et de vendre des produits 
 * d'occasion rapidement, simplement et en toute confiance. 
 *
 * http://budeal.com/app
 */
public class Developer
{
    protected bool lookingForInternship = true; // Change accordingly

    public Developer(HashMap<String, Integer> skills)
    {
        // Presentations
        Log.d(Budeal.TAG, "Nous sommes une équipe de 3 personnes : " +
                          "Stephane dirige la société et s'assure d'avoir les moyens de la faire grandir, " +
                          "Damien  s'occupe du design et moi même, Jérôme " + 
                          "je développe les applications mobiles et peaufine le backend (Parse.com)");
              
        // Check skills
        if (canReadThisCode() && lookingForInternship) {
            if (skills.get("androidLevel") > 7) { // Level is from 0 to 10 (10 is the best)
                // Say welcome
                Log.d(Budeal.TAG, "Nous recherchons quelqu'un qui a de bonnes connaissances en développement Android " +
                                  "afin de continuer à faire évoluer la version Android de Budeal.");

                if (skills.get("androidVersion") >= 5) {
                    Log.d(Budeal.TAG, "C'est un plus si tu connais Android Lolipop !");
                }
            }
        }
        else {
            // Other posibilities for a dev@budeal
            checkForOtherLanguages();
        }
    }

    protected boolean canReadThisCode() 
    {
        return canYouTellMe("Pourquoi ce code ne compile pas ?");
    }

    protected boolean canYouTellMe(String question)
    {
        return true; // or false regarding the answer :)
    }

    protected void checkForOtherLanguages()
    {
        // See other implementations in this gist
    }
}