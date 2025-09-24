// Comprehensive Breed Information Database

// Get comprehensive breed information
function getBreedInformation(breed) {
  const breedName = breed.name.toLowerCase();
  const breedKey = breed.apiKey.toLowerCase();

  // Default information that applies to most breeds
  const defaultInfo = {
    description: "A wonderful companion known for its loyalty and intelligence.",
    origin: "Various regions",
    lifespan: "10-15 years",
    about: "This breed has been developed over many years to be an excellent companion. They are known for their distinctive characteristics and make great family pets when properly cared for.",
    temperament: "This breed typically displays a balanced temperament, being both loyal to their family and adaptable to various living situations. They respond well to consistent training and socialization.",
    traits: ["Loyal", "Intelligent", "Friendly", "Adaptable"],
    appearance: "This breed has distinctive physical characteristics that make them easily recognizable. Their build and coat are well-suited to their original purpose and environment.",
    careIntro: "Proper care and attention will help ensure your dog lives a long, healthy, and happy life.",
    exercise: "Regular daily exercise is important for maintaining good health and preventing behavioral issues. This includes walks, playtime, and mental stimulation.",
    grooming: "Regular grooming helps maintain coat health and allows you to check for any health issues. Brushing frequency depends on coat type.",
    health: "Generally healthy breed with proper care. Regular veterinary checkups and preventive care are recommended.",
    training: "Responds well to positive reinforcement training methods. Early socialization and consistent training yield the best results."
  };

  // Comprehensive breed information database
  const breedDatabase = {
    // RETRIEVERS
    'golden retriever': {
      description: "Friendly, intelligent, and devoted, the Golden Retriever is a beloved family companion known for its gentle nature and eagerness to please.",
      origin: "Scotland",
      lifespan: "10-12 years",
      about: "The Golden Retriever originated in Scotland in the mid-19th century, bred as a gundog to retrieve waterfowl. Its lineage includes the Tweed Water Spaniel, Yellow Retriever, and possibly the Irish Setter and Bloodhound. The breed's development was driven by the need for a skilled retriever in the Scottish Highlands' challenging terrain and climate. The Golden Retriever's popularity grew rapidly, becoming a favorite among hunters and families alike. Its friendly temperament, intelligence, and trainability have made it one of the most popular dog breeds worldwide.",
      temperament: "Golden Retrievers are renowned for their gentle and tolerant nature, making them excellent companions for children and other pets. They are highly intelligent and eager to please, which makes them easy to train. Their friendly disposition extends to strangers, though they are not typically aggressive. Golden Retrievers thrive on human interaction and require regular exercise and mental stimulation to stay happy and healthy.",
      traits: ["Gentle", "Intelligent", "Friendly", "Loyal", "Patient", "Energetic", "Trainable"],
      appearance: "Golden Retrievers are medium to large-sized dogs with a sturdy build and a dense, water-repellent coat that ranges in color from light cream to deep gold. They have a broad head, a powerful muzzle, and expressive, friendly eyes. Their feathered tail is carried with a graceful sweep. Males typically stand 23-24 inches tall and weigh 65-75 pounds, while females are slightly smaller, standing 21.5-22.5 inches tall and weighing 55-65 pounds.",
      careIntro: "Golden Retrievers are active dogs that require regular exercise and mental stimulation. They thrive in families that can provide them with plenty of attention and activity.",
      exercise: "Golden Retrievers need at least 1-2 hours of exercise daily, including walks, swimming, fetch, and other activities. They excel at dog sports and enjoy having a job to do.",
      grooming: "Regular brushing 2-3 times per week is needed to manage shedding and prevent matting. During shedding seasons, daily brushing may be necessary. Regular baths, nail trims, and ear cleaning are also important.",
      health: "Generally healthy but can be prone to hip dysplasia, elbow dysplasia, heart conditions, and certain eye problems. Regular health screenings are recommended.",
      training: "Highly trainable and eager to please. They excel in obedience training, agility, and as service dogs. Positive reinforcement methods work best."
    },

    'retriever': {
      description: "Versatile sporting dogs bred for retrieving game, known for their intelligence, trainability, and gentle mouths.",
      origin: "Various regions",
      lifespan: "10-14 years",
      about: "Retrievers were developed as hunting companions, specifically bred to retrieve waterfowl and upland game birds. Their soft mouths, swimming ability, and eagerness to please made them invaluable to hunters. Today, they remain popular as both working dogs and family companions, excelling in various roles from service work to competitive sports.",
      temperament: "Retrievers are typically gentle, intelligent, and eager to please. They have a natural instinct to retrieve and often carry objects in their mouths. Most retrievers are excellent with children and other pets, making them ideal family dogs.",
      traits: ["Gentle", "Intelligent", "Trainable", "Active", "Loyal", "Patient", "Retrieving instinct"],
      appearance: "Retrievers vary in size and coat type but generally have athletic builds suited for swimming and retrieving. Most have water-resistant coats and webbed feet. Their expressions are typically intelligent and kind.",
      careIntro: "Retrievers are active dogs that need regular exercise and mental stimulation to prevent boredom and destructive behavior.",
      exercise: "Most retrievers need 1-2 hours of daily exercise including walks, swimming, and retrieving games. They excel at dog sports and water activities.",
      grooming: "Grooming needs vary by coat type. Most require regular brushing to manage shedding and prevent matting, especially during seasonal coat changes.",
      health: "Generally healthy but can be prone to hip dysplasia, elbow dysplasia, and eye conditions. Regular health screenings are important.",
      training: "Highly trainable and eager to please. They respond well to positive reinforcement and excel in obedience, agility, and field work."
    },

    'chesapeake': {
      description: "Tough, strong-willed retrievers known for their distinctive wavy coat and exceptional waterfowl retrieving abilities.",
      origin: "United States (Chesapeake Bay)",
      lifespan: "10-13 years",
      about: "The Chesapeake Bay Retriever was developed in the 19th century along the Chesapeake Bay to retrieve waterfowl in harsh, icy conditions. They're known for their incredible endurance and ability to work in rough water. Their oily, wavy coat provides excellent protection against cold water.",
      temperament: "Chesapeakes are strong-willed, independent, and protective. They're more reserved than other retrievers and can be territorial. They're loyal to their families but may be aloof with strangers.",
      traits: ["Strong-willed", "Independent", "Protective", "Hardworking", "Loyal", "Reserved", "Determined"],
      appearance: "Medium to large dogs with a distinctive wavy, oily coat in shades of brown. They have yellow or amber eyes and a powerful, athletic build designed for swimming in rough conditions.",
      careIntro: "Chesapeakes need experienced owners who can provide firm, consistent leadership and plenty of physical activity.",
      exercise: "High exercise needs including swimming, retrieving, and long walks. They need at least 2 hours of vigorous activity daily.",
      grooming: "Weekly brushing is usually sufficient. Their oily coat should not be over-bathed as it removes natural water protection.",
      health: "Generally healthy but can be prone to hip dysplasia, progressive retinal atrophy, and bloat.",
      training: "Intelligent but independent. Requires consistent, firm training from an early age. They respond best to experienced handlers."
    },

    'curly': {
      description: "Distinctive retrievers with tight, curly coats, known for their intelligence and versatility in both water and upland hunting.",
      origin: "England",
      lifespan: "9-14 years",
      about: "The Curly-Coated Retriever is one of the oldest retriever breeds, developed in England for retrieving both waterfowl and upland game. Their distinctive curly coat provides excellent protection in harsh conditions, and they're known for their independence and problem-solving abilities.",
      temperament: "Curlies are confident, independent, and intelligent. They can be more aloof than other retrievers and are often described as having a sense of humor. They're loyal to their families but reserved with strangers.",
      traits: ["Independent", "Confident", "Intelligent", "Aloof", "Loyal", "Problem-solver", "Versatile"],
      appearance: "Large dogs with distinctive tight, crisp curls covering their body except for the face and front of legs. They come in black or liver colors and have an elegant, athletic build.",
      careIntro: "Curlies need owners who appreciate their independent nature and can provide adequate mental and physical stimulation.",
      exercise: "High exercise needs including swimming, retrieving, and mental challenges. They need at least 1-2 hours of activity daily.",
      grooming: "Minimal grooming required. Never brush the curls when dry. Occasional baths and trimming of stray hairs is sufficient.",
      health: "Generally healthy but can be prone to hip dysplasia, eye problems, and bloat.",
      training: "Intelligent but independent. They need patient, consistent training and respond well to positive methods with variety to prevent boredom."
    },

    'flatcoated': {
      description: "Optimistic, friendly retrievers known for their lustrous flat coat and perpetually youthful attitude.",
      origin: "England",
      lifespan: "8-10 years",
      about: "The Flat-Coated Retriever was developed in England as a gamekeeper's dog, bred to retrieve both on land and in water. They're known for maintaining a puppy-like enthusiasm throughout their lives, earning them the nickname 'Peter Pan' of the dog world.",
      temperament: "Flat-Coats are optimistic, friendly, and outgoing. They maintain a youthful exuberance throughout their lives and are excellent with children. They're confident and happy dogs that love everyone they meet.",
      traits: ["Optimistic", "Friendly", "Outgoing", "Youthful", "Confident", "Happy", "Energetic"],
      appearance: "Medium to large dogs with a lustrous, flat-lying coat in solid black or liver. They have an intelligent expression, feathered tail, and elegant build that shows both power and agility.",
      careIntro: "Flat-Coats need active families who can match their energy and enthusiasm for life.",
      exercise: "High exercise needs including retrieving, swimming, and interactive play. They need at least 1-2 hours of vigorous activity daily.",
      grooming: "Regular brushing 2-3 times per week to maintain their beautiful coat. Extra attention needed during shedding seasons.",
      health: "Can be prone to cancer, hip dysplasia, and bloat. Regular health screenings are important due to shorter lifespan.",
      training: "Eager to please and highly trainable. They respond well to positive reinforcement and enjoy learning new things."
    },
    'labrador': {
      description: "Friendly, outgoing, and active, Labradors are America's most popular dog breed known for their loyalty and good nature.",
      origin: "Newfoundland, Canada",
      lifespan: "10-12 years",
      about: "Originally bred as fishing dogs in Newfoundland, Labradors were brought to England in the 1800s where they were refined into the breed we know today. They were originally called St. John's dogs and were used by fishermen to help haul nets and catch fish that escaped from fishing lines.",
      temperament: "Labradors are famously friendly and outgoing. They are typically excellent with children and other animals. They are also very intelligent and eager to please, making them highly trainable.",
      traits: ["Friendly", "Outgoing", "Active", "Loyal", "Intelligent", "Gentle", "Even-tempered"],
      appearance: "Labradors are medium-large dogs with a strong, athletic build. They have a short, dense, water-repellent coat that comes in yellow, black, or chocolate. They have a broad head, expressive eyes, and a thick 'otter' tail.",
      careIntro: "Labradors are high-energy dogs that need plenty of exercise and mental stimulation to prevent destructive behavior.",
      exercise: "Labs need at least 1-2 hours of vigorous exercise daily. They love swimming, fetching, and long walks or runs.",
      grooming: "Weekly brushing is usually sufficient, though daily brushing during shedding seasons helps manage loose hair. Regular baths as needed.",
      health: "Generally healthy but can be prone to hip and elbow dysplasia, eye conditions, and obesity. Regular exercise and proper diet are crucial.",
      training: "Highly intelligent and trainable. They excel as service dogs, therapy dogs, and in dog sports. Consistent, positive training from an early age is important."
    },

    // HERDING DOGS (API format: 'australian' with sub-breeds)
    'australian': {
      description: "Smart, work-oriented, and exuberant, Australian breeds are loyal companions with boundless energy and strong herding instincts.",
      origin: "Australia",
      lifespan: "12-15 years",
      about: "Australian dog breeds were developed for working with livestock in the challenging Australian environment. They are known for their intelligence, agility, and strong work ethic. These breeds became popular with ranchers and farmers for their versatility and loyalty.",
      temperament: "Australian breeds are typically smart, work-oriented, and exuberant. They are loyal to their families and can be reserved with strangers. They have strong herding instincts and may try to herd children and other pets.",
      traits: ["Smart", "Work-oriented", "Exuberant", "Loyal", "Energetic", "Herding instinct", "Agile"],
      appearance: "Australian breeds vary in size but generally have athletic builds suited for working. Many have weather-resistant coats and alert, intelligent expressions.",
      careIntro: "Australian breeds are high-energy working dogs that need jobs to do and plenty of physical and mental stimulation.",
      exercise: "Very high exercise needs - at least 2 hours of vigorous activity daily. They excel at agility, herding trials, and other dog sports.",
      grooming: "Grooming needs vary by specific breed. Most require regular brushing 2-3 times per week, daily during shedding seasons.",
      health: "Generally healthy but can be prone to hip dysplasia, eye problems, and epilepsy in some breeds. MDR1 gene mutation can cause drug sensitivities.",
      training: "Highly intelligent and trainable but need mental challenges. They excel in obedience, agility, and herding activities."
    },
    'bulldog': {
      description: "Calm, courageous, and friendly, Bulldogs are known for their loose-jointed, shuffling gait and massive, short-faced head.",
      origin: "England",
      lifespan: "8-10 years",
      about: "Originally bred for bull-baiting in England, Bulldogs have evolved into gentle, affectionate companions. Despite their somewhat intimidating appearance, they are known for their calm and friendly nature.",
      temperament: "Bulldogs are calm, courageous, and friendly. They are excellent with children and make great family pets. They can be stubborn but are generally easy-going.",
      traits: ["Calm", "Courageous", "Friendly", "Gentle", "Stubborn", "Loyal", "Patient"],
      appearance: "Bulldogs are medium-sized dogs with a distinctive wrinkled face and pushed-in nose. They have a muscular, compact build and a characteristic rolling gait.",
      careIntro: "Bulldogs have specific care needs due to their flat faces and can be sensitive to heat and exercise.",
      exercise: "Moderate exercise needs. Short walks and indoor play are usually sufficient. Avoid exercise in hot weather.",
      grooming: "Regular cleaning of facial wrinkles is essential. Weekly brushing and regular baths as needed.",
      health: "Can have breathing problems due to their flat faces. Also prone to hip dysplasia and skin conditions. Regular vet checkups are important.",
      training: "Can be stubborn but responds to patient, consistent training with positive reinforcement."
    },
    'beagle': {
      description: "Friendly, curious, and merry, Beagles are loving companions and excellent family dogs known for their gentle nature.",
      origin: "England",
      lifespan: "12-15 years",
      about: "Beagles were developed in England for hunting hare and rabbit. They are pack hounds and have an excellent sense of smell, second only to the Bloodhound among dog breeds.",
      temperament: "Beagles are friendly, curious, and merry. They are excellent with children and other dogs. They can be vocal and have a strong hunting instinct.",
      traits: ["Friendly", "Curious", "Merry", "Gentle", "Vocal", "Pack-oriented", "Determined"],
      appearance: "Beagles are medium-sized hounds with a compact build. They have a short coat that comes in various color combinations, typically tricolor or bicolor patterns.",
      careIntro: "Beagles are active dogs with strong scenting instincts that need regular exercise and mental stimulation.",
      exercise: "Needs daily walks and playtime. They enjoy scent work and tracking activities. A securely fenced yard is important.",
      grooming: "Low maintenance grooming needs. Weekly brushing and regular baths as needed.",
      health: "Generally healthy but can be prone to hip dysplasia, eye conditions, and epilepsy. Prone to weight gain.",
      training: "Intelligent but can be stubborn. Positive reinforcement and patience are key. Early socialization is important."
    }
  };

  // Merge with extended database if available
  const allBreedData = { ...breedDatabase };
  if (window.EXTENDED_BREED_DATABASE) {
    Object.assign(allBreedData, window.EXTENDED_BREED_DATABASE);
  }

  // Handle sub-breeds by checking the API key format (breed/subbreed)
  if (breedKey.includes('/')) {
    const [mainBreed, subBreed] = breedKey.split('/');

    // First try exact sub-breed match
    const subBreedInfo = getSubBreedInformation(mainBreed, subBreed, allBreedData);
    if (subBreedInfo) {
      return subBreedInfo;
    }

    // Fall back to main breed info with sub-breed modifications
    const mainBreedInfo = allBreedData[mainBreed] || allBreedData[mainBreed.toLowerCase()];
    if (mainBreedInfo) {
      return adaptMainBreedForSubBreed(mainBreedInfo, subBreed, mainBreed);
    }
  }

  // Try to find specific breed info
  const specificInfo = allBreedData[breedName] || allBreedData[breedKey] || null;

  if (specificInfo) {
    return specificInfo;
  }

  // Try partial matches for common breeds
  for (const [key, info] of Object.entries(allBreedData)) {
    if (breedName.includes(key) || breedKey.includes(key)) {
      return info;
    }
  }

  // Generate dynamic breed information based on breed name patterns
  return defaultInfo;
}

