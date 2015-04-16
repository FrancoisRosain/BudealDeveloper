#import "BudealDeveloper.h"

// Budeal est une Startup qui développe une application mobile gratuite
// permettant aux particuliers d'acheter et de vendre des produits 
// d'occasion rapidement, simplement et en toute confiance. 
//
// http://budeal.com/app

@implementation BudealDeveloper

- (id) initWithSkill:(NSDictionary *) skills
{
    self = [super init];
    if (self) {
        
        // Presentations
        NSLog(@"Nous sommes une équipe de 3 personnes :" +
              @", Stephane dirige la société et s'assure d'avoir les moyens de la faire grandir, " +
              @"Damien s'occupe du design et moi même, Jérôme " + 
              @"je développe les applications mobiles et peaufine le backend (Parse.com)");
              
        if ([self canReadThisCode] && self.lookingForInternship) {
        
            // Check skills
            if (skills[@"objectivecLevel"] > 6) { // Level is from 0 to 10 (10 is the best)
                // Say welcome
                NSLog(@"Nous recherchons quelqu'un qui connait bien Objective-c "
                      @"pour travailler sur la version iOS de l'application "
                      @"afin de pouvoir être de nouveau mis en avant par Apple ;)");
                      
                if (skills[@"swiftLevel"] != nil) {
                    NSLog(@"On aime aussi Swift, Budeal est codé en Objective-c mais ça peut évoluer :)");  
                }
            }
        }
        else {
            // Other posibilities for a dev@budeal
            [self checkForOtherLanguages];
        }
    }

    return self;
}

- (BOOL) canReadThisCode 
{
    return [self canYouTellMe:@"Pourquoi ce code ne compile pas ?"];
}

- (BOOL) canYouTellMe:(NSString *)question 
{
    return YES; // or NO regarding your answer :)
}

- (void) checkForOtherLanguages 
{
    // See other implementations in this gist
}

@end