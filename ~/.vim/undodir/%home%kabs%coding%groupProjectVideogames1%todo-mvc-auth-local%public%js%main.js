Vim�UnDo� Q��;����2���mټ���Lݮ�B���臣=   
                                   c8l    _�                     
        ����                                                                                                                                                                                                                                                                                                                                                             c�     �   
               �   
            5��    
                                           �    
                                           5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             c    �               �               5��                                        6      5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             c g     �               5��                          ;                     5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             c h    �               �               5��                          <              �      5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             c8e     �                +async function getGameAchievements(appid) {   E    //fetch game Schema from Steam Web API, which includes most stats   �  const entireGameStatsResponse = await fetch(`https://api.steampowered.com/ISteamUserStats/GetSchemaForGame/v2/?key=${process.env.STEAM_API_KEY}&appid=${appid}`)   @    const entireGameStats = await entireGameStatsResponse.json()   f    if(entireGameStats.game.availableGameStats&&entireGameStats.game.availableGameStats.achievements){   F    return entireGameStats.game.availableGameStats.achievements.length       }   	    else{           return 0       }   U    //from response json object, look at the achievement array and count the elements   =    // For an explanation, check the Steam WebAPI docs under:   4    // ISteamUserStats Interface > GetSchemaForGame    ?    //https://partner.steamgames.com/doc/webapi/ISteamUserStats   }5��                                6              5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             c8g     �                7async function getUserGameAchievements(appid,steamid) {   I    //fetch game user stats from Steam Web API, which includes most stats   �  const userStatsForGameResponse = await fetch(`https://api.steampowered.com/ISteamUserStats/GetUserStatsForGame/v2/?key=${process.env.STEAM_API_KEY}&steamid=${steamid}&appid=${appid}`)   A  const userStatsForGame = await userStatsForGameResponse.json();   !    console.log(userStatsForGame)   P    if(userStatsForGame.playerstats&&userStatsForGame.playerstats.achievements){   ;    return userStatsForGame.playerstats.achievements.length       }   	    else{           return 0       }   I    //return userStatsForGame.game.availableGameStats.achievements.length   U    //from response json object, look at the achievement array and count the elements   =    // For an explanation, check the Steam WebAPI docs under:   7    // ISteamUserStats Interface > GetUserStatsForGame    ?    //https://partner.steamgames.com/doc/webapi/ISteamUserStats   }5��                                �              5�_�                             ����                                                                                                                                                                                                                                                                                                                                                  V        c8k    �   
                      5��    
                                           5��