// Function to get specific sub-breed information
function getSubBreedInformation(mainBreed, subBreed, allBreedData) {
  // Sub-breed specific database
  const subBreedDatabase = {
    // POODLE VARIETIES
    'poodle/toy': {
      description: "Tiny, intelligent, and active, Toy Poodles are the smallest variety of Poodle with all the intelligence of their larger cousins.",
      origin: "France/Germany",
      lifespan: "12-15 years",
      about: "Toy Poodles are the smallest variety of the Poodle breed, standing under 10 inches tall. Despite their tiny size, they retain all the intelligence and athleticism of their larger cousins. They were bred down from Standard Poodles and became popular as companion dogs among European nobility.",
      temperament: "Toy Poodles are intelligent, active, and alert. They can be more sensitive than larger Poodles and may be reserved with strangers. They're devoted to their families and can be protective despite their small size.",
      traits: ["Intelligent", "Active", "Alert", "Sensitive", "Devoted", "Protective", "Agile"],
      appearance: "Very small dogs under 10 inches tall, with the characteristic Poodle coat that can be clipped in various styles. They come in many solid colors and have an elegant, square build.",
      careIntro: "Toy Poodles need gentle handling due to their small size but still require regular exercise and mental stimulation.",
      exercise: "Moderate exercise needs - short walks and indoor play are usually sufficient. They enjoy agility and obedience training scaled to their size.",
      grooming: "Professional grooming every 6-8 weeks. Daily brushing to prevent matting. Their coat grows continuously and needs regular trimming.",
      health: "Can be prone to luxating patella, eye problems, and dental issues common in toy breeds. Generally healthy with proper care.",
      training: "Highly intelligent and trainable but can be sensitive. Positive reinforcement works best. Early socialization is important."
    },

    'poodle/miniature': {
      description: "Intelligent, athletic, and versatile, Miniature Poodles combine the Poodle's smarts with a convenient size.",
      origin: "France/Germany",
      lifespan: "13-15 years",
      about: "Miniature Poodles stand 10-15 inches tall and were developed as smaller versions of the Standard Poodle. They retain the breed's intelligence and athleticism while being more suitable for smaller living spaces. They were popular as circus dogs due to their trainability and size.",
      temperament: "Miniature Poodles are intelligent, athletic, and versatile. They're typically more robust than Toy Poodles but retain the breed's sensitivity and intelligence. They're excellent family dogs and get along well with children and other pets.",
      traits: ["Intelligent", "Athletic", "Versatile", "Robust", "Sensitive", "Family-oriented", "Trainable"],
      appearance: "Medium-small dogs standing 10-15 inches tall with the classic Poodle build and coat. They're well-proportioned and athletic, coming in many solid colors.",
      careIntro: "Miniature Poodles are active dogs that need regular exercise and mental stimulation despite their moderate size.",
      exercise: "Moderate to high exercise needs - daily walks, playtime, and mental challenges. They excel at dog sports and activities.",
      grooming: "Professional grooming every 6-8 weeks. Regular brushing to prevent matting. Their hypoallergenic coat requires consistent care.",
      health: "Generally healthy but can be prone to hip dysplasia, eye problems, and epilepsy. Regular health screenings recommended.",
      training: "Extremely intelligent and eager to please. They excel in obedience, agility, and other dog sports. Respond well to positive training methods."
    },

    'poodle/standard': {
      description: "Athletic, intelligent, and elegant, Standard Poodles are the original and largest variety of this versatile breed.",
      origin: "Germany/France",
      lifespan: "12-15 years",
      about: "Standard Poodles are the original Poodle variety, developed as water retrievers in Germany and refined in France. Standing over 15 inches tall, they're athletic dogs originally bred to retrieve waterfowl. Their intelligence and trainability made them popular as circus performers and later as family companions.",
      temperament: "Standard Poodles are athletic, intelligent, and elegant. They're confident and outgoing, excellent with families and children. They retain some hunting instincts and are generally more robust and less sensitive than smaller Poodle varieties.",
      traits: ["Athletic", "Intelligent", "Elegant", "Confident", "Outgoing", "Robust", "Versatile"],
      appearance: "Large dogs over 15 inches tall with an athletic, well-proportioned build. They have the characteristic Poodle coat and come in many solid colors. Their build shows their working heritage.",
      careIntro: "Standard Poodles are active, athletic dogs that need plenty of exercise and mental stimulation to stay happy and healthy.",
      exercise: "High exercise needs - daily walks, runs, swimming, and mental challenges. They excel at various dog sports and water activities.",
      grooming: "Professional grooming every 6-8 weeks. Regular brushing to prevent matting. Their coat grows continuously and needs consistent care.",
      health: "Generally healthy but can be prone to hip dysplasia, bloat, and some eye conditions. Regular health screenings important for breeding dogs.",
      training: "Extremely intelligent and highly trainable. They excel in all dog sports and activities. Eager to please and respond well to positive training."
    },

    // SCHNAUZER VARIETIES
    'schnauzer/miniature': {
      description: "Friendly, smart, and obedient, Miniature Schnauzers are sturdy little dogs with big personalities.",
      origin: "Germany",
      lifespan: "12-15 years",
      about: "Miniature Schnauzers were developed in Germany by crossing Standard Schnauzers with smaller breeds like Affenpinschers and Poodles. They were bred to be ratters and farm dogs but have become popular family companions due to their size and temperament.",
      temperament: "Miniature Schnauzers are friendly, smart, and obedient. They're alert and make good watchdogs despite their small size. They're generally good with children and other pets when properly socialized.",
      traits: ["Friendly", "Smart", "Obedient", "Alert", "Spirited", "Loyal", "Adaptable"],
      appearance: "Small, sturdy dogs with the characteristic Schnauzer beard and eyebrows. They have a wiry coat that comes in salt and pepper, black, or black and silver.",
      careIntro: "Miniature Schnauzers are adaptable dogs that do well in various living situations but need regular exercise and grooming.",
      exercise: "Moderate exercise needs - daily walks and playtime. They enjoy activities that challenge their minds as well as their bodies.",
      grooming: "Professional grooming every 6-8 weeks for hand-stripping or clipping. Regular brushing and beard cleaning required.",
      health: "Generally healthy but can be prone to pancreatitis, diabetes, and eye problems. Diet management is important.",
      training: "Intelligent and eager to please. They respond well to positive training methods and enjoy learning new things."
    },

    'schnauzer/giant': {
      description: "Bold, strong, and good-natured, Giant Schnauzers are powerful working dogs with calm confidence.",
      origin: "Germany",
      lifespan: "10-12 years",
      about: "Giant Schnauzers were developed in Germany for driving cattle and later became popular as guard dogs and police dogs. They're the largest of the Schnauzer breeds and were bred up from Standard Schnauzers with the addition of other large breeds.",
      temperament: "Giant Schnauzers are bold, strong, and good-natured. They're loyal to their families but can be aloof with strangers. They need experienced owners who can provide firm, consistent leadership.",
      traits: ["Bold", "Strong", "Good-natured", "Loyal", "Aloof", "Protective", "Confident"],
      appearance: "Large, powerful dogs with the characteristic Schnauzer appearance scaled up. They have a wiry coat in solid black or salt and pepper colors.",
      careIntro: "Giant Schnauzers are large, active dogs that need experienced owners and plenty of exercise and mental stimulation.",
      exercise: "High exercise needs - daily walks, runs, and mental challenges. They excel at various dog sports and working activities.",
      grooming: "Professional grooming every 6-8 weeks. Regular brushing and maintenance of facial furnishings required.",
      health: "Generally healthy but can be prone to hip dysplasia, bloat, and eye problems. Regular health screenings recommended.",
      training: "Intelligent but strong-willed. They need consistent, firm training from experienced handlers. Early socialization is crucial."
    },

    // TERRIER VARIETIES
    'terrier/yorkshire': {
      description: "Brave, determined, and investigative, Yorkshire Terriers are tiny dogs with big personalities.",
      origin: "England (Yorkshire)",
      lifespan: "13-16 years",
      about: "Yorkshire Terriers were developed in Yorkshire, England, during the Industrial Revolution to catch rats in textile mills. Despite their tiny size, they retain the terrier spirit and were bred from various terrier breeds including the Skye Terrier and Manchester Terrier.",
      temperament: "Yorkies are brave, determined, and investigative. They can be bossy and may not realize their small size. They're loyal to their families but can be suspicious of strangers.",
      traits: ["Brave", "Determined", "Investigative", "Bossy", "Loyal", "Suspicious", "Spirited"],
      appearance: "Very small dogs weighing 4-7 pounds with a long, silky coat in blue and tan. They have a compact build and alert expression.",
      careIntro: "Yorkshire Terriers need gentle handling due to their tiny size but still have the exercise and mental stimulation needs of larger terriers.",
      exercise: "Low to moderate exercise needs - short walks and indoor play. They enjoy interactive toys and games.",
      grooming: "Daily brushing required for long coats, or professional grooming for shorter clips. Regular dental care is crucial.",
      health: "Can be prone to luxating patella, tracheal collapse, and dental problems. Hypoglycemia can be an issue in very small individuals.",
      training: "Intelligent but can be stubborn. Positive reinforcement and patience are key. Housetraining can be challenging."
    },

    'terrier/airedale': {
      description: "The 'King of Terriers,' Airedales are intelligent, outgoing, and confident dogs with a playful streak.",
      origin: "England (Yorkshire)",
      lifespan: "11-14 years",
      about: "The Airedale Terrier is the largest of all terrier breeds, earning the nickname 'King of Terriers.' They were developed in Yorkshire, England, to hunt otters and rats. During World War I, they served as messengers, sentries, and search and rescue dogs.",
      temperament: "Airedales are intelligent, outgoing, and confident. They have a playful streak and can be mischievous. They're loyal to their families but can be aloof with strangers.",
      traits: ["Intelligent", "Outgoing", "Confident", "Playful", "Mischievous", "Loyal", "Alert"],
      appearance: "Large terriers with a distinctive wiry coat that's tan with a black or grizzle saddle. They have a long head, small dark eyes, and V-shaped ears that fold over.",
      careIntro: "Airedales are active, intelligent dogs that need plenty of exercise and mental stimulation to stay happy and well-behaved.",
      exercise: "High exercise needs - daily walks, runs, and playtime. They enjoy swimming, hiking, and dog sports.",
      grooming: "Professional grooming every 6-8 weeks for hand-stripping or clipping. Regular brushing 2-3 times per week.",
      health: "Generally healthy but can be prone to hip dysplasia, bloat, and some skin conditions.",
      training: "Intelligent but can be stubborn. They need consistent, firm training with positive reinforcement. Early socialization is important."
    }
  };

  // Check for exact sub-breed match
  const subBreedKey = `${mainBreed}/${subBreed}`;
  return subBreedDatabase[subBreedKey] || subBreedDatabase[subBreedKey.toLowerCase()] || null;
}

