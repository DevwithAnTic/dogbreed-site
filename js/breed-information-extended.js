// Extended Breed Information Database - Part 2
// This file contains additional breed information to be merged with the main database

const EXTENDED_BREED_DATABASE = {
  // SHEPHERDS AND HERDING DOGS (API uses 'german' with sub-breed 'shepherd')
  'german': {
    description: "Confident, courageous, and smart, German breeds are extremely versatile working dogs known for their loyalty and courage.",
    origin: "Germany",
    lifespan: "9-13 years",
    about: "German dog breeds were developed in Germany for various working purposes including herding, guarding, and hunting. They are known for their intelligence, trainability, and versatility, leading to their use in various working roles including police work, military service, and as guide dogs.",
    temperament: "German breeds are typically confident, courageous, and smart. They are extremely versatile and can adapt to many different roles. They are loyal to their families but can be reserved with strangers.",
    traits: ["Confident", "Courageous", "Smart", "Loyal", "Versatile", "Alert", "Protective"],
    appearance: "German breeds vary in appearance but generally have strong, athletic builds suited to their working heritage. Many have double coats and alert, intelligent expressions.",
    careIntro: "German breeds are typically active, intelligent dogs that need both physical exercise and mental stimulation to thrive.",
    exercise: "Most German breeds need 1-2+ hours of exercise daily including walks, runs, and mental challenges. They excel at dog sports and working activities.",
    grooming: "Grooming needs vary by specific breed, but most require regular brushing 2-3 times per week, daily during shedding seasons.",
    health: "Generally healthy but can be prone to hip and elbow dysplasia in larger breeds. Regular health screenings are important.",
    training: "Highly intelligent and trainable but need consistent, firm leadership. Early socialization is crucial. They excel in obedience and working activities."
  },

  'australian shepherd': {
    description: "Smart, work-oriented, and exuberant, Australian Shepherds are loyal companions with boundless energy.",
    origin: "United States (despite the name)",
    lifespan: "12-15 years",
    about: "Despite their name, Australian Shepherds were developed in the United States to work on ranches. They were bred to herd livestock and are known for their intelligence, agility, and strong work ethic. They became popular with cowboys and ranchers for their versatility and loyalty.",
    temperament: "Australian Shepherds are smart, work-oriented, and exuberant. They are loyal to their families and can be reserved with strangers. They have strong herding instincts and may try to herd children and other pets.",
    traits: ["Smart", "Work-oriented", "Exuberant", "Loyal", "Energetic", "Herding instinct", "Agile"],
    appearance: "Medium-sized dogs with a moderately long, weather-resistant coat in various colors including blue merle, red merle, black, and red. They often have striking blue or amber eyes, sometimes one of each color.",
    careIntro: "Australian Shepherds are high-energy working dogs that need jobs to do and plenty of physical and mental stimulation.",
    exercise: "Very high exercise needs - at least 2 hours of vigorous activity daily. They excel at agility, herding trials, and other dog sports.",
    grooming: "Regular brushing 2-3 times per week, daily during shedding seasons. Pay attention to feathering on legs and tail.",
    health: "Generally healthy but can be prone to hip dysplasia, eye problems, and epilepsy. MDR1 gene mutation can cause drug sensitivities.",
    training: "Highly intelligent and trainable but needs mental challenges. They excel in obedience, agility, and herding activities."
  },

  'border collie': {
    description: "Remarkably bright workaholics, Border Collies are athletic, medium-sized herders known for their intense stare.",
    origin: "Scotland/England border region",
    lifespan: "12-15 years",
    about: "Border Collies were developed along the Scottish-English border for herding sheep. They're considered one of the most intelligent dog breeds and are known for their intense focus and 'eye' - a hypnotic stare used to control livestock. They excel in dog sports and are popular in competitive obedience and agility.",
    temperament: "Border Collies are remarkably bright, energetic, and focused. They are workaholics that need mental and physical challenges. They can be intense and may not be suitable for all families.",
    traits: ["Intelligent", "Energetic", "Focused", "Intense", "Athletic", "Workaholic", "Agile"],
    appearance: "Medium-sized dogs with a double coat that can be smooth or rough. They come in various colors, most commonly black and white. They have an alert expression and athletic build.",
    careIntro: "Border Collies are extremely high-energy dogs that need experienced owners who can provide adequate mental and physical stimulation.",
    exercise: "Extremely high exercise needs - 2+ hours of vigorous activity daily plus mental challenges. They need jobs to do or they may become destructive.",
    grooming: "Regular brushing 2-3 times per week, daily during shedding seasons. Smooth coats require less maintenance than rough coats.",
    health: "Generally healthy but can be prone to hip dysplasia, eye problems, and epilepsy. Some lines may have MDR1 gene mutations.",
    training: "Extremely intelligent and trainable but needs experienced handlers. They excel in all dog sports and working activities."
  },

  'collie': {
    description: "Devoted, graceful, and proud, Collies are elegant herding dogs known for their loyalty and gentle nature.",
    origin: "Scotland",
    lifespan: "12-14 years",
    about: "Collies originated in Scotland as herding dogs, made famous by the 'Lassie' movies and TV shows. There are two varieties: Rough Collies (long-haired) and Smooth Collies (short-haired). They're known for their intelligence, loyalty, and gentle nature with children.",
    temperament: "Collies are devoted, graceful, and proud. They are gentle with children and make excellent family pets. They can be somewhat reserved with strangers but are not typically aggressive.",
    traits: ["Devoted", "Graceful", "Proud", "Gentle", "Intelligent", "Loyal", "Sensitive"],
    appearance: "Large, elegant dogs with a wedge-shaped head and expressive eyes. Rough Collies have a long, flowing coat while Smooth Collies have a short, dense coat. Both come in sable, tricolor, blue merle, and white.",
    careIntro: "Collies are moderate-energy dogs that need regular exercise and enjoy being part of family activities.",
    exercise: "Moderate to high exercise needs - daily walks, playtime, and mental stimulation. They enjoy herding activities and dog sports.",
    grooming: "Rough Collies need daily brushing to prevent matting. Smooth Collies need weekly brushing. Both shed seasonally.",
    health: "Generally healthy but can be prone to eye problems, hip dysplasia, and MDR1 gene mutations that cause drug sensitivities.",
    training: "Intelligent and eager to please. They respond well to gentle, positive training methods and are sensitive to harsh corrections."
  },

  // HOUNDS
  'beagle': {
    description: "Friendly, curious, and merry, Beagles are loving companions and excellent family dogs known for their gentle nature.",
    origin: "England",
    lifespan: "12-15 years",
    about: "Beagles were developed in England for hunting hare and rabbit. They are pack hounds and have an excellent sense of smell, second only to the Bloodhound among dog breeds. Their compact size and gentle nature have made them popular family pets.",
    temperament: "Beagles are friendly, curious, and merry. They are excellent with children and other dogs. They can be vocal and have a strong hunting instinct that may lead them to follow scents.",
    traits: ["Friendly", "Curious", "Merry", "Gentle", "Vocal", "Pack-oriented", "Determined"],
    appearance: "Medium-sized hounds with a compact build. They have a short coat that comes in various color combinations, typically tricolor or bicolor patterns. They have long, droopy ears and expressive brown eyes.",
    careIntro: "Beagles are active dogs with strong scenting instincts that need regular exercise and mental stimulation.",
    exercise: "Needs daily walks and playtime. They enjoy scent work and tracking activities. A securely fenced yard is important as they may follow scents.",
    grooming: "Low maintenance grooming needs. Weekly brushing and regular baths as needed. Pay attention to ear cleaning due to their long, droopy ears.",
    health: "Generally healthy but can be prone to hip dysplasia, eye conditions, and epilepsy. They're also prone to weight gain and should be monitored for obesity.",
    training: "Intelligent but can be stubborn due to their hound nature. Positive reinforcement and patience are key. Early socialization is important."
  },

  'basset': {
    description: "Charming, patient, and low-key, Basset Hounds are laid-back companions with exceptional scenting ability.",
    origin: "France",
    lifespan: "10-12 years",
    about: "Basset Hounds were developed in France for hunting small game. Their low-slung build allows them to follow scent trails close to the ground, while their stamina enables them to hunt for hours. Despite their hunting heritage, they're known for their gentle, laid-back personality.",
    temperament: "Basset Hounds are charming, patient, and low-key. They are gentle with children and other pets. They can be stubborn but are generally easy-going and adaptable.",
    traits: ["Charming", "Patient", "Low-key", "Gentle", "Stubborn", "Easy-going", "Scent-driven"],
    appearance: "Medium to large dogs with a distinctive long, low build. They have extremely long ears, sad-looking eyes, and a powerful nose. Their coat is short and comes in typical hound colors.",
    careIntro: "Basset Hounds are moderate-energy dogs that need regular exercise but are generally content with a more relaxed lifestyle.",
    exercise: "Moderate exercise needs - daily walks and some playtime. Avoid overexertion due to their build. They enjoy scent work and tracking.",
    grooming: "Weekly brushing and regular ear cleaning are essential due to their long, droopy ears. They drool moderately.",
    health: "Can be prone to back problems due to their long spine, ear infections, bloat, and obesity. Weight management is crucial.",
    training: "Can be stubborn but responds to patient, positive training. Food motivation often works well. Housetraining may take longer."
  },

  'bloodhound': {
    description: "Gentle giants with the keenest sense of smell, Bloodhounds are patient, kind, and incredibly determined trackers.",
    origin: "Belgium/France",
    lifespan: "10-12 years",
    about: "Bloodhounds have the most acute sense of smell of any dog breed and have been used for tracking for over 1,000 years. They were originally bred by monks in Belgium and France. Their tracking ability is so reliable that evidence from Bloodhound tracking is admissible in court.",
    temperament: "Bloodhounds are gentle, patient, and kind. Despite their size, they are typically good with children. They can be stubborn and single-minded when following a scent.",
    traits: ["Gentle", "Patient", "Kind", "Determined", "Stubborn", "Scent-focused", "Docile"],
    appearance: "Large dogs with a distinctive wrinkled face and extremely long ears. They have a powerful build and come in black and tan, liver and tan, or red colors.",
    careIntro: "Bloodhounds are moderate-energy dogs that need regular exercise and mental stimulation through scent work.",
    exercise: "Moderate exercise needs but they need mental stimulation through tracking and scent work. Long walks and secure areas for sniffing are ideal.",
    grooming: "Weekly brushing and regular cleaning of facial wrinkles and ears. They drool considerably.",
    health: "Can be prone to bloat, hip dysplasia, and ear infections. Their deep chest makes bloat a serious concern.",
    training: "Intelligent but can be stubborn. They respond best to patient, positive training. Recall training is challenging due to their scent drive."
  },

  // TERRIERS
  'terrier': {
    description: "Feisty, energetic, and brave, Terriers were bred to hunt vermin and are known for their spirited personalities.",
    origin: "British Isles",
    lifespan: "12-16 years",
    about: "Terriers were originally bred in the British Isles to hunt and kill vermin. The name 'terrier' comes from the Latin word 'terra,' meaning earth, as these dogs were bred to go to ground after their prey. They're known for their courage, determination, and sometimes stubborn nature.",
    temperament: "Terriers are typically feisty, energetic, and brave. They can be stubborn and independent but are also loyal and affectionate with their families. Many have strong prey drives.",
    traits: ["Feisty", "Energetic", "Brave", "Stubborn", "Independent", "Loyal", "Determined"],
    appearance: "Terriers vary greatly in size and coat type, from tiny Yorkshire Terriers to large Airedale Terriers. Most have alert expressions and sturdy builds suited to their working heritage.",
    careIntro: "Terriers are generally active dogs that need regular exercise and mental stimulation to prevent boredom and destructive behavior.",
    exercise: "Exercise needs vary by size, but most terriers need daily walks and playtime. Many enjoy digging and chasing games.",
    grooming: "Grooming needs vary greatly by coat type, from minimal for smooth coats to professional grooming for wire and silky coats.",
    health: "Generally healthy but specific health concerns vary by breed. Many are prone to luxating patella and some eye conditions.",
    training: "Can be challenging to train due to their independent nature. Consistent, positive training works best. Early socialization is important."
  },

  'airedale': {
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
  },

  // BULLDOGS AND MASTIFFS
  'bulldog': {
    description: "Calm, courageous, and friendly, Bulldogs are known for their loose-jointed, shuffling gait and massive, short-faced head.",
    origin: "England",
    lifespan: "8-10 years",
    about: "Originally bred for bull-baiting in England, Bulldogs have evolved into gentle, affectionate companions. Despite their somewhat intimidating appearance, they are known for their calm and friendly nature. The modern Bulldog is far removed from its aggressive ancestors.",
    temperament: "Bulldogs are calm, courageous, and friendly. They are excellent with children and make great family pets. They can be stubborn but are generally easy-going and adaptable to various living situations.",
    traits: ["Calm", "Courageous", "Friendly", "Gentle", "Stubborn", "Loyal", "Patient"],
    appearance: "Medium-sized dogs with a distinctive wrinkled face and pushed-in nose. They have a muscular, compact build and a characteristic rolling gait. Their coat is short and comes in various colors.",
    careIntro: "Bulldogs have specific care needs due to their flat faces and can be sensitive to heat and overexertion.",
    exercise: "Low to moderate exercise needs. Short walks and indoor play are usually sufficient. Avoid exercise in hot weather due to breathing difficulties.",
    grooming: "Regular cleaning of facial wrinkles is essential to prevent infections. Weekly brushing and regular baths as needed.",
    health: "Can have breathing problems due to their flat faces (brachycephalic syndrome). Also prone to hip dysplasia, skin conditions, and heat stroke.",
    training: "Can be stubborn but responds to patient, consistent training with positive reinforcement. Keep training sessions short and fun."
  },

  'french': {
    description: "Playful, alert, and adaptable, French Bulldogs are charming companions with distinctive 'bat ears.'",
    origin: "France (developed from English Bulldogs)",
    lifespan: "10-12 years",
    about: "French Bulldogs were developed in France by English lace workers who relocated during the Industrial Revolution. They bred smaller English Bulldogs with local ratters to create the 'Frenchie.' They became popular with Parisian society and eventually spread worldwide.",
    temperament: "French Bulldogs are playful, alert, and adaptable. They are excellent apartment dogs and are good with children and other pets. They're known for their clownish personality and love of attention.",
    traits: ["Playful", "Alert", "Adaptable", "Affectionate", "Clownish", "Sociable", "Easy-going"],
    appearance: "Small, compact dogs with distinctive large 'bat ears' and flat faces. They have muscular builds despite their small size and come in various colors including brindle, fawn, and pied.",
    careIntro: "French Bulldogs are low-maintenance in terms of exercise but need special care due to their flat faces and sensitivity to temperature extremes.",
    exercise: "Low exercise needs - short walks and indoor play. Avoid overexertion and exercise in hot weather due to breathing difficulties.",
    grooming: "Minimal grooming needs - weekly brushing and regular cleaning of facial wrinkles. They shed moderately.",
    health: "Prone to breathing problems, spinal issues, and heat stroke. Also susceptible to eye problems and allergies.",
    training: "Intelligent but can be stubborn. They respond well to positive reinforcement and short, fun training sessions."
  },

  // SPITZ BREEDS
  'husky': {
    description: "Outgoing, mischievous, and loyal, Siberian Huskies are energetic working dogs bred for sledding in harsh Arctic conditions.",
    origin: "Siberia",
    lifespan: "12-15 years",
    about: "Siberian Huskies were developed by the Chukchi people of Siberia for sledding and companionship. They were brought to Alaska during the gold rush and gained fame during the 1925 serum run to Nome. They're built for endurance and can work in extremely cold conditions.",
    temperament: "Huskies are outgoing, mischievous, and loyal. They are pack animals that get along well with other dogs but have a strong prey drive. They can be escape artists and are known for their vocalizations.",
    traits: ["Outgoing", "Mischievous", "Loyal", "Energetic", "Independent", "Vocal", "Escape artist"],
    appearance: "Medium-sized dogs with a thick double coat, erect triangular ears, and distinctive facial markings. They often have blue or multi-colored eyes and come in various colors with white markings.",
    careIntro: "Huskies are high-energy working dogs that need extensive exercise and mental stimulation, especially in cooler climates.",
    exercise: "Very high exercise needs - 2+ hours of vigorous activity daily. They excel at sledding, skijoring, and long-distance running.",
    grooming: "Regular brushing 2-3 times per week, daily during shedding seasons. They 'blow' their coat twice yearly.",
    health: "Generally healthy but can be prone to hip dysplasia, eye problems, and zinc deficiency.",
    training: "Intelligent but independent and can be stubborn. They need consistent, patient training and are not typically off-leash reliable due to their prey drive."
  },

  'akita': {
    description: "Dignified, courageous, and profoundly loyal, Akitas are powerful spitz-type dogs with a noble bearing.",
    origin: "Japan",
    lifespan: "10-13 years",
    about: "Akitas originated in Japan where they were considered symbols of good health, happiness, and long life. They were originally used for hunting wild boar, bears, and other large game. The breed nearly went extinct during World War II but was saved through dedicated breeding programs.",
    temperament: "Akitas are dignified, courageous, and profoundly loyal to their families. They can be aloof with strangers and may not get along with other dogs, especially of the same sex. They are protective and make excellent guard dogs.",
    traits: ["Dignified", "Courageous", "Loyal", "Protective", "Independent", "Aloof", "Strong-willed"],
    appearance: "Large, powerful dogs with a bear-like face and curled tail. They have a thick double coat and come in various colors. American Akitas are generally larger and come in more color variations than Japanese Akitas.",
    careIntro: "Akitas need experienced owners who can provide firm, consistent leadership and proper socialization from an early age.",
    exercise: "Moderate to high exercise needs - daily walks and playtime. They enjoy hiking and other outdoor activities in cooler weather.",
    grooming: "Regular brushing 2-3 times per week, daily during shedding seasons. They shed heavily twice yearly.",
    health: "Can be prone to hip dysplasia, bloat, thyroid problems, and progressive retinal atrophy.",
    training: "Intelligent but independent and strong-willed. They need experienced handlers and consistent, firm training. Early socialization is crucial."
  },

  'shiba': {
    description: "Alert, agile, and good-natured, Shiba Inus are compact spitz-type dogs with a spirited boldness.",
    origin: "Japan",
    lifespan: "13-16 years",
    about: "The Shiba Inu is the smallest and oldest of Japan's native breeds. They were originally bred for hunting small game in mountainous terrain. The breed nearly became extinct during World War II but was saved through careful breeding programs. They're known for their independence and cat-like cleanliness.",
    temperament: "Shibas are alert, agile, and good-natured but can be aloof and independent. They are loyal to their families but reserved with strangers. They have a strong prey drive and can be possessive of their belongings.",
    traits: ["Alert", "Agile", "Good-natured", "Independent", "Aloof", "Clean", "Spirited"],
    appearance: "Small to medium-sized dogs with a compact, well-balanced build. They have a double coat, curled tail, and fox-like face. They come in red, black and tan, or sesame colors.",
    careIntro: "Shibas are relatively low-maintenance dogs but need consistent training and socialization due to their independent nature.",
    exercise: "Moderate exercise needs - daily walks and playtime. They enjoy hiking and are agile enough for dog sports.",
    grooming: "Regular brushing 2-3 times per week, daily during shedding seasons. They are naturally clean and rarely need baths.",
    health: "Generally healthy but can be prone to hip dysplasia, luxating patella, and eye problems.",
    training: "Intelligent but independent and can be stubborn. They need patient, consistent training and early socialization. They may not be reliable off-leash."
  },

  // WORKING DOGS
  'rottweiler': {
    description: "Confident, fearless, and good-natured, Rottweilers are robust working dogs known for their loyalty and protective instincts.",
    origin: "Germany",
    lifespan: "8-10 years",
    about: "Rottweilers descended from Roman drover dogs and were later used by German butchers to drive cattle and pull carts. They nearly became extinct but were revived in the early 20th century. They're known for their strength, intelligence, and unwavering loyalty to their families.",
    temperament: "Rottweilers are confident, fearless, and good-natured with their families. They can be aloof with strangers and are naturally protective. They need early socialization and consistent training to be well-adjusted family members.",
    traits: ["Confident", "Fearless", "Good-natured", "Loyal", "Protective", "Strong", "Intelligent"],
    appearance: "Large, powerful dogs with a black coat and rust-colored markings. They have a broad head, strong jaw, and muscular build that demonstrates their working heritage.",
    careIntro: "Rottweilers are powerful dogs that need experienced owners who can provide proper training, socialization, and exercise.",
    exercise: "High exercise needs - daily walks, playtime, and mental stimulation. They enjoy activities that challenge both body and mind.",
    grooming: "Low maintenance - weekly brushing and regular baths as needed. They shed moderately year-round.",
    health: "Can be prone to hip dysplasia, elbow dysplasia, heart conditions, and bloat. Regular health screenings are important.",
    training: "Intelligent and trainable but need consistent, firm leadership. Early socialization and obedience training are essential."
  },

  'doberman': {
    description: "Loyal, fearless, and alert, Dobermans are elegant athletes and natural protectors with a noble appearance.",
    origin: "Germany",
    lifespan: "10-13 years",
    about: "Dobermans were developed in Germany by Karl Friedrich Louis Dobermann, a tax collector who wanted a protective companion. The breed was created by mixing several breeds including Rottweilers, German Pinschers, and Manchester Terriers. They became popular as guard dogs and in military service.",
    temperament: "Dobermans are loyal, fearless, and alert. They are naturally protective but should be well-socialized to be appropriate family companions. They are intelligent and form strong bonds with their families.",
    traits: ["Loyal", "Fearless", "Alert", "Protective", "Intelligent", "Athletic", "Noble"],
    appearance: "Large, elegant dogs with a sleek build and proud carriage. They typically have a black, red, blue, or fawn coat with rust markings. Ears may be cropped or natural.",
    careIntro: "Dobermans are high-energy, intelligent dogs that need experienced owners and plenty of physical and mental stimulation.",
    exercise: "High exercise needs - daily runs, long walks, and mental challenges. They excel at dog sports and protection work.",
    grooming: "Low maintenance - weekly brushing and regular baths as needed. They have a short, sleek coat.",
    health: "Can be prone to dilated cardiomyopathy, von Willebrand's disease, and bloat. Regular cardiac screenings recommended.",
    training: "Highly intelligent and trainable but need consistent, firm leadership. They respond well to positive reinforcement and clear boundaries."
  },

  'boxer': {
    description: "Fun-loving, bright, and active, Boxers are medium to large dogs known for their playful nature and boundless energy.",
    origin: "Germany",
    lifespan: "10-12 years",
    about: "Boxers were developed in Germany from the now-extinct Bullenbeisser and English Bulldogs. They were originally used for hunting large game and later became popular as working dogs. Their playful nature and loyalty have made them excellent family companions.",
    temperament: "Boxers are fun-loving, bright, and active. They maintain a puppy-like enthusiasm well into adulthood and are excellent with children. They can be protective but are generally friendly and outgoing.",
    traits: ["Fun-loving", "Bright", "Active", "Playful", "Loyal", "Protective", "Energetic"],
    appearance: "Medium to large dogs with a square build and distinctive flat face. They have a short coat in fawn or brindle colors, often with white markings. Their expression is alert and intelligent.",
    careIntro: "Boxers are high-energy dogs that need plenty of exercise and mental stimulation, especially during their extended puppyhood.",
    exercise: "High exercise needs - daily runs, long walks, and interactive play. They enjoy agility and other dog sports.",
    grooming: "Low maintenance - weekly brushing and regular baths as needed. They shed moderately.",
    health: "Can be prone to heart conditions, cancer, and bloat. They're also sensitive to heat due to their flat faces.",
    training: "Intelligent and eager to please but can be stubborn. They respond well to positive, consistent training and need early socialization."
  },

  'mastiff': {
    description: "Good-natured, courageous, and dignified, Mastiffs are massive dogs with gentle hearts and protective instincts.",
    origin: "England",
    lifespan: "6-10 years",
    about: "Mastiffs are one of the most ancient dog breeds, with ancestors dating back thousands of years. The English Mastiff was refined in England and used as a guard dog and war dog. Despite their imposing size, they're known for their gentle nature with families.",
    temperament: "Mastiffs are good-natured, courageous, and dignified. They are gentle giants that are excellent with children but can be protective when needed. They're generally calm and laid-back indoors.",
    traits: ["Good-natured", "Courageous", "Dignified", "Gentle", "Protective", "Calm", "Massive"],
    appearance: "Extremely large dogs with a massive build and broad head. They have a short coat in fawn, apricot, or brindle colors, often with a black mask.",
    careIntro: "Mastiffs are gentle giants that need proper training and socialization despite their calm nature, and special care due to their size.",
    exercise: "Moderate exercise needs - daily walks and some playtime. Avoid overexertion, especially in hot weather.",
    grooming: "Low maintenance - weekly brushing and regular cleaning of facial wrinkles. They drool considerably.",
    health: "Can be prone to hip dysplasia, bloat, heart conditions, and eye problems. Shorter lifespan due to their giant size.",
    training: "Intelligent but can be stubborn. They need gentle, consistent training and early socialization due to their size."
  },

  // SPORTING DOGS
  'pointer': {
    description: "Athletic, even-tempered, and alert, Pointers are versatile hunting dogs known for their distinctive pointing stance.",
    origin: "England",
    lifespan: "12-15 years",
    about: "Pointers were developed in England for hunting upland game birds. They're known for their ability to 'point' at game birds, freezing in a distinctive stance to indicate the location of birds to hunters. They're athletic dogs built for endurance and speed.",
    temperament: "Pointers are athletic, even-tempered, and alert. They are friendly and outgoing, making good family pets when given adequate exercise. They have strong hunting instincts and high energy levels.",
    traits: ["Athletic", "Even-tempered", "Alert", "Friendly", "Outgoing", "Energetic", "Hunting instinct"],
    appearance: "Medium to large dogs with an athletic build and short coat. They come in various color combinations including liver, lemon, black, and orange, often with white markings.",
    careIntro: "Pointers are high-energy sporting dogs that need plenty of exercise and mental stimulation to be happy and well-behaved.",
    exercise: "Very high exercise needs - daily runs, long walks, and field work. They excel at hunting, field trials, and dog sports.",
    grooming: "Low maintenance - weekly brushing and regular baths as needed. They have a short, easy-care coat.",
    health: "Generally healthy but can be prone to hip dysplasia and some eye conditions.",
    training: "Intelligent and trainable but need consistent exercise and mental stimulation. They respond well to positive reinforcement."
  },

  'setter': {
    description: "Gentle, friendly, and mellow, Setters are elegant sporting dogs known for their beautiful coats and sweet temperaments.",
    origin: "British Isles",
    lifespan: "10-12 years",
    about: "Setters were developed in the British Isles for finding and setting (crouching down near) game birds. There are several varieties including English, Irish, and Gordon Setters, each with their own characteristics but sharing the breed's gentle nature and hunting ability.",
    temperament: "Setters are gentle, friendly, and mellow. They are excellent family dogs that get along well with children and other pets. They maintain their hunting instincts but are generally calm and easy-going.",
    traits: ["Gentle", "Friendly", "Mellow", "Elegant", "Sweet", "Calm", "Hunting instinct"],
    appearance: "Medium to large dogs with elegant builds and beautiful, flowing coats. Coat colors and patterns vary by variety, but all have feathering on ears, legs, and tails.",
    careIntro: "Setters are moderate-energy sporting dogs that need regular exercise and enjoy being part of family activities.",
    exercise: "Moderate to high exercise needs - daily walks, runs, and field work. They enjoy hunting, hiking, and dog sports.",
    grooming: "High maintenance - daily brushing to prevent matting of their long coats. Professional grooming recommended.",
    health: "Generally healthy but can be prone to hip dysplasia, bloat, and some eye conditions.",
    training: "Intelligent and eager to please but can be sensitive. They respond well to gentle, positive training methods."
  },

  'spaniel': {
    description: "Gentle, smart, and eager to please, Spaniels are versatile sporting dogs known for their friendly nature and hunting ability.",
    origin: "Spain/England",
    lifespan: "12-15 years",
    about: "Spaniels originated in Spain but were refined in England for hunting and retrieving game birds. There are many varieties of spaniels, from the small Cocker Spaniel to the larger English Springer Spaniel, all sharing intelligence and eagerness to please.",
    temperament: "Spaniels are gentle, smart, and eager to please. They are excellent family dogs that are good with children and other pets. They're typically friendly and outgoing with a moderate energy level.",
    traits: ["Gentle", "Smart", "Eager to please", "Friendly", "Outgoing", "Versatile", "Moderate energy"],
    appearance: "Medium-sized dogs with sturdy builds and beautiful, often wavy coats. They have long, droopy ears and expressive eyes. Coat colors vary by variety.",
    careIntro: "Spaniels are moderate-energy dogs that need regular exercise and enjoy participating in family activities and outdoor adventures.",
    exercise: "Moderate exercise needs - daily walks, playtime, and some field work. They enjoy swimming, hiking, and dog sports.",
    grooming: "Moderate to high maintenance - regular brushing to prevent matting, especially of ear feathers. Professional grooming recommended.",
    health: "Generally healthy but can be prone to ear infections due to their long ears, hip dysplasia, and some eye conditions.",
    training: "Highly intelligent and eager to please. They respond excellently to positive reinforcement and are generally easy to train."
  },

  // TOY BREEDS
  'chihuahua': {
    description: "Charming, graceful, and sassy, Chihuahuas are the world's smallest dog breed with outsized personalities.",
    origin: "Mexico",
    lifespan: "14-18 years",
    about: "Chihuahuas are named after the Mexican state of Chihuahua and are believed to be descendants of the Techichi, a companion dog of the ancient Toltecs. Despite their tiny size, they have big personalities and are fiercely loyal to their owners.",
    temperament: "Chihuahuas are charming, graceful, and sassy. They can be bold and confident despite their small size, sometimes not realizing how tiny they are. They're devoted to their families but can be suspicious of strangers.",
    traits: ["Charming", "Graceful", "Sassy", "Bold", "Confident", "Devoted", "Alert"],
    appearance: "Very small dogs weighing 2-6 pounds with apple-shaped or deer-shaped heads. They can have smooth or long coats in various colors and patterns.",
    careIntro: "Chihuahuas need gentle handling due to their tiny size but still require proper training and socialization to prevent behavioral issues.",
    exercise: "Low exercise needs - short walks and indoor play are usually sufficient. They can get much of their exercise indoors.",
    grooming: "Smooth coats need weekly brushing; long coats need daily brushing. Regular dental care is crucial due to their small mouths.",
    health: "Can be prone to luxating patella, heart problems, eye conditions, and dental issues. Hypoglycemia can be a concern in very small individuals.",
    training: "Intelligent but can be stubborn. They need consistent, gentle training and early socialization to prevent small dog syndrome."
  },

  'pug': {
    description: "Charming, mischievous, and loving, Pugs are compact companions known for their wrinkled faces and playful personalities.",
    origin: "China",
    lifespan: "12-15 years",
    about: "Pugs originated in China around 400 BC and were bred to be companions for Chinese emperors. They were brought to Europe by Dutch traders and became popular with European royalty. Their motto is 'multum in parvo' meaning 'a lot in a little.'",
    temperament: "Pugs are charming, mischievous, and loving. They are excellent family dogs that get along well with children and other pets. They're known for their sense of humor and desire to please their owners.",
    traits: ["Charming", "Mischievous", "Loving", "Playful", "Sociable", "Even-tempered", "Adaptable"],
    appearance: "Small, compact dogs with distinctive wrinkled faces and curled tails. They have short coats in fawn or black colors and large, expressive eyes.",
    careIntro: "Pugs are adaptable companions that need moderate exercise and special care due to their flat faces and tendency to gain weight.",
    exercise: "Moderate exercise needs - daily walks and playtime. Avoid overexertion and exercise in hot weather due to breathing difficulties.",
    grooming: "Regular brushing to manage shedding and cleaning of facial wrinkles to prevent infections. They shed considerably.",
    health: "Can be prone to breathing problems, eye injuries, skin fold dermatitis, and obesity. Heat sensitivity is a major concern.",
    training: "Intelligent and eager to please but can be stubborn. They respond well to positive reinforcement and food motivation."
  },

  // NORDIC BREEDS
  'malamute': {
    description: "Affectionate, loyal, and playful, Alaskan Malamutes are powerful Arctic sled dogs built for strength and endurance.",
    origin: "Alaska",
    lifespan: "10-14 years",
    about: "Alaskan Malamutes were developed by the Mahlemut Inuit tribe of Alaska for hauling heavy freight as sled dogs. They're built for strength and endurance rather than speed, and are one of the oldest Arctic sled dog breeds.",
    temperament: "Malamutes are affectionate, loyal, and playful. They are pack animals that get along well with people but may be dominant with other dogs. They're intelligent but independent and can be stubborn.",
    traits: ["Affectionate", "Loyal", "Playful", "Strong", "Independent", "Pack-oriented", "Stubborn"],
    appearance: "Large, powerful dogs with thick double coats and plumed tails carried over their backs. They come in various colors from light gray to black, sable, and red, usually with white markings.",
    careIntro: "Malamutes are large, powerful dogs that need experienced owners and plenty of exercise, especially in cooler climates.",
    exercise: "Very high exercise needs - daily vigorous exercise including hiking, sledding, or weight pulling. They need jobs to do.",
    grooming: "High maintenance - daily brushing during shedding seasons, regular brushing otherwise. They 'blow' their coat twice yearly.",
    health: "Generally healthy but can be prone to hip dysplasia, bloat, and inherited polyneuropathy.",
    training: "Intelligent but independent and stubborn. They need consistent, patient training and are not typically reliable off-leash."
  },

  'samoyed': {
    description: "Adaptable, gentle, and friendly, Samoyeds are fluffy Arctic dogs known for their 'Sammy smile' and cheerful disposition.",
    origin: "Siberia",
    lifespan: "12-14 years",
    about: "Samoyeds were developed by the Samoyede people of Siberia for herding reindeer, hunting, and pulling sleds. They lived closely with their families and are known for their gentle, friendly nature. Their white coat helped them blend in with the snow.",
    temperament: "Samoyeds are adaptable, gentle, and friendly. They are excellent family dogs that are good with children and other pets. They're known for their 'Sammy smile' and cheerful, outgoing personality.",
    traits: ["Adaptable", "Gentle", "Friendly", "Cheerful", "Outgoing", "Social", "Alert"],
    appearance: "Medium to large dogs with thick, fluffy white coats and distinctive 'smiling' expressions. They have erect, triangular ears and plumed tails that curl over their backs.",
    careIntro: "Samoyeds are active, social dogs that need regular exercise and grooming, and do best in cooler climates.",
    exercise: "High exercise needs - daily walks, runs, and playtime. They enjoy hiking, sledding, and dog sports.",
    grooming: "Very high maintenance - daily brushing to prevent matting and manage heavy shedding. Professional grooming recommended.",
    health: "Generally healthy but can be prone to hip dysplasia, progressive retinal atrophy, and diabetes.",
    training: "Intelligent and eager to please but can be independent. They respond well to positive, consistent training."
  },

  // AFRICAN BREEDS
  'african': {
    description: "Independent, intelligent, and alert, African wild dogs are ancient canines known for their pack hunting ability and distinctive appearance.",
    origin: "Africa",
    lifespan: "10-12 years",
    about: "The African wild dog (Lycaon pictus) is one of Africa's most endangered mammals and the continent's second-largest predator. They are highly social animals that live and hunt in packs, known for their incredible stamina and cooperative hunting strategies. Despite their name, they are not domestic dogs but rather a distinct species more closely related to wolves.",
    temperament: "African wild dogs are highly social, intelligent, and cooperative. In the wild, they live in complex social structures with strong pack bonds. They are known for their endurance, teamwork, and caring behavior toward pack members.",
    traits: ["Social", "Intelligent", "Cooperative", "Endurance", "Pack-oriented", "Caring", "Athletic"],
    appearance: "African wild dogs have distinctive mottled coats with patches of brown, black, and white fur. They have large, rounded ears, lean builds, and long legs adapted for running. Each individual has a unique coat pattern.",
    careIntro: "African wild dogs are not domestic animals and require specialized care in wildlife conservation settings.",
    exercise: "In the wild, they are extremely active, capable of running long distances while hunting. They need extensive space and social interaction.",
    grooming: "In their natural habitat, they maintain their coats through natural behaviors and social grooming within the pack.",
    health: "Susceptible to diseases that affect domestic dogs. Conservation efforts focus on habitat protection and disease prevention.",
    training: "As wild animals, they are not trainable in the traditional sense but learn complex social and hunting behaviors within their packs."
  },

  // SPITZ BREEDS
  'akita': {
    description: "Dignified, courageous, and profoundly loyal, Akitas are powerful spitz-type dogs with a noble bearing.",
    origin: "Japan",
    lifespan: "10-13 years",
    about: "Akitas originated in Japan where they were considered symbols of good health, happiness, and long life. They were originally used for hunting wild boar, bears, and other large game. The breed nearly went extinct during World War II but was saved through dedicated breeding programs.",
    temperament: "Akitas are dignified, courageous, and profoundly loyal to their families. They can be aloof with strangers and may not get along with other dogs, especially of the same sex. They are protective and make excellent guard dogs.",
    traits: ["Dignified", "Courageous", "Loyal", "Protective", "Independent", "Aloof", "Strong-willed"],
    appearance: "Large, powerful dogs with a bear-like face and curled tail. They have a thick double coat and come in various colors. American Akitas are generally larger and come in more color variations than Japanese Akitas.",
    careIntro: "Akitas need experienced owners who can provide firm, consistent leadership and proper socialization from an early age.",
    exercise: "Moderate to high exercise needs - daily walks and playtime. They enjoy hiking and other outdoor activities in cooler weather.",
    grooming: "Regular brushing 2-3 times per week, daily during shedding seasons. They shed heavily twice yearly.",
    health: "Can be prone to hip dysplasia, bloat, thyroid problems, and progressive retinal atrophy.",
    training: "Intelligent but independent and strong-willed. They need experienced handlers and consistent, firm training. Early socialization is crucial."
  },

  'basenji': {
    description: "Independent, smart, and poised, Basenjis are barkless hunting dogs known for their cat-like cleanliness and independence.",
    origin: "Central Africa",
    lifespan: "12-14 years",
    about: "Basenjis are one of the most ancient dog breeds, originating in Central Africa where they were used for hunting small game. They're known as the 'barkless dog' because they don't bark in the traditional sense, instead making unique yodel-like sounds called 'baroos.'",
    temperament: "Basenjis are independent, smart, and poised. They are cat-like in their cleanliness and independence, often aloof with strangers but affectionate with their families. They can be mischievous and require mental stimulation.",
    traits: ["Independent", "Smart", "Poised", "Clean", "Aloof", "Mischievous", "Cat-like"],
    appearance: "Small to medium-sized dogs with short coats, wrinkled foreheads, and tightly curled tails. They come in red, black, tricolor, or brindle, all with white markings.",
    careIntro: "Basenjis are independent dogs that need patient owners who can appreciate their unique personality and provide adequate mental stimulation.",
    exercise: "Moderate to high exercise needs - daily walks and secure areas for running. They have strong prey drives and may chase small animals.",
    grooming: "Very low maintenance - weekly brushing and occasional baths. They groom themselves like cats.",
    health: "Generally healthy but can be prone to hip dysplasia, eye problems, and Fanconi syndrome (kidney disorder).",
    training: "Intelligent but independent and can be stubborn. They need patient, consistent training and may not be reliable off-leash due to prey drive."
  },

  'boxer': {
    description: "Fun-loving, bright, and active, Boxers are medium to large dogs known for their playful nature and boundless energy.",
    origin: "Germany",
    lifespan: "10-12 years",
    about: "Boxers were developed in Germany from the now-extinct Bullenbeisser and English Bulldogs. They were originally used for hunting large game and later became popular as working dogs. Their playful nature and loyalty have made them excellent family companions.",
    temperament: "Boxers are fun-loving, bright, and active. They maintain a puppy-like enthusiasm well into adulthood and are excellent with children. They can be protective but are generally friendly and outgoing.",
    traits: ["Fun-loving", "Bright", "Active", "Playful", "Loyal", "Protective", "Energetic"],
    appearance: "Medium to large dogs with a square build and distinctive flat face. They have a short coat in fawn or brindle colors, often with white markings. Their expression is alert and intelligent.",
    careIntro: "Boxers are high-energy dogs that need plenty of exercise and mental stimulation, especially during their extended puppyhood.",
    exercise: "High exercise needs - daily runs, long walks, and interactive play. They enjoy agility and other dog sports.",
    grooming: "Low maintenance - weekly brushing and regular baths as needed. They shed moderately.",
    health: "Can be prone to heart conditions, cancer, and bloat. They're also sensitive to heat due to their flat faces.",
    training: "Intelligent and eager to please but can be stubborn. They respond well to positive, consistent training and need early socialization."
  },

  'dalmatian': {
    description: "Dignified, smart, and outgoing, Dalmatians are distinctive spotted dogs known for their endurance and unique coat pattern.",
    origin: "Croatia (Dalmatia region)",
    lifespan: "11-13 years",
    about: "Dalmatians originated in the Dalmatia region of Croatia and have a long history as carriage dogs, running alongside horse-drawn vehicles. They became associated with firehouses because they were used to escort fire engines drawn by horses. Their distinctive spotted coat makes them instantly recognizable.",
    temperament: "Dalmatians are dignified, smart, and outgoing. They are energetic dogs that need plenty of exercise and mental stimulation. They can be reserved with strangers but are loyal to their families.",
    traits: ["Dignified", "Smart", "Outgoing", "Energetic", "Reserved", "Loyal", "Athletic"],
    appearance: "Medium-sized dogs with distinctive black or liver spots on a white coat. They have athletic builds, alert expressions, and elegant carriage.",
    careIntro: "Dalmatians are high-energy dogs that need plenty of exercise and have unique dietary requirements due to their metabolism.",
    exercise: "Very high exercise needs - daily runs, long walks, and vigorous play. They were bred for endurance and need substantial activity.",
    grooming: "Moderate maintenance - regular brushing to manage shedding. They shed year-round and heavily during seasonal changes.",
    health: "Can be prone to deafness (present at birth), urinary stones due to unique metabolism, and hip dysplasia.",
    training: "Intelligent and trainable but need consistent exercise and mental stimulation. They can be stubborn if bored or under-exercised."
  },

  // MISCELLANEOUS BREEDS
  'dalmatian': {
    description: "Dignified, smart, and outgoing, Dalmatians are distinctive spotted dogs known for their endurance and unique coat pattern.",
    origin: "Croatia (Dalmatia region)",
    lifespan: "11-13 years",
    about: "Dalmatians originated in the Dalmatia region of Croatia and have a long history as carriage dogs, running alongside horse-drawn vehicles. They became associated with firehouses because they were used to escort fire engines drawn by horses. Their distinctive spotted coat makes them instantly recognizable.",
    temperament: "Dalmatians are dignified, smart, and outgoing. They are energetic dogs that need plenty of exercise and mental stimulation. They can be reserved with strangers but are loyal to their families.",
    traits: ["Dignified", "Smart", "Outgoing", "Energetic", "Reserved", "Loyal", "Athletic"],
    appearance: "Medium-sized dogs with distinctive black or liver spots on a white coat. They have athletic builds, alert expressions, and elegant carriage.",
    careIntro: "Dalmatians are high-energy dogs that need plenty of exercise and have unique dietary requirements due to their metabolism.",
    exercise: "Very high exercise needs - daily runs, long walks, and vigorous play. They were bred for endurance and need substantial activity.",
    grooming: "Moderate maintenance - regular brushing to manage shedding. They shed year-round and heavily during seasonal changes.",
    health: "Can be prone to deafness (present at birth), urinary stones due to unique metabolism, and hip dysplasia.",
    training: "Intelligent and trainable but need consistent exercise and mental stimulation. They can be stubborn if bored or under-exercised."
  },

  'basenji': {
    description: "Independent, smart, and poised, Basenjis are barkless hunting dogs known for their cat-like cleanliness and independence.",
    origin: "Central Africa",
    lifespan: "12-14 years",
    about: "Basenjis are one of the most ancient dog breeds, originating in Central Africa where they were used for hunting small game. They're known as the 'barkless dog' because they don't bark in the traditional sense, instead making unique yodel-like sounds called 'baroos.'",
    temperament: "Basenjis are independent, smart, and poised. They are cat-like in their cleanliness and independence, often aloof with strangers but affectionate with their families. They can be mischievous and require mental stimulation.",
    traits: ["Independent", "Smart", "Poised", "Clean", "Aloof", "Mischievous", "Cat-like"],
    appearance: "Small to medium-sized dogs with short coats, wrinkled foreheads, and tightly curled tails. They come in red, black, tricolor, or brindle, all with white markings.",
    careIntro: "Basenjis are independent dogs that need patient owners who can appreciate their unique personality and provide adequate mental stimulation.",
    exercise: "Moderate to high exercise needs - daily walks and secure areas for running. They have strong prey drives and may chase small animals.",
    grooming: "Very low maintenance - weekly brushing and occasional baths. They groom themselves like cats.",
    health: "Generally healthy but can be prone to hip dysplasia, eye problems, and Fanconi syndrome (kidney disorder).",
    training: "Intelligent but independent and can be stubborn. They need patient, consistent training and may not be reliable off-leash due to prey drive."
  }
};

// Export the extended database
window.EXTENDED_BREED_DATABASE = EXTENDED_BREED_DATABASE;