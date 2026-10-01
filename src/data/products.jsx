import React from 'react';
export const categories = [
  'All',
  'Wireless Earbuds',
  'Smartwatches',
  'Headphones',
  'Speakers'
];

export const brands = [
  'All',
  'boAt',
  'Noise',
  'Boult',
  'Fire-Boltt'
];

export const products = [
  {
    id: 'PRD-101',
    name: 'boAt Airdopes 141 ANC',
    brand: 'boAt',
    category: 'Wireless Earbuds',
    price: 4490,
    discountPrice: 1499,
    rating: 4.8,
    reviews: 1420,
    stock: 25,
    isNew: true,
    isFeatured: true,
    badge: 'BESTSELLER',
    image: 'https://i.pinimg.com/736x/b8/b5/27/b8b527e14bc7f0ebcfc14a783a44b318.jpg',
    gallery: [
      'https://i.pinimg.com/736x/b8/b5/27/b8b527e14bc7f0ebcfc14a783a44b318.jpg',
      'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?auto=format&fit=crop&q=80&w=800'
    ],
    colors: [
      { name: 'Onyx Black', hex: '#0f172a' },
      { name: 'Bold Crimson', hex: '#e11d48' },
      { name: 'Pure White', hex: '#f8fafc' }
    ],
    description: 'Experience crystal clear acoustic balance and earth-shattering bass with up to 32dB Active Noise Cancellation. Powered by 10mm drivers, ENx Quad Mics, and BEAST Mode with 50ms ultra-low latency for competitive gaming.',
    features: [
      '32dB Hybrid Active Noise Cancellation',
      '42 Hours Total Playback with ASAP Charge',
      'Quad Mics with ENx Technology for Clear Calls',
      'BEAST Mode 50ms Low Latency Gaming'
    ],
    specifications: {
      'Bluetooth Version': 'v5.3 with Instant Connect',
      'Driver Size': '10mm Dynamic Bass Drivers',
      'Battery Life': 'Up to 42 Hours Total',
      'Charging Time': '10 Mins Charge = 150 Mins Playtime',
      'Water Resistance': 'IPX5 Sweat & Splash Proof',
      'Warranty': '1 Year Brand Replacement'
    }
  },
  {
    id: 'PRD-103',
    name: 'boAt Rockerz 550 Over-Ear Bass',
    brand: 'boAt',
    category: 'Headphones',
    price: 4999,
    discountPrice: 1999,
    rating: 4.8,
    reviews: 3200,
    stock: 30,
    isNew: false,
    isFeatured: true,
    badge: 'HOT DEAL',
    image: 'https://i.pinimg.com/1200x/b2/60/34/b26034323338de5122cbb020c8a37259.jpg',
    gallery: [
      'https://i.pinimg.com/1200x/b2/60/34/b26034323338de5122cbb020c8a37259.jpg',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&q=80&w=800',
    ],
    colors: [
      { name: 'Army Green', hex: '#3f6212' },
      { name: 'Black Matte', hex: '#111827' },
      { name: 'Red Crimson', hex: '#dc2626' }
    ],
    description: 'Immerse into thunderous acoustics delivered by colossal 50mm dynamic drivers. Features ultra-comfortable plush memory foam earcups, physical bass booster dial, and dual connectivity via Bluetooth and 3.5mm AUX jack.',
    features: [
      'Colossal 50mm Dynamic Audio Drivers',
      'Physical Bass Boost Switch for Deep Resonance',
      'Ergonomic Over-Ear Cushions for All-Day Wear',
      'Dual Mode: Wireless Bluetooth 5.0 + Wired AUX'
    ],
    specifications: {
      'Driver Unit': '50mm Neodymium Magnets',
      'Frequency Response': '20Hz - 20,000Hz',
      'Battery Life': '20 Hours Continuous Playback',
      'Connectivity': 'Bluetooth 5.0 & 3.5mm Aux Audio',
      'Weight': '245 Grams Lightweight Frame',
      'Warranty': '1 Year boAt Assurance'
    }
  },
  {
    id: 'PRD-108',
    name: 'boAt Stone 1200 Rugged 14W Speaker',
    brand: 'boAt',
    category: 'Speakers',
    price: 6990,
    discountPrice: 3999,
    rating: 4.9,
    reviews: 2800,
    stock: 14,
    isNew: false,
    isFeatured: true,
    badge: 'BESTSELLER',
    image: 'https://i.pinimg.com/736x/dc/90/c5/dc90c5ed7613467524f1a1232bc716be.jpg',
    gallery: [
      'https://i.pinimg.com/736x/dc/90/c5/dc90c5ed7613467524f1a1232bc716be.jpg',
      'https://i.pinimg.com/736x/8f/ed/62/8fed62ccdf39bdf057558630332021c1.jpg',
    ],
    colors: [
      { name: 'Charcoal Black', hex: '#0f172a' },
      { name: 'Navy Blue', hex: '#1e3a8a' },
      { name: 'Military Camo', hex: '#3f6212' }
    ],
    description: 'The ultimate outdoor companion. Delivers 14W room-filling stereo sound with passive bass radiators and pulsating 360-degree RGB LEDs. IPX7 waterproof rating ensures you can play by the pool, beach, or rain without worry.',
    features: [
      '14W Signature Stereo Audio Output',
      'IPX7 Complete Waterproof & Dust Resistance',
      'TWS Mode: Connect 2 Stone Speakers for 28W Sound',
      'Up to 9 Hours Playtime with RGB LED Lightshows'
    ],
    specifications: {
      'Audio Power': '14W RMS Stereo with Bass Radiators',
      'Waterproof': 'IPX7 Immersion Proof Up to 1 Meter',
      'Battery': '3600mAh Li-ion, 9H Playback',
      'Inputs': 'Bluetooth 5.0, AUX, USB, FM Radio',
      'Carry Strap': 'Removable Heavy-Duty Shoulder Strap',
      'Warranty': '1 Year Replacement'
    }
  },
  {
    id: 'PRD-102',
    name: 'Noise ColorFit Pro 5 Max',
    brand: 'Noise',
    category: 'Smartwatches',
    price: 7999,
    discountPrice: 3499,
    rating: 4.9,
    reviews: 2150,
    stock: 18,
    isNew: true,
    isFeatured: true,
    badge: 'TRENDING',
    image: 'https://i.pinimg.com/1200x/17/8e/16/178e1665831e39ff711b1626016b17c8.jpg',
    gallery: [
      'https://i.pinimg.com/1200x/17/8e/16/178e1665831e39ff711b1626016b17c8.jpg',
      'https://i.pinimg.com/736x/68/52/0d/68520d57c29b49fdebda0ae9663f31d9.jpg',
    ],
    colors: [
      { name: 'Jet Black', hex: '#18181b' },
      { name: 'Deep Space Blue', hex: '#1e3a8a' },
      { name: 'Rose Gold Metallic', hex: '#fb7185' }
    ],
    description: 'Elevate your daily hustle with a 1.96-inch Always-On AMOLED Display featuring 1000 nits peak brightness. Includes Tru Sync Single-Chip BT Calling, emergency SOS, advanced post-workout recovery insights, and 100+ sports modes.',
    features: [
      '1.96" Ultra AMOLED Display (60Hz Refresh Rate)',
      'Tru Sync BT Calling with Quick Dial Pad',
      'Noise Health Suite: 24/7 HR, SpO2 & Stress Monitor',
      'Up to 7 Days Battery Life with Power Saving Mode'
    ],
    specifications: {
      'Display': '1.96" Curved AMOLED Always-On',
      'Brightness': '1000 Nits Peak Outdoor Visibility',
      'Battery Backup': '7 Days Typical, 2 Days Heavy Calling',
      'Sensors': 'Optical HR, SpO2, Accelerometer, Sleep',
      'Water Rating': 'IP68 Water & Dust Resistant',
      'Warranty': '1 Year Domestic Warranty'
    }
  },
  {
    id: 'PRD-109',
    name: 'Noise Buds VS102 Pro ANC',
    brand: 'Noise',
    category: 'Wireless Earbuds',
    price: 3499,
    discountPrice: 1799,
    rating: 4.6,
    reviews: 980,
    stock: 40,
    isNew: false,
    isFeatured: false,
    badge: 'POPULAR',
    image: 'https://i.pinimg.com/1200x/8a/d7/69/8ad7694c16e1bc7fe13ce46506036662.jpg',
    gallery: [
      'https://i.pinimg.com/1200x/8a/d7/69/8ad7694c16e1bc7fe13ce46506036662.jpg',
      'https://i.pinimg.com/736x/16/02/3d/16023dccfd1f08a0cb9f17c54f512715.jpg',
    ],
    colors: [
      { name: 'Calm White', hex: '#f8fafc' },
      { name: 'Emerald Green', hex: '#047857' },
      { name: 'Midnight', hex: '#111827' }
    ],
    description: 'Quiet the chaotic city streets with Active Noise Cancellation up to 25dB. Enjoy up to 40 hours of uninterrupted musical journey, coupled with Quad Mic ENC for crystal-clear boardroom calls.',
    features: [
      'Up to 25dB Active Noise Cancellation',
      'Quad Mics with Environmental Noise Cancellation',
      '40 Hours Total Playtime with Instacharge',
      'Low Latency Dedicated Gaming Mode'
    ],
    specifications: {
      'Drivers': '11mm Graphene Coated Drivers',
      'Playtime': '6 Hours per bud, 40 Hours total',
      'Charging': '10 Mins Charge = 120 Mins Playtime',
      'IP Rating': 'IPX5 Water and Sweat Resistant',
      'Warranty': '1 Year Noise Assurance'
    }
  },
  {
    id: 'PRD-111',
    name: 'Noise Nerve Pro Wireless Neckband',
    brand: 'Noise',
    category: 'Headphones',
    price: 2499,
    discountPrice: 1299,
    rating: 4.9,
    reviews: 4500,
    stock: 50,
    isNew: false,
    isFeatured: true,
    badge: 'LEGENDARY',
    image: 'https://i.pinimg.com/736x/2d/93/54/2d9354a512431167fdc3df62b3876daa.jpg',
    gallery: [
      'https://i.pinimg.com/736x/2d/93/54/2d9354a512431167fdc3df62b3876daa.jpg',
      'https://i.pinimg.com/736x/d0/05/ec/d005ec9a0d9c09b63226ff541d8d0fdc.jpg'
    ],
    colors: [
      { name: 'Teal Green', hex: '#0d9488' },
      { name: 'Active Black', hex: '#111827' },
      { name: 'Raging Red', hex: '#ef4444' }
    ],
    description: 'The undisputable king of wireless neckbands. Loaded with Instacharge where 10 minutes gives 10 hours playback. IPX7 water and sweat shield, magnetic earbuds, and environmental noise cancellation.',
    features: [
      '40 Hours Massive Battery Life',
      'Instacharge: 10 Mins Charge = 10 Hours Play',
      'IPX7 Complete Sweat & Water Shield',
      'Magnetic Earbuds with Auto-Pause Sensing'
    ],
    specifications: {
      'Driver Size': '10mm Dynamic Bass Drivers',
      'Battery': '40 Hours Playback, 300mAh Battery',
      'Charging Port': 'Type-C Reversible Port',
      'Bluetooth': 'v5.2 with Dual Pairing Support',
      'Warranty': '1 Year Noise Warranty'
    }
  },
  {
    id: 'PRD-105',
    name: 'Boult Audio AirBass Propods X',
    brand: 'Boult',
    category: 'Wireless Earbuds',
    price: 2999,
    discountPrice: 1199,
    rating: 4.7,
    reviews: 750,
    stock: 22,
    isNew: false,
    isFeatured: false,
    badge: 'POPULAR',
    image: 'https://i.pinimg.com/736x/b6/5c/de/b65cde28714c946fc4d4abc1e6edd394.jpg',
    gallery: [
      'https://i.pinimg.com/736x/b6/5c/de/b65cde28714c946fc4d4abc1e6edd394.jpg',
      'https://i.pinimg.com/736x/8e/b1/1e/8eb11e9c53db2bdf76ca5d6299a8e83f.jpg',
    ],
    colors: [
      { name: 'Matte Black', hex: '#1e293b' },
      { name: 'Arctic Blue', hex: '#0284c7' }
    ],
    description: 'Engineered for audiophiles who demand thumping micro-woofers and pristine vocal separation. BoomX tech delivers deep sub-bass frequencies while environmental noise cancellation ensures uninterrupted calls.',
    features: [
      'BoomX Rich Deep Bass Micro-Woofers',
      '32 Hours Total Playtime Backup',
      'Lightning Fast Type-C Fast Charging',
      'One Touch Voice Assistant (Siri & Google)'
    ],
    specifications: {
      'Bluetooth': 'v5.2 Auto-Pairing',
      'Waterproof': 'IPX5 Water Resistant',
      'Playtime': '8H Per Charge, 32H with Case',
      'Control': 'Full Capacitive Smart Touch',
      'Warranty': '1 Year Manufacturer Warranty'
    }
  },
  {
    id: 'PRD-110',
    name: 'Boult Anchor Hybrid ANC Over-Ear',
    brand: 'Boult',
    category: 'Headphones',
    price: 5999,
    discountPrice: 2999,
    rating: 4.7,
    reviews: 1100,
    stock: 19,
    isNew: true,
    isFeatured: false,
    badge: 'STUDIO GRADE',
    image: 'https://i.pinimg.com/736x/3d/34/93/3d349320c5086c1627b0efc418fa5182.jpg',
    gallery: [
      'https://i.pinimg.com/736x/3d/34/93/3d349320c5086c1627b0efc418fa5182.jpg',
      'https://i.pinimg.com/736x/be/6c/55/be6c5560cd900e4385a59dc543498ca5.jpg',
    ],
    colors: [
      { name: 'Espresso Black', hex: '#1c1917' },
      { name: 'Almond Beige', hex: '#d6d3d1' }
    ],
    description: 'Designed for producers, travelers, and sound purists. Hybrid Active Noise Cancellation reduces up to 30dB ambient drone. Protein leather memory cushions conform to your head for fatigue-free sessions.',
    features: [
      '30dB Hybrid Active Noise Cancellation',
      '30 Hours Playtime on Single Charge',
      'High-Resolution Audio Certified 40mm Drivers',
      'Foldable Space-Saving Swivel Design'
    ],
    specifications: {
      'Drivers': '40mm High-Resolution Audio Drivers',
      'ANC Depth': 'Up to 30dB Noise Reduction',
      'Battery': '30 Hours with ANC Off, 24H with ANC On',
      'Design': 'Foldable with Velvet Carrying Pouch',
      'Warranty': '1 Year Boult Warranty'
    }
  },
  {
    id: 'PRD-112',
    name: 'Boult Crown R Pro Smartwatch',
    brand: 'Boult',
    category: 'Smartwatches',
    price: 4999,
    discountPrice: 2499,
    rating: 4.8,
    reviews: 920,
    stock: 25,
    isNew: true,
    isFeatured: false,
    badge: 'NEW LAUNCH',
    image: 'https://i.pinimg.com/736x/7e/cc/e6/7ecce647e295002782b0e39c62a6c93a.jpg',
    gallery: [
      'https://i.pinimg.com/736x/7e/cc/e6/7ecce647e295002782b0e39c62a6c93a.jpg',
      'https://i.pinimg.com/736x/08/7c/ff/087cff0ad0806701502b75e864502ae2.jpg'
    ],
    colors: [
      { name: 'Obsidian Black', hex: '#0f172a' },
      { name: 'Amber Gold', hex: '#b45309' }
    ],
    description: 'Stunning 1.43-inch Super AMOLED round display with 466x466 resolution and 600 nits brightness. Rugged zinc alloy frame, dedicated single-chip Bluetooth calling, and 120+ active sports modes.',
    features: [
      '1.43" Round Super AMOLED Display (466x466 px)',
      'Dedicated Single-Chip Bluetooth HD Calling',
      'Zinc Alloy Metal Frame with Working Crown',
      '120+ Sports Modes & IP67 Water Resistance'
    ],
    specifications: {
      'Display': '1.43" Super AMOLED Round Always-On',
      'Battery': 'Up to 7 Days Battery Life',
      'Calling': 'Built-in Speaker & HD Mic',
      'Sensors': 'HR, SpO2, Blood Pressure, Pedometer',
      'Warranty': '1 Year Boult Warranty'
    }
  },
  {
    id: 'PRD-106',
    name: 'Fire-Boltt Gladiator Luxury Watch',
    brand: 'Fire-Boltt',
    category: 'Smartwatches',
    price: 5999,
    discountPrice: 2499,
    rating: 4.8,
    reviews: 1320,
    stock: 15,
    isNew: true,
    isFeatured: true,
    badge: 'LUXURY',
    image: 'https://i.pinimg.com/736x/d5/6a/07/d56a0761f3f5763d686032f1492e02e9.jpg',
    gallery: [
      'https://i.pinimg.com/736x/d5/6a/07/d56a0761f3f5763d686032f1492e02e9.jpg',
      'https://i.pinimg.com/736x/96/a1/e9/96a1e96221a71b260d9c95cfc1b7b930.jpg',
    ],
    colors: [
      { name: 'Silver Steel Mesh', hex: '#94a3b8' },
      { name: 'Midnight Onyx', hex: '#090d16' },
      { name: 'Champagne Gold', hex: '#ca8a04' }
    ],
    description: 'A striking statement piece combining a 1.96-inch edge-to-edge curved screen with durable metallic alloy frame. Features dual Bluetooth calling chips, AI voice control, 123 sports modes, and sleep cycle analysis.',
    features: [
      '1.96" HD Full Touch Borderless Display',
      'Premium Metallic Alloy Casing with Mesh Band',
      'AI Voice Assistant with Hi-Fi Speaker & Mic',
      '123 Sports Tracking Modes & IP67 Rating'
    ],
    specifications: {
      'Screen': '1.96" Borderless HD Touchscreen',
      'Material': 'Zinc Alloy Chassis with Stainless Mesh',
      'Battery': '8 Days Standby, Quick Magnetic Charger',
      'Sensors': 'SpO2, Heart Rate, Pedometer, Sleep',
      'Warranty': '1 Year Fire-Boltt Warranty'
    }
  },
  {
    id: 'PRD-107',
    name: 'Fire-Boltt Ninja Call Pro Plus',
    brand: 'Fire-Boltt',
    category: 'Smartwatches',
    price: 3999,
    discountPrice: 1499,
    rating: 4.7,
    reviews: 1680,
    stock: 28,
    isNew: false,
    isFeatured: false,
    badge: 'POPULAR',
    image: 'https://i.pinimg.com/736x/93/f4/85/93f48511615b3612962658043e50a0e0.jpg',
    gallery: [
      'https://i.pinimg.com/736x/93/f4/85/93f48511615b3612962658043e50a0e0.jpg',
      'https://i.pinimg.com/1200x/64/4e/37/644e373c1b218b6e0828d4c6d69d7143.jpg'
    ],
    colors: [
      { name: 'Shadow Black', hex: '#18181b' },
      { name: 'Rose Gold', hex: '#f43f5e' }
    ],
    description: 'Experience crystal clear Bluetooth calling right on your wrist with a massive 1.83-inch HD display. 100+ sports modes, AI voice assistance, and real-time health metrics including SpO2 and heart-rate monitoring.',
    features: [
      '1.83" Large HD Full Touch Display',
      'Bluetooth HD Calling with Built-in Speaker',
      'AI Voice Assistant (Google / Siri)',
      '100+ Sports Tracking Modes & IP67 Rating'
    ],
    specifications: {
      'Screen': '1.83" HD Display (240x286 px)',
      'Battery': 'Up to 6 Days Battery Normal Use',
      'Sensors': 'SpO2, Heart Rate, Sleep Monitor',
      'Calling': 'Dial Pad, Recent Call Logs, Sync Contacts',
      'Warranty': '1 Year Fire-Boltt Warranty'
    }
  },
  {
    id: 'PRD-114',
    name: 'Fire-Boltt Fire-Pods Polaris ANC',
    brand: 'Fire-Boltt',
    category: 'Wireless Earbuds',
    price: 3499,
    discountPrice: 1699,
    rating: 4.6,
    reviews: 840,
    stock: 35,
    isNew: true,
    isFeatured: false,
    badge: 'NEW LAUNCH',
    image: 'https://i.pinimg.com/1200x/aa/ff/ed/aaffed524efb455f8fe2bc076f03c99b.jpg',
    gallery: [
      'https://i.pinimg.com/1200x/aa/ff/ed/aaffed524efb455f8fe2bc076f03c99b.jpg',
      'https://i.pinimg.com/736x/b9/0e/0b/b90e0b3f23e98e437f3737cc3c1fca9d.jpg'
    ],
    colors: [
      { name: 'Matte Charcoal', hex: '#18181b' },
      { name: 'Glacier White', hex: '#f8fafc' }
    ],
    description: 'Cut out external noise with 30dB Active Noise Cancellation and dive into rich bass driven by 13mm dynamic drivers. Features 50 hours of total playback, quad mic ENC, and 45ms gaming latency.',
    features: [
      '30dB Active Noise Cancellation',
      '50 Hours Massive Combined Battery Life',
      'Quad Mic ENC with Clear Calling Tech',
      '45ms Ultra Low Latency Gaming Mode'
    ],
    specifications: {
      'Drivers': '13mm Deep Bass Drivers',
      'Battery': '50 Hours Total Playtime with Case',
      'Charging': 'Fire Charge: 10 Mins = 100 Mins Playtime',
      'Waterproof': 'IPX4 Water and Sweat Resistant',
      'Warranty': '1 Year Fire-Boltt Warranty'
    }
  }
];

