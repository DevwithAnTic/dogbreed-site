// Breed Information Database

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

  // Specific breed information
  const breedDatabase = {
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
    'german shepherd': {
      description: "Confident, courageous, and smart, German Shepherds are extremely versatile working dogs known for their loyalty and courage.",
      origin: "Germany",
      lifespan: "9-13 years",
      about: "German Shepherds were developed in 1899 by Captain Max von Stephanitz, who wanted to create the ideal herding dog. The breed quickly gained recognition for its intelligence, trainability, and versatility, leading to its use in various working roles including police work, military service, and as guide dogs.",
      temperament: "German Shepherds are confident, courageous, and smart. They are extremely versatile and can adapt to many different roles. They are loyal to their family but can be reserved with strangers.",
      traits: ["Confident", "Courageous", "Smart", "Loyal", "Versatile", "Alert", "Protective"],
      appearance: "German Shepherds are large dogs with a noble appearance. They have a double coat that's typically tan and black or solid black. They have erect ears, an intelligent expression, and a bushy tail.",
      careIntro: "German Shepherds are active, intelligent dogs that need both physical exercise and mental stimulation to thrive.",
      exercise: "Needs 2+ hours of exercise daily including walks, runs, and mental challenges. They excel at dog sports and working activities.",
      grooming: "Regular brushing 2-3 times per week, daily during shedding seasons. They shed year-round with two major shedding periods.",
      health: "Can be prone to hip and elbow dysplasia, bloat, and degenerative myelopathy. Regular health screenings are important.",
      training: "Highly intelligent and trainable but needs consistent, firm leadership. Early socialization is crucial. They excel in obedience and protection work."
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

  // Try to find specific breed info, fallback to default
  const specificInfo = breedDatabase[breedName] || breedDatabase[breedKey] || null;
  
  if (specificInfo) {
    return specificInfo;
  }

  // Try partial matches for common breeds
  for (const [key, info] of Object.entries(breedDatabase)) {
    if (breedName.includes(key) || breedKey.includes(key)) {
      return info;
    }
  }

  return defaultInfo;
}

// Export function for global access
window.getBreedInformation = getBreedInformation;