// Function to adapt main breed info for sub-breeds
function adaptMainBreedForSubBreed(mainBreedInfo, subBreed, mainBreed) {
  const adaptedInfo = { ...mainBreedInfo };

  // Customize the name and description to include the sub-breed
  const subBreedName = subBreed.charAt(0).toUpperCase() + subBreed.slice(1);
  const mainBreedName = mainBreed.charAt(0).toUpperCase() + mainBreed.slice(1);

  adaptedInfo.description = `${subBreedName} ${mainBreedName}: ${adaptedInfo.description}`;
  adaptedInfo.about = `The ${subBreedName} ${mainBreedName} is a variety of the ${mainBreedName} breed. ${adaptedInfo.about}`;

  // Add sub-breed specific traits if known
  const subBreedTraits = getSubBreedSpecificTraits(mainBreed, subBreed);
  if (subBreedTraits.length > 0) {
    adaptedInfo.traits = [...new Set([...subBreedTraits, ...adaptedInfo.traits])];
  }

  // Adjust care information for common sub-breed patterns
  if (subBreed.includes('miniature') || subBreed.includes('toy') || subBreed.includes('small')) {
    adaptedInfo.exercise = "Moderate exercise needs suitable for their smaller size - daily walks and indoor play are usually sufficient.";
    adaptedInfo.careIntro = `${subBreedName} ${mainBreedName}s need care appropriate for their smaller size while maintaining the breed's essential characteristics.`;
  } else if (subBreed.includes('giant') || subBreed.includes('large')) {
    adaptedInfo.exercise = "High exercise needs due to their larger size - extensive daily exercise and mental stimulation required.";
    adaptedInfo.careIntro = `${subBreedName} ${mainBreedName}s need substantial exercise and space due to their larger size.`;
  }

  return adaptedInfo;
}

