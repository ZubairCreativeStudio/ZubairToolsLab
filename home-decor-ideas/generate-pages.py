#!/usr/bin/env python3
import os
import json

# Create directories if they don't exist
categories = ['living-room', 'kitchen', 'bedroom', 'bathroom', 'wall-decor']
for cat in categories:
    os.makedirs(f'pages/{cat}', exist_ok=True)
os.makedirs('blog', exist_ok=True)
os.makedirs('sitemap', exist_ok=True)

# Living Room Ideas (20 ideas)
living_room_ideas = [
    {"title": "Minimalist Living Room with Indoor Plants", "desc": "Create a serene atmosphere with clean lines, neutral colors, and strategically placed indoor plants for a fresh, natural feel.", "image": "photo-1616486338812-3dadae4b4ace"},
    {"title": "Scandinavian Hygge Living Space", "desc": "Embrace the Danish concept of hygge with soft textures, warm lighting, and minimalist furniture in natural materials.", "image": "photo-1600607686527-6fb886090705"},
    {"title": "Modern Industrial Loft Design", "desc": "Combine exposed brick, metal accents, and leather furniture for an urban industrial aesthetic.", "image": "photo-1600566753190-17f0baa2a6c3"},
    {"title": "Coastal Beach-Inspired Living Room", "desc": "Bring the ocean home with light blues, natural wood, and nautical decorative elements.", "image": "photo-1595526114035-0d45ed16cfbf"},
    {"title": "Mid-Century Modern Revival", "desc": "Feature iconic mid-century furniture pieces with bold geometric patterns and warm wood tones.", "image": "photo-1567016432779-0940bb9b44bf"},
    {"title": "Maximalist Color Explosion", "desc": "Embrace bold colors, mixed patterns, and eclectic decor for a vibrant, personality-filled space.", "image": "photo-1586023492125-27b2c045efd7"},
    {"title": "Rustic Farmhouse Charm", "desc": "Create warmth with reclaimed wood, vintage finds, and cozy textiles in neutral earth tones.", "image": "photo-1600585154340-be6161a56a0c"},
    {"title": "Contemporary Art Gallery Style", "desc": "Transform walls into a gallery with curated art pieces and minimalist furniture as backdrop.", "image": "photo-1513519245088-0e12902e5a38"},
    {"title": "Bohemian Eclectic Mix", "desc": "Layer global textiles, plants, and vintage treasures for a free-spirited boho aesthetic.", "image": "photo-1616108398344-3679fd60e317"},
    {"title": "Luxury Glam Living Room", "desc": "Incorporate velvet, metallics, crystal accents, and plush seating for elegant sophistication.", "image": "photo-1600210492486-724fe5c67fb0"},
    {"title": "Japanese Zen Minimalism", "desc": "Create tranquility with low furniture, natural materials, and a restrained color palette.", "image": "photo-1600566753086-00f18cf6b3ea"},
    {"title": "Family-Friendly Comfort Zone", "desc": "Design durable, kid-friendly spaces without sacrificing style with smart storage solutions.", "image": "photo-1584622650111-993a426fbf0a"},
    {"title": "Smart Home Technology Integration", "desc": "Seamlessly incorporate automated lighting, sound systems, and climate control.", "image": "photo-1558002038-1091a1661116"},
    {"title": "Vintage Collector's Paradise", "desc": "Showcase antique finds and heirloom pieces with modern comfort updates.", "image": "photo-1560185007-cde436f6a4d0"},
    {"title": "Open Concept Living-Dining Flow", "desc": "Create seamless transitions between living and dining areas with cohesive design.", "image": "photo-1600566752355-35792bedcfea"},
    {"title": "Small Space Maximization", "desc": "Use multi-functional furniture and clever storage to make compact living rooms feel spacious.", "image": "photo-1554995207-c18c203602cb"},
    {"title": "Fireplace Focal Point Design", "desc": "Center your living room around a stunning fireplace with complementary seating arrangements.", "image": "photo-1600585154526-990dced4db0d"},
    {"title": "Reading Nook Integration", "desc": "Create a cozy corner with built-in shelving, comfortable seating, and perfect lighting.", "image": "photo-1598300042247-d088f8ab3a8d"},
    {"title": "Sustainable Eco-Friendly Design", "desc": "Use recycled materials, energy-efficient lighting, and non-toxic finishes throughout.", "image": "photo-1534349762913-96c22af6a5b0"},
    {"title": "Seasonal Decor Flexibility", "desc": "Design a base that easily adapts to seasonal changes with swapable accessories.", "image": "photo-1615529182904-14819c35db37"}
]

