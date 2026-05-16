export interface SeedMantra {
  name: string;
  deity: string;
  language: string;
  mantraText: string;
  transliteration: string;
  meaning: string;
  benefits: string;
  categories: string[];
  popularityRank: number;
}

export interface SeedPooja {
  name: string;
  deity: string;
  occasion: string;
  requiredItems: string[];
  procedure: string[];
  duration: number;
  significance: string;
  popularityRank: number;
}

export const seedMantras: SeedMantra[] = [
  {
    popularityRank: 1,
    name: "Gayatri Mantra",
    deity: "Surya / Brahman",
    language: "Sanskrit",
    mantraText: "ॐ भूर्भुवः स्वः तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि धियो यो नः प्रचोदयात्",
    transliteration:
      "Om Bhur Bhuvaḥ Svaḥ Tat Savitur Vareṇyaṃ Bhargo Devasya Dhīmahi Dhiyo Yo Naḥ Prachodayāt",
    meaning:
      "We meditate upon the divine light of the Sun (Savitri), the creator of all worlds. May that supreme light illuminate our intellect and guide us on the righteous path.",
    benefits:
      "Enhances wisdom and intellect, purifies the mind and soul, removes ignorance, bestows spiritual enlightenment, improves concentration and memory, protects from negative energies, and brings peace and prosperity.",
    categories: ["Vedic", "Daily Prayer", "Meditation", "Universal"],
  },
  {
    popularityRank: 2,
    name: "Hanuman Chalisa",
    deity: "Hanuman",
    language: "Awadhi",
    mantraText:
      "श्रीगुरु चरन सरोज रज निज मनु मुकुरु सुधारि। बरनउँ रघुबर बिमल जसु जो दायकु फल चारि॥ बुद्धिहीन तनु जानिके सुमिरौं पवन-कुमार। बल बुद्धि बिद्या देहु मोहिं हरहु कलेस बिकार॥ जय हनुमान ज्ञान गुन सागर। जय कपीस तिहुँ लोक उजागर॥",
    transliteration:
      "Shri Guru Charan Saroj Raj Nij Manu Mukuru Sudhari. Baranau Raghubar Bimal Jasu Jo Dayaku Phala Chari. Buddhihin Tanu Janike Sumirau Pavana-Kumara. Bala Buddhi Bidya Dehu Mohi Harahu Kalesa Bikara. Jai Hanumana Jnana Guna Sagara. Jai Kapisa Tihun Loka Ujagara.",
    meaning:
      "Glory to Hanuman, the ocean of wisdom and virtue, who illuminates all three worlds. I bow to the son of the Wind God, who bestows strength, wisdom, and knowledge, and removes all sorrows and afflictions.",
    benefits:
      "Removes fear and obstacles, grants courage and strength, protects from evil spirits and black magic, fulfills desires, bestows devotion to Lord Rama, removes diseases and suffering, and grants liberation.",
    categories: ["Devotional", "Protection", "Strength", "Bhakti"],
  },
  {
    popularityRank: 3,
    name: "Om Namah Shivaya",
    deity: "Shiva",
    language: "Sanskrit",
    mantraText: "ॐ नमः शिवाय",
    transliteration: "Om Namah Shivaya",
    meaning:
      "I bow to Lord Shiva, the auspicious one. This Panchakshara (five-syllable) mantra represents the five elements: earth (Na), water (Ma), fire (Shi), air (Va), and space (Ya), with Om representing the supreme consciousness.",
    benefits:
      "Purifies the soul, removes ego and attachments, grants liberation (moksha), bestows inner peace, heals physical and mental ailments, awakens kundalini energy, and connects the devotee with divine consciousness.",
    categories: ["Shaiva", "Panchakshara", "Meditation", "Liberation"],
  },
  {
    popularityRank: 4,
    name: "Mahamrityunjaya Mantra",
    deity: "Shiva",
    language: "Sanskrit",
    mantraText:
      "ॐ त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम्। उर्वारुकमिव बन्धनान् मृत्योर्मुक्षीय मामृतात्॥",
    transliteration:
      "Om Tryambakam Yajamahe Sugandhim Pushtivardhanam. Urvarukamiva Bandhanat Mrityor Mukshiya Mamritat.",
    meaning:
      "We worship the three-eyed Lord Shiva who is fragrant and nourishes all beings. May He liberate us from the bondage of death, just as a ripe cucumber is severed from its vine, and grant us immortality.",
    benefits:
      "Conquers death and serious illness, removes fear of death, grants longevity and good health, protects from accidents and calamities, bestows moksha, heals chronic diseases, and removes negative karma.",
    categories: ["Shaiva", "Healing", "Protection", "Longevity"],
  },
  {
    popularityRank: 5,
    name: "Ganesh Mantra",
    deity: "Ganesha",
    language: "Sanskrit",
    mantraText:
      "ॐ गं गणपतये नमः। वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ। निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥",
    transliteration:
      "Om Gam Ganapataye Namah. Vakratunda Mahakaya Suryakoti Samaprabha. Nirvighnam Kuru Me Deva Sarvakaryeshu Sarvada.",
    meaning:
      "I bow to Lord Ganesha, the remover of obstacles. O Lord with the curved trunk and mighty body, radiant as a million suns, please make all my endeavors free from obstacles, always.",
    benefits:
      "Removes obstacles from all endeavors, grants success in new beginnings, bestows wisdom and intelligence, ensures smooth completion of tasks, brings prosperity, and is essential before starting any auspicious work.",
    categories: ["Ganapatya", "Success", "Beginnings", "Wisdom"],
  },
  {
    popularityRank: 6,
    name: "Durga Chalisa",
    deity: "Durga",
    language: "Hindi",
    mantraText:
      "नमो नमो दुर्गे सुख करनी। नमो नमो अम्बे दुःख हरनी॥ निराकार है ज्योति तुम्हारी। तिहूँ लोक फैली उजियारी॥ शशि ललाट मुख महाविशाला। नेत्र लाल भृकुटि विकराला॥",
    transliteration:
      "Namo Namo Durge Sukha Karani. Namo Namo Ambe Dukha Harani. Nirakara Hai Jyoti Tumhari. Tihu Loka Phaili Ujiyari.",
    meaning:
      "I bow to Goddess Durga, the bestower of happiness. I bow to Mother Amba, the remover of sorrows. Your divine light is formless and illuminates all three worlds.",
    benefits:
      "Destroys evil forces, grants protection from enemies, bestows courage and strength to women, removes fear and anxiety, fulfills desires, grants victory in battles of life, and bestows divine grace.",
    categories: ["Shakta", "Protection", "Strength", "Devotional"],
  },
  {
    popularityRank: 7,
    name: "Vishnu Sahasranama",
    deity: "Vishnu",
    language: "Sanskrit",
    mantraText:
      "ॐ विश्वं विष्णुर्वषट्कारो भूतभव्यभवत्प्रभुः। भूतकृद्भूतभृद्भावो भूतात्मा भूतभावनः॥",
    transliteration:
      "Om Vishvam Vishnur Vashatkaro Bhutabhavyabhavatprabhuh. Bhutakrid Bhutabhrid Bhavo Bhutatma Bhutabhavanah.",
    meaning:
      "The thousand names of Lord Vishnu, the all-pervading supreme being who is the lord of past, present, and future, the creator and sustainer of all beings.",
    benefits:
      "Grants liberation and moksha, removes all sins, bestows wealth and prosperity, ensures protection from all evils, grants long life, fulfills all desires, and leads to spiritual enlightenment.",
    categories: ["Vaishnava", "Liberation", "Prosperity", "Devotional"],
  },
  {
    popularityRank: 8,
    name: "Lakshmi Mantra",
    deity: "Lakshmi",
    language: "Sanskrit",
    mantraText:
      "ॐ श्रीं ह्रीं श्रीं कमले कमलालये प्रसीद प्रसीद। ॐ श्रीं ह्रीं श्रीं महालक्ष्म्यै नमः॥",
    transliteration:
      "Om Shreem Hreem Shreem Kamale Kamalaalaye Prasida Prasida. Om Shreem Hreem Shreem Mahalakshmyai Namah.",
    meaning:
      "I bow to Goddess Mahalakshmi, who resides in the lotus, who is the embodiment of beauty and grace. Please bestow your blessings upon me.",
    benefits:
      "Attracts wealth and abundance, removes poverty, grants material and spiritual prosperity, bestows beauty and grace, ensures success in business, brings harmony in relationships, and fulfills all material desires.",
    categories: ["Shakta", "Prosperity", "Wealth", "Abundance"],
  },
  {
    popularityRank: 9,
    name: "Saraswati Mantra",
    deity: "Saraswati",
    language: "Sanskrit",
    mantraText:
      "ॐ ऐं सरस्वत्यै नमः। या कुन्देन्दुतुषारहारधवला या शुभ्रवस्त्रावृता। या वीणावरदण्डमण्डितकरा या श्वेतपद्मासना॥",
    transliteration:
      "Om Aim Saraswatyai Namah. Ya Kundendutushara Haradhavala Ya Shubhravastravrita. Ya Veenavara Dandamandita Kara Ya Shweta Padmasana.",
    meaning:
      "I bow to Goddess Saraswati, who is as white as the kunda flower, the moon, and snow, who is adorned in white garments, who holds the veena, and who is seated on a white lotus.",
    benefits:
      "Enhances learning and academic performance, grants eloquence in speech, bestows artistic talents, improves memory and concentration, removes ignorance, grants wisdom, and blesses students and artists.",
    categories: ["Shakta", "Education", "Arts", "Wisdom"],
  },
  {
    popularityRank: 10,
    name: "Shiva Tandava Stotram",
    deity: "Shiva",
    language: "Sanskrit",
    mantraText:
      "जटाटवीगलज्जलप्रवाहपावितस्थले गलेऽवलम्ब्य लम्बितां भुजङ्गतुङ्गमालिकाम्। डमड्डमड्डमड्डमन्निनादवड्डमर्वयं चकार चण्डताण्डवं तनोतु नः शिवः शिवम्॥",
    transliteration:
      "Jatatavigalajjala Pravahapavitasthale Gale'valambya Lambitam Bhujangalunga Malikam. Damaddamaddamaddaman Ninadavaddamarvayam Chakara Chandatandavam Tanotu Nah Shivah Shivam.",
    meaning:
      "Lord Shiva, whose neck is purified by the flowing waters from his matted locks, who wears a garland of serpents, who performed the fierce Tandava dance to the sound of his damaru drum — may He bestow auspiciousness upon us.",
    benefits:
      "Awakens divine energy, removes all obstacles, grants fearlessness, bestows cosmic consciousness, purifies the environment, removes negative karma, and connects the devotee with Shiva's cosmic dance of creation and destruction.",
    categories: ["Shaiva", "Devotional", "Energy", "Liberation"],
  },
  {
    popularityRank: 11,
    name: "Ram Raksha Stotra",
    deity: "Rama",
    language: "Sanskrit",
    mantraText:
      "ॐ नमो भगवते रामचन्द्राय। रामो राजमणिः सदा विजयते रामं रमेशं भजे। रामेणाभिहता निशाचरचमू रामाय तस्मै नमः॥",
    transliteration:
      "Om Namo Bhagavate Ramachandraya. Ramo Rajamanih Sada Vijayate Ramam Ramesham Bhaje. Ramenabhihata Nishacharachamu Ramaya Tasmai Namah.",
    meaning:
      "I bow to Lord Ramachandra. Lord Rama, the jewel among kings, is ever victorious. I worship Lord Rama, the lord of Lakshmi. Salutations to Rama who destroyed the army of demons.",
    benefits:
      "Provides divine protection, removes all fears, grants victory over enemies, bestows righteousness and dharma, protects from evil forces, ensures safety during travel, and grants peace and prosperity.",
    categories: ["Vaishnava", "Protection", "Righteousness", "Devotional"],
  },
  {
    popularityRank: 12,
    name: "Krishna Mantra",
    deity: "Krishna",
    language: "Sanskrit",
    mantraText:
      "ॐ नमो भगवते वासुदेवाय। हरे कृष्ण हरे कृष्ण कृष्ण कृष्ण हरे हरे। हरे राम हरे राम राम राम हरे हरे॥",
    transliteration:
      "Om Namo Bhagavate Vasudevaya. Hare Krishna Hare Krishna Krishna Krishna Hare Hare. Hare Rama Hare Rama Rama Rama Hare Hare.",
    meaning:
      "I bow to Lord Vasudeva (Krishna). O Lord Hari, O Krishna, O Rama — I call upon you. This Maha Mantra is the great chant for deliverance in the age of Kali.",
    benefits:
      "Purifies the heart and mind, removes material attachments, grants divine love and devotion, bestows liberation, removes sins of the current age, brings joy and bliss, and connects the soul with the Supreme.",
    categories: ["Vaishnava", "Bhakti", "Liberation", "Devotional"],
  },
  {
    popularityRank: 13,
    name: "Navagraha Mantra",
    deity: "Navagraha",
    language: "Sanskrit",
    mantraText:
      "ॐ ब्रह्मा मुरारिस्त्रिपुरान्तकारी भानुः शशी भूमिसुतो बुधश्च। गुरुश्च शुक्रः शनिराहुकेतवः सर्वे ग्रहाः शान्तिकरा भवन्तु॥",
    transliteration:
      "Om Brahma Muraris Tripurantakari Bhanuh Shashi Bhumisuto Budhashcha. Gurushcha Shukrah Shanirahukethavah Sarve Grahah Shantikarah Bhavantu.",
    meaning:
      "May all the nine planets — Sun, Moon, Mars, Mercury, Jupiter, Venus, Saturn, Rahu, and Ketu — bestow peace and auspiciousness upon us.",
    benefits:
      "Pacifies malefic planetary influences, removes doshas in horoscope, grants favorable planetary positions, removes obstacles caused by planets, bestows health and prosperity, and ensures smooth life journey.",
    categories: ["Jyotish", "Planetary", "Protection", "Vedic"],
  },
  {
    popularityRank: 14,
    name: "Devi Mahatmyam",
    deity: "Durga",
    language: "Sanskrit",
    mantraText: "या देवी सर्वभूतेषु शक्तिरूपेण संस्थिता। नमस्तस्यै नमस्तस्यै नमस्तस्यै नमो नमः॥",
    transliteration:
      "Ya Devi Sarvabhuteshu Shaktirupe Na Samsthita. Namastasyai Namastasyai Namastasyai Namo Namah.",
    meaning:
      "Salutations to the Goddess who resides in all beings in the form of power/energy. We bow to Her, we bow to Her, we bow to Her again and again.",
    benefits:
      "Awakens the divine feminine energy within, grants strength and power, removes all forms of suffering, bestows victory over adversaries, purifies the environment, and connects the devotee with the universal mother.",
    categories: ["Shakta", "Devi", "Power", "Liberation"],
  },
  {
    popularityRank: 15,
    name: "Surya Mantra",
    deity: "Surya",
    language: "Sanskrit",
    mantraText:
      "ॐ ह्रां ह्रीं ह्रौं सः सूर्याय नमः। जपाकुसुमसंकाशं काश्यपेयं महाद्युतिम्। तमोऽरिं सर्वपापघ्नं प्रणतोऽस्मि दिवाकरम्॥",
    transliteration:
      "Om Hram Hrim Hraum Sah Suryaya Namah. Japaakusuma Sankasham Kashyapeyam Mahadyutim. Tamorim Sarvapapagnam Pranato'smi Divaakaram.",
    meaning:
      "I bow to the Sun God, who is as radiant as the hibiscus flower, son of Kashyapa, of great brilliance, the enemy of darkness, destroyer of all sins.",
    benefits:
      "Improves eyesight and health, removes skin diseases, grants vitality and energy, bestows success and fame, removes depression, improves confidence, and ensures good health and longevity.",
    categories: ["Vedic", "Health", "Energy", "Daily Prayer"],
  },
  {
    popularityRank: 16,
    name: "Shani Mantra",
    deity: "Shani",
    language: "Sanskrit",
    mantraText:
      "ॐ शं शनैश्चराय नमः। नीलाञ्जनसमाभासं रविपुत्रं यमाग्रजम्। छायामार्तण्डसम्भूतं तं नमामि शनैश्चरम्॥",
    transliteration:
      "Om Sham Shanaischaraya Namah. Nilanjana Samabhasam Raviputram Yamagrajam. Chayamartanda Sambhutam Tam Namami Shanaiswaram.",
    meaning:
      "I bow to Lord Shani, who has the appearance of blue collyrium, who is the son of the Sun God, elder brother of Yama, born of Chaya and Martanda.",
    benefits:
      "Pacifies the malefic effects of Saturn, removes Sade Sati troubles, grants justice and fairness, bestows discipline and hard work, removes obstacles in career, and ensures karmic balance.",
    categories: ["Jyotish", "Planetary", "Karma", "Protection"],
  },
  {
    popularityRank: 17,
    name: "Baglamukhi Mantra",
    deity: "Baglamukhi",
    language: "Sanskrit",
    mantraText:
      "ॐ ह्लीं बगलामुखि सर्वदुष्टानां वाचं मुखं पदं स्तम्भय जिह्वां कीलय बुद्धिं विनाशय ह्लीं ॐ स्वाहा।",
    transliteration:
      "Om Hleem Baglamukhi Sarvadushtanam Vacham Mukham Padam Stambhaya Jihvam Kilaya Buddhim Vinashaya Hleem Om Swaha.",
    meaning:
      "O Goddess Baglamukhi, paralyze the speech, face, feet, and tongue of all evil-doers, destroy their intellect. This is a powerful mantra for protection against enemies.",
    benefits:
      "Provides powerful protection against enemies, stops slander and false accusations, grants victory in legal matters, paralyzes evil intentions of opponents, bestows power of speech, and ensures success in competitions.",
    categories: ["Shakta", "Protection", "Victory", "Tantra"],
  },
  {
    popularityRank: 18,
    name: "Kali Mantra",
    deity: "Kali",
    language: "Sanskrit",
    mantraText:
      "ॐ क्रीं काल्यै नमः। जय जय श्री शयामा। जय जय श्री शयामा। ॐ क्रीं क्रीं क्रीं हूं हूं ह्रीं ह्रीं दक्षिणे कालिके क्रीं क्रीं क्रीं हूं हूं ह्रीं ह्रीं स्वाहा॥",
    transliteration:
      "Om Krim Kalyai Namah. Jai Jai Shri Shyama. Om Krim Krim Krim Hum Hum Hrim Hrim Dakshine Kalike Krim Krim Krim Hum Hum Hrim Hrim Swaha.",
    meaning:
      "I bow to Goddess Kali, the dark mother, the destroyer of evil. Victory to the dark Goddess Shyama. This powerful mantra invokes the fierce form of the Divine Mother.",
    benefits:
      "Destroys deep-rooted fears and ego, removes powerful negative energies, grants fearlessness and courage, bestows liberation from the cycle of birth and death, removes black magic, and awakens spiritual power.",
    categories: ["Shakta", "Tantra", "Liberation", "Protection"],
  },
  {
    popularityRank: 19,
    name: "Subrahmanya Mantra",
    deity: "Kartikeya",
    language: "Tamil/Sanskrit",
    mantraText:
      "ॐ शरवणभव। ॐ षण्मुखाय नमः। वेलायुधाय नमः। स्कन्दाय नमः। कुमाराय नमः। शक्तिधराय नमः॥",
    transliteration:
      "Om Saravanabhava. Om Shanmukhaya Namah. Velayudhaya Namah. Skandaya Namah. Kumaraya Namah. Shaktidaraya Namah.",
    meaning:
      "Salutations to Lord Subrahmanya (Kartikeya), the six-faced one, the wielder of the Vel (spear), the son of Shiva, the eternal youth, the bearer of divine power.",
    benefits:
      "Removes obstacles and enemies, grants victory in all endeavors, bestows intelligence and valor, removes the effects of serpent curses, ensures success for youth, and grants divine grace and protection.",
    categories: ["Shaiva", "Victory", "Youth", "Protection"],
  },
  {
    popularityRank: 20,
    name: "Aditya Hridayam",
    deity: "Surya",
    language: "Sanskrit",
    mantraText:
      "ततो युद्धपरिश्रान्तं समरे चिन्तया स्थितम्। रावणं चाग्रतो दृष्ट्वा युद्धाय समुपस्थितम्॥ दैवतैश्च समागम्य द्रष्टुमभ्यागतो रणम्। उपागम्याब्रवीद्राममगस्त्यो भगवान् ऋषिः॥",
    transliteration:
      "Tato Yuddha Parishrantam Samare Chintaya Sthitam. Ravanam Chagrato Drishtva Yuddhaya Samupasthitam. Daivataischa Samagamya Drashtumabhyagato Ranam. Upagamyabravid Ramam Agastyo Bhagavan Rishih.",
    meaning:
      "When Rama was exhausted in battle and stood contemplating, seeing Ravana ready to fight, the sage Agastya came to the battlefield with the gods and spoke to Rama, teaching him the Aditya Hridayam.",
    benefits:
      "Grants victory in all battles and challenges, removes exhaustion and depression, bestows divine energy and vitality, ensures success against all odds, grants the blessings of the Sun God, and removes all sins.",
    categories: ["Vedic", "Victory", "Energy", "Vaishnava"],
  },
  {
    popularityRank: 21,
    name: "Lalita Sahasranama",
    deity: "Lalita Tripurasundari",
    language: "Sanskrit",
    mantraText:
      "ॐ ऐं ह्रीं श्रीं ललिताम्बिकायै नमः। श्री माता श्री महाराज्ञी श्रीमत्सिंहासनेश्वरी। चिदग्निकुण्डसम्भूता देवकार्यसमुद्यता॥",
    transliteration:
      "Om Aim Hrim Shrim Lalitambikayai Namah. Shri Mata Shri Maharajni Shrimatsimhasaneshwari. Chidagnikunda Sambhuta Devakaryasamudyata.",
    meaning:
      "I bow to Goddess Lalita, the beautiful one. She is the divine mother, the great queen, the empress of the golden throne, born from the fire of consciousness, engaged in divine work.",
    benefits:
      "Bestows all forms of prosperity, grants beauty and grace, fulfills all desires, removes all obstacles, bestows liberation, grants divine love, and is considered the most complete worship of the Divine Mother.",
    categories: ["Shakta", "Devi", "Prosperity", "Liberation"],
  },
  {
    popularityRank: 22,
    name: "Venkateshwara Suprabhatam",
    deity: "Venkateshwara",
    language: "Sanskrit",
    mantraText:
      "कौसल्या सुप्रजा राम पूर्वासन्ध्या प्रवर्तते। उत्तिष्ठ नरशार्दूल कर्तव्यं दैवमाह्निकम्॥ उत्तिष्ठोत्तिष्ठ गोविन्द उत्तिष्ठ गरुडध्वज। उत्तिष्ठ कमलाकान्त त्रैलोक्यं मङ्गलं कुरु॥",
    transliteration:
      "Kausalya Supraja Rama Purvasandya Pravartate. Uttishtha Narashardula Kartavyam Daivamaahnikam. Uttishthottishtha Govinda Uttishtha Garudadhvaja. Uttishtha Kamalakanta Trailokyam Mangalam Kuru.",
    meaning:
      "O Rama, son of Kausalya, the dawn is breaking. Arise, O tiger among men, to perform your daily divine duties. Arise, O Govinda, O Garudadhvaja, O beloved of Kamala — bestow auspiciousness on all three worlds.",
    benefits:
      "Brings divine blessings at dawn, ensures auspicious start to the day, removes all obstacles, grants prosperity and success, bestows the grace of Lord Venkateshwara, and ensures fulfillment of all prayers.",
    categories: ["Vaishnava", "Morning Prayer", "Prosperity", "Devotional"],
  },
];