export const testimonials = [
  {
    id: 1,
    name: 'Vikramaditya Roy',
    role: 'Music Producer & Sound Engineer',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400',
    comment: 'TechZone has democratized acoustic perfection. The bass separation and ANC on the Nirvana Pro series rival international headphones costing three times as much. Absolutely mind-blowing.',
    rating: 5,
    tag: 'Verified Buyer'
  },
  {
    id: 2,
    name: 'Ananya Sharma',
    role: 'Marathon Runner & Fitness Coach',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400',
    comment: 'I wear the smartwatches through 20km marathon sessions in humid conditions. The heart rate accuracy, GPS stride calculations, and 7-day battery life are simply rock solid.',
    rating: 5,
    tag: 'Athletic Ambassador'
  },
  {
    id: 3,
    name: 'Rohan Mehra',
    role: 'Esports Caster & Streamer',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
    comment: 'Low latency makes or breaks split-second decisions in Valorant and BGMI. 38ms Beast Mode gives me zero audio delay and footsteps are super crisp. Customer support was also lightning fast!',
    rating: 5,
    tag: 'Verified Gamer'
  }
];

export const faqs = [
  {
    question: 'How do I claim the 1-Year Replacement Warranty?',
    answer: 'All TechZone audio and smart wearable products include a 1-year pan-India door-step replacement warranty. Simply register your product on our warranty portal or contact our WhatsApp helpline at +91 98765 43210 with your order ID. Our courier will pick up the defective unit and replace it within 48 to 72 hours.'
  },
  {
    question: 'Are TechZone wireless earbuds compatible with iOS and Android?',
    answer: 'Yes! All our Bluetooth 5.3 audio gear and smartwatches work seamlessly with Apple iOS (iPhones/iPads), Android devices, Windows laptops, and MacBooks. Fast pairing is enabled right out of the box.'
  },
  {
    question: 'What is ASAP Charge technology?',
    answer: 'ASAP Charge is our proprietary fast-charging protocol. Just 10 minutes of charging using any standard Type-C cable provides up to 10 hours of uninterrupted audio playback, ensuring your music never stops.'
  }
];

export const companyStats = [
  { number: '5M+', label: 'Happy Audiophiles' },
  { number: '99.4%', label: 'Sound Satisfaction' },
  { number: '48H', label: 'Express Delivery' },
  { number: '1 Year', label: 'Doorstep Warranty' }
];

export const teamMembers = [
  {
    name: 'Aman Verma',
    role: 'Co-Founder & Chief Product Officer',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=500',
    bio: 'Former acoustic research lead with 14 years pioneering high-fidelity audio engineering across India & Germany.'
  },
  {
    name: 'Pooja Sundaram',
    role: 'Head of Industrial Design',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=500',
    bio: 'Red Dot Award winner passionate about featherweight ergonomics, sustainable alloys, and futuristic tech aesthetics.'
  },
  {
    name: 'Devansh Singhania',
    role: 'Chief Technology Officer',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=500',
    bio: 'Specializing in ultra-low latency DSP chipsets, active noise suppression algorithms, and wearable biometric sensors.'
  }
];