# Kitchen Ideas (20 ideas)
kitchen_ideas = [
    {"title": "Modern Farmhouse Kitchen Design", "desc": "Combine rustic charm with contemporary elements using shiplap walls and open shelving.", "image": "photo-1556910103-1c02745a30bf"},
    {"title": "Sleek Minimalist Kitchen", "desc": "Achieve clean lines with handleless cabinets, integrated appliances, and monochromatic palette.", "image": "photo-1556909212-d5b604d0c90d"},
    {"title": "Industrial Chic Kitchen", "desc": "Feature stainless steel, exposed pipes, and concrete countertops for urban appeal.", "image": "photo-1556911220-e15b29be8c8f"},
    {"title": "Classic White Timeless Kitchen", "desc": "Create enduring elegance with white cabinetry, marble counters, and brass fixtures.", "image": "photo-1556912172-45b7abe8b7e1"},
    {"title": "Bold Color Statement Kitchen", "desc": "Make an impact with navy, emerald, or black cabinetry paired with contrasting elements.", "image": "photo-1556912167-f556f1f39faa"},
    {"title": "Open Shelving Display Kitchen", "desc": "Replace upper cabinets with open shelves to showcase beautiful dishware and create airiness.", "image": "photo-1588854337221-4cf9fa96059c"},
    {"title": "Kitchen Island Central Hub", "desc": "Design a多功能 island with seating, storage, and prep space as the kitchen centerpiece.", "image": "photo-1600585154363-67eb9e2e2099"},
    {"title": "Butcher Block Warmth", "desc": "Incorporate wood countertops for warmth, durability, and classic kitchen appeal.", "image": "photo-1556911220-bff31c812dba"},
    {"title": "Smart Kitchen Technology", "desc": "Integrate smart appliances, touchless faucets, and app-controlled lighting systems.", "image": "photo-1556910103-1c02745a30bf"},
    {"title": "Breakfast Nook Addition", "desc": "Create a cozy eating area with built-in bench seating and pendant lighting.", "image": "photo-1600585153768-4e8122d4a743"},
    {"title": "Pantry Organization Paradise", "desc": "Design a walk-in pantry with custom shelving and labeling systems for maximum efficiency.", "image": "photo-1584622650111-993a426fbf0a"},
    {"title": "Backsplash Art Feature", "desc": "Use patterned tiles or artistic backsplash designs as a kitchen focal point.", "image": "photo-1556909212-d5b604d0c90d"},
    {"title": "Two-Tone Cabinet Trend", "desc": "Paint upper and lower cabinets different colors for visual interest and depth.", "image": "photo-1556912167-f556f1f39faa"},
    {"title": "Wine Storage Integration", "desc": "Build wine racks or a temperature-controlled wine fridge into kitchen cabinetry.", "image": "photo-1585513344224-b56084483299"},
    {"title": "Herb Garden Window", "desc": "Install an indoor herb garden by the kitchen window for fresh ingredients year-round.", "image": "photo-1591123720164-de134847ef18"},
    {"title": "Vintage Appliance Charm", "desc": "Incorporate retro-style refrigerators and ranges for nostalgic character.", "image": "photo-1556912172-45b7abe8b7e1"},
    {"title": "Quartz Countertop Luxury", "desc": "Install durable, low-maintenance quartz countertops in various colors and patterns.", "image": "photo-1600585154363-67eb9e2e2099"},
    {"title": "Under-Cabinet Lighting Magic", "desc": "Add LED strip lighting under cabinets for task illumination and ambiance.", "image": "photo-1556911220-bff31c812dba"},
    {"title": "Pot Rack Overhead Storage", "desc": "Hang a stylish pot rack above the island to free up cabinet space and add character.", "image": "photo-1556910103-1c02745a30bf"},
    {"title": "Eco-Friendly Sustainable Kitchen", "desc": "Choose bamboo cabinets, recycled glass counters, and energy-efficient appliances.", "image": "photo-1588854337221-4cf9fa96059c"}
]

print("Generated idea arrays for all categories")
print(f"Living Room: {len(living_room_ideas)} ideas")
print(f"Kitchen: {len(kitchen_ideas)} ideas")