export const seedPoojas: SeedPooja[] = [
  {
    popularityRank: 1,
    name: "Ganesh Puja",
    deity: "Ganesha",
    occasion: "Daily / New Beginnings / Festivals",
    requiredItems: [
      "Ganesha idol or image",
      "Red flowers (hibiscus preferred)",
      "Durva grass (21 blades)",
      "Modak or laddoo (21 pieces)",
      "Red cloth",
      "Incense sticks (agarbatti)",
      "Camphor (kapoor)",
      "Coconut",
      "Betel leaves and nuts",
      "Turmeric and kumkum",
      "Panchamrit (milk, curd, honey, ghee, sugar)",
      "Sandalwood paste",
      "Banana",
      "Lamp (diya) with ghee or oil",
    ],
    procedure: [
      "Purify yourself with a bath and wear clean clothes. Set up the puja space facing east or north.",
      "Place the Ganesha idol on a red cloth on a clean platform. Sprinkle Ganga jal (holy water) to purify the space.",
      "Light the lamp (diya) and incense sticks. Invoke Lord Ganesha with the mantra: 'Om Gam Ganapataye Namah'.",
      "Perform Avahana (invocation) — invite Lord Ganesha to be present in the idol.",
      "Offer Panchamrit abhishek — bathe the idol with milk, curd, honey, ghee, and sugar water, then with plain water.",
      "Apply sandalwood paste (chandan) and kumkum to the idol's forehead.",
      "Offer 21 blades of durva grass, saying 'Om Ganapataye Namah' with each offering.",
      "Offer red flowers, especially hibiscus, one by one with devotion.",
      "Offer modak or laddoo (21 pieces) as Ganesha's favorite prasad.",
      "Offer coconut, banana, and other fruits.",
      "Perform aarti with camphor, waving it in circular motions while singing Ganesh Aarti.",
      "Recite Ganesh Chalisa or Ganesh Atharvashirsha.",
      "Offer betel leaves and nuts (tambool).",
      "Perform pradakshina (circumambulation) 3 times around the idol.",
      "Conclude with Ganesh Visarjan mantra and distribute prasad to all present.",
    ],
    duration: 45,
    significance:
      "Ganesh Puja is the most universally performed puja in India, performed before any auspicious occasion, new venture, or important event. Lord Ganesha, the elephant-headed son of Shiva and Parvati, is the remover of obstacles (Vighnaharta) and the lord of beginnings. No Hindu ritual is considered complete without first invoking Ganesha's blessings.",
  },
  {
    popularityRank: 2,
    name: "Satyanarayan Puja",
    deity: "Vishnu",
    occasion: "Full Moon / Festivals / Special Occasions",
    requiredItems: [
      "Vishnu idol or Saligrama",
      "Yellow flowers",
      "Tulsi leaves",
      "Panchamrit",
      "Panchameva (5 dry fruits)",
      "Wheat flour for prasad",
      "Banana leaves",
      "Incense and camphor",
      "Yellow cloth",
      "Coconut",
      "Betel leaves and nuts",
      "Fruits and sweets",
      "Ghee lamp",
      "Kalash (copper pot) with water",
    ],
    procedure: [
      "Choose an auspicious day, preferably Purnima (full moon) or Ekadashi. Invite family and friends.",
      "Set up the puja mandap with a clean platform. Place a kalash filled with water, topped with a coconut.",
      "Place the Vishnu idol or Saligrama on yellow cloth. Decorate with flowers and tulsi.",
      "Begin with Ganesh Puja to remove obstacles.",
      "Perform Kalash Puja — worship the sacred pot as a symbol of Lord Vishnu.",
      "Invoke Lord Satyanarayan with the mantra: 'Om Namo Bhagavate Vasudevaya'.",
      "Perform Panchamrit abhishek on the idol.",
      "Offer tulsi leaves, yellow flowers, and fruits.",
      "Read or listen to the Satyanarayan Katha (story) — all five chapters.",
      "Perform aarti with camphor and ghee lamp.",
      "Prepare the prasad — sheera (semolina pudding) or panchameva mixed with banana.",
      "Distribute prasad to all present. No one should leave without receiving prasad.",
      "Conclude with prayers for the well-being of all family members.",
    ],
    duration: 120,
    significance:
      "Satyanarayan Puja is one of the most popular pujas performed across India, especially on full moon days and during important life events like housewarming, marriage, and business inaugurations. It is a vow (vrat) to Lord Vishnu in his form as Satyanarayan — the lord of truth. The puja is believed to fulfill all desires and bring prosperity.",
  },
  {
    popularityRank: 3,
    name: "Lakshmi Puja",
    deity: "Lakshmi",
    occasion: "Diwali / Friday / Prosperity Rituals",
    requiredItems: [
      "Lakshmi idol (gold or silver preferred)",
      "Lotus flowers or pink flowers",
      "Gold coins or silver coins",
      "Kumkum and turmeric",
      "Panchamrit",
      "Kheer (rice pudding)",
      "Lotus seeds",
      "Betel leaves and nuts",
      "Incense and camphor",
      "Red cloth",
      "Coconut",
      "Fruits and sweets",
      "Ghee lamp with 5 wicks",
      "Conch shell",
    ],
    procedure: [
      "Clean the house thoroughly — Goddess Lakshmi is said to reside in clean, well-maintained homes.",
      "Set up the puja space in the evening (especially on Diwali). Light diyas throughout the house.",
      "Place the Lakshmi idol on a red cloth on a raised platform. Decorate with lotus flowers.",
      "Place gold/silver coins near the idol as symbols of prosperity.",
      "Begin with Ganesh Puja.",
      "Invoke Goddess Lakshmi: 'Om Shreem Mahalakshmyai Namah'.",
      "Perform Panchamrit abhishek — bathe the idol with milk, curd, honey, ghee, and sugar.",
      "Apply kumkum and turmeric to the idol.",
      "Offer lotus flowers, pink flowers, and lotus seeds.",
      "Light the 5-wicked ghee lamp and perform aarti.",
      "Blow the conch shell to invite divine presence.",
      "Recite Lakshmi Chalisa or Shri Sukta.",
      "Offer kheer, fruits, and sweets as prasad.",
      "Keep the doors and windows open to welcome Goddess Lakshmi.",
      "Distribute prasad and conclude with prayers for prosperity.",
    ],
    duration: 60,
    significance:
      "Lakshmi Puja is performed to invoke the blessings of Goddess Lakshmi, the deity of wealth, prosperity, and fortune. The most important Lakshmi Puja is performed on Diwali night, when it is believed that Goddess Lakshmi visits homes that are clean, well-lit, and filled with devotion. Regular Friday Lakshmi Puja is also widely practiced for continuous prosperity.",
  },
  {
    popularityRank: 4,
    name: "Durga Puja",
    deity: "Durga",
    occasion: "Navratri / Durga Ashtami",
    requiredItems: [
      "Durga idol or image",
      "Red flowers (hibiscus, rose)",
      "Red cloth",
      "Kumkum and sindoor",
      "Panchamrit",
      "Coconut",
      "Betel leaves and nuts",
      "Incense and camphor",
      "Ghee lamp",
      "Fruits and sweets",
      "Banana",
      "Paan (betel leaf)",
      "Conch shell",
      "Bell",
      "Sandal paste",
    ],
    procedure: [
      "Begin on the first day of Navratri or on Durga Ashtami. Fast if possible.",
      "Set up the puja space with the Durga idol facing east. Decorate with red flowers.",
      "Light the lamp and incense. Ring the bell to announce the beginning of puja.",
      "Perform Kalash Sthapana — establish the sacred pot as the seat of the Goddess.",
      "Invoke Goddess Durga: 'Om Dum Durgayai Namah'.",
      "Perform Panchamrit abhishek.",
      "Apply kumkum and sindoor to the idol.",
      "Offer red flowers, especially hibiscus, one by one.",
      "Offer coconut, fruits, and sweets.",
      "Recite Durga Saptashati (700 verses) or Durga Chalisa.",
      "Perform aarti with camphor, waving it in circular motions.",
      "Blow the conch shell.",
      "Offer paan and betel nuts.",
      "Perform Kanya Puja on Ashtami — worship nine young girls as manifestations of the Goddess.",
      "Distribute prasad and conclude with Durga Visarjan on the final day.",
    ],
    duration: 90,
    significance:
      "Durga Puja is one of the most celebrated festivals in India, especially in West Bengal, where it is a grand 10-day celebration. Goddess Durga represents the divine feminine power (Shakti) that destroys evil and protects the righteous. The puja celebrates her victory over the buffalo demon Mahishasura, symbolizing the triumph of good over evil.",
  },
  {
    popularityRank: 5,
    name: "Shiva Puja",
    deity: "Shiva",
    occasion: "Monday / Maha Shivaratri / Daily",
    requiredItems: [
      "Shivalinga",
      "Bilva (bel) leaves (3-leaf clusters)",
      "Milk",
      "Curd",
      "Honey",
      "Ghee",
      "Sugar",
      "Water (Ganga jal preferred)",
      "White flowers (dhatura, white lotus)",
      "Bhasma (sacred ash)",
      "Rudraksha mala",
      "Incense and camphor",
      "Ghee lamp",
      "Panchamrit",
    ],
    procedure: [
      "Wake up early, preferably before sunrise. Take a bath and wear clean white or light-colored clothes.",
      "Set up the Shivalinga on a clean platform. Ensure the Shivalinga faces north.",
      "Begin with Ganesh Puja.",
      "Perform Abhishek — pour water, milk, curd, honey, ghee, and sugar over the Shivalinga while chanting 'Om Namah Shivaya'.",
      "Apply bhasma (sacred ash) to the Shivalinga.",
      "Offer bilva leaves in sets of three, representing the three eyes of Shiva.",
      "Offer white flowers — dhatura, white lotus, or white oleander.",
      "Light incense and the ghee lamp.",
      "Recite Shiva Panchakshara Stotra or Shiva Chalisa.",
      "Perform aarti with camphor.",
      "Recite Mahamrityunjaya Mantra 108 times using a rudraksha mala.",
      "Offer prasad — fruits, milk sweets, or bhang (on Shivaratri).",
      "Perform pradakshina (circumambulation) around the Shivalinga.",
      "Conclude with Shiva Visarjan mantra.",
    ],
    duration: 60,
    significance:
      "Shiva Puja is performed to seek the blessings of Lord Shiva, the destroyer and transformer in the Hindu Trinity. Monday is considered Shiva's day, and Maha Shivaratri is the most important festival dedicated to him. The Shivalinga represents the cosmic pillar of light and the union of Shiva and Shakti. Regular Shiva Puja is believed to grant liberation, health, and prosperity.",
  },
  {
    popularityRank: 6,
    name: "Navratri Puja",
    deity: "Durga / Nine Forms",
    occasion: "Navratri (twice yearly)",
    requiredItems: [
      "Nine forms of Durga images",
      "Kalash with water and mango leaves",
      "Coconut",
      "Red cloth",
      "Jau (barley seeds) for sowing",
      "Soil",
      "Incense and camphor",
      "Ghee lamp",
      "Red flowers",
      "Kumkum and sindoor",
      "Fruits and sweets",
      "Coconut",
      "Betel leaves",
    ],
    procedure: [
      "On the first day (Pratipada), perform Kalash Sthapana — establish the sacred pot and sow barley seeds.",
      "Worship Shailputri (Day 1), Brahmacharini (Day 2), Chandraghanta (Day 3).",
      "Worship Kushmanda (Day 4), Skandamata (Day 5), Katyayani (Day 6).",
      "Worship Kalaratri (Day 7), Mahagauri (Day 8), Siddhidatri (Day 9).",
      "Each day, offer specific flowers and colors associated with each form of the Goddess.",
      "Recite Durga Saptashati daily or at least on Ashtami and Navami.",
      "Perform Kanya Puja on Ashtami — worship nine young girls as the nine forms of Durga.",
      "Fast during the nine days, consuming only fruits and milk.",
      "Perform aarti twice daily — morning and evening.",
      "On the final day (Navami), perform Havan (fire ritual) if possible.",
      "Conclude with Durga Visarjan and distribution of prasad.",
    ],
    duration: 60,
    significance:
      "Navratri, meaning 'nine nights,' is one of the most important Hindu festivals celebrated twice a year — in spring (Chaitra Navratri) and autumn (Sharad Navratri). Each of the nine days is dedicated to a different form of Goddess Durga. The festival celebrates the victory of divine feminine power over evil and is observed with fasting, prayer, and devotion across India.",
  },
  {
    popularityRank: 7,
    name: "Saraswati Puja",
    deity: "Saraswati",
    occasion: "Vasant Panchami / Before Exams",
    requiredItems: [
      "Saraswati idol or image",
      "White flowers (white lotus, jasmine)",
      "White cloth",
      "Books and musical instruments",
      "Pencils and pens",
      "Panchamrit",
      "White sweets (kheer, mishri)",
      "Incense and camphor",
      "Ghee lamp",
      "Fruits",
      "Betel leaves",
      "Sandalwood paste",
      "Yellow mustard flowers",
    ],
    procedure: [
      "Set up the puja space with the Saraswati idol on a white cloth. Place books, instruments, and tools of learning nearby.",
      "Begin with Ganesh Puja.",
      "Invoke Goddess Saraswati: 'Om Aim Saraswatyai Namah'.",
      "Perform Panchamrit abhishek.",
      "Apply sandalwood paste to the idol.",
      "Offer white flowers — white lotus, jasmine, and yellow mustard flowers.",
      "Place books, pens, and instruments at the feet of the Goddess for her blessings.",
      "Recite Saraswati Vandana and Saraswati Chalisa.",
      "Perform aarti with camphor.",
      "Offer white sweets — kheer, mishri, and fruits.",
      "Students should not study on this day — books are kept at the altar.",
      "On the next day, retrieve the books after performing puja — this is called Vidyarambha.",
      "Distribute prasad to all present.",
    ],
    duration: 45,
    significance:
      "Saraswati Puja is performed to seek the blessings of Goddess Saraswati, the deity of knowledge, wisdom, arts, and learning. It is most prominently celebrated on Vasant Panchami (the fifth day of spring). Students, artists, musicians, and scholars worship Goddess Saraswati for excellence in their respective fields. In Bengal, it is one of the most important festivals.",
  },
  {
    popularityRank: 8,
    name: "Rudrabhishek",
    deity: "Shiva",
    occasion: "Maha Shivaratri / Monday / Special Occasions",
    requiredItems: [
      "Shivalinga",
      "Panchamrit (milk, curd, honey, ghee, sugar)",
      "Ganga jal",
      "Bilva leaves",
      "Bhasma (sacred ash)",
      "Rudraksha mala",
      "White flowers",
      "Dhatura flowers",
      "Incense and camphor",
      "Ghee lamp",
      "Sandalwood paste",
      "Fruits",
      "Coconut",
    ],
    procedure: [
      "Prepare the Shivalinga and puja space. Ensure the Shivalinga is placed on a proper base (Yoni Peetha).",
      "Begin with Ganesh Puja and Kalash Puja.",
      "Perform Nyasa — touch different parts of the body while reciting mantras to purify oneself.",
      "Begin the Rudrabhishek by pouring water while chanting the Namakam (first part of Sri Rudram).",
      "Pour milk over the Shivalinga while chanting 'Om Namah Shivaya'.",
      "Pour curd, honey, ghee, and sugar water in sequence.",
      "Apply bhasma (sacred ash) to the Shivalinga.",
      "Offer bilva leaves in sets of three, chanting each of the 108 names of Shiva.",
      "Offer white flowers and dhatura.",
      "Recite the Chamakam (second part of Sri Rudram) — the prayer for blessings.",
      "Perform aarti with camphor.",
      "Recite Mahamrityunjaya Mantra 108 times.",
      "Conclude with Shiva Panchakshara Stotra and distribution of prasad.",
    ],
    duration: 120,
    significance:
      "Rudrabhishek is one of the most powerful and sacred rituals in Shaivism. It involves the ceremonial bathing (abhishek) of the Shivalinga with various sacred substances while reciting the Sri Rudram — one of the most ancient Vedic hymns. The ritual is believed to purify the environment, remove negative energies, grant health and prosperity, and bestow divine grace.",
  },
  {
    popularityRank: 9,
    name: "Vishnu Puja",
    deity: "Vishnu",
    occasion: "Ekadashi / Thursday / Vaikunta Ekadashi",
    requiredItems: [
      "Vishnu idol or Saligrama",
      "Tulsi leaves",
      "Yellow flowers",
      "Yellow cloth",
      "Panchamrit",
      "Chandan (sandalwood paste)",
      "Incense and camphor",
      "Ghee lamp",
      "Fruits",
      "Coconut",
      "Betel leaves",
      "Conch shell",
      "Lotus flowers",
    ],
    procedure: [
      "Observe fast on Ekadashi (11th day of lunar fortnight). Wake up early and take a bath.",
      "Set up the puja space with Vishnu idol on yellow cloth. Decorate with tulsi and yellow flowers.",
      "Begin with Ganesh Puja.",
      "Invoke Lord Vishnu: 'Om Namo Bhagavate Vasudevaya'.",
      "Perform Panchamrit abhishek.",
      "Apply sandalwood paste to the idol.",
      "Offer tulsi leaves — Vishnu is especially pleased with tulsi.",
      "Offer yellow flowers and lotus flowers.",
      "Blow the conch shell.",
      "Recite Vishnu Sahasranama (1000 names of Vishnu).",
      "Perform aarti with camphor.",
      "Offer fruits and sweets as prasad.",
      "Break the fast only on Dwadashi (12th day) after performing puja.",
      "Distribute prasad and conclude with prayers.",
    ],
    duration: 60,
    significance:
      "Vishnu Puja is performed to seek the blessings of Lord Vishnu, the preserver and protector in the Hindu Trinity. Ekadashi (the 11th day of each lunar fortnight) is the most auspicious day for Vishnu worship. Regular Vishnu Puja is believed to grant liberation, remove sins, bestow prosperity, and ensure protection from all evils.",
  },
  {
    popularityRank: 10,
    name: "Kali Puja",
    deity: "Kali",
    occasion: "Kali Puja / Diwali / Amavasya",
    requiredItems: [
      "Kali idol or image",
      "Red hibiscus flowers",
      "Red cloth",
      "Sindoor",
      "Incense and camphor",
      "Ghee lamp",
      "Coconut",
      "Fruits",
      "Sweets",
      "Betel leaves and nuts",
      "Conch shell",
      "Bell",
      "Bhasma",
    ],
    procedure: [
      "Kali Puja is performed at night, especially on Amavasya (new moon night).",
      "Set up the puja space with the Kali idol. Decorate with red hibiscus flowers.",
      "Light the lamp and incense. Ring the bell.",
      "Begin with Ganesh Puja.",
      "Invoke Goddess Kali: 'Om Krim Kalyai Namah'.",
      "Offer red hibiscus flowers — Kali's favorite.",
      "Apply sindoor to the idol.",
      "Offer coconut as a symbolic sacrifice.",
      "Recite Kali Chalisa or Mahakali Stotra.",
      "Perform aarti with camphor.",
      "Blow the conch shell.",
      "Offer sweets and fruits as prasad.",
      "Recite Kali Kavach for protection.",
      "Conclude with prayers for protection and liberation.",
    ],
    duration: 90,
    significance:
      "Kali Puja is performed to worship Goddess Kali, the fierce form of the Divine Mother who destroys evil and grants liberation. It is especially popular in Bengal, Odisha, and Assam, where it is celebrated on the same night as Diwali. Goddess Kali represents the power of time and transformation, and her worship is believed to destroy deep-rooted fears and grant fearlessness.",
  },
  {
    popularityRank: 11,
    name: "Hanuman Puja",
    deity: "Hanuman",
    occasion: "Tuesday / Saturday / Hanuman Jayanti",
    requiredItems: [
      "Hanuman idol or image",
      "Red flowers",
      "Sindoor",
      "Jasmine oil",
      "Panchamrit",
      "Incense and camphor",
      "Ghee lamp",
      "Coconut",
      "Banana",
      "Besan laddoo",
      "Betel leaves",
      "Red cloth",
    ],
    procedure: [
      "Tuesday and Saturday are the most auspicious days for Hanuman Puja.",
      "Set up the puja space with the Hanuman idol on red cloth.",
      "Begin with Ganesh Puja.",
      "Invoke Lord Hanuman: 'Om Hanumate Namah'.",
      "Apply sindoor mixed with jasmine oil to the idol — Hanuman is especially pleased with sindoor.",
      "Offer red flowers.",
      "Perform Panchamrit abhishek.",
      "Offer banana and besan laddoo — Hanuman's favorite foods.",
      "Recite Hanuman Chalisa 11 times or 108 times.",
      "Perform aarti with camphor.",
      "Offer coconut and betel leaves.",
      "Recite Bajrang Baan for protection.",
      "Distribute prasad — especially laddoo and banana.",
      "Conclude with prayers for strength and protection.",
    ],
    duration: 45,
    significance:
      "Hanuman Puja is performed to seek the blessings of Lord Hanuman, the devoted servant of Lord Rama and the embodiment of strength, courage, and devotion. Tuesday and Saturday are considered especially auspicious for Hanuman worship. The puja is believed to remove all obstacles, grant protection from evil spirits, bestow courage, and fulfill all desires.",
  },
  {
    popularityRank: 12,
    name: "Surya Puja",
    deity: "Surya",
    occasion: "Sunday / Makar Sankranti / Chhath Puja",
    requiredItems: [
      "Surya image or idol",
      "Red flowers",
      "Red cloth",
      "Copper vessel with water",
      "Red sandalwood",
      "Wheat",
      "Jaggery",
      "Incense and camphor",
      "Ghee lamp",
      "Fruits",
      "Coconut",
    ],
    procedure: [
      "Wake up before sunrise. Take a bath and wear clean red or orange clothes.",
      "Stand facing east, towards the rising sun.",
      "Offer Arghya — pour water from a copper vessel towards the sun while reciting Surya mantras.",
      "Recite Aditya Hridayam or Surya Ashtakam.",
      "Set up the puja space with the Surya image.",
      "Offer red flowers and red sandalwood.",
      "Light incense and the ghee lamp.",
      "Offer wheat, jaggery, and fruits.",
      "Perform aarti.",
      "Recite Surya Sahasranama or Gayatri Mantra 108 times.",
      "Perform Surya Namaskar (12 rounds of sun salutation).",
      "Conclude with prayers for health and vitality.",
    ],
    duration: 30,
    significance:
      "Surya Puja is performed to worship the Sun God, the source of all life and energy. Sunday is the most auspicious day for Surya worship. The puja is especially important during Makar Sankranti and Chhath Puja. Regular Surya Puja is believed to improve health, eyesight, and vitality, remove skin diseases, grant success and fame, and bestow divine blessings.",
  },
  {
    popularityRank: 13,
    name: "Vastu Puja",
    deity: "Vastu Purusha",
    occasion: "Housewarming / New Construction",
    requiredItems: [
      "Vastu Purusha image",
      "Navagraha images",
      "Panchamrit",
      "Flowers",
      "Incense and camphor",
      "Ghee lamp",
      "Coconut",
      "Fruits and sweets",
      "Havan samagri",
      "Mango wood for havan",
      "Ghee",
      "Sesame seeds",
      "Betel leaves",
    ],
    procedure: [
      "Choose an auspicious muhurta (time) for the Vastu Puja, preferably in the morning.",
      "Clean the entire house or construction site thoroughly.",
      "Set up the puja space in the northeast corner (Ishanya) of the house.",
      "Begin with Ganesh Puja.",
      "Perform Navagraha Puja — worship all nine planets.",
      "Invoke Vastu Purusha: 'Om Vastupurushaya Namah'.",
      "Perform Panchamrit abhishek.",
      "Offer flowers and incense.",
      "Perform Havan (fire ritual) with mango wood, ghee, and havan samagri.",
      "Offer sesame seeds and ghee into the fire while reciting Vastu mantras.",
      "Perform aarti.",
      "Walk through all rooms of the house, sprinkling Ganga jal.",
      "Distribute prasad to all present.",
      "Conclude with prayers for peace, prosperity, and protection of the household.",
    ],
    duration: 120,
    significance:
      "Vastu Puja is performed before moving into a new home or after construction to seek the blessings of Vastu Purusha, the deity of the built environment. It is believed to harmonize the energies of the space, remove Vastu doshas (defects), ensure peace and prosperity for the inhabitants, and protect the household from negative influences.",
  },
  {
    popularityRank: 14,
    name: "Navagraha Puja",
    deity: "Navagraha",
    occasion: "Planetary Doshas / Special Occasions",
    requiredItems: [
      "Nine planetary images or yantras",
      "Nine types of grains",
      "Nine types of flowers",
      "Nine types of incense",
      "Ghee lamp",
      "Panchamrit",
      "Coconut",
      "Fruits",
      "Colored cloths for each planet",
      "Havan samagri",
    ],
    procedure: [
      "Set up nine separate spaces for each of the nine planets.",
      "Begin with Ganesh Puja.",
      "Worship each planet in order: Sun, Moon, Mars, Mercury, Jupiter, Venus, Saturn, Rahu, Ketu.",
      "Offer specific items to each planet: wheat to Sun, rice to Moon, red lentils to Mars, green gram to Mercury, chickpeas to Jupiter, white beans to Venus, sesame to Saturn, black sesame to Rahu and Ketu.",
      "Recite the specific mantra for each planet 108 times.",
      "Perform Panchamrit abhishek for each planetary deity.",
      "Offer specific flowers for each planet.",
      "Perform Havan with specific herbs for each planet.",
      "Perform aarti for all nine planets together.",
      "Donate items associated with each planet to the needy.",
      "Conclude with Navagraha Stotra and distribution of prasad.",
    ],
    duration: 180,
    significance:
      "Navagraha Puja is performed to pacify the nine planets and seek their favorable influences. In Vedic astrology, the nine planets (Navagraha) govern different aspects of human life. Malefic planetary positions can cause various problems, and this puja is performed to mitigate their negative effects and enhance the positive influences of benefic planets.",
  },
  {
    popularityRank: 15,
    name: "Griha Pravesh Puja",
    deity: "Vastu Purusha / Ganesha / Lakshmi",
    occasion: "Housewarming",
    requiredItems: [
      "Ganesha and Lakshmi idols",
      "Kalash with water and mango leaves",
      "Coconut",
      "Flowers",
      "Incense and camphor",
      "Ghee lamp",
      "Panchamrit",
      "Fruits and sweets",
      "Rice",
      "Turmeric and kumkum",
      "Mango leaves for door decoration",
      "Rangoli materials",
    ],
    procedure: [
      "Choose an auspicious muhurta for the Griha Pravesh ceremony.",
      "Decorate the entrance with mango leaves and rangoli.",
      "The lady of the house should enter first, carrying a Kalash filled with water.",
      "Boil milk in the new kitchen until it overflows — this symbolizes abundance.",
      "Perform Ganesh Puja at the entrance.",
      "Perform Vastu Puja in the northeast corner.",
      "Invoke Goddess Lakshmi: 'Om Shreem Mahalakshmyai Namah'.",
      "Perform Panchamrit abhishek for Ganesha and Lakshmi.",
      "Offer flowers, fruits, and sweets.",
      "Perform aarti.",
      "Walk through all rooms, sprinkling Ganga jal and reciting mantras.",
      "Light diyas in all rooms.",
      "Distribute prasad to all guests.",
      "Conclude with prayers for peace, prosperity, and happiness in the new home.",
    ],
    duration: 90,
    significance:
      "Griha Pravesh Puja is the sacred housewarming ceremony performed when moving into a new home. It is one of the most important samskaras (life rituals) in Hindu tradition. The ceremony seeks the blessings of Lord Ganesha, Goddess Lakshmi, and Vastu Purusha to ensure that the new home is filled with peace, prosperity, and divine protection.",
  },
];
