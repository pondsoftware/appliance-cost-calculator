export interface PurchasePrice {
  min: number;
  max: number;
  note?: string;
}

export interface Appliance {
  slug: string;
  name: string;
  category: string;
  watts: number;
  typicalHoursPerDay: number;
  description: string;
  tips: string[];
  purchasePrice?: PurchasePrice;
}

export const categories = [
  "Heating & Cooling",
  "Kitchen",
  "Laundry",
  "Electronics",
  "Lighting",
  "Bathroom",
  "Outdoor",
  "Home Office",
] as const;

export const appliances: Appliance[] = [
  // Heating & Cooling
  {
    slug: "space-heater",
    name: "Space Heater",
    category: "Heating & Cooling",
    watts: 1500,
    typicalHoursPerDay: 8,
    purchasePrice: { min: 25, max: 150, note: "Basic ceramic to infrared/oil-filled models" },
    description:
      "A portable electric space heater typically uses 1,500 watts on its high setting. Ceramic, oil-filled radiator, and infrared heaters all draw similar wattage.",
    tips: [
      "Use a programmable thermostat to avoid running it when you're away",
      "Close doors to the room you're heating to reduce waste",
      "An oil-filled radiator stays warm after being turned off, saving some energy",
    ],
  },
  {
    slug: "window-ac-unit",
    name: "Window AC Unit",
    category: "Heating & Cooling",
    watts: 1200,
    typicalHoursPerDay: 8,
    purchasePrice: { min: 150, max: 600, note: "8,000–12,000 BTU units" },
    description:
      "A standard window air conditioning unit (8,000–10,000 BTU) draws around 1,200 watts. Larger units for bigger rooms can use up to 1,500 watts.",
    tips: [
      "Clean the filter monthly to maintain efficiency",
      "Use a timer so it's not running while you're out",
      "Keep curtains closed on sun-facing windows to reduce cooling load",
    ],
  },
  {
    slug: "central-air-conditioner",
    name: "Central Air Conditioner",
    category: "Heating & Cooling",
    watts: 3500,
    typicalHoursPerDay: 8,
    purchasePrice: { min: 3500, max: 7500, note: "Installed cost including labor" },
    description:
      "Central air conditioning for a typical home (3-ton unit) uses about 3,500 watts. This is one of the largest electricity consumers in most households.",
    tips: [
      "Set the thermostat to 78°F when home and higher when away",
      "Replace the air filter every 1-3 months",
      "Have the system serviced annually to maintain efficiency",
    ],
  },
  {
    slug: "ceiling-fan",
    name: "Ceiling Fan",
    category: "Heating & Cooling",
    watts: 75,
    typicalHoursPerDay: 12,
    purchasePrice: { min: 50, max: 400, note: "Basic to smart/designer models" },
    description:
      "Ceiling fans use very little electricity — about 75 watts on medium speed. They don't cool the air but create a wind-chill effect that makes you feel cooler.",
    tips: [
      "Turn fans off when you leave the room — they cool people, not rooms",
      "Run fans counterclockwise in summer for a cooling downdraft",
      "Using a fan lets you raise the AC thermostat by 4°F with no comfort loss",
    ],
  },
  {
    slug: "portable-air-conditioner",
    name: "Portable Air Conditioner",
    category: "Heating & Cooling",
    watts: 1400,
    typicalHoursPerDay: 8,
    purchasePrice: { min: 300, max: 700, note: "8,000–14,000 BTU portable units" },
    description:
      "Portable air conditioners typically use 1,000–1,400 watts. They're less efficient than window units because the exhaust hose radiates heat back into the room.",
    tips: [
      "Keep the exhaust hose as short and straight as possible",
      "Seal the window gap around the hose to prevent hot air from entering",
      "A window AC unit is typically 30-50% more efficient if installation is possible",
    ],
  },
  {
    slug: "electric-furnace",
    name: "Electric Furnace",
    category: "Heating & Cooling",
    watts: 10000,
    typicalHoursPerDay: 6,
    purchasePrice: { min: 1500, max: 4000, note: "Installed cost is typically $2,500–$6,000" },
    description:
      "An electric furnace is one of the most power-hungry appliances in a home, using 10,000–15,000 watts. If you have one, it likely dominates your winter electricity bill.",
    tips: [
      "A heat pump can be 2-3x more efficient in mild climates",
      "Seal air leaks around windows and doors to reduce heating demand",
      "Lower the thermostat by 1°F to save roughly 3% on heating costs",
    ],
  },
  {
    slug: "dehumidifier",
    name: "Dehumidifier",
    category: "Heating & Cooling",
    watts: 600,
    typicalHoursPerDay: 12,
    purchasePrice: { min: 150, max: 400, note: "30–70 pint capacity models" },
    description:
      "A standard dehumidifier draws about 300–700 watts depending on capacity. They often run for long periods, especially in basements, which adds up.",
    tips: [
      "Set it to 50% humidity rather than running continuously",
      "Clean the coils and filter regularly to maintain efficiency",
      "An Energy Star model can use 15% less energy than a standard unit",
    ],
  },
  // Kitchen
  {
    slug: "refrigerator",
    name: "Refrigerator",
    category: "Kitchen",
    watts: 150,
    typicalHoursPerDay: 24,
    purchasePrice: { min: 800, max: 3000, note: "Top-freezer to French door models" },
    description:
      "A modern refrigerator cycles on and off throughout the day, averaging about 150 watts. Older models from the 1990s can use 2-3x more.",
    tips: [
      "Keep the coils clean — dusty coils increase energy use by up to 25%",
      "Set the fridge to 37°F and freezer to 0°F for optimal efficiency",
      "A full fridge holds cold better than an empty one, but don't overfill",
    ],
  },
  {
    slug: "electric-oven",
    name: "Electric Oven",
    category: "Kitchen",
    watts: 2500,
    typicalHoursPerDay: 1,
    purchasePrice: { min: 600, max: 2000, note: "Freestanding range to double wall oven" },
    description:
      "An electric oven uses about 2,000–2,500 watts when heating. It cycles on and off to maintain temperature, so the average draw is lower during cooking.",
    tips: [
      "Use a toaster oven or air fryer for small meals — they use 50-75% less energy",
      "Avoid opening the door while cooking — temperature drops 25°F each time",
      "Batch cooking multiple items at once amortizes the preheating energy cost",
    ],
  },
  {
    slug: "microwave",
    name: "Microwave",
    category: "Kitchen",
    watts: 1200,
    typicalHoursPerDay: 0.25,
    purchasePrice: { min: 80, max: 400, note: "Countertop to over-the-range models" },
    description:
      "A microwave draws about 1,000–1,200 watts but typically runs for only minutes at a time. It's one of the most energy-efficient ways to heat food.",
    tips: [
      "Microwaving uses 80% less energy than a conventional oven for reheating",
      "Cover food to retain moisture and reduce heating time",
      "Unplug it if the clock display bothers you — the standby draw is minimal but adds up over a year",
    ],
  },
  {
    slug: "dishwasher",
    name: "Dishwasher",
    category: "Kitchen",
    watts: 1800,
    typicalHoursPerDay: 1,
    purchasePrice: { min: 500, max: 1500, note: "Basic to smart/third-rack models" },
    description:
      "A dishwasher uses about 1,800 watts per cycle, with most of that energy going to heating the water. A typical cycle runs about an hour.",
    tips: [
      "Use the eco or light cycle when dishes aren't heavily soiled",
      "Skip the heated dry — open the door and let dishes air dry",
      "Only run full loads to maximize efficiency per dish",
    ],
  },
  {
    slug: "coffee-maker",
    name: "Coffee Maker",
    category: "Kitchen",
    watts: 900,
    typicalHoursPerDay: 0.25,
    purchasePrice: { min: 25, max: 300, note: "Basic drip to programmable/thermal carafe" },
    description:
      "A drip coffee maker uses about 900 watts while brewing. Models with a warming plate continue drawing 70-80 watts to keep coffee hot.",
    tips: [
      "Pour coffee into an insulated carafe and turn off the machine after brewing",
      "A warming plate running for 2 hours uses almost as much energy as brewing",
      "Single-serve machines use slightly less energy per cup",
    ],
  },
  {
    slug: "air-fryer",
    name: "Air Fryer",
    category: "Kitchen",
    watts: 1500,
    typicalHoursPerDay: 0.5,
    purchasePrice: { min: 40, max: 200, note: "Compact basket to large oven-style models" },
    description:
      "An air fryer typically uses 1,200–1,500 watts. Despite the high wattage, cooking times are shorter than an oven, making it more efficient overall.",
    tips: [
      "Air frying uses roughly 50% less energy than a full-size oven",
      "Don't overcrowd the basket — it increases cooking time and energy use",
      "Preheating takes only 2-3 minutes vs 10-15 for an oven",
    ],
  },
  {
    slug: "instant-pot",
    name: "Instant Pot / Pressure Cooker",
    category: "Kitchen",
    watts: 1000,
    typicalHoursPerDay: 0.5,
    purchasePrice: { min: 60, max: 180, note: "6–8 quart Instant Pot models" },
    description:
      "An electric pressure cooker draws about 1,000 watts during pressurizing, then cycles to maintain pressure at a much lower draw. Very efficient for long-cook recipes.",
    tips: [
      "Pressure cooking uses up to 70% less energy than stovetop simmering",
      "The sauté function draws full wattage — use it briefly",
      "Natural pressure release saves energy vs quick release",
    ],
  },
  // Laundry
  {
    slug: "clothes-dryer",
    name: "Clothes Dryer (Electric)",
    category: "Laundry",
    watts: 5000,
    typicalHoursPerDay: 1,
    purchasePrice: { min: 500, max: 1500, note: "Standard to steam/sensor-dry models" },
    description:
      "An electric clothes dryer is one of the most energy-hungry appliances in a home, using 4,000–5,000 watts per cycle. Each load costs roughly $0.50–$0.75.",
    tips: [
      "Clean the lint trap before every load for better airflow and efficiency",
      "Use dryer balls to reduce drying time by 10-15%",
      "Air-dry when possible — a clothesline is free to operate",
    ],
  },
  {
    slug: "washing-machine",
    name: "Washing Machine",
    category: "Laundry",
    watts: 500,
    typicalHoursPerDay: 1,
    purchasePrice: { min: 500, max: 1500, note: "Top-load to high-efficiency front-load" },
    description:
      "A washing machine uses about 400–500 watts per cycle. However, if you use hot water, most of the energy cost is from the water heater, not the washer.",
    tips: [
      "Wash with cold water — 90% of the energy goes to heating water",
      "Front-load washers use about 40% less water and energy than top-loaders",
      "Full loads are more efficient than multiple small loads",
    ],
  },
  // Electronics
  {
    slug: "gaming-pc",
    name: "Gaming PC",
    category: "Electronics",
    watts: 500,
    typicalHoursPerDay: 4,
    purchasePrice: { min: 800, max: 3000, note: "Mid-range to high-end builds" },
    description:
      "A gaming PC with a dedicated GPU draws 400–600 watts under load. Idle power draw is much lower at around 80-150 watts. High-end builds with RTX 4090 cards can peak at 800+ watts.",
    tips: [
      "Enable power management to let the PC sleep when idle",
      "Undervolting the GPU can reduce power draw 10-20% with minimal performance loss",
      "Turn off the PC instead of leaving it in sleep mode overnight",
    ],
  },
  {
    slug: "television",
    name: "Television (55\" LED/OLED)",
    category: "Electronics",
    watts: 100,
    typicalHoursPerDay: 5,
    purchasePrice: { min: 350, max: 2500, note: "Budget LED to OLED/QLED 55\" models" },
    description:
      "A modern 55\" LED TV uses about 80-100 watts. OLED TVs use slightly more. Older plasma TVs could use 300-400 watts for the same size.",
    tips: [
      "Reduce brightness — most TVs ship at showroom brightness, far more than needed at home",
      "Enable the TV's eco mode or ambient light sensor",
      "Older plasma TVs should be replaced — a modern LED uses 60-70% less power",
    ],
  },
  {
    slug: "game-console",
    name: "Game Console (PS5/Xbox Series X)",
    category: "Electronics",
    watts: 200,
    typicalHoursPerDay: 3,
    purchasePrice: { min: 450, max: 550, note: "PS5 or Xbox Series X standard edition" },
    description:
      "Current-gen consoles draw about 100-200 watts during gameplay and 10-15 watts in rest/standby mode. Older consoles like the PS4 Pro use about 150 watts.",
    tips: [
      "Enable auto-shutdown after inactivity",
      "Fully power off rather than using rest mode if you don't need remote downloads",
      "Streaming video on a console uses far less power than gaming — about 50 watts",
    ],
  },
  {
    slug: "desktop-computer",
    name: "Desktop Computer",
    category: "Electronics",
    watts: 200,
    typicalHoursPerDay: 8,
    purchasePrice: { min: 400, max: 1500, note: "Budget office PC to mid-range workstation" },
    description:
      "A typical desktop computer (non-gaming) with a monitor uses about 150-200 watts. Laptops are much more efficient at 30-60 watts.",
    tips: [
      "Set the display to turn off after 5 minutes of inactivity",
      "Enable sleep mode after 15-30 minutes of inactivity",
      "If you don't need a desktop, a laptop uses 60-70% less power for most tasks",
    ],
  },
  {
    slug: "laptop",
    name: "Laptop",
    category: "Electronics",
    watts: 50,
    typicalHoursPerDay: 8,
    purchasePrice: { min: 300, max: 2000, note: "Budget Chromebook to premium ultrabook" },
    description:
      "Laptops are designed for battery efficiency and typically draw 30-60 watts while plugged in. Even gaming laptops under load rarely exceed 180 watts.",
    tips: [
      "Unplug the charger when the battery is full to avoid trickle draw",
      "Lower screen brightness — it's the biggest single power consumer on a laptop",
      "Close background apps and browser tabs to reduce CPU power draw",
    ],
  },
  {
    slug: "monitor",
    name: "Computer Monitor",
    category: "Electronics",
    watts: 40,
    typicalHoursPerDay: 8,
    purchasePrice: { min: 150, max: 600, note: "24–27\" 1080p to 4K/ultrawide monitors" },
    description:
      "A 27\" LED monitor uses about 30-40 watts. Ultrawide and 4K monitors use slightly more, up to 60 watts.",
    tips: [
      "Reduce brightness to a comfortable level — most people don't need 100%",
      "Set the monitor to sleep after 5 minutes of inactivity",
      "LED backlighting uses 40% less power than older CCFL monitors",
    ],
  },
  {
    slug: "wifi-router",
    name: "Wi-Fi Router",
    category: "Electronics",
    watts: 12,
    typicalHoursPerDay: 24,
    purchasePrice: { min: 80, max: 400, note: "Basic single-band to Wi-Fi 6E/mesh systems" },
    description:
      "A home Wi-Fi router uses about 10-15 watts and runs 24/7. While the wattage is low, it adds up over a year — roughly $15-20 annually.",
    tips: [
      "Mesh systems with multiple nodes will multiply this cost",
      "There's no meaningful way to reduce router power draw — just factor it in",
      "Rebooting weekly can improve performance but won't save energy",
    ],
  },
  // Lighting
  {
    slug: "incandescent-bulb",
    name: "Incandescent Light Bulb (60W)",
    category: "Lighting",
    watts: 60,
    typicalHoursPerDay: 5,
    purchasePrice: { min: 1, max: 3, note: "Per bulb; typically sold in multi-packs" },
    description:
      "A traditional 60-watt incandescent bulb produces about 800 lumens. 90% of the energy is wasted as heat rather than light.",
    tips: [
      "Switch to LED — a 9W LED produces the same light as a 60W incandescent",
      "Each bulb you swap saves about $7/year at average electricity rates",
      "LEDs last 25,000+ hours vs 1,000 for incandescent, so they also save on replacement costs",
    ],
  },
  {
    slug: "led-bulb",
    name: "LED Light Bulb (9W equivalent to 60W)",
    category: "Lighting",
    watts: 9,
    typicalHoursPerDay: 5,
    purchasePrice: { min: 3, max: 10, note: "Per bulb; cheaper per-unit when bought in packs" },
    description:
      "An LED bulb producing 800 lumens (equivalent to a 60W incandescent) draws only 8-10 watts. LEDs are the most efficient lighting technology available.",
    tips: [
      "Buy bulbs rated 2700K for warm white (similar to incandescent)",
      "Dimmable LEDs use even less energy when dimmed",
      "Smart bulbs add Wi-Fi standby draw of about 0.5W — minimal but nonzero",
    ],
  },
  // Bathroom
  {
    slug: "hair-dryer",
    name: "Hair Dryer",
    category: "Bathroom",
    watts: 1800,
    typicalHoursPerDay: 0.17,
    purchasePrice: { min: 25, max: 200, note: "Basic to professional ionic/tourmaline models" },
    description:
      "A hair dryer uses 1,500–1,800 watts on high heat. Because it's typically used for 10-15 minutes, the per-use cost is low — about $0.03-0.04.",
    tips: [
      "Towel-dry hair first to reduce blow-drying time",
      "The cool setting uses about 70% less energy",
      "Despite high wattage, short usage time means hair dryers are not a significant annual cost",
    ],
  },
  {
    slug: "electric-water-heater",
    name: "Electric Water Heater",
    category: "Bathroom",
    watts: 4500,
    typicalHoursPerDay: 3,
    purchasePrice: { min: 600, max: 1500, note: "40–50 gallon tank; installed cost adds $200–$500" },
    description:
      "An electric water heater (40-50 gallon tank) draws about 4,500 watts. It cycles on and off to maintain temperature. Typically the second-largest electricity consumer after HVAC.",
    tips: [
      "Lower the thermostat to 120°F — most are set to 140°F by default",
      "Insulate the tank with a water heater blanket to reduce standby heat loss",
      "A heat pump water heater uses 60% less energy than a standard electric model",
    ],
  },
  // Outdoor
  {
    slug: "pool-pump",
    name: "Pool Pump",
    category: "Outdoor",
    watts: 1500,
    typicalHoursPerDay: 8,
    purchasePrice: { min: 500, max: 1500, note: "Single-speed to variable-speed pumps" },
    description:
      "A standard pool pump runs 6-12 hours per day and draws about 1,500-2,500 watts. A variable-speed pump can cut this dramatically.",
    tips: [
      "A variable-speed pump uses up to 80% less energy than single-speed",
      "Run the pump during off-peak electricity hours if your utility offers time-of-use rates",
      "Reduce run time in cooler months when algae growth is slower",
    ],
  },
  {
    slug: "ev-charger",
    name: "Electric Vehicle Charger (Level 2)",
    category: "Outdoor",
    watts: 7200,
    typicalHoursPerDay: 4,
    purchasePrice: { min: 300, max: 800, note: "Hardware only; installation adds $500–$2,000" },
    description:
      "A Level 2 EV charger (240V, 30A) draws about 7,200 watts. Charging a typical EV from empty to full takes 8-10 hours and adds roughly $8-12 to your electric bill per full charge.",
    tips: [
      "Charge during off-peak hours if your utility offers time-of-use pricing",
      "You don't need to charge to 100% daily — 80% is better for battery longevity",
      "A Level 1 charger (120V) uses only 1,440 watts but takes 40+ hours for a full charge",
    ],
  },
  {
    slug: "hot-tub",
    name: "Hot Tub / Spa",
    category: "Outdoor",
    watts: 3000,
    typicalHoursPerDay: 4,
    purchasePrice: { min: 3000, max: 12000, note: "Portable plug-in to in-ground spa" },
    description:
      "A hot tub heater draws 3,000-6,000 watts. The pump runs continuously and adds 500-1,500 watts more. Monthly costs range from $30-$60 depending on usage and climate.",
    tips: [
      "Keep the cover on when not in use — most heat loss is from the surface",
      "Lower the temperature by 2-3°F when you won't use it for a few days",
      "A well-insulated hot tub costs significantly less to maintain temperature",
    ],
  },
  // Home Office
  {
    slug: "laser-printer",
    name: "Laser Printer",
    category: "Home Office",
    watts: 600,
    typicalHoursPerDay: 0.1,
    purchasePrice: { min: 150, max: 600, note: "Basic monochrome to color laser" },
    description:
      "A laser printer draws 300-600 watts while printing but only about 3-5 watts in standby. Most of the energy goes to heating the fuser.",
    tips: [
      "Enable auto-sleep mode to reduce standby draw",
      "An inkjet printer uses about 30-50 watts while printing — much less than laser",
      "The real cost is toner, not electricity — printing costs $0.05-0.10 per page",
    ],
  },
  {
    slug: "crypto-mining-rig",
    name: "Crypto Mining Rig",
    category: "Home Office",
    watts: 1500,
    typicalHoursPerDay: 24,
    purchasePrice: { min: 1000, max: 5000, note: "GPU-based rigs; varies widely with hardware" },
    description:
      "A GPU-based crypto mining rig draws 1,000-2,000 watts and runs 24/7. At average electricity rates, this costs $100-200+ per month — often exceeding mining revenue.",
    tips: [
      "Calculate your electricity cost vs expected mining revenue before starting",
      "Undervolting GPUs can reduce power draw 20-30% with minimal hashrate loss",
      "Consider your electricity rate — mining is only profitable below ~$0.08/kWh for most coins",
    ],
  },
];

export function getApplianceBySlug(slug: string): Appliance | undefined {
  return appliances.find((a) => a.slug === slug);
}

export function getAppliancesByCategory(category: string): Appliance[] {
  return appliances.filter((a) => a.category === category);
}

export const US_AVERAGE_RATE = 0.16; // cents per kWh, 2024 US average
