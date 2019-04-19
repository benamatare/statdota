export function matchSkillLevel(match_skill_id){
  switch (match_skill_id) {
    case 1:
      return "Normal Skill"
    case 2:
      return "High Skill"
    case 3:
      return "Very High Skill"
    default:
      return ""
  }
}

export function laneRole(lane_id){
  switch (lane_id) {
    case 1:
      return "Safelane"
    case 2:
      return "Mid"
    case 3:
      return "Offlane"
    case 4:
      return "Support"
    case 5:
      return "Support"
    case null:
      return ""
    default:
      return ""
  }
}

export function lobbyType(lobby_type_id){
  switch (lobby_type_id) {
    case 0:
      return "Normal"
    case 1:
      return "Practice"
    case 2:
      return "Tournament"
    case 3:
      return "Tutorial"
    case 4:
      return "Co-op Bots"
    case 5:
      return "Ranked"
    case 6:
      return "Ranked"
    case 7:
      return "Ranked"
    case 8:
      return "1v1 Mid"
    case 9:
      return "Battle Cup"
    case null:
      return ""
    default:
      return ""
  }
}

export function matchType(match_mode_id){
  switch (match_mode_id) {
  case 0:
    return "Unknown"
  case 1:
    return "All Pick"
  case 2:
    return "Captains Mode"
  case 3:
    return "Random Draft "
  case 4:
    return "Single Draft"
  case 5:
    return "All Random"
  case 6:
    return "Intro"
  case 7:
    return "Diretide"
  case 8:
    return "Reverse Captains Mode"
  case 9:
    return "Greeviling"
  case 10:
    return "Tutorial"
  case 11:
    return "Mid Only"
  case 12:
    return "Least Played"
  case 13:
    return "Limited Heroes"
  case 14:
    return "Compendium Matchmaking"
  case 15:
    return "Custom"
  case 16:
    return "Captains Draft"
  case 17:
    return "Balanced Draft"
  case 18:
    return "Ability Draft"
  case 19:
    return "Event"
  case 20:
    return "All Random Deathmatch"
  case 21:
    return "1v1 Mid"
  case 22:
    return "All Draft"
  case 23:
    return "Turbo"
  case null:
    return ""
  default:
    return ""
  }
}
