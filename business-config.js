window.DARKMODE_CONFIG = {
  "version": "1.13",
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
      "description": "Sales Offers Demonstration",
      "catalogType": "sales-special",
      "response": "Explore example sales offers, preview a website page, or ask our sales team a question.",
      "linkLabel": "Explore Sales Offers (Link)",
      "linkUrl": "link-preview.html",
      "options": [
        {
          "label": "View Sales Offers (Pull)",
          "action": "pull",
          "loading": "Pulling sample sales offers…"
        },
        {
          "label": "Explore Sales Offers (Link)",
          "action": "department-link",
          "loading": "Finding the page you need…"
        },
        {
          "label": "Ask Sales a Question (Submit)",
          "action": "submit",
          "loading": "Preparing your inquiry form…"
        }
      ]
    },
    {
      "id": "parts",
      "label": "Automotive Parts",
      "description": "Parts Offers Demonstration",
      "catalogType": "parts-special",
      "response": "Explore example parts offers, preview a website page, or ask our parts team a question.",
      "linkLabel": "Explore Parts Offers (Link)",
      "linkUrl": "link-preview.html",
      "options": [
        {
          "label": "View Parts Offers (Pull)",
          "action": "pull",
          "loading": "Pulling sample parts offers…"
        },
        {
          "label": "Explore Parts Offers (Link)",
          "action": "department-link",
          "loading": "Finding the page you need…"
        },
        {
          "label": "Ask Parts a Question (Submit)",
          "action": "submit",
          "loading": "Preparing your inquiry form…"
        }
      ]
    },
    {
      "id": "service",
      "label": "Automotive Service",
      "description": "Service Offers Demonstration",
      "catalogType": "service",
      "response": "I’d be happy to get you a link to schedule service. Explore our example service offers or send our team a question.",
      "linkLabel": "Schedule Service (Link)",
      "linkUrl": "link-preview.html",
      "options": [
        {
          "label": "View Service Offers (Pull)",
          "action": "pull",
          "loading": "Pulling sample service offers…"
        },
        {
          "label": "Schedule Service (Link)",
          "action": "department-link",
          "loading": "Finding the page you need…"
        },
        {
          "label": "Ask Service a Question (Submit)",
          "action": "submit",
          "loading": "Preparing your inquiry form…"
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
      "url": "link-preview.html"
    },
    "availability": {
      "label": "Browse website",
      "url": "link-preview.html"
    },
    "inquiry": {
      "label": "Visit website",
      "url": "link-preview.html"
    }
  },
  "products": [],
  "storeHours": [
    {
      "days": "Monday–Friday",
      "hours": "9:00 AM–7:00 PM"
    },
    {
      "days": "Saturday",
      "hours": "9:00 AM–5:00 PM"
    },
    {
      "days": "Sunday",
      "hours": "Closed"
    }
  ],
  "hours": {
    "source": "link-preview.html",
    "verified": "",
    "departments": [
      {
        "id": "sales",
        "label": "Automotive Sales",
        "weekdays": "9:00 AM–8:00 PM",
        "saturday": "9:00 AM–6:00 PM",
        "sunday": "Closed"
      },
      {
        "id": "parts",
        "label": "Automotive Parts",
        "weekdays": "7:00 AM–6:00 PM",
        "saturday": "8:00 AM–5:00 PM",
        "sunday": "Closed"
      },
      {
        "id": "service",
        "label": "Automotive Service",
        "weekdays": "7:00 AM–6:00 PM",
        "saturday": "8:00 AM–5:00 PM",
        "sunday": "Closed"
      }
    ],
    "demo": true
  },
  "examples": [
    "show me sales offers",
    "what parts offers do you have",
    "tell me about accessory offers",
    "how do i schedule service",
    "show me service offers",
    "what are your hours"
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
        "hybrid": 2,
        "electric": 2,
        "plug in": 2,
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
        "product a": 3,
        "sales offers": 6,
        "offer": 2,
        "offers": 2,
        "deal": 2,
        "discount": 2
      },
      "response": "Explore example sales offers, preview a website page, or ask our sales team a question."
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
        "oil filter": 4,
        "parts offers": 6
      },
      "response": "Explore example parts offers, preview a website page, or ask our parts team a question."
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
        "tires": 2,
        "service offers": 6
      },
      "response": "I’d be happy to get you a link to schedule service. Explore our example service offers or send our team a question."
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
      "name": "New Vehicle Savings — Demo Offer",
      "price": "Claim this sample offer",
      "description": "Demonstration only. Send your question to the team for a personal follow-up about current offers and terms.",
      "tags": [
        "sales",
        "offer",
        "special"
      ],
      "image": "assets/DARKMODE-IMAGE-001.png",
      "url": "link-preview.html",
      "active": true,
      "expires": ""
    },
    {
      "id": "SALES-OFFER-2",
      "type": "sales-special",
      "department": "sales",
      "name": "Pre-Owned Savings — Demo Offer",
      "price": "Claim this sample offer",
      "description": "Demonstration only. Send your question to the team for a personal follow-up about current offers and terms.",
      "tags": [
        "sales",
        "offer",
        "special"
      ],
      "image": "assets/DARKMODE-IMAGE-001.png",
      "url": "link-preview.html",
      "active": true,
      "expires": ""
    },
    {
      "id": "SALES-OFFER-3",
      "type": "sales-special",
      "department": "sales",
      "name": "Trade-In Bonus — Demo Offer",
      "price": "Claim this sample offer",
      "description": "Demonstration only. Send your question to the team for a personal follow-up about current offers and terms.",
      "tags": [
        "sales",
        "offer",
        "special"
      ],
      "image": "assets/DARKMODE-IMAGE-001.png",
      "url": "link-preview.html",
      "active": true,
      "expires": ""
    },
    {
      "id": "SALES-OFFER-4",
      "type": "sales-special",
      "department": "sales",
      "name": "Finance Consultation — Demo Offer",
      "price": "Claim this sample offer",
      "description": "Demonstration only. Send your question to the team for a personal follow-up about current offers and terms.",
      "tags": [
        "sales",
        "offer",
        "special"
      ],
      "image": "assets/DARKMODE-IMAGE-001.png",
      "url": "link-preview.html",
      "active": true,
      "expires": ""
    },
    {
      "id": "SALES-OFFER-5",
      "type": "sales-special",
      "department": "sales",
      "name": "Test Drive Bonus — Demo Offer",
      "price": "Claim this sample offer",
      "description": "Demonstration only. Send your question to the team for a personal follow-up about current offers and terms.",
      "tags": [
        "sales",
        "offer",
        "special"
      ],
      "image": "assets/DARKMODE-IMAGE-001.png",
      "url": "link-preview.html",
      "active": true,
      "expires": ""
    },
    {
      "id": "SALES-OFFER-6",
      "type": "sales-special",
      "department": "sales",
      "name": "Seasonal Sales Event — Demo Offer",
      "price": "Claim this sample offer",
      "description": "Demonstration only. Send your question to the team for a personal follow-up about current offers and terms.",
      "tags": [
        "sales",
        "offer",
        "special"
      ],
      "image": "assets/DARKMODE-IMAGE-001.png",
      "url": "link-preview.html",
      "active": true,
      "expires": ""
    },
    {
      "id": "PARTS-OFFER-1",
      "type": "parts-special",
      "department": "parts",
      "name": "Accessory Savings — Demo Offer",
      "price": "Claim this sample offer",
      "description": "Demonstration only. Send your question to the team for a personal follow-up about current offers and terms.",
      "tags": [
        "parts",
        "offer",
        "special"
      ],
      "image": "assets/DARKMODE-IMAGE-003.png",
      "url": "link-preview.html",
      "active": true,
      "expires": ""
    },
    {
      "id": "PARTS-OFFER-2",
      "type": "parts-special",
      "department": "parts",
      "name": "Filter Bundle — Demo Offer",
      "price": "Claim this sample offer",
      "description": "Demonstration only. Send your question to the team for a personal follow-up about current offers and terms.",
      "tags": [
        "parts",
        "offer",
        "special"
      ],
      "image": "assets/DARKMODE-IMAGE-003.png",
      "url": "link-preview.html",
      "active": true,
      "expires": ""
    },
    {
      "id": "PARTS-OFFER-3",
      "type": "parts-special",
      "department": "parts",
      "name": "Wiper Savings — Demo Offer",
      "price": "Claim this sample offer",
      "description": "Demonstration only. Send your question to the team for a personal follow-up about current offers and terms.",
      "tags": [
        "parts",
        "offer",
        "special"
      ],
      "image": "assets/DARKMODE-IMAGE-003.png",
      "url": "link-preview.html",
      "active": true,
      "expires": ""
    },
    {
      "id": "PARTS-OFFER-4",
      "type": "parts-special",
      "department": "parts",
      "name": "Floor Mat Offer — Demo Offer",
      "price": "Claim this sample offer",
      "description": "Demonstration only. Send your question to the team for a personal follow-up about current offers and terms.",
      "tags": [
        "parts",
        "offer",
        "special"
      ],
      "image": "assets/DARKMODE-IMAGE-003.png",
      "url": "link-preview.html",
      "active": true,
      "expires": ""
    },
    {
      "id": "PARTS-OFFER-5",
      "type": "parts-special",
      "department": "parts",
      "name": "Brake Parts Offer — Demo Offer",
      "price": "Claim this sample offer",
      "description": "Demonstration only. Send your question to the team for a personal follow-up about current offers and terms.",
      "tags": [
        "parts",
        "offer",
        "special"
      ],
      "image": "assets/DARKMODE-IMAGE-003.png",
      "url": "link-preview.html",
      "active": true,
      "expires": ""
    },
    {
      "id": "PARTS-OFFER-6",
      "type": "parts-special",
      "department": "parts",
      "name": "Travel Accessories — Demo Offer",
      "price": "Claim this sample offer",
      "description": "Demonstration only. Send your question to the team for a personal follow-up about current offers and terms.",
      "tags": [
        "parts",
        "offer",
        "special"
      ],
      "image": "assets/DARKMODE-IMAGE-003.png",
      "url": "link-preview.html",
      "active": true,
      "expires": ""
    },
    {
      "id": "SERVICE-OFFER-1",
      "type": "service",
      "department": "service",
      "name": "Oil & Filter Offer — Demo Offer",
      "price": "Claim this sample offer",
      "description": "Demonstration only. Send your question to the team for a personal follow-up about current offers and terms.",
      "tags": [
        "service",
        "offer",
        "special"
      ],
      "image": "assets/DARKMODE-IMAGE-004.png",
      "url": "link-preview.html",
      "active": true,
      "expires": ""
    },
    {
      "id": "SERVICE-OFFER-2",
      "type": "service",
      "department": "service",
      "name": "Tire Rotation Offer — Demo Offer",
      "price": "Claim this sample offer",
      "description": "Demonstration only. Send your question to the team for a personal follow-up about current offers and terms.",
      "tags": [
        "service",
        "offer",
        "special"
      ],
      "image": "assets/DARKMODE-IMAGE-004.png",
      "url": "link-preview.html",
      "active": true,
      "expires": ""
    },
    {
      "id": "SERVICE-OFFER-3",
      "type": "service",
      "department": "service",
      "name": "Brake Inspection Offer — Demo Offer",
      "price": "Claim this sample offer",
      "description": "Demonstration only. Send your question to the team for a personal follow-up about current offers and terms.",
      "tags": [
        "service",
        "offer",
        "special"
      ],
      "image": "assets/DARKMODE-IMAGE-004.png",
      "url": "link-preview.html",
      "active": true,
      "expires": ""
    },
    {
      "id": "SERVICE-OFFER-4",
      "type": "service",
      "department": "service",
      "name": "Battery Check Offer — Demo Offer",
      "price": "Claim this sample offer",
      "description": "Demonstration only. Send your question to the team for a personal follow-up about current offers and terms.",
      "tags": [
        "service",
        "offer",
        "special"
      ],
      "image": "assets/DARKMODE-IMAGE-004.png",
      "url": "link-preview.html",
      "active": true,
      "expires": ""
    },
    {
      "id": "SERVICE-OFFER-5",
      "type": "service",
      "department": "service",
      "name": "Alignment Offer — Demo Offer",
      "price": "Claim this sample offer",
      "description": "Demonstration only. Send your question to the team for a personal follow-up about current offers and terms.",
      "tags": [
        "service",
        "offer",
        "special"
      ],
      "image": "assets/DARKMODE-IMAGE-004.png",
      "url": "link-preview.html",
      "active": true,
      "expires": ""
    },
    {
      "id": "SERVICE-OFFER-6",
      "type": "service",
      "department": "service",
      "name": "Seasonal Maintenance Offer — Demo Offer",
      "price": "Claim this sample offer",
      "description": "Demonstration only. Send your question to the team for a personal follow-up about current offers and terms.",
      "tags": [
        "service",
        "offer",
        "special"
      ],
      "image": "assets/DARKMODE-IMAGE-004.png",
      "url": "link-preview.html",
      "active": true,
      "expires": ""
    }
  ]
};
