import { Class } from "~/composables/Characters";

import { Build } from "~/composables/Builds";

export const build: Build = {
  title: "Bowman / AFK (~90)",
  notes:
    "Leveling up active skills directly increase AFK kills/hr, so we level them past 1.",
  version: "1.23",
  level: 90,
  tabs: [
    {
      skills: {
        "4": "*2",
        "5": "100+",
        "6": "*1",
        "7": "*2",
        "10": "100+",
        "12": "20",
        "14": "100+",
        "15": "*2",
      },
      comment:
        '*1 = Boost STR to have as much accuracy as you need for the best AFK gains. Usually this will be the farthest monster you can reach without dying. If you\'re low on defense, by this point equipping food to stay alive is normal and expected. \n"Idle Shooting" to 100 for 13% AFK gain rate. \n Bowman\'s core concept is "SpeedNA" gives damage based on every 15% movement speed so we\'re aiming for 145% with "Featherweight" & "Strafe". Priority is "Featherweight" to 20 > "Gilded Sword" & "Sharpened Axe". \n *2 = Excess points may go here.',
    },
    {
      skills: {
        "1": "70",
        "2": "70",
        "4": "*1",
        "5": "50",
        "6": "20",
        "8": "100+",
      },
      comment:
        'Level "Polymer Limbs" to max, then your active damage skills to 70. Afterwards, level up "Have Another" to 50 & "Veins of the Infernal" to 20. \n *1 = Level up "Strafe" to achieve 145% movement speed with points into featherweight into tab 1. This should be around 80 points. \n Excess points can go into "Have Another", "Veins of the Infernal", or active talents.',
    },
    {
      skills: {
        "1": "50",
        "2": "50",
        "6": "85",
        "15": "1+",
      },
      comment:
        'Level up "Homing Arrow" and "Magic Shortbow" to 50. Value point into "Extendo Rangeo" for that sweet 8 accuracy. Activate before AFK. \n Then raise "SpeedNA" to 85. \n Points will be invested back into tab 2 for "Strafe" to reach "SpeedNA" bonus at 145%.',
    },
  ],
  class: Class.Bowman,
};
