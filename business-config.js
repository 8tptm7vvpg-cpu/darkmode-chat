window.DARKMODE_CONFIG = {
  "version": "1.11",
  "business": {
    "id": "darkmode-demo",
    "name": "Darkmode Chat",
    "phone": "757-239-7007",
    "address": "Virginia Beach, Virginia",
    "directionsUrl": "https://www.google.com/maps/search/?api=1&query=Virginia+Beach%2C+Virginia",
    "website": "https://darkmodeworks.com"
  },
  "branding": {
    "primary": "#bcff49",
    "secondary": "#00bb7d",
    "icon": "assets/DARKMODE-IMAGE-002.png",
    "darkmodeWordmark": true
  },
  "submission": {
    "mode": "simulation",
    "endpoint": ""
  },
  "greeting": "Start typing below or click a department above to get started.",
  "departments": [
    {
      "id": "sales",
      "label": "Automotive Sales",
      "description": "Sales Inventory Demonstration",
      "catalogType": "inventory",
      "response": "I can help you explore Lexus models, new and pre-owned vehicles, financing, trade-ins and test drives.",
      "linkLabel": "Shop Lexus Inventory (Link)",
      "linkUrl": "https://prioritylexusvirginiabeach.com/inventory",
      "options": [
        {
          "label": "Browse Sales Inventory (Pull)",
          "action": "pull",
          "loading": "Pulling sample sales inventory demonstration data\u2026"
        },
        {
          "label": "Shop Lexus Inventory (Link)",
          "action": "department-link",
          "loading": "Finding the page you need\u2026"
        },
        {
          "label": "Ask Sales a Question (Submit)",
          "action": "submit",
          "loading": "Preparing your inquiry form\u2026"
        }
      ]
    },
    {
      "id": "parts",
      "label": "Automotive Parts",
      "description": "Parts Inventory Demonstration",
      "catalogType": "parts",
      "response": "I can help you explore Genuine Lexus parts and accessories. Our parts team can confirm fitment using your vehicle details or VIN.",
      "linkLabel": "Shop Genuine Lexus Parts (Link)",
      "linkUrl": "https://parts.prioritylexusvirginiabeach.com/",
      "options": [
        {
          "label": "Browse Parts (Pull)",
          "action": "pull",
          "loading": "Pulling sample parts inventory demonstration data\u2026"
        },
        {
          "label": "Shop Genuine Lexus Parts (Link)",
          "action": "department-link",
          "loading": "Finding the page you need\u2026"
        },
        {
          "label": "Ask Parts a Question (Submit)",
          "action": "submit",
          "loading": "Preparing your inquiry form\u2026"
        }
      ]
    },
    {
      "id": "service",
      "label": "Automotive Service",
      "description": "Service Specials Demonstration",
      "catalogType": "service",
      "response": "I\u2019d be happy to get you a link to our service scheduler. You can also browse example service specials or ask our service team a question.",
      "linkLabel": "Schedule Service (Link)",
      "linkUrl": "https://prioritylexusvirginiabeach.com/service-scheduler",
      "options": [
        {
          "label": "View Service Specials (Pull)",
          "action": "pull",
          "loading": "Pulling sample service specials demonstration data\u2026"
        },
        {
          "label": "Schedule Service (Link)",
          "action": "department-link",
          "loading": "Finding the page you need\u2026"
        },
        {
          "label": "Ask Service a Question (Submit)",
          "action": "submit",
          "loading": "Preparing your inquiry form\u2026"
        }
      ]
    }
  ],
  "keywords": {
    "products": [
      "product",
      "products",
      "shop",
      "item",
      "items",
      "equipment"
    ],
    "inventory": [
      "inventory",
      "vehicle",
      "vehicles",
      "car",
      "cars",
      "suv",
      "rx",
      "gx",
      "sedan",
      "used",
      "preowned",
      "pre-owned",
      "new"
    ],
    "phone": [
      "phone",
      "call",
      "number",
      "telephone"
    ],
    "directions": [
      "address",
      "directions",
      "location",
      "located",
      "where"
    ],
    "appointment": [
      "appointment",
      "schedule",
      "booking"
    ]
  },
  "nextSteps": {
    "appointment": {
      "label": "Open scheduling page",
      "url": ""
    },
    "availability": {
      "label": "Browse website",
      "url": ""
    },
    "inquiry": {
      "label": "Visit website",
      "url": ""
    }
  },
  "products": [
    {
      "id": "STOCK-001",
      "type": "inventory",
      "name": "2026 Lexus Demo RX SUV",
      "price": "$52,000",
      "description": "Illustrative vehicle listing. Specifications, pricing and availability are simulated.",
      "condition": "New",
      "tags": [
        "vehicle",
        "suv"
      ],
      "image": "assets/DARKMODE-IMAGE-001.png",
      "url": "",
      "department": "sales"
    },
    {
      "id": "STOCK-002",
      "type": "inventory",
      "name": "2026 Lexus Demo GX SUV",
      "price": "$68,000",
      "description": "Illustrative vehicle listing. Specifications, pricing and availability are simulated.",
      "condition": "New",
      "tags": [
        "vehicle",
        "suv"
      ],
      "image": "assets/DARKMODE-IMAGE-001.png",
      "url": "",
      "department": "sales"
    },
    {
      "id": "STOCK-003",
      "type": "inventory",
      "name": "2026 Lexus Demo Compact SUV",
      "price": "$39,000",
      "description": "Illustrative vehicle listing. Specifications, pricing and availability are simulated.",
      "condition": "New",
      "tags": [
        "vehicle",
        "suv"
      ],
      "image": "assets/DARKMODE-IMAGE-001.png",
      "url": "",
      "department": "sales"
    },
    {
      "id": "STOCK-004",
      "type": "inventory",
      "name": "2024 Lexus Demo RX SUV",
      "price": "$41,000",
      "description": "Illustrative vehicle listing. Specifications, pricing and availability are simulated.",
      "condition": "Pre-Owned",
      "tags": [
        "vehicle",
        "suv"
      ],
      "image": "assets/DARKMODE-IMAGE-001.png",
      "url": "",
      "department": "sales"
    },
    {
      "id": "STOCK-005",
      "type": "inventory",
      "name": "2023 Lexus Demo GX SUV",
      "price": "$48,000",
      "description": "Illustrative vehicle listing. Specifications, pricing and availability are simulated.",
      "condition": "Pre-Owned",
      "tags": [
        "vehicle",
        "suv"
      ],
      "image": "assets/DARKMODE-IMAGE-001.png",
      "url": "",
      "department": "sales"
    },
    {
      "id": "STOCK-006",
      "type": "inventory",
      "name": "2022 Lexus Demo Touring Sedan",
      "price": "$29,000",
      "description": "Illustrative vehicle listing. Specifications, pricing and availability are simulated.",
      "condition": "Pre-Owned",
      "tags": [
        "vehicle",
        "sedan"
      ],
      "image": "assets/DARKMODE-IMAGE-001.png",
      "url": "",
      "department": "sales"
    },
    {
      "id": "STOCK-007",
      "type": "inventory",
      "department": "sales",
      "name": "2026 Lexus NX \u2014 Demo",
      "condition": "New",
      "price": "Example listing",
      "description": "Simulated vehicle. No live price, stock or availability assertion.",
      "tags": [
        "nx",
        "suv"
      ],
      "image": "assets/DARKMODE-IMAGE-001.png",
      "url": ""
    },
    {
      "id": "STOCK-008",
      "type": "inventory",
      "department": "sales",
      "name": "2026 Lexus TX \u2014 Demo",
      "condition": "New",
      "price": "Example listing",
      "description": "Simulated vehicle. No live price, stock or availability assertion.",
      "tags": [
        "tx",
        "suv"
      ],
      "image": "assets/DARKMODE-IMAGE-001.png",
      "url": ""
    },
    {
      "id": "STOCK-009",
      "type": "inventory",
      "department": "sales",
      "name": "2026 Lexus LX \u2014 Demo",
      "condition": "New",
      "price": "Example listing",
      "description": "Simulated vehicle. No live price, stock or availability assertion.",
      "tags": [
        "lx",
        "suv"
      ],
      "image": "assets/DARKMODE-IMAGE-001.png",
      "url": ""
    },
    {
      "id": "PART-001",
      "type": "parts",
      "department": "parts",
      "name": "Brake Rotor Kit \u2014 Demo",
      "condition": "",
      "price": "Example item",
      "description": "Fictional product record. Parts team must confirm vehicle compatibility, pricing and availability.",
      "tags": [
        "parts",
        "brake rotor kit"
      ],
      "image": "assets/DARKMODE-IMAGE-003.png",
      "url": ""
    },
    {
      "id": "PART-002",
      "type": "parts",
      "department": "parts",
      "name": "Brake Caliper \u2014 Demo",
      "condition": "",
      "price": "Example item",
      "description": "Fictional product record. Parts team must confirm vehicle compatibility, pricing and availability.",
      "tags": [
        "parts",
        "brake caliper"
      ],
      "image": "assets/DARKMODE-IMAGE-003.png",
      "url": ""
    },
    {
      "id": "PART-003",
      "type": "parts",
      "department": "parts",
      "name": "Cabin Air Filter \u2014 Demo",
      "condition": "",
      "price": "Example item",
      "description": "Fictional product record. Parts team must confirm vehicle compatibility, pricing and availability.",
      "tags": [
        "parts",
        "cabin air filter"
      ],
      "image": "assets/DARKMODE-IMAGE-003.png",
      "url": ""
    },
    {
      "id": "PART-004",
      "type": "parts",
      "department": "parts",
      "name": "All-Weather Floor Mats \u2014 Demo",
      "condition": "",
      "price": "Example item",
      "description": "Fictional product record. Parts team must confirm vehicle compatibility, pricing and availability.",
      "tags": [
        "parts",
        "all-weather floor mats"
      ],
      "image": "assets/DARKMODE-IMAGE-003.png",
      "url": ""
    },
    {
      "id": "PART-005",
      "type": "parts",
      "department": "parts",
      "name": "Wiper Blade Set \u2014 Demo",
      "condition": "",
      "price": "Example item",
      "description": "Fictional product record. Parts team must confirm vehicle compatibility, pricing and availability.",
      "tags": [
        "parts",
        "wiper blade set"
      ],
      "image": "assets/DARKMODE-IMAGE-003.png",
      "url": ""
    },
    {
      "id": "PART-006",
      "type": "parts",
      "department": "parts",
      "name": "Cargo Liner \u2014 Demo",
      "condition": "",
      "price": "Example item",
      "description": "Fictional product record. Parts team must confirm vehicle compatibility, pricing and availability.",
      "tags": [
        "parts",
        "cargo liner"
      ],
      "image": "assets/DARKMODE-IMAGE-003.png",
      "url": ""
    },
    {
      "id": "SERVICE-DEMO-4",
      "type": "service",
      "department": "service",
      "name": "Battery Health Check \u2014 Demo",
      "price": "Example service",
      "description": "Additional pagination example, not a current special.",
      "condition": "",
      "tags": [
        "service"
      ],
      "image": "assets/DARKMODE-IMAGE-004.png",
      "url": ""
    },
    {
      "id": "SERVICE-DEMO-5",
      "type": "service",
      "department": "service",
      "name": "Wheel Alignment Check \u2014 Demo",
      "price": "Example service",
      "description": "Additional pagination example, not a current special.",
      "condition": "",
      "tags": [
        "service"
      ],
      "image": "assets/DARKMODE-IMAGE-004.png",
      "url": ""
    },
    {
      "id": "SERVICE-DEMO-6",
      "type": "service",
      "department": "service",
      "name": "Seasonal Maintenance Review \u2014 Demo",
      "price": "Example service",
      "description": "Additional pagination example, not a current special.",
      "condition": "",
      "tags": [
        "service"
      ],
      "image": "assets/DARKMODE-IMAGE-004.png",
      "url": ""
    }
  ],
  "storeHours": [
    {
      "days": "Monday\u2013Friday",
      "hours": "9:00 AM\u20137:00 PM"
    },
    {
      "days": "Saturday",
      "hours": "9:00 AM\u20135:00 PM"
    },
    {
      "days": "Sunday",
      "hours": "Closed"
    }
  ],
  "hours": {
    "source": "https://prioritylexusvirginiabeach.com/directions",
    "verified": "2026-11-02",
    "departments": [
      {
        "id": "sales",
        "label": "Automotive Sales",
        "weekdays": "9:00 AM\u20138:00 PM",
        "saturday": "9:00 AM\u20136:00 PM",
        "sunday": "Closed"
      },
      {
        "id": "parts",
        "label": "Automotive Parts",
        "weekdays": "7:00 AM\u20136:00 PM",
        "saturday": "8:00 AM\u20135:00 PM",
        "sunday": "Closed"
      },
      {
        "id": "service",
        "label": "Automotive Service",
        "weekdays": "7:00 AM\u20136:00 PM",
        "saturday": "8:00 AM\u20135:00 PM",
        "sunday": "Closed"
      }
    ]
  },
  "examples": [
    "tell me more about the lexus rx",
    "show me pre-owned suvs",
    "i need brake parts for my lexus",
    "how do i schedule service",
    "show me service specials",
    "what are your hours",
    "tell me more about product a"
  ],
  "routing": [
    {
      "department": "sales",
      "terms": {
        "buy": 3,
        "purchase": 3,
        "sales": 4,
        "inventory": 3,
        "vehicle": 2,
        "car": 1,
        "suv": 2,
        "new": 1,
        "used": 2,
        "pre owned": 3,
        "preowned": 3,
        "lexus": 1,
        "rx": 3,
        "nx": 3,
        "gx": 3,
        "tx": 3,
        "lx": 3,
        "ux": 3,
        "rz": 3,
        "es": 3,
        "is": 3,
        "ls": 3,
        "lc": 3,
        "hybrid": 2,
        "electric": 2,
        "plug in": 2,
        "f sport": 2,
        "overtrail": 2,
        "test drive": 5,
        "lease": 4,
        "finance": 4,
        "financing": 4,
        "credit": 3,
        "preapproved": 3,
        "trade": 4,
        "trade in": 4,
        "payment": 2,
        "price": 1,
        "product a": 3
      },
      "response": "Let\u2019s find a Lexus that fits what you\u2019re looking for. Explore sample inventory, browse the dealership website, or send Sales your question."
    },
    {
      "department": "parts",
      "terms": {
        "parts": 5,
        "part": 4,
        "part number": 6,
        "sku": 5,
        "vin": 3,
        "fitment": 5,
        "accessory": 4,
        "accessories": 4,
        "genuine": 2,
        "oem": 3,
        "order": 2,
        "buy parts": 7,
        "rotor": 3,
        "caliper": 3,
        "brake pads": 3,
        "filter": 2,
        "battery": 2,
        "wiper": 3,
        "floor mat": 4,
        "cargo": 1,
        "roof rack": 4,
        "wheel": 2,
        "oil filter": 4
      },
      "response": "Looking for parts or accessories? Browse sample items, open the Lexus parts store, or ask the team to confirm fitment and availability."
    },
    {
      "department": "service",
      "terms": {
        "service": 5,
        "schedule": 5,
        "appointment": 5,
        "book": 4,
        "maintenance": 5,
        "repair": 5,
        "technician": 5,
        "mechanic": 5,
        "oil change": 6,
        "tire rotation": 6,
        "inspection": 5,
        "diagnostic": 5,
        "check engine": 6,
        "warning light": 5,
        "recall": 4,
        "brake service": 7,
        "brake repair": 7,
        "install": 4,
        "installation": 4,
        "alignment": 5,
        "fluid": 2,
        "specials": 2,
        "coupon": 2,
        "brakes": 2,
        "tire": 2,
        "tires": 2
      },
      "response": "I\u2019d be happy to get you a link to our service scheduler. Our service team can help with maintenance and repair questions; you can also explore the sample service specials."
    }
  ],
  "offersSource": {
    "url": "offers.json",
    "enabled": true
  },
  "offersFallback": [
    {
      "id": "SALES-OFFER-1",
      "type": "sales-special",
      "department": "sales",
      "name": "New Lexus Consultation \u2014 Demo Special",
      "price": "Request sample offer details",
      "description": "Illustrative offer only. Not a published dealership promotion. Contact the team for current terms.",
      "condition": "",
      "tags": [
        "special",
        "sales"
      ],
      "image": "assets/DARKMODE-IMAGE-001.png",
      "url": "",
      "active": true,
      "expires": ""
    },
    {
      "id": "SALES-OFFER-2",
      "type": "sales-special",
      "department": "sales",
      "name": "Pre-Owned Vehicle Review \u2014 Demo Special",
      "price": "Request sample offer details",
      "description": "Illustrative offer only. Not a published dealership promotion. Contact the team for current terms.",
      "condition": "",
      "tags": [
        "special",
        "sales"
      ],
      "image": "assets/DARKMODE-IMAGE-001.png",
      "url": "",
      "active": true,
      "expires": ""
    },
    {
      "id": "SALES-OFFER-3",
      "type": "sales-special",
      "department": "sales",
      "name": "Trade-In Appraisal \u2014 Demo Special",
      "price": "Request sample offer details",
      "description": "Illustrative offer only. Not a published dealership promotion. Contact the team for current terms.",
      "condition": "",
      "tags": [
        "special",
        "sales"
      ],
      "image": "assets/DARKMODE-IMAGE-001.png",
      "url": "",
      "active": true,
      "expires": ""
    },
    {
      "id": "PARTS-OFFER-1",
      "type": "parts-special",
      "department": "parts",
      "name": "Genuine Parts Inquiry \u2014 Demo Special",
      "price": "Request sample offer details",
      "description": "Illustrative offer only. Not a published dealership promotion. Contact the team for current terms.",
      "condition": "",
      "tags": [
        "special",
        "parts"
      ],
      "image": "assets/DARKMODE-IMAGE-003.png",
      "url": "",
      "active": true,
      "expires": ""
    },
    {
      "id": "PARTS-OFFER-2",
      "type": "parts-special",
      "department": "parts",
      "name": "Accessory Fitment Check \u2014 Demo Special",
      "price": "Request sample offer details",
      "description": "Illustrative offer only. Not a published dealership promotion. Contact the team for current terms.",
      "condition": "",
      "tags": [
        "special",
        "parts"
      ],
      "image": "assets/DARKMODE-IMAGE-003.png",
      "url": "",
      "active": true,
      "expires": ""
    },
    {
      "id": "PARTS-OFFER-3",
      "type": "parts-special",
      "department": "parts",
      "name": "Maintenance Parts Bundle \u2014 Demo Special",
      "price": "Request sample offer details",
      "description": "Illustrative offer only. Not a published dealership promotion. Contact the team for current terms.",
      "condition": "",
      "tags": [
        "special",
        "parts"
      ],
      "image": "assets/DARKMODE-IMAGE-003.png",
      "url": "",
      "active": true,
      "expires": ""
    },
    {
      "id": "SERVICE-OFFER-1",
      "type": "service",
      "department": "service",
      "name": "Oil & Filter Service \u2014 Demo Special",
      "price": "Request sample offer details",
      "description": "Illustrative offer only. Not a published dealership promotion. Contact the team for current terms.",
      "condition": "",
      "tags": [
        "special",
        "service"
      ],
      "image": "assets/DARKMODE-IMAGE-004.png",
      "url": "",
      "active": true,
      "expires": ""
    },
    {
      "id": "SERVICE-OFFER-2",
      "type": "service",
      "department": "service",
      "name": "Tire Rotation & Inspection \u2014 Demo Special",
      "price": "Request sample offer details",
      "description": "Illustrative offer only. Not a published dealership promotion. Contact the team for current terms.",
      "condition": "",
      "tags": [
        "special",
        "service"
      ],
      "image": "assets/DARKMODE-IMAGE-004.png",
      "url": "",
      "active": true,
      "expires": ""
    },
    {
      "id": "SERVICE-OFFER-3",
      "type": "service",
      "department": "service",
      "name": "Brake Inspection \u2014 Demo Special",
      "price": "Request sample offer details",
      "description": "Illustrative offer only. Not a published dealership promotion. Contact the team for current terms.",
      "condition": "",
      "tags": [
        "special",
        "service"
      ],
      "image": "assets/DARKMODE-IMAGE-004.png",
      "url": "",
      "active": true,
      "expires": ""
    }
  ]
};
