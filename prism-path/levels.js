window.PRISM_LEVELS = [
  {
    "name": "First light",
    "tag": "START HERE",
    "difficulty": "Easy",
    "description": "Turn one mirror to guide the light.",
    "rows": 3,
    "cols": 3,
    "source": {
      "row": 1,
      "col": 0,
      "dir": "right"
    },
    "target": {
      "row": 2,
      "col": 2
    },
    "mirrors": [
      {
        "row": 1,
        "col": 1,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 2,
        "col": 1,
        "dir": "\\",
        "solution": "\\"
      }
    ]
  },
  {
    "name": "Across the board",
    "tag": "LEVEL 2",
    "difficulty": "Easy",
    "description": "Make a gentle turn, then reach the gem.",
    "rows": 4,
    "cols": 4,
    "source": {
      "row": 0,
      "col": 0,
      "dir": "down"
    },
    "target": {
      "row": 0,
      "col": 3
    },
    "mirrors": [
      {
        "row": 2,
        "col": 0,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 2,
        "col": 3,
        "dir": "/",
        "solution": "/"
      },
      {
        "row": 1,
        "col": 1,
        "dir": "\\"
      }
    ]
  },
  {
    "name": "Back the other way",
    "tag": "LEVEL 3",
    "difficulty": "Easy",
    "description": "Follow the beam around the corner.",
    "rows": 4,
    "cols": 4,
    "source": {
      "row": 3,
      "col": 3,
      "dir": "up"
    },
    "target": {
      "row": 3,
      "col": 0
    },
    "mirrors": [
      {
        "row": 1,
        "col": 3,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 1,
        "col": 0,
        "dir": "/",
        "solution": "/"
      },
      {
        "row": 0,
        "col": 1,
        "dir": "\\"
      },
      {
        "row": 2,
        "col": 2,
        "dir": "\\"
      },
      {
        "row": 2,
        "col": 4,
        "dir": "/"
      }
    ]
  },
  {
    "name": "A longer route",
    "tag": "LEVEL 4",
    "difficulty": "Medium",
    "description": "Three mirrors make a longer path.",
    "rows": 5,
    "cols": 5,
    "source": {
      "row": 0,
      "col": 0,
      "dir": "right"
    },
    "target": {
      "row": 1,
      "col": 0
    },
    "mirrors": [
      {
        "row": 0,
        "col": 2,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 4,
        "col": 2,
        "dir": "/",
        "solution": "/"
      },
      {
        "row": 4,
        "col": 0,
        "dir": "\\",
        "solution": "\\"
      },
      {
        "row": 1,
        "col": 4,
        "dir": "/"
      },
      {
        "row": 2,
        "col": 4,
        "dir": "\\"
      },
      {
        "row": 3,
        "col": 1,
        "dir": "/"
      }
    ]
  },
  {
    "name": "Light from below",
    "tag": "LEVEL 5",
    "difficulty": "Medium",
    "description": "Guide the beam across two turns.",
    "rows": 5,
    "cols": 5,
    "source": {
      "row": 4,
      "col": 0,
      "dir": "right"
    },
    "target": {
      "row": 0,
      "col": 0
    },
    "mirrors": [
      {
        "row": 4,
        "col": 2,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 1,
        "col": 2,
        "dir": "\\",
        "solution": "\\"
      },
      {
        "row": 1,
        "col": 0,
        "dir": "\\",
        "solution": "\\"
      },
      {
        "row": 2,
        "col": 1,
        "dir": "/"
      },
      {
        "row": 2,
        "col": 4,
        "dir": "\\"
      },
      {
        "row": 3,
        "col": 3,
        "dir": "/"
      }
    ]
  },
  {
    "name": "Two small turns",
    "tag": "LEVEL 6",
    "difficulty": "Medium",
    "description": "Set each mirror, then let it glow.",
    "rows": 5,
    "cols": 5,
    "source": {
      "row": 2,
      "col": 0,
      "dir": "right"
    },
    "target": {
      "row": 3,
      "col": 0
    },
    "mirrors": [
      {
        "row": 2,
        "col": 2,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 4,
        "col": 2,
        "dir": "/",
        "solution": "/"
      },
      {
        "row": 4,
        "col": 0,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 0,
        "col": 2,
        "dir": "\\"
      },
      {
        "row": 1,
        "col": 4,
        "dir": "/"
      },
      {
        "row": 3,
        "col": 4,
        "dir": "\\"
      },
      {
        "row": 4,
        "col": 4,
        "dir": "/"
      }
    ]
  },
  {
    "name": "A quiet zigzag",
    "tag": "LEVEL 7",
    "difficulty": "Hard",
    "description": "Take the long way to the crystal.",
    "rows": 6,
    "cols": 6,
    "source": {
      "row": 5,
      "col": 0,
      "dir": "right"
    },
    "target": {
      "row": 0,
      "col": 0
    },
    "mirrors": [
      {
        "row": 5,
        "col": 2,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 1,
        "col": 2,
        "dir": "\\",
        "solution": "\\"
      },
      {
        "row": 1,
        "col": 0,
        "dir": "\\",
        "solution": "\\"
      },
      {
        "row": 0,
        "col": 4,
        "dir": "/"
      },
      {
        "row": 2,
        "col": 1,
        "dir": "\\"
      },
      {
        "row": 3,
        "col": 4,
        "dir": "/"
      },
      {
        "row": 4,
        "col": 0,
        "dir": "/"
      },
      {
        "row": 2,
        "col": 5,
        "dir": "\\"
      }
    ]
  },
  {
    "name": "Crystal path",
    "tag": "LEVEL 8",
    "difficulty": "Hard",
    "description": "Line up the mirrors to finish.",
    "rows": 6,
    "cols": 6,
    "source": {
      "row": 0,
      "col": 0,
      "dir": "right"
    },
    "target": {
      "row": 1,
      "col": 4
    },
    "mirrors": [
      {
        "row": 0,
        "col": 3,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 4,
        "col": 3,
        "dir": "/",
        "solution": "/"
      },
      {
        "row": 4,
        "col": 1,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 1,
        "col": 1,
        "dir": "/",
        "solution": "/"
      },
      {
        "row": 0,
        "col": 5,
        "dir": "/"
      },
      {
        "row": 2,
        "col": 2,
        "dir": "\\"
      },
      {
        "row": 3,
        "col": 0,
        "dir": "/"
      },
      {
        "row": 5,
        "col": 4,
        "dir": "\\"
      },
      {
        "row": 2,
        "col": 5,
        "dir": "/"
      }
    ]
  },
  {
    "name": "Amber Current",
    "tag": "GROWING",
    "difficulty": "Medium",
    "description": "Follow the long beam trail. Every turn matters.",
    "rows": 4,
    "cols": 4,
    "source": {
      "row": 0,
      "col": 0,
      "dir": "right"
    },
    "target": {
      "row": 3,
      "col": 0
    },
    "mirrors": [
      {
        "row": 0,
        "col": 3,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 1,
        "col": 3,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 1,
        "col": 0,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 2,
        "col": 0,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 2,
        "col": 3,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 3,
        "col": 3,
        "dir": "\\",
        "solution": "/"
      }
    ]
  },
  {
    "name": "Amber Crossing",
    "tag": "GROWING",
    "difficulty": "Medium",
    "description": "Follow the long beam trail. Every turn matters.",
    "rows": 4,
    "cols": 4,
    "source": {
      "row": 0,
      "col": 0,
      "dir": "down"
    },
    "target": {
      "row": 0,
      "col": 3
    },
    "mirrors": [
      {
        "row": 3,
        "col": 0,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 3,
        "col": 1,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 0,
        "col": 1,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 0,
        "col": 2,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 3,
        "col": 2,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 3,
        "col": 3,
        "dir": "\\",
        "solution": "/"
      }
    ]
  },
  {
    "name": "Amber Passage",
    "tag": "GROWING",
    "difficulty": "Medium",
    "description": "Follow the long beam trail. Every turn matters.",
    "rows": 4,
    "cols": 4,
    "source": {
      "row": 0,
      "col": 0,
      "dir": "right"
    },
    "target": {
      "row": 3,
      "col": 0
    },
    "mirrors": [
      {
        "row": 0,
        "col": 3,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 1,
        "col": 3,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 1,
        "col": 0,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 2,
        "col": 0,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 2,
        "col": 3,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 3,
        "col": 3,
        "dir": "\\",
        "solution": "/"
      }
    ]
  },
  {
    "name": "Amber Zigzag",
    "tag": "GROWING",
    "difficulty": "Medium",
    "description": "Follow the long beam trail. Every turn matters.",
    "rows": 4,
    "cols": 4,
    "source": {
      "row": 0,
      "col": 0,
      "dir": "down"
    },
    "target": {
      "row": 0,
      "col": 3
    },
    "mirrors": [
      {
        "row": 3,
        "col": 0,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 3,
        "col": 1,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 0,
        "col": 1,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 0,
        "col": 2,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 3,
        "col": 2,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 3,
        "col": 3,
        "dir": "\\",
        "solution": "/"
      }
    ]
  },
  {
    "name": "Amber Corridor",
    "tag": "GROWING",
    "difficulty": "Medium",
    "description": "Follow the long beam trail. Every turn matters.",
    "rows": 5,
    "cols": 5,
    "source": {
      "row": 0,
      "col": 0,
      "dir": "right"
    },
    "target": {
      "row": 4,
      "col": 4
    },
    "mirrors": [
      {
        "row": 0,
        "col": 4,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 1,
        "col": 4,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 1,
        "col": 0,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 2,
        "col": 0,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 2,
        "col": 4,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 3,
        "col": 4,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 3,
        "col": 0,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 4,
        "col": 0,
        "dir": "/",
        "solution": "\\"
      }
    ]
  },
  {
    "name": "Amber Ribbon",
    "tag": "GROWING",
    "difficulty": "Medium",
    "description": "Follow the long beam trail. Every turn matters.",
    "rows": 5,
    "cols": 5,
    "source": {
      "row": 0,
      "col": 0,
      "dir": "down"
    },
    "target": {
      "row": 4,
      "col": 4
    },
    "mirrors": [
      {
        "row": 4,
        "col": 0,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 4,
        "col": 1,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 0,
        "col": 1,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 0,
        "col": 2,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 4,
        "col": 2,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 4,
        "col": 3,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 0,
        "col": 3,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 0,
        "col": 4,
        "dir": "/",
        "solution": "\\"
      }
    ]
  },
  {
    "name": "Amber Waypoint",
    "tag": "GROWING",
    "difficulty": "Medium",
    "description": "Follow the long beam trail. Every turn matters.",
    "rows": 5,
    "cols": 5,
    "source": {
      "row": 0,
      "col": 0,
      "dir": "right"
    },
    "target": {
      "row": 4,
      "col": 4
    },
    "mirrors": [
      {
        "row": 0,
        "col": 4,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 1,
        "col": 4,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 1,
        "col": 0,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 2,
        "col": 0,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 2,
        "col": 4,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 3,
        "col": 4,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 3,
        "col": 0,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 4,
        "col": 0,
        "dir": "/",
        "solution": "\\"
      }
    ]
  },
  {
    "name": "Amber Cascade",
    "tag": "GROWING",
    "difficulty": "Medium",
    "description": "Follow the long beam trail. Every turn matters.",
    "rows": 5,
    "cols": 5,
    "source": {
      "row": 0,
      "col": 0,
      "dir": "down"
    },
    "target": {
      "row": 4,
      "col": 4
    },
    "mirrors": [
      {
        "row": 4,
        "col": 0,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 4,
        "col": 1,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 0,
        "col": 1,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 0,
        "col": 2,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 4,
        "col": 2,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 4,
        "col": 3,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 0,
        "col": 3,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 0,
        "col": 4,
        "dir": "/",
        "solution": "\\"
      }
    ]
  },
  {
    "name": "Amber Trail",
    "tag": "GROWING",
    "difficulty": "Medium",
    "description": "Follow the long beam trail. Every turn matters.",
    "rows": 5,
    "cols": 5,
    "source": {
      "row": 0,
      "col": 0,
      "dir": "right"
    },
    "target": {
      "row": 4,
      "col": 4
    },
    "mirrors": [
      {
        "row": 0,
        "col": 4,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 1,
        "col": 4,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 1,
        "col": 0,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 2,
        "col": 0,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 2,
        "col": 4,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 3,
        "col": 4,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 3,
        "col": 0,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 4,
        "col": 0,
        "dir": "/",
        "solution": "\\"
      }
    ]
  },
  {
    "name": "Amber Journey",
    "tag": "GROWING",
    "difficulty": "Medium",
    "description": "Follow the long beam trail. Every turn matters.",
    "rows": 5,
    "cols": 5,
    "source": {
      "row": 0,
      "col": 0,
      "dir": "down"
    },
    "target": {
      "row": 4,
      "col": 4
    },
    "mirrors": [
      {
        "row": 4,
        "col": 0,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 4,
        "col": 1,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 0,
        "col": 1,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 0,
        "col": 2,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 4,
        "col": 2,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 4,
        "col": 3,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 0,
        "col": 3,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 0,
        "col": 4,
        "dir": "/",
        "solution": "\\"
      }
    ]
  },
  {
    "name": "Amber Signal",
    "tag": "GROWING",
    "difficulty": "Medium",
    "description": "Follow the long beam trail. Every turn matters.",
    "rows": 5,
    "cols": 5,
    "source": {
      "row": 0,
      "col": 0,
      "dir": "right"
    },
    "target": {
      "row": 4,
      "col": 4
    },
    "mirrors": [
      {
        "row": 0,
        "col": 4,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 1,
        "col": 4,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 1,
        "col": 0,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 2,
        "col": 0,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 2,
        "col": 4,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 3,
        "col": 4,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 3,
        "col": 0,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 4,
        "col": 0,
        "dir": "/",
        "solution": "\\"
      }
    ]
  },
  {
    "name": "Amber Orbit",
    "tag": "GROWING",
    "difficulty": "Medium",
    "description": "Follow the long beam trail. Every turn matters.",
    "rows": 5,
    "cols": 5,
    "source": {
      "row": 0,
      "col": 0,
      "dir": "down"
    },
    "target": {
      "row": 4,
      "col": 4
    },
    "mirrors": [
      {
        "row": 4,
        "col": 0,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 4,
        "col": 1,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 0,
        "col": 1,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 0,
        "col": 2,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 4,
        "col": 2,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 4,
        "col": 3,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 0,
        "col": 3,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 0,
        "col": 4,
        "dir": "/",
        "solution": "\\"
      }
    ]
  },
  {
    "name": "Amber Gate",
    "tag": "ADVANCED",
    "difficulty": "Hard",
    "description": "Follow the long beam trail. Every turn matters.",
    "rows": 5,
    "cols": 5,
    "source": {
      "row": 0,
      "col": 0,
      "dir": "right"
    },
    "target": {
      "row": 4,
      "col": 4
    },
    "mirrors": [
      {
        "row": 0,
        "col": 4,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 1,
        "col": 4,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 1,
        "col": 0,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 2,
        "col": 0,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 2,
        "col": 4,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 3,
        "col": 4,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 3,
        "col": 0,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 4,
        "col": 0,
        "dir": "/",
        "solution": "\\"
      }
    ]
  },
  {
    "name": "Amber Circuit",
    "tag": "ADVANCED",
    "difficulty": "Hard",
    "description": "Follow the long beam trail. Every turn matters.",
    "rows": 5,
    "cols": 5,
    "source": {
      "row": 0,
      "col": 0,
      "dir": "down"
    },
    "target": {
      "row": 4,
      "col": 4
    },
    "mirrors": [
      {
        "row": 4,
        "col": 0,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 4,
        "col": 1,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 0,
        "col": 1,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 0,
        "col": 2,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 4,
        "col": 2,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 4,
        "col": 3,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 0,
        "col": 3,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 0,
        "col": 4,
        "dir": "/",
        "solution": "\\"
      }
    ]
  },
  {
    "name": "Azure Current",
    "tag": "ADVANCED",
    "difficulty": "Hard",
    "description": "Follow the long beam trail. Every turn matters.",
    "rows": 5,
    "cols": 5,
    "source": {
      "row": 0,
      "col": 0,
      "dir": "right"
    },
    "target": {
      "row": 4,
      "col": 4
    },
    "mirrors": [
      {
        "row": 0,
        "col": 4,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 1,
        "col": 4,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 1,
        "col": 0,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 2,
        "col": 0,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 2,
        "col": 4,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 3,
        "col": 4,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 3,
        "col": 0,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 4,
        "col": 0,
        "dir": "/",
        "solution": "\\"
      }
    ]
  },
  {
    "name": "Azure Crossing",
    "tag": "ADVANCED",
    "difficulty": "Hard",
    "description": "Follow the long beam trail. Every turn matters.",
    "rows": 5,
    "cols": 5,
    "source": {
      "row": 0,
      "col": 0,
      "dir": "down"
    },
    "target": {
      "row": 4,
      "col": 4
    },
    "mirrors": [
      {
        "row": 4,
        "col": 0,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 4,
        "col": 1,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 0,
        "col": 1,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 0,
        "col": 2,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 4,
        "col": 2,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 4,
        "col": 3,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 0,
        "col": 3,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 0,
        "col": 4,
        "dir": "/",
        "solution": "\\"
      }
    ]
  },
  {
    "name": "Azure Passage",
    "tag": "ADVANCED",
    "difficulty": "Hard",
    "description": "Follow the long beam trail. Every turn matters.",
    "rows": 6,
    "cols": 6,
    "source": {
      "row": 0,
      "col": 0,
      "dir": "right"
    },
    "target": {
      "row": 5,
      "col": 0
    },
    "mirrors": [
      {
        "row": 0,
        "col": 5,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 1,
        "col": 5,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 1,
        "col": 0,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 2,
        "col": 0,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 2,
        "col": 5,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 3,
        "col": 5,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 3,
        "col": 0,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 4,
        "col": 0,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 4,
        "col": 5,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 5,
        "col": 5,
        "dir": "\\",
        "solution": "/"
      }
    ]
  },
  {
    "name": "Azure Zigzag",
    "tag": "ADVANCED",
    "difficulty": "Hard",
    "description": "Follow the long beam trail. Every turn matters.",
    "rows": 6,
    "cols": 6,
    "source": {
      "row": 0,
      "col": 0,
      "dir": "down"
    },
    "target": {
      "row": 0,
      "col": 5
    },
    "mirrors": [
      {
        "row": 5,
        "col": 0,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 5,
        "col": 1,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 0,
        "col": 1,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 0,
        "col": 2,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 5,
        "col": 2,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 5,
        "col": 3,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 0,
        "col": 3,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 0,
        "col": 4,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 5,
        "col": 4,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 5,
        "col": 5,
        "dir": "\\",
        "solution": "/"
      }
    ]
  },
  {
    "name": "Azure Corridor",
    "tag": "ADVANCED",
    "difficulty": "Hard",
    "description": "Follow the long beam trail. Every turn matters.",
    "rows": 6,
    "cols": 6,
    "source": {
      "row": 0,
      "col": 0,
      "dir": "right"
    },
    "target": {
      "row": 5,
      "col": 0
    },
    "mirrors": [
      {
        "row": 0,
        "col": 5,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 1,
        "col": 5,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 1,
        "col": 0,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 2,
        "col": 0,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 2,
        "col": 5,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 3,
        "col": 5,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 3,
        "col": 0,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 4,
        "col": 0,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 4,
        "col": 5,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 5,
        "col": 5,
        "dir": "\\",
        "solution": "/"
      }
    ]
  },
  {
    "name": "Azure Ribbon",
    "tag": "ADVANCED",
    "difficulty": "Hard",
    "description": "Follow the long beam trail. Every turn matters.",
    "rows": 6,
    "cols": 6,
    "source": {
      "row": 0,
      "col": 0,
      "dir": "down"
    },
    "target": {
      "row": 0,
      "col": 5
    },
    "mirrors": [
      {
        "row": 5,
        "col": 0,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 5,
        "col": 1,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 0,
        "col": 1,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 0,
        "col": 2,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 5,
        "col": 2,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 5,
        "col": 3,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 0,
        "col": 3,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 0,
        "col": 4,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 5,
        "col": 4,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 5,
        "col": 5,
        "dir": "\\",
        "solution": "/"
      }
    ]
  },
  {
    "name": "Azure Waypoint",
    "tag": "ADVANCED",
    "difficulty": "Hard",
    "description": "Follow the long beam trail. Every turn matters.",
    "rows": 6,
    "cols": 6,
    "source": {
      "row": 0,
      "col": 0,
      "dir": "right"
    },
    "target": {
      "row": 5,
      "col": 0
    },
    "mirrors": [
      {
        "row": 0,
        "col": 5,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 1,
        "col": 5,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 1,
        "col": 0,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 2,
        "col": 0,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 2,
        "col": 5,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 3,
        "col": 5,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 3,
        "col": 0,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 4,
        "col": 0,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 4,
        "col": 5,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 5,
        "col": 5,
        "dir": "\\",
        "solution": "/"
      }
    ]
  },
  {
    "name": "Azure Cascade",
    "tag": "ADVANCED",
    "difficulty": "Hard",
    "description": "Follow the long beam trail. Every turn matters.",
    "rows": 6,
    "cols": 6,
    "source": {
      "row": 0,
      "col": 0,
      "dir": "down"
    },
    "target": {
      "row": 0,
      "col": 5
    },
    "mirrors": [
      {
        "row": 5,
        "col": 0,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 5,
        "col": 1,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 0,
        "col": 1,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 0,
        "col": 2,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 5,
        "col": 2,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 5,
        "col": 3,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 0,
        "col": 3,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 0,
        "col": 4,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 5,
        "col": 4,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 5,
        "col": 5,
        "dir": "\\",
        "solution": "/"
      }
    ]
  },
  {
    "name": "Azure Trail",
    "tag": "ADVANCED",
    "difficulty": "Hard",
    "description": "Follow the long beam trail. Every turn matters.",
    "rows": 6,
    "cols": 6,
    "source": {
      "row": 0,
      "col": 0,
      "dir": "right"
    },
    "target": {
      "row": 5,
      "col": 0
    },
    "mirrors": [
      {
        "row": 0,
        "col": 5,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 1,
        "col": 5,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 1,
        "col": 0,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 2,
        "col": 0,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 2,
        "col": 5,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 3,
        "col": 5,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 3,
        "col": 0,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 4,
        "col": 0,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 4,
        "col": 5,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 5,
        "col": 5,
        "dir": "\\",
        "solution": "/"
      }
    ]
  },
  {
    "name": "Azure Journey",
    "tag": "ADVANCED",
    "difficulty": "Hard",
    "description": "Follow the long beam trail. Every turn matters.",
    "rows": 6,
    "cols": 6,
    "source": {
      "row": 0,
      "col": 0,
      "dir": "down"
    },
    "target": {
      "row": 0,
      "col": 5
    },
    "mirrors": [
      {
        "row": 5,
        "col": 0,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 5,
        "col": 1,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 0,
        "col": 1,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 0,
        "col": 2,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 5,
        "col": 2,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 5,
        "col": 3,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 0,
        "col": 3,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 0,
        "col": 4,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 5,
        "col": 4,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 5,
        "col": 5,
        "dir": "\\",
        "solution": "/"
      }
    ]
  },
  {
    "name": "Azure Signal",
    "tag": "ADVANCED",
    "difficulty": "Hard",
    "description": "Follow the long beam trail. Every turn matters.",
    "rows": 6,
    "cols": 6,
    "source": {
      "row": 0,
      "col": 0,
      "dir": "right"
    },
    "target": {
      "row": 5,
      "col": 0
    },
    "mirrors": [
      {
        "row": 0,
        "col": 5,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 1,
        "col": 5,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 1,
        "col": 0,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 2,
        "col": 0,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 2,
        "col": 5,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 3,
        "col": 5,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 3,
        "col": 0,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 4,
        "col": 0,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 4,
        "col": 5,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 5,
        "col": 5,
        "dir": "\\",
        "solution": "/"
      }
    ]
  },
  {
    "name": "Azure Orbit",
    "tag": "ADVANCED",
    "difficulty": "Hard",
    "description": "Follow the long beam trail. Every turn matters.",
    "rows": 6,
    "cols": 6,
    "source": {
      "row": 0,
      "col": 0,
      "dir": "down"
    },
    "target": {
      "row": 0,
      "col": 5
    },
    "mirrors": [
      {
        "row": 5,
        "col": 0,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 5,
        "col": 1,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 0,
        "col": 1,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 0,
        "col": 2,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 5,
        "col": 2,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 5,
        "col": 3,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 0,
        "col": 3,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 0,
        "col": 4,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 5,
        "col": 4,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 5,
        "col": 5,
        "dir": "\\",
        "solution": "/"
      }
    ]
  },
  {
    "name": "Azure Gate",
    "tag": "ADVANCED",
    "difficulty": "Hard",
    "description": "Follow the long beam trail. Every turn matters.",
    "rows": 6,
    "cols": 6,
    "source": {
      "row": 0,
      "col": 0,
      "dir": "right"
    },
    "target": {
      "row": 5,
      "col": 0
    },
    "mirrors": [
      {
        "row": 0,
        "col": 5,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 1,
        "col": 5,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 1,
        "col": 0,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 2,
        "col": 0,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 2,
        "col": 5,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 3,
        "col": 5,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 3,
        "col": 0,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 4,
        "col": 0,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 4,
        "col": 5,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 5,
        "col": 5,
        "dir": "\\",
        "solution": "/"
      }
    ]
  },
  {
    "name": "Azure Circuit",
    "tag": "ADVANCED",
    "difficulty": "Hard",
    "description": "Follow the long beam trail. Every turn matters.",
    "rows": 6,
    "cols": 6,
    "source": {
      "row": 0,
      "col": 0,
      "dir": "down"
    },
    "target": {
      "row": 0,
      "col": 5
    },
    "mirrors": [
      {
        "row": 5,
        "col": 0,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 5,
        "col": 1,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 0,
        "col": 1,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 0,
        "col": 2,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 5,
        "col": 2,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 5,
        "col": 3,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 0,
        "col": 3,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 0,
        "col": 4,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 5,
        "col": 4,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 5,
        "col": 5,
        "dir": "\\",
        "solution": "/"
      }
    ]
  },
  {
    "name": "Violet Current",
    "tag": "EXPERT",
    "difficulty": "Expert",
    "description": "Follow the long beam trail. Every turn matters.",
    "rows": 7,
    "cols": 7,
    "source": {
      "row": 0,
      "col": 0,
      "dir": "right"
    },
    "target": {
      "row": 6,
      "col": 6
    },
    "mirrors": [
      {
        "row": 0,
        "col": 6,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 1,
        "col": 6,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 1,
        "col": 0,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 2,
        "col": 0,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 2,
        "col": 6,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 3,
        "col": 6,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 3,
        "col": 0,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 4,
        "col": 0,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 4,
        "col": 6,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 5,
        "col": 6,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 5,
        "col": 0,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 6,
        "col": 0,
        "dir": "/",
        "solution": "\\"
      }
    ]
  },
  {
    "name": "Violet Crossing",
    "tag": "EXPERT",
    "difficulty": "Expert",
    "description": "Follow the long beam trail. Every turn matters.",
    "rows": 7,
    "cols": 7,
    "source": {
      "row": 0,
      "col": 0,
      "dir": "down"
    },
    "target": {
      "row": 6,
      "col": 6
    },
    "mirrors": [
      {
        "row": 6,
        "col": 0,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 6,
        "col": 1,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 0,
        "col": 1,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 0,
        "col": 2,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 6,
        "col": 2,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 6,
        "col": 3,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 0,
        "col": 3,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 0,
        "col": 4,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 6,
        "col": 4,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 6,
        "col": 5,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 0,
        "col": 5,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 0,
        "col": 6,
        "dir": "/",
        "solution": "\\"
      }
    ]
  },
  {
    "name": "Violet Passage",
    "tag": "EXPERT",
    "difficulty": "Expert",
    "description": "Follow the long beam trail. Every turn matters.",
    "rows": 7,
    "cols": 7,
    "source": {
      "row": 0,
      "col": 0,
      "dir": "right"
    },
    "target": {
      "row": 6,
      "col": 6
    },
    "mirrors": [
      {
        "row": 0,
        "col": 6,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 1,
        "col": 6,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 1,
        "col": 0,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 2,
        "col": 0,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 2,
        "col": 6,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 3,
        "col": 6,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 3,
        "col": 0,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 4,
        "col": 0,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 4,
        "col": 6,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 5,
        "col": 6,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 5,
        "col": 0,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 6,
        "col": 0,
        "dir": "/",
        "solution": "\\"
      }
    ]
  },
  {
    "name": "Violet Zigzag",
    "tag": "EXPERT",
    "difficulty": "Expert",
    "description": "Follow the long beam trail. Every turn matters.",
    "rows": 7,
    "cols": 7,
    "source": {
      "row": 0,
      "col": 0,
      "dir": "down"
    },
    "target": {
      "row": 6,
      "col": 6
    },
    "mirrors": [
      {
        "row": 6,
        "col": 0,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 6,
        "col": 1,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 0,
        "col": 1,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 0,
        "col": 2,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 6,
        "col": 2,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 6,
        "col": 3,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 0,
        "col": 3,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 0,
        "col": 4,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 6,
        "col": 4,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 6,
        "col": 5,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 0,
        "col": 5,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 0,
        "col": 6,
        "dir": "/",
        "solution": "\\"
      }
    ]
  },
  {
    "name": "Violet Corridor",
    "tag": "EXPERT",
    "difficulty": "Expert",
    "description": "Follow the long beam trail. Every turn matters.",
    "rows": 7,
    "cols": 7,
    "source": {
      "row": 0,
      "col": 0,
      "dir": "right"
    },
    "target": {
      "row": 6,
      "col": 6
    },
    "mirrors": [
      {
        "row": 0,
        "col": 6,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 1,
        "col": 6,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 1,
        "col": 0,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 2,
        "col": 0,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 2,
        "col": 6,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 3,
        "col": 6,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 3,
        "col": 0,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 4,
        "col": 0,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 4,
        "col": 6,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 5,
        "col": 6,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 5,
        "col": 0,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 6,
        "col": 0,
        "dir": "/",
        "solution": "\\"
      }
    ]
  },
  {
    "name": "Violet Ribbon",
    "tag": "EXPERT",
    "difficulty": "Expert",
    "description": "Follow the long beam trail. Every turn matters.",
    "rows": 7,
    "cols": 7,
    "source": {
      "row": 0,
      "col": 0,
      "dir": "down"
    },
    "target": {
      "row": 6,
      "col": 6
    },
    "mirrors": [
      {
        "row": 6,
        "col": 0,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 6,
        "col": 1,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 0,
        "col": 1,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 0,
        "col": 2,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 6,
        "col": 2,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 6,
        "col": 3,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 0,
        "col": 3,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 0,
        "col": 4,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 6,
        "col": 4,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 6,
        "col": 5,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 0,
        "col": 5,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 0,
        "col": 6,
        "dir": "/",
        "solution": "\\"
      }
    ]
  },
  {
    "name": "Violet Waypoint",
    "tag": "EXPERT",
    "difficulty": "Expert",
    "description": "Follow the long beam trail. Every turn matters.",
    "rows": 7,
    "cols": 7,
    "source": {
      "row": 0,
      "col": 0,
      "dir": "right"
    },
    "target": {
      "row": 6,
      "col": 6
    },
    "mirrors": [
      {
        "row": 0,
        "col": 6,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 1,
        "col": 6,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 1,
        "col": 0,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 2,
        "col": 0,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 2,
        "col": 6,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 3,
        "col": 6,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 3,
        "col": 0,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 4,
        "col": 0,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 4,
        "col": 6,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 5,
        "col": 6,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 5,
        "col": 0,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 6,
        "col": 0,
        "dir": "/",
        "solution": "\\"
      }
    ]
  },
  {
    "name": "Violet Cascade",
    "tag": "EXPERT",
    "difficulty": "Expert",
    "description": "Follow the long beam trail. Every turn matters.",
    "rows": 7,
    "cols": 7,
    "source": {
      "row": 0,
      "col": 0,
      "dir": "down"
    },
    "target": {
      "row": 6,
      "col": 6
    },
    "mirrors": [
      {
        "row": 6,
        "col": 0,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 6,
        "col": 1,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 0,
        "col": 1,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 0,
        "col": 2,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 6,
        "col": 2,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 6,
        "col": 3,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 0,
        "col": 3,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 0,
        "col": 4,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 6,
        "col": 4,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 6,
        "col": 5,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 0,
        "col": 5,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 0,
        "col": 6,
        "dir": "/",
        "solution": "\\"
      }
    ]
  },
  {
    "name": "Violet Trail",
    "tag": "EXPERT",
    "difficulty": "Expert",
    "description": "Follow the long beam trail. Every turn matters.",
    "rows": 7,
    "cols": 7,
    "source": {
      "row": 0,
      "col": 0,
      "dir": "right"
    },
    "target": {
      "row": 6,
      "col": 6
    },
    "mirrors": [
      {
        "row": 0,
        "col": 6,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 1,
        "col": 6,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 1,
        "col": 0,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 2,
        "col": 0,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 2,
        "col": 6,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 3,
        "col": 6,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 3,
        "col": 0,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 4,
        "col": 0,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 4,
        "col": 6,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 5,
        "col": 6,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 5,
        "col": 0,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 6,
        "col": 0,
        "dir": "/",
        "solution": "\\"
      }
    ]
  },
  {
    "name": "Violet Journey",
    "tag": "EXPERT",
    "difficulty": "Expert",
    "description": "Follow the long beam trail. Every turn matters.",
    "rows": 7,
    "cols": 7,
    "source": {
      "row": 0,
      "col": 0,
      "dir": "down"
    },
    "target": {
      "row": 6,
      "col": 6
    },
    "mirrors": [
      {
        "row": 6,
        "col": 0,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 6,
        "col": 1,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 0,
        "col": 1,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 0,
        "col": 2,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 6,
        "col": 2,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 6,
        "col": 3,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 0,
        "col": 3,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 0,
        "col": 4,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 6,
        "col": 4,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 6,
        "col": 5,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 0,
        "col": 5,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 0,
        "col": 6,
        "dir": "/",
        "solution": "\\"
      }
    ]
  },
  {
    "name": "Violet Signal",
    "tag": "EXPERT",
    "difficulty": "Expert",
    "description": "Follow the long beam trail. Every turn matters.",
    "rows": 7,
    "cols": 7,
    "source": {
      "row": 0,
      "col": 0,
      "dir": "right"
    },
    "target": {
      "row": 6,
      "col": 6
    },
    "mirrors": [
      {
        "row": 0,
        "col": 6,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 1,
        "col": 6,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 1,
        "col": 0,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 2,
        "col": 0,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 2,
        "col": 6,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 3,
        "col": 6,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 3,
        "col": 0,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 4,
        "col": 0,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 4,
        "col": 6,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 5,
        "col": 6,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 5,
        "col": 0,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 6,
        "col": 0,
        "dir": "/",
        "solution": "\\"
      }
    ]
  },
  {
    "name": "Violet Orbit",
    "tag": "EXPERT",
    "difficulty": "Expert",
    "description": "Follow the long beam trail. Every turn matters.",
    "rows": 7,
    "cols": 7,
    "source": {
      "row": 0,
      "col": 0,
      "dir": "down"
    },
    "target": {
      "row": 6,
      "col": 6
    },
    "mirrors": [
      {
        "row": 6,
        "col": 0,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 6,
        "col": 1,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 0,
        "col": 1,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 0,
        "col": 2,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 6,
        "col": 2,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 6,
        "col": 3,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 0,
        "col": 3,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 0,
        "col": 4,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 6,
        "col": 4,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 6,
        "col": 5,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 0,
        "col": 5,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 0,
        "col": 6,
        "dir": "/",
        "solution": "\\"
      }
    ]
  },
  {
    "name": "Violet Gate",
    "tag": "MASTER",
    "difficulty": "Expert",
    "description": "Follow the long beam trail. Every turn matters.",
    "rows": 8,
    "cols": 8,
    "source": {
      "row": 0,
      "col": 0,
      "dir": "right"
    },
    "target": {
      "row": 7,
      "col": 0
    },
    "mirrors": [
      {
        "row": 0,
        "col": 7,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 1,
        "col": 7,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 1,
        "col": 0,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 2,
        "col": 0,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 2,
        "col": 7,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 3,
        "col": 7,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 3,
        "col": 0,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 4,
        "col": 0,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 4,
        "col": 7,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 5,
        "col": 7,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 5,
        "col": 0,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 6,
        "col": 0,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 6,
        "col": 7,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 7,
        "col": 7,
        "dir": "\\",
        "solution": "/"
      }
    ]
  },
  {
    "name": "Violet Circuit",
    "tag": "MASTER",
    "difficulty": "Expert",
    "description": "Follow the long beam trail. Every turn matters.",
    "rows": 8,
    "cols": 8,
    "source": {
      "row": 0,
      "col": 0,
      "dir": "down"
    },
    "target": {
      "row": 0,
      "col": 7
    },
    "mirrors": [
      {
        "row": 7,
        "col": 0,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 7,
        "col": 1,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 0,
        "col": 1,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 0,
        "col": 2,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 7,
        "col": 2,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 7,
        "col": 3,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 0,
        "col": 3,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 0,
        "col": 4,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 7,
        "col": 4,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 7,
        "col": 5,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 0,
        "col": 5,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 0,
        "col": 6,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 7,
        "col": 6,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 7,
        "col": 7,
        "dir": "\\",
        "solution": "/"
      }
    ]
  },
  {
    "name": "Silver Current",
    "tag": "MASTER",
    "difficulty": "Expert",
    "description": "Follow the long beam trail. Every turn matters.",
    "rows": 8,
    "cols": 8,
    "source": {
      "row": 0,
      "col": 0,
      "dir": "right"
    },
    "target": {
      "row": 7,
      "col": 0
    },
    "mirrors": [
      {
        "row": 0,
        "col": 7,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 1,
        "col": 7,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 1,
        "col": 0,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 2,
        "col": 0,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 2,
        "col": 7,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 3,
        "col": 7,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 3,
        "col": 0,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 4,
        "col": 0,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 4,
        "col": 7,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 5,
        "col": 7,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 5,
        "col": 0,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 6,
        "col": 0,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 6,
        "col": 7,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 7,
        "col": 7,
        "dir": "\\",
        "solution": "/"
      }
    ]
  },
  {
    "name": "Silver Crossing",
    "tag": "MASTER",
    "difficulty": "Expert",
    "description": "Follow the long beam trail. Every turn matters.",
    "rows": 8,
    "cols": 8,
    "source": {
      "row": 0,
      "col": 0,
      "dir": "down"
    },
    "target": {
      "row": 0,
      "col": 7
    },
    "mirrors": [
      {
        "row": 7,
        "col": 0,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 7,
        "col": 1,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 0,
        "col": 1,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 0,
        "col": 2,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 7,
        "col": 2,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 7,
        "col": 3,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 0,
        "col": 3,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 0,
        "col": 4,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 7,
        "col": 4,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 7,
        "col": 5,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 0,
        "col": 5,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 0,
        "col": 6,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 7,
        "col": 6,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 7,
        "col": 7,
        "dir": "\\",
        "solution": "/"
      }
    ]
  },
  {
    "name": "Silver Passage",
    "tag": "MASTER",
    "difficulty": "Expert",
    "description": "Follow the long beam trail. Every turn matters.",
    "rows": 8,
    "cols": 8,
    "source": {
      "row": 0,
      "col": 0,
      "dir": "right"
    },
    "target": {
      "row": 7,
      "col": 0
    },
    "mirrors": [
      {
        "row": 0,
        "col": 7,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 1,
        "col": 7,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 1,
        "col": 0,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 2,
        "col": 0,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 2,
        "col": 7,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 3,
        "col": 7,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 3,
        "col": 0,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 4,
        "col": 0,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 4,
        "col": 7,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 5,
        "col": 7,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 5,
        "col": 0,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 6,
        "col": 0,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 6,
        "col": 7,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 7,
        "col": 7,
        "dir": "\\",
        "solution": "/"
      }
    ]
  },
  {
    "name": "Silver Zigzag",
    "tag": "MASTER",
    "difficulty": "Expert",
    "description": "Follow the long beam trail. Every turn matters.",
    "rows": 8,
    "cols": 8,
    "source": {
      "row": 0,
      "col": 0,
      "dir": "down"
    },
    "target": {
      "row": 0,
      "col": 7
    },
    "mirrors": [
      {
        "row": 7,
        "col": 0,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 7,
        "col": 1,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 0,
        "col": 1,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 0,
        "col": 2,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 7,
        "col": 2,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 7,
        "col": 3,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 0,
        "col": 3,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 0,
        "col": 4,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 7,
        "col": 4,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 7,
        "col": 5,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 0,
        "col": 5,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 0,
        "col": 6,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 7,
        "col": 6,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 7,
        "col": 7,
        "dir": "\\",
        "solution": "/"
      }
    ]
  },
  {
    "name": "Silver Corridor",
    "tag": "MASTER",
    "difficulty": "Expert",
    "description": "Follow the long beam trail. Every turn matters.",
    "rows": 8,
    "cols": 8,
    "source": {
      "row": 0,
      "col": 0,
      "dir": "right"
    },
    "target": {
      "row": 7,
      "col": 0
    },
    "mirrors": [
      {
        "row": 0,
        "col": 7,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 1,
        "col": 7,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 1,
        "col": 0,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 2,
        "col": 0,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 2,
        "col": 7,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 3,
        "col": 7,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 3,
        "col": 0,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 4,
        "col": 0,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 4,
        "col": 7,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 5,
        "col": 7,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 5,
        "col": 0,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 6,
        "col": 0,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 6,
        "col": 7,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 7,
        "col": 7,
        "dir": "\\",
        "solution": "/"
      }
    ]
  },
  {
    "name": "Silver Ribbon",
    "tag": "MASTER",
    "difficulty": "Expert",
    "description": "Follow the long beam trail. Every turn matters.",
    "rows": 8,
    "cols": 8,
    "source": {
      "row": 0,
      "col": 0,
      "dir": "down"
    },
    "target": {
      "row": 0,
      "col": 7
    },
    "mirrors": [
      {
        "row": 7,
        "col": 0,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 7,
        "col": 1,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 0,
        "col": 1,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 0,
        "col": 2,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 7,
        "col": 2,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 7,
        "col": 3,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 0,
        "col": 3,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 0,
        "col": 4,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 7,
        "col": 4,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 7,
        "col": 5,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 0,
        "col": 5,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 0,
        "col": 6,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 7,
        "col": 6,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 7,
        "col": 7,
        "dir": "\\",
        "solution": "/"
      }
    ]
  },
  {
    "name": "Silver Waypoint",
    "tag": "MASTER",
    "difficulty": "Expert",
    "description": "Follow the long beam trail. Every turn matters.",
    "rows": 8,
    "cols": 8,
    "source": {
      "row": 0,
      "col": 0,
      "dir": "right"
    },
    "target": {
      "row": 7,
      "col": 0
    },
    "mirrors": [
      {
        "row": 0,
        "col": 7,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 1,
        "col": 7,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 1,
        "col": 0,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 2,
        "col": 0,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 2,
        "col": 7,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 3,
        "col": 7,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 3,
        "col": 0,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 4,
        "col": 0,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 4,
        "col": 7,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 5,
        "col": 7,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 5,
        "col": 0,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 6,
        "col": 0,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 6,
        "col": 7,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 7,
        "col": 7,
        "dir": "\\",
        "solution": "/"
      }
    ]
  },
  {
    "name": "Silver Cascade",
    "tag": "MASTER",
    "difficulty": "Expert",
    "description": "Follow the long beam trail. Every turn matters.",
    "rows": 8,
    "cols": 8,
    "source": {
      "row": 0,
      "col": 0,
      "dir": "down"
    },
    "target": {
      "row": 0,
      "col": 7
    },
    "mirrors": [
      {
        "row": 7,
        "col": 0,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 7,
        "col": 1,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 0,
        "col": 1,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 0,
        "col": 2,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 7,
        "col": 2,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 7,
        "col": 3,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 0,
        "col": 3,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 0,
        "col": 4,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 7,
        "col": 4,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 7,
        "col": 5,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 0,
        "col": 5,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 0,
        "col": 6,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 7,
        "col": 6,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 7,
        "col": 7,
        "dir": "\\",
        "solution": "/"
      }
    ]
  },
  {
    "name": "Silver Trail",
    "tag": "MASTER",
    "difficulty": "Expert",
    "description": "Follow the long beam trail. Every turn matters.",
    "rows": 8,
    "cols": 8,
    "source": {
      "row": 0,
      "col": 0,
      "dir": "right"
    },
    "target": {
      "row": 7,
      "col": 0
    },
    "mirrors": [
      {
        "row": 0,
        "col": 7,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 1,
        "col": 7,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 1,
        "col": 0,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 2,
        "col": 0,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 2,
        "col": 7,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 3,
        "col": 7,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 3,
        "col": 0,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 4,
        "col": 0,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 4,
        "col": 7,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 5,
        "col": 7,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 5,
        "col": 0,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 6,
        "col": 0,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 6,
        "col": 7,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 7,
        "col": 7,
        "dir": "\\",
        "solution": "/"
      }
    ]
  },
  {
    "name": "Silver Journey",
    "tag": "MASTER",
    "difficulty": "Expert",
    "description": "Follow the long beam trail. Every turn matters.",
    "rows": 8,
    "cols": 8,
    "source": {
      "row": 0,
      "col": 0,
      "dir": "down"
    },
    "target": {
      "row": 0,
      "col": 7
    },
    "mirrors": [
      {
        "row": 7,
        "col": 0,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 7,
        "col": 1,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 0,
        "col": 1,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 0,
        "col": 2,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 7,
        "col": 2,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 7,
        "col": 3,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 0,
        "col": 3,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 0,
        "col": 4,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 7,
        "col": 4,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 7,
        "col": 5,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 0,
        "col": 5,
        "dir": "\\",
        "solution": "/"
      },
      {
        "row": 0,
        "col": 6,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 7,
        "col": 6,
        "dir": "/",
        "solution": "\\"
      },
      {
        "row": 7,
        "col": 7,
        "dir": "\\",
        "solution": "/"
      }
    ]
  }
];