// Function to get sub-breed specific traits
function getSubBreedSpecificTraits(mainBreed, subBreed) {
  const traitMap = {
    'toy': ['Tiny', 'Delicate', 'Portable'],
    'miniature': ['Compact', 'Adaptable', 'Apartment-friendly'],
    'standard': ['Athletic', 'Robust', 'Versatile'],
    'giant': ['Powerful', 'Imposing', 'Guardian'],
    'smooth': ['Low-maintenance coat', 'Sleek'],
    'rough': ['Long-coated', 'Elegant'],
    'wire': ['Wiry coat', 'Weather-resistant'],
    'long': ['Long-haired', 'Flowing coat'],
    'short': ['Short-haired', 'Easy-care coat']
  };

  const traits = [];
  for (const [key, values] of Object.entries(traitMap)) {
    if (subBreed.toLowerCase().includes(key)) {
      traits.push(...values);
    }
  }

  return traits;
}

// Function to generate dynamic breed information based on name patterns
function generateDynamicBreedInfo(breedName, breedKey) {
  const breedWords = breedName.toLowerCase().split(' ');
  const keyWords = breedKey.toLowerCase().split(/[\/\-_]/);

  // Breed type patterns and their characteristics
  const breedPatterns = {
    // Herding breeds
    shepherd: {
      group: "Herding",
      origin: "Various regions",
      lifespan: "10-14 years",
      description: "Intelligent, loyal, and hardworking, this shepherd breed is known for its herding instincts and protective nature.",
      about: "This shepherd breed was developed for herding livestock and protecting flocks. They are intelligent, trainable dogs with strong work ethics and natural protective instincts. They form strong bonds with their families and are known for their loyalty and dedication.",
      temperament: "This breed is typically intelligent, loyal, and alert. They have strong herding instincts and may try to herd family members. They are protective of their territory and family but should be well-socialized to be appropriate companions.",
      traits: ["Intelligent", "Loyal", "Alert", "Protective", "Herding instinct", "Trainable", "Hardworking"],
      exercise: "High exercise needs - daily walks, runs, and mental challenges. They need jobs to do and excel at herding activities and dog sports.",
      grooming: "Regular brushing 2-3 times per week, daily during shedding seasons. Most shepherd breeds have double coats that shed seasonally.",
      health: "Generally healthy but may be prone to hip dysplasia and eye conditions. Regular health screenings recommended.",
      training: "Highly intelligent and trainable but need consistent leadership. They excel in obedience, herding trials, and working activities."
    },

    collie: {
      group: "Herding",
      origin: "Scotland/England",
      lifespan: "12-14 years",
      description: "Gentle, intelligent, and devoted, this collie breed combines herding ability with a sweet, family-friendly temperament.",
      about: "This collie breed was developed for herding sheep and cattle in the British Isles. They are known for their intelligence, gentle nature, and strong bonds with their families. Their herding heritage gives them natural instincts to gather and protect.",
      temperament: "This breed is gentle, intelligent, and devoted to their families. They are typically good with children and other pets, though they may try to herd them. They can be somewhat reserved with strangers but are not typically aggressive.",
      traits: ["Gentle", "Intelligent", "Devoted", "Herding instinct", "Family-friendly", "Reserved", "Loyal"],
      exercise: "Moderate to high exercise needs - daily walks, playtime, and mental stimulation. They enjoy herding activities and dog sports.",
      grooming: "Regular brushing to maintain their coat, with daily brushing needed for long-coated varieties. Professional grooming may be beneficial.",
      health: "Generally healthy but may be prone to eye conditions and MDR1 gene mutations. Regular health screenings recommended.",
      training: "Intelligent and eager to please. They respond well to gentle, positive training methods and are sensitive to harsh corrections."
    },

    retriever: {
      group: "Sporting",
      origin: "Various regions",
      lifespan: "10-14 years",
      description: "Friendly, intelligent, and athletic, this retriever breed excels at both hunting and family companionship.",
      about: "This retriever breed was developed for retrieving waterfowl and upland game. They are known for their soft mouths, swimming ability, and eagerness to please. Their gentle nature and intelligence have made them popular as both working dogs and family companions.",
      temperament: "This breed is typically friendly, intelligent, and eager to please. They are excellent with children and other pets, making them ideal family dogs. They have natural retrieving instincts and love to carry objects in their mouths.",
      traits: ["Friendly", "Intelligent", "Athletic", "Gentle", "Eager to please", "Retrieving instinct", "Water-loving"],
      exercise: "High exercise needs - daily walks, swimming, and retrieving games. They excel at water activities and dog sports.",
      grooming: "Regular brushing 2-3 times per week to manage shedding and prevent matting. Extra attention needed during seasonal coat changes.",
      health: "Generally healthy but may be prone to hip dysplasia, elbow dysplasia, and eye conditions. Regular health screenings recommended.",
      training: "Highly trainable and eager to please. They excel in obedience, field work, and as service dogs. Positive reinforcement works best."
    },

    spaniel: {
      group: "Sporting",
      origin: "Spain/England",
      lifespan: "12-15 years",
      description: "Gentle, smart, and eager to please, this spaniel breed is known for its friendly nature and hunting ability.",
      about: "This spaniel breed was developed for flushing and retrieving game birds. They are versatile hunting dogs that are also excellent family companions. Their gentle nature and intelligence make them adaptable to various roles and living situations.",
      temperament: "This breed is gentle, smart, and eager to please. They are typically friendly and outgoing, excellent with children and other pets. They have moderate energy levels and are adaptable to various lifestyles.",
      traits: ["Gentle", "Smart", "Eager to please", "Friendly", "Outgoing", "Adaptable", "Hunting instinct"],
      exercise: "Moderate exercise needs - daily walks, playtime, and some field work. They enjoy swimming and hiking.",
      grooming: "Moderate to high maintenance - regular brushing to prevent matting, especially of ear feathers. Professional grooming recommended.",
      health: "Generally healthy but may be prone to ear infections due to long ears and some eye conditions. Regular ear cleaning important.",
      training: "Highly intelligent and eager to please. They respond excellently to positive reinforcement and are generally easy to train."
    },

    terrier: {
      group: "Terrier",
      origin: "British Isles",
      lifespan: "12-16 years",
      description: "Feisty, brave, and determined, this terrier breed was bred for hunting vermin and is known for its spirited personality.",
      about: "This terrier breed was originally developed for hunting and killing vermin. They are brave, determined dogs with strong prey drives and independent natures. Despite their sometimes stubborn personalities, they are loyal and affectionate with their families.",
      temperament: "This breed is typically feisty, brave, and determined. They can be stubborn and independent but are also loyal and affectionate with their families. They may have strong prey drives and chase small animals.",
      traits: ["Feisty", "Brave", "Determined", "Stubborn", "Independent", "Loyal", "High prey drive"],
      exercise: "Moderate to high exercise needs - daily walks and playtime. Many enjoy digging and chasing games.",
      grooming: "Grooming needs vary by coat type - from minimal for smooth coats to professional grooming for wire coats.",
      health: "Generally healthy but may be prone to luxating patella and some eye conditions. Specific health concerns vary by size.",
      training: "Can be challenging due to independent nature. Consistent, positive training works best. Early socialization important."
    },

    hound: {
      group: "Hound",
      origin: "Various regions",
      lifespan: "10-15 years",
      description: "Gentle, determined, and scent-driven, this hound breed was developed for tracking and hunting with exceptional scenting ability.",
      about: "This hound breed was developed for hunting using scent or sight. They have exceptional sensory abilities and strong hunting instincts. Many hounds are gentle, easy-going dogs that make excellent family companions when their exercise needs are met.",
      temperament: "This breed is typically gentle, determined, and focused when following scents. They can be independent and stubborn when tracking but are generally good-natured and patient with families.",
      traits: ["Gentle", "Determined", "Scent-driven", "Independent", "Patient", "Good-natured", "Hunting instinct"],
      exercise: "Moderate to high exercise needs - daily walks and opportunities for scent work. Secure fencing important due to tracking instincts.",
      grooming: "Generally low to moderate maintenance - regular brushing and attention to ears if they're long and droopy.",
      health: "Generally healthy but may be prone to ear infections (if long-eared) and bloat in larger varieties.",
      training: "Intelligent but can be stubborn due to independent nature. Patient, positive training works best. Recall training can be challenging."
    },

    bulldog: {
      group: "Non-Sporting",
      origin: "England",
      lifespan: "8-12 years",
      description: "Calm, friendly, and courageous, this bulldog breed is known for its gentle nature and distinctive appearance.",
      about: "This bulldog breed has evolved from its working origins to become a gentle, affectionate companion. Despite their sometimes intimidating appearance, they are known for their calm, friendly nature and make excellent family pets.",
      temperament: "This breed is typically calm, friendly, and courageous. They are excellent with children and make great family pets. They can be stubborn but are generally easy-going and adaptable.",
      traits: ["Calm", "Friendly", "Courageous", "Gentle", "Stubborn", "Easy-going", "Patient"],
      exercise: "Low to moderate exercise needs - short walks and indoor play. Avoid overexertion, especially in hot weather.",
      grooming: "Regular cleaning of facial wrinkles if present. Weekly brushing and regular baths as needed.",
      health: "May have breathing difficulties if flat-faced. Can be prone to joint problems and heat sensitivity.",
      training: "Can be stubborn but responds to patient, consistent training with positive reinforcement."
    },

    mastiff: {
      group: "Working",
      origin: "Various regions",
      lifespan: "6-12 years",
      description: "Gentle, courageous, and dignified, this mastiff breed combines massive size with a gentle, protective nature.",
      about: "This mastiff breed was developed as a guardian and working dog. Despite their imposing size, they are known for their gentle nature with families and natural protective instincts. They are calm, dignified dogs that make devoted companions.",
      temperament: "This breed is typically gentle, courageous, and dignified. They are protective of their families but generally calm and laid-back. Their size alone makes them effective deterrents.",
      traits: ["Gentle", "Courageous", "Dignified", "Protective", "Calm", "Loyal", "Massive"],
      exercise: "Moderate exercise needs - daily walks and some playtime. Avoid overexertion due to their size.",
      grooming: "Low maintenance - weekly brushing. May drool considerably and need regular cleaning of facial areas.",
      health: "Can be prone to joint problems, bloat, and heart conditions. Shorter lifespan due to giant size.",
      training: "Intelligent but can be stubborn. Need gentle, consistent training and early socialization due to their size."
    }
  };

  // Determine breed type from name patterns
  let breedType = null;
  let breedInfo = null;

  // Check for specific breed type keywords
  for (const [pattern, info] of Object.entries(breedPatterns)) {
    if (breedWords.some(word => word.includes(pattern)) || keyWords.some(word => word.includes(pattern))) {
      breedType = pattern;
      breedInfo = info;
      break;
    }
  }

  // If no specific pattern found, use default with some customization
  if (!breedInfo) {
    breedInfo = {
      group: "Mixed/Other",
      origin: "Various regions",
      lifespan: "10-15 years",
      description: `A wonderful companion breed known for its unique characteristics and loyal nature.`,
      about: `This breed has been developed over time to be an excellent companion. They are known for their distinctive characteristics and make great family pets when properly cared for and socialized.`,
      temperament: `This breed typically displays a balanced temperament, being loyal to their family and adaptable to various living situations. They respond well to consistent training and socialization.`,
      traits: ["Loyal", "Intelligent", "Friendly", "Adaptable"],
      exercise: "Regular daily exercise is important for maintaining good health and preventing behavioral issues. This includes walks, playtime, and mental stimulation.",
      grooming: "Regular grooming helps maintain coat health and allows you to check for any health issues. Brushing frequency depends on coat type.",
      health: "Generally healthy breed with proper care. Regular veterinary checkups and preventive care are recommended.",
      training: "Responds well to pnforcement training methods. Early socialization and consistent training yield the best results."
    };
  }

  // Customize the information with the specific breed name
  const capitalizedName = breedName.split(' ').map(word =>
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');

  return {
    description: breedInfo.description.replace('this breed', capitalizedName + 's').replace('This breed', capitalizedName + 's'),
    origin: breedInfo.origin,
    lifespan: breedInfo.lifespan,
    about: breedInfo.about.replace(/this breed/gi, `the ${capitalizedName}`).replace(/This breed/g, `The ${capitalizedName}`),
    temperament: breedInfo.temperament.replace(/this breed/gi, capitalizedName + 's').replace(/This breed/g, capitalizedName + 's'),
    traits: breedInfo.traits,
    appearance: `${capitalizedName}s have distinctive physical characteristics that reflect their breeding purpose and heritage. Their build and coat are well-suited to their original function and environment.`,
    careIntro: `${capitalizedName}s need proper care and attention to ensure they live long, healthy, and happy lives. Understanding their specific needs is key to successful ownership.`,
    exercise: breedInfo.exercise,
    grooming: breedInfo.grooming,
    health: breedInfo.health,
    training: breedInfo.training
  };
}

// Export functions for global access
window.getBreedInformation = getBreedInformation;
window.getSubBreedInformation = getSubBreedInformation;
window.adaptMainBreedForSubBreed = adaptMainBreedForSubBreed;
window.generateDynamicBreedInfo = generateDynamicBreedInfo;