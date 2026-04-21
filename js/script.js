// â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
//  Ethnologue 29th Edition (2026) - Top 150 languages by L1 native speakers
//  Source: Ethnologue.com (2026 public rankings, marking 75 years of SIL data)
// â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
const ETHNOLOGUE_TOP150 = [
  { "rank": 1, "name": "Mandarin Chinese", "iso": "cmn", "speakers": 941000000, "family": "Sino-Tibetan", "branch": "Sinitic" },
  { "rank": 2, "name": "Spanish", "iso": "spa", "speakers": 490000000, "family": "Indo-European", "branch": "Romance" },
  { "rank": 3, "name": "English", "iso": "eng", "speakers": 381000000, "family": "Indo-European", "branch": "Germanic" },
  { "rank": 4, "name": "Hindi", "iso": "hin", "speakers": 350000000, "family": "Indo-European", "branch": "Indo-Aryan" },
  { "rank": 5, "name": "Portuguese", "iso": "por", "speakers": 238000000, "family": "Indo-European", "branch": "Romance" },
  { "rank": 6, "name": "Bengali", "iso": "ben", "speakers": 236000000, "family": "Indo-European", "branch": "Indo-Aryan" },
  { "rank": 7, "name": "Russian", "iso": "rus", "speakers": 149000000, "family": "Indo-European", "branch": "Balto-Slavic" },
  { "rank": 8, "name": "Japanese", "iso": "jpn", "speakers": 124000000, "family": "Japonic", "branch": "" },
  { "rank": 9, "name": "Western Punjabi", "iso": "pnb", "speakers": 93000000, "family": "Indo-European", "branch": "Indo-Aryan" },
  { "rank": 10, "name": "Yue Chinese", "iso": "yue", "speakers": 86000000, "family": "Sino-Tibetan", "branch": "Sinitic" },
  { "rank": 11, "name": "Vietnamese", "iso": "vie", "speakers": 86000000, "family": "Austroasiatic", "branch": "Vietic" },
  { "rank": 12, "name": "Turkish", "iso": "tur", "speakers": 85000000, "family": "Turkic", "branch": "Oghuz" },
  { "rank": 13, "name": "Marathi", "iso": "mar", "speakers": 84000000, "family": "Indo-European", "branch": "Indo-Aryan" },
  { "rank": 14, "name": "Telugu", "iso": "tel", "speakers": 84000000, "family": "Dravidian", "branch": "South-Central" },
  { "rank": 15, "name": "Korean", "iso": "kor", "speakers": 82000000, "family": "Koreanic", "branch": "" },
  { "rank": 16, "name": "Wu Chinese", "iso": "wuu", "speakers": 82000000, "family": "Sino-Tibetan", "branch": "Sinitic" },
  { "rank": 17, "name": "French", "iso": "fra", "speakers": 81000000, "family": "Indo-European", "branch": "Romance" },
  { "rank": 18, "name": "Rajasthani", "iso": "raj", "speakers": 81000000, "family": "Indo-European", "branch": "Indo-Aryan" },
  { "rank": 19, "name": "Tamil", "iso": "tam", "speakers": 79000000, "family": "Dravidian", "branch": "South" },
  { "rank": 20, "name": "Egyptian Arabic", "iso": "arz", "speakers": 78000000, "family": "Afro-Asiatic", "branch": "Semitic" },
  { "rank": 21, "name": "Standard German", "iso": "deu", "speakers": 77000000, "family": "Indo-European", "branch": "Germanic" },
  { "rank": 22, "name": "Urdu", "iso": "urd", "speakers": 71000000, "family": "Indo-European", "branch": "Indo-Aryan" },
  { "rank": 23, "name": "Javanese", "iso": "jav", "speakers": 69000000, "family": "Austronesian", "branch": "Malayo-Polynesian" },
  { "rank": 24, "name": "Western Persian", "iso": "pes", "speakers": 66000000, "family": "Indo-European", "branch": "Iranian" },
  { "rank": 25, "name": "Italian", "iso": "ita", "speakers": 64000000, "family": "Indo-European", "branch": "Romance" },
  { "rank": 26, "name": "Gujarati", "iso": "guj", "speakers": 58000000, "family": "Indo-European", "branch": "Indo-Aryan" },
  { "rank": 27, "name": "Hausa", "iso": "hau", "speakers": 54000000, "family": "Afro-Asiatic", "branch": "Chadic" },
  { "rank": 28, "name": "Bhojpuri", "iso": "bho", "speakers": 53000000, "family": "Indo-European", "branch": "Indo-Aryan" },
  { "rank": 29, "name": "Eastern Punjabi", "iso": "pan", "speakers": 52000000, "family": "Indo-European", "branch": "Indo-Aryan" },
  { "rank": 30, "name": "Min Nan Chinese", "iso": "nan", "speakers": 50000000, "family": "Sino-Tibetan", "branch": "Sinitic" },
  { "rank": 31, "name": "Thai", "iso": "tha", "speakers": 48000000, "family": "Kra-Dai", "branch": "Tai" },
  { "rank": 32, "name": "Tagalog", "iso": "tgl", "speakers": 46000000, "family": "Austronesian", "branch": "Malayo-Polynesian" },
  { "rank": 33, "name": "Northern Pashto", "iso": "pbu", "speakers": 46000000, "family": "Indo-European", "branch": "Iranian" },
  { "rank": 34, "name": "Polish", "iso": "pol", "speakers": 46000000, "family": "Indo-European", "branch": "Balto-Slavic" },
  { "rank": 35, "name": "Kannada", "iso": "kan", "speakers": 45000000, "family": "Dravidian", "branch": "South" },
  { "rank": 36, "name": "Indonesian", "iso": "ind", "speakers": 44500000, "family": "Austronesian", "branch": "Malayo-Polynesian" },
  { "rank": 37, "name": "Hakka Chinese", "iso": "hak", "speakers": 44000000, "family": "Sino-Tibetan", "branch": "Sinitic" },
  { "rank": 38, "name": "Yoruba", "iso": "yor", "speakers": 44000000, "family": "Niger-Congo", "branch": "Atlantic-Congo" },
  { "rank": 39, "name": "Xiang Chinese", "iso": "hsn", "speakers": 39000000, "family": "Sino-Tibetan", "branch": "Sinitic" },
  { "rank": 40, "name": "West Central Oromo", "iso": "gaz", "speakers": 38000000, "family": "Afro-Asiatic", "branch": "Cushitic" },
  { "rank": 41, "name": "Malayalam", "iso": "mal", "speakers": 37500000, "family": "Dravidian", "branch": "South" },
  { "rank": 42, "name": "Odia", "iso": "ory", "speakers": 38000000, "family": "Indo-European", "branch": "Indo-Aryan" },
  { "rank": 43, "name": "Oriya / Odia", "iso": "ori", "speakers": 38000000, "family": "Indo-European", "branch": "Indo-Aryan" },
  { "rank": 44, "name": "Maithili", "iso": "mai", "speakers": 35000000, "family": "Indo-European", "branch": "Indo-Aryan" },
  { "rank": 45, "name": "Ukrainian", "iso": "ukr", "speakers": 34000000, "family": "Indo-European", "branch": "Balto-Slavic" },
  { "rank": 46, "name": "Burmese", "iso": "mya", "speakers": 34000000, "family": "Sino-Tibetan", "branch": "Tibeto-Burman" },
  { "rank": 47, "name": "Sundanese", "iso": "sun", "speakers": 33000000, "family": "Austronesian", "branch": "Malayo-Polynesian" },
  { "rank": 48, "name": "Algerian Arabic", "iso": "arq", "speakers": 30000000, "family": "Afro-Asiatic", "branch": "Semitic" },
  { "rank": 49, "name": "Cebuano", "iso": "ceb", "speakers": 28000000, "family": "Austronesian", "branch": "Malayo-Polynesian" },
  { "rank": 50, "name": "Igbo", "iso": "ibo", "speakers": 28000000, "family": "Niger-Congo", "branch": "Atlantic-Congo" },
  { "rank": 51, "name": "Uzbek", "iso": "uzb", "speakers": 27000000, "family": "Turkic", "branch": "Karluk" },
  { "rank": 52, "name": "Sindhi", "iso": "snd", "speakers": 26000000, "family": "Indo-European", "branch": "Indo-Aryan" },
  { "rank": 53, "name": "Dutch", "iso": "nld", "speakers": 25000000, "family": "Indo-European", "branch": "Germanic" },
  { "rank": 54, "name": "Azerbaijani", "iso": "aze", "speakers": 24300000, "family": "Turkic", "branch": "Oghuz" },
  { "rank": 55, "name": "Romanian", "iso": "ron", "speakers": 23800000, "family": "Indo-European", "branch": "Romance" },
  { "rank": 56, "name": "Gan Chinese", "iso": "gan", "speakers": 22000000, "family": "Sino-Tibetan", "branch": "Sinitic" },
  { "rank": 57, "name": "Amharic", "iso": "amh", "speakers": 21800000, "family": "Afro-Asiatic", "branch": "Semitic" },
  { "rank": 58, "name": "Somali", "iso": "som", "speakers": 21800000, "family": "Afro-Asiatic", "branch": "Cushitic" },
  { "rank": 59, "name": "Sinhala", "iso": "sin", "speakers": 19000000, "family": "Indo-European", "branch": "Indo-Aryan" },
  { "rank": 60, "name": "Malagasy", "iso": "plt", "speakers": 18700000, "family": "Austronesian", "branch": "Malayo-Polynesian" },
  { "rank": 61, "name": "Nepali", "iso": "npi", "speakers": 17000000, "family": "Indo-European", "branch": "Indo-Aryan" },
  { "rank": 62, "name": "Zhuang", "iso": "zha", "speakers": 16900000, "family": "Kra-Dai", "branch": "Tai" },
  { "rank": 63, "name": "Khmer", "iso": "khm", "speakers": 16000000, "family": "Austroasiatic", "branch": "Khmeric" },
  { "rank": 64, "name": "Swahili", "iso": "swh", "speakers": 16000000, "family": "Niger-Congo", "branch": "Bantu" },
  { "rank": 65, "name": "Sylheti", "iso": "syl", "speakers": 16000000, "family": "Indo-European", "branch": "Indo-Aryan" },
  { "rank": 66, "name": "Assamese", "iso": "asm", "speakers": 15300000, "family": "Indo-European", "branch": "Indo-Aryan" },
  { "rank": 67, "name": "Shona", "iso": "sna", "speakers": 14800000, "family": "Niger-Congo", "branch": "Bantu" },
  { "rank": 68, "name": "Noakhailla", "iso": "oak", "speakers": 14000000, "family": "Indo-European", "branch": "Indo-Aryan" },
  { "rank": 69, "name": "Kinyarwanda", "iso": "kin", "speakers": 14000000, "family": "Niger-Congo", "branch": "Bantu" },
  { "rank": 70, "name": "Kazakh", "iso": "kaz", "speakers": 13400000, "family": "Turkic", "branch": "Kipchak" },
  { "rank": 71, "name": "South Azerbaijani", "iso": "azb", "speakers": 13000000, "family": "Turkic", "branch": "Oghuz" },
  { "rank": 72, "name": "Hungarian", "iso": "hun", "speakers": 12600000, "family": "Uralic", "branch": "Ugric" },
  { "rank": 73, "name": "Zulu", "iso": "zul", "speakers": 12100000, "family": "Niger-Congo", "branch": "Bantu" },
  { "rank": 74, "name": "Haitian Creole", "iso": "hat", "speakers": 12000000, "family": "Creole", "branch": "French-based" },
  { "rank": 75, "name": "Chittagonian", "iso": "ctg", "speakers": 11500000, "family": "Indo-European", "branch": "Indo-Aryan" },
  { "rank": 76, "name": "Greek", "iso": "ell", "speakers": 11300000, "family": "Indo-European", "branch": "Hellenic" },
  { "rank": 77, "name": "Uyghur", "iso": "uig", "speakers": 11000000, "family": "Turkic", "branch": "Karluk" },
  { "rank": 78, "name": "Uighur", "iso": "uig", "speakers": 11000000, "family": "Turkic", "branch": "Karluk" },
  { "rank": 79, "name": "Czech", "iso": "ces", "speakers": 10700000, "family": "Indo-European", "branch": "Balto-Slavic" },
  { "rank": 80, "name": "Swedish", "iso": "swe", "speakers": 10200000, "family": "Indo-European", "branch": "Germanic" },
  { "rank": 81, "name": "Serbian", "iso": "srp", "speakers": 10000000, "family": "Indo-European", "branch": "Balto-Slavic" },
  { "rank": 82, "name": "Quechua", "iso": "que", "speakers": 10000000, "family": "Quechuan", "branch": "" },
  { "rank": 83, "name": "Tigrinya", "iso": "tir", "speakers": 9900000, "family": "Afro-Asiatic", "branch": "Semitic" },
  { "rank": 84, "name": "Hebrew", "iso": "heb", "speakers": 9400000, "family": "Afro-Asiatic", "branch": "Semitic" },
  { "rank": 85, "name": "Hiligaynon", "iso": "hil", "speakers": 9300000, "family": "Austronesian", "branch": "Malayo-Polynesian" },
  { "rank": 86, "name": "Miao/Hmong", "iso": "hmn", "speakers": 9000000, "family": "Hmong-Mien", "branch": "" },
  { "rank": 87, "name": "Kurmanji Kurdish", "iso": "kmr", "speakers": 9000000, "family": "Indo-European", "branch": "Iranian" },
  { "rank": 88, "name": "Tajik", "iso": "tgk", "speakers": 8500000, "family": "Indo-European", "branch": "Iranian" },
  { "rank": 89, "name": "Xhosa", "iso": "xho", "speakers": 8200000, "family": "Niger-Congo", "branch": "Bantu" },
  { "rank": 90, "name": "Bambara", "iso": "bam", "speakers": 8000000, "family": "Niger-Congo", "branch": "Mande" },
  { "rank": 91, "name": "Kurdish (Sorani)", "iso": "ckb", "speakers": 8000000, "family": "Indo-European", "branch": "Iranian" },
  { "rank": 92, "name": "Tujia", "iso": "tjs", "speakers": 8000000, "family": "Sino-Tibetan", "branch": "Tibeto-Burman" },
  { "rank": 93, "name": "Santali", "iso": "sat", "speakers": 7600000, "family": "Austroasiatic", "branch": "Munda" },
  { "rank": 94, "name": "Albanian", "iso": "sqi", "speakers": 7500000, "family": "Indo-European", "branch": "Albanian" },
  { "rank": 95, "name": "Bulgarian", "iso": "bul", "speakers": 7500000, "family": "Indo-European", "branch": "Balto-Slavic" },
  { "rank": 96, "name": "Afrikaans", "iso": "afr", "speakers": 7100000, "family": "Indo-European", "branch": "Germanic" },
  { "rank": 97, "name": "Kashmiri", "iso": "kas", "speakers": 7100000, "family": "Indo-European", "branch": "Indo-Aryan" },
  { "rank": 98, "name": "Madurese", "iso": "mad", "speakers": 7000000, "family": "Austronesian", "branch": "Malayo-Polynesian" },
  { "rank": 99, "name": "Croatian", "iso": "hrv", "speakers": 7000000, "family": "Indo-European", "branch": "Balto-Slavic" },
  { "rank": 100, "name": "Belarusian", "iso": "bel", "speakers": 6700000, "family": "Indo-European", "branch": "Balto-Slavic" },
  { "rank": 101, "name": "Turkmen", "iso": "tuk", "speakers": 6700000, "family": "Turkic", "branch": "Oghuz" },
  { "rank": 102, "name": "Armenian", "iso": "hye", "speakers": 6700000, "family": "Indo-European", "branch": "Armenian" },
  { "rank": 103, "name": "Lingala", "iso": "lin", "speakers": 6600000, "family": "Niger-Congo", "branch": "Bantu" },
  { "rank": 104, "name": "GuaranÃ­", "iso": "gug", "speakers": 6500000, "family": "Tupian", "branch": "" },
  { "rank": 105, "name": "Tibetan", "iso": "bod", "speakers": 6200000, "family": "Sino-Tibetan", "branch": "Tibeto-Burman" },
  { "rank": 106, "name": "Tswana", "iso": "tsn", "speakers": 5800000, "family": "Niger-Congo", "branch": "Bantu" },
  { "rank": 107, "name": "Wolof", "iso": "wol", "speakers": 5700000, "family": "Niger-Congo", "branch": "Atlantic" },
  { "rank": 108, "name": "Halh Mongolian", "iso": "khk", "speakers": 5700000, "family": "Mongolic", "branch": "Central" },
  { "rank": 109, "name": "Slovak", "iso": "slk", "speakers": 5600000, "family": "Indo-European", "branch": "Balto-Slavic" },
  { "rank": 110, "name": "Danish", "iso": "dan", "speakers": 5500000, "family": "Indo-European", "branch": "Germanic" },
  { "rank": 111, "name": "Minangkabau", "iso": "min", "speakers": 5500000, "family": "Austronesian", "branch": "Malayo-Polynesian" },
  { "rank": 112, "name": "Finnish", "iso": "fin", "speakers": 4900000, "family": "Uralic", "branch": "Finnic" },
  { "rank": 113, "name": "Norwegian BokmÃ¥l", "iso": "nob", "speakers": 4600000, "family": "Indo-European", "branch": "Germanic" },
  { "rank": 114, "name": "Northern Sotho", "iso": "nso", "speakers": 4600000, "family": "Niger-Congo", "branch": "Bantu" },
  { "rank": 115, "name": "Kyrgyz", "iso": "kir", "speakers": 4500000, "family": "Turkic", "branch": "Kipchak" },
  { "rank": 116, "name": "Lao", "iso": "lao", "speakers": 4300000, "family": "Kra-Dai", "branch": "Tai" },
  { "rank": 117, "name": "Kongo", "iso": "kon", "speakers": 4300000, "family": "Niger-Congo", "branch": "Bantu" },
  { "rank": 118, "name": "Catalan", "iso": "cat", "speakers": 4100000, "family": "Indo-European", "branch": "Romance" },
  { "rank": 119, "name": "Southern Sotho", "iso": "sot", "speakers": 4100000, "family": "Niger-Congo", "branch": "Bantu" },
  { "rank": 120, "name": "Fula", "iso": "fuf", "speakers": 4000000, "family": "Niger-Congo", "branch": "Atlantic" },
  { "rank": 121, "name": "Georgian", "iso": "kat", "speakers": 3600000, "family": "Kartvelian", "branch": "" },
  { "rank": 122, "name": "Lombard", "iso": "lmo", "speakers": 3500000, "family": "Indo-European", "branch": "Romance" },
  { "rank": 123, "name": "Balochi", "iso": "bal", "speakers": 3500000, "family": "Indo-European", "branch": "Iranian" },
  { "rank": 124, "name": "Shan", "iso": "shn", "speakers": 3300000, "family": "Kra-Dai", "branch": "Tai" },
  { "rank": 125, "name": "Swati", "iso": "ssw", "speakers": 3100000, "family": "Niger-Congo", "branch": "Bantu" },
  { "rank": 126, "name": "Lithuanian", "iso": "lit", "speakers": 3000000, "family": "Indo-European", "branch": "Baltic" },
  { "rank": 127, "name": "Chichewa", "iso": "nya", "speakers": 2900000, "family": "Niger-Congo", "branch": "Bantu" },
  { "rank": 128, "name": "Nepali (India)", "iso": "npi", "speakers": 2900000, "family": "Indo-European", "branch": "Indo-Aryan" },
  { "rank": 129, "name": "Bosnian", "iso": "bos", "speakers": 2700000, "family": "Indo-European", "branch": "Balto-Slavic" },
  { "rank": 130, "name": "Dogri", "iso": "doi", "speakers": 2600000, "family": "Indo-European", "branch": "Indo-Aryan" },
  { "rank": 131, "name": "Tsonga", "iso": "tso", "speakers": 2600000, "family": "Niger-Congo", "branch": "Bantu" },
  { "rank": 132, "name": "Sinhalese (dialect)", "iso": "sin", "speakers": 2500000, "family": "Indo-European", "branch": "Indo-Aryan" },
  { "rank": 133, "name": "Konkani", "iso": "kok", "speakers": 2400000, "family": "Indo-European", "branch": "Indo-Aryan" },
  { "rank": 134, "name": "Galician", "iso": "glg", "speakers": 2400000, "family": "Indo-European", "branch": "Romance" },
  { "rank": 135, "name": "Yi", "iso": "iii", "speakers": 2100000, "family": "Sino-Tibetan", "branch": "Tibeto-Burman" },
  { "rank": 136, "name": "Slovene", "iso": "slv", "speakers": 2100000, "family": "Indo-European", "branch": "Balto-Slavic" },
  { "rank": 137, "name": "Macedonian", "iso": "mkd", "speakers": 2000000, "family": "Indo-European", "branch": "Balto-Slavic" },
  { "rank": 138, "name": "Batak Toba", "iso": "bbc", "speakers": 2000000, "family": "Austronesian", "branch": "Malayo-Polynesian" },
  { "rank": 139, "name": "Tok Pisin", "iso": "tpi", "speakers": 2000000, "family": "Creole", "branch": "English-based" },
  { "rank": 140, "name": "Fante", "iso": "fat", "speakers": 1900000, "family": "Niger-Congo", "branch": "Kwa" },
  { "rank": 141, "name": "Manipuri", "iso": "mni", "speakers": 1760000, "family": "Sino-Tibetan", "branch": "Tibeto-Burman" },
  { "rank": 142, "name": "Nahuatl", "iso": "nah", "speakers": 1700000, "family": "Uto-Aztecan", "branch": "" },
  { "rank": 143, "name": "Latvian", "iso": "lav", "speakers": 1600000, "family": "Indo-European", "branch": "Baltic" },
  { "rank": 144, "name": "Estonian", "iso": "est", "speakers": 1100000, "family": "Uralic", "branch": "Finnic" },
  { "rank": 145, "name": "Basque", "iso": "eus", "speakers": 750000, "family": "Language isolate", "branch": "" },
  { "rank": 146, "name": "Welsh", "iso": "cym", "speakers": 580000, "family": "Indo-European", "branch": "Celtic" },
  { "rank": 147, "name": "Maltese", "iso": "mlt", "speakers": 520000, "family": "Afro-Asiatic", "branch": "Semitic" },
  { "rank": 148, "name": "Luxembourgish", "iso": "ltz", "speakers": 400000, "family": "Indo-European", "branch": "Germanic" },
  { "rank": 149, "name": "Icelandic", "iso": "isl", "speakers": 314000, "family": "Indo-European", "branch": "Germanic" },
  { "rank": 150, "name": "Irish", "iso": "gle", "speakers": 170000, "family": "Indo-European", "branch": "Celtic" }
];

// Build a lookup map: lowercase ISO â†’ top-150 entry (for merging with Wikidata)
const TOP150_MAP = Object.fromEntries(
  ETHNOLOGUE_TOP150.map(l => [l.iso.toLowerCase(), l])
);

// â”€â”€â”€ Speaker-count corrections â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
const SPEAKER_CORRECTIONS = {
  'oak': { name: 'Noakhailla',   speakers: 14000000, family: 'Indo-European', branch: 'Indo-Aryan' },
  'syl': { name: 'Sylheti',      speakers: 16000000, family: 'Indo-European', branch: 'Indo-Aryan' },
  // (Chittagong division, Bangladesh)
  'ctg': { name: 'Chittagonian', speakers: 11500000, family: 'Indo-European', branch: 'Indo-Aryan' },
};

// â”€â”€â”€ Wikidata SPARQL - full 7 000+ language catalog â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
const SPARQL_ENDPOINT = 'https://query.wikidata.org/sparql';

// Uses a subquery so GROUP BY happens before label resolution
// MAX(?spk) picks the highest speaker count where multiple exist
const SPARQL_QUERY = `
SELECT ?lang ?langLabel ?langDescription ?iso ?speakers ?famItemLabel WHERE {
  {
    SELECT ?lang ?iso
           (MAX(?spk)      AS ?speakers)
           (SAMPLE(?fam)   AS ?famItem)
    WHERE {
      ?lang wdt:P220 ?iso .
      OPTIONAL { ?lang wdt:P1098 ?spk . }
      OPTIONAL { ?lang wdt:P279  ?fam . }
    }
    GROUP BY ?lang ?iso
    ORDER BY DESC(?speakers)
    LIMIT 10000
  }
  SERVICE wikibase:label { bd:serviceParam wikibase:language "en". }
}
`;

// â”€â”€â”€ Initialization â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
let isRankingPage = false;

document.addEventListener('DOMContentLoaded', () => {
  initCleanUrls();
  isRankingPage = !!document.getElementById('top-grid');
  
  // Page-specific initialization
  if (isRankingPage) {
    fetchLanguageData(true);
  } else {
    fetchLanguageData(false);
    
    // Home-only listeners
    let timer;
    document.getElementById('search-input')?.addEventListener('input', e => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        searchQuery = e.target.value.trim();
        if (allLanguages.length) applyFilters();
      }, 250);
    });

    document.getElementById('sort-select')?.addEventListener('change', e => {
      sortMode = e.target.value;
      if (allLanguages.length) applyFilters();
    });
  }

  // Common UI global event listeners
  document.getElementById('modal-close-btn')?.addEventListener('click', closeLanguageDetails);
  document.getElementById('modal-overlay')?.addEventListener('click', (e) => {
    if (e.target.id === 'modal-overlay') closeLanguageDetails();
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeLanguageDetails();
  });
});

// Clean URLs (hide .html in links and browser bar) while keeping static-file compatibility
function initCleanUrls() {
  const pageFiles = [
    { file: 'index.html', clean: '' },
    { file: 'ranking.html', clean: 'ranking' }
  ];

  const path = window.location.pathname;
  const currentDir = path.replace(/\/[^/]*$/, '/');

  const toCleanPath = (fileName) => {
    const match = pageFiles.find(p => p.file === fileName);
    if (!match) return currentDir + fileName;
    return currentDir + (match.clean ? match.clean : '');
  };

  const toFileName = (cleanPath) => {
    const normalized = cleanPath.endsWith('/') && cleanPath.length > 1 ? cleanPath.slice(0, -1) : cleanPath;
    const rootNormalized = currentDir.endsWith('/') && currentDir.length > 1 ? currentDir.slice(0, -1) : currentDir;
    if (normalized === rootNormalized) return 'index.html';
    if (normalized === rootNormalized + '/ranking') return 'ranking.html';
    return null;
  };

  // 1) Replace current visible URL if opened via *.html
  const fileMatch = path.match(/\/([^/]+\.html)$/);
  if (fileMatch) {
    const fileName = fileMatch[1];
    const cleanPath = toCleanPath(fileName);
    if (cleanPath !== path) {
      window.history.replaceState({}, '', cleanPath + window.location.search + window.location.hash);
    }
  }

  // 2) Convert nav/anchor href values to clean URLs
  document.querySelectorAll('a[href$=".html"]').forEach((anchor) => {
    const href = anchor.getAttribute('href');
    if (!href) return;
    const fileName = href.split('/').pop();
    if (!fileName) return;
    anchor.dataset.fileHref = fileName;
    anchor.setAttribute('href', toCleanPath(fileName));
  });

  // 3) Intercept clicks on clean URLs and route to real static files
  document.addEventListener('click', (event) => {
    const link = event.target.closest('a[href]');
    if (!link) return;

    const href = link.getAttribute('href');
    if (!href || href.startsWith('#')) return;

    let url;
    try {
      url = new URL(href, window.location.origin);
    } catch {
      return;
    }
    if (url.origin !== window.location.origin) return;

    const fileName = toFileName(url.pathname);
    if (!fileName) return;

    event.preventDefault();
    window.location.assign(currentDir + fileName + url.search + url.hash);
  });
}

// â”€â”€â”€ State â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
let allLanguages = [];
let filteredLanguages = [];
let curatedDescriptions = {};  // Loaded from descriptions.json
let displayedCount = 0;
const PAGE_SIZE = 150;

let searchQuery = '';
let sortMode = 'speakers';

// â”€â”€â”€ Fetch â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
async function fetchLanguageData(isRankingOnly = false) {
  resetUI();
  
  if (isRankingOnly) {
    const grid = document.getElementById('top-grid');
    if (grid) grid.innerHTML = '<div class="loading-state"><div class="spinner-ring"></div><p>Loading 2026 Rankings...</p></div>';
  } else {
    showLoading();
  }
  
  animateProgress();

  try {
    // 1. Fetch curated long-form descriptions
    setLoadingMsg('Loading curated language descriptions...');
    try {
      const descRes = await fetch('data/descriptions.json');
      if (descRes.ok) curatedDescriptions = await descRes.json();
    } catch (e) {
      console.warn('Could not load curated descriptions:', e);
    }


    // 2. Fetch Wikidata SPARQL
    setLoadingMsg('Querying Wikidata SPARQL for all ISO 639-3 languages...');
    const url = `${SPARQL_ENDPOINT}?query=${encodeURIComponent(SPARQL_QUERY)}&format=json`;
    const res = await fetch(url, {
      headers: { Accept: 'application/sparql-results+json,application/json' }
    });
    if (!res.ok) throw new Error(`Wikidata returned HTTP ${res.status}: ${res.statusText}`);

    setLoadingMsg('Processing and merging with Ethnologue data...');
    const data = await res.json();
    processData(data.results.bindings);

    hideLoading();
    renderAll(isRankingOnly);
  } catch (err) {
    hideLoading();
    showError(err.message);
  }
}

// â”€â”€â”€ Process & Merge â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function processData(bindings) {
  const seen = new Set();
  const wikiMap = {};

  // Build Wikidata map keyed by lowercase ISO
  bindings.forEach(row => {
    const name = row.langLabel?.value?.trim();
    const iso = row.iso?.value?.trim()?.toLowerCase();
    const spkRaw = row.speakers?.value;
    const family = row.famItemLabel?.value?.trim() || null;
    if (!name || !iso) return;
    if (/^Q\d+$/.test(name)) return;                     // skip unresolved QIDs
    if (wikiMap[iso]) return;                             // keep first (already MAX'd)
    const description = row.langDescription?.value || '';
    const speakers = spkRaw ? parseInt(spkRaw, 10) : null;
    wikiMap[iso] = {
      name, iso,
      desc: description,
      speakers: (speakers && speakers > 0) ? speakers : null,
      family: (family && !/^Q\d+$/.test(family)) ? family : null,
      ethnologueRank: null
    };
  });

  // Merge: top-150 data takes priority over Wikidata
  const merged = {};

  // 1 - seed with all Wikidata entries
  Object.values(wikiMap).forEach(l => {
    const top = TOP150_MAP[l.iso];
    merged[l.iso] = {
      ...l,
      // Override with Ethnologue where available
      name: top ? top.name : l.name,
      desc: l.desc || '',
      speakers: top ? top.speakers : l.speakers,
      family: top ? top.family : l.family,
      branch: top ? top.branch : null,
      ethnologueRank: top ? top.rank : null
    };
  });

  // 2 - add any top-150 entries Wikidata missed
  ETHNOLOGUE_TOP150.forEach(top => {
    if (!merged[top.iso]) {
      merged[top.iso] = {
        name: top.name,
        iso: top.iso,
        desc: '',
        speakers: top.speakers,
        family: top.family,
        branch: top.branch,
        ethnologueRank: top.rank
      };
    }
  });

  // Apply manual speaker-count corrections (overrides Wikidata errors)
  Object.entries(SPEAKER_CORRECTIONS).forEach(([iso, fix]) => {
    if (merged[iso]) {
      // Language already in the merged map - just patch the fields
      Object.assign(merged[iso], fix);
    } else {
      // Language not returned by Wikidata at all - add it
      merged[iso] = {
        iso,
        ethnologueRank: null,
        name:     fix.name     || iso.toUpperCase(),
        speakers: fix.speakers || null,
        family:   fix.family   || null,
        branch:   fix.branch   || null,
        desc:     ''
      };
    }
  });

  // Final pass: keep descriptions lightweight on initial load.
  // Generate synthetic fallback text lazily only when a user opens the modal.
  Object.values(merged).forEach(l => {
    const curated = curatedDescriptions[l.iso];
    if (curated) {
      l.desc = curated;
    } else if (!l.desc || l.desc.length < 10) {
      l.desc = '';
    }
  });

  // Sort:
  // 1st - Ethnologue-ranked languages by rank
  // 2nd - rest by corrected speaker count (desc)
  // 3rd - alphabetic
  const withRank = Object.values(merged).filter(l => l.ethnologueRank !== null)
    .sort((a, b) => a.ethnologueRank - b.ethnologueRank);
  const withoutRank = Object.values(merged).filter(l => l.ethnologueRank === null)
    .sort((a, b) => {
      if (a.speakers && b.speakers) return b.speakers - a.speakers;
      if (a.speakers) return -1;
      if (b.speakers) return 1;
      return a.name.localeCompare(b.name);
    });

  allLanguages = [...withRank, ...withoutRank];
  filteredLanguages = [...allLanguages];
}

// â”€â”€â”€ Render All â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function renderAll(isRankingOnly = false) {
  if (isRankingOnly) {
    renderTopLanguages();
    const topSection = document.getElementById('top-section');
    if (topSection) topSection.classList.remove('hidden');
    return;
  }

  // Full catalog page
  updateStats();
  
  const allSection = document.getElementById('all-section');
  const controls = document.getElementById('controls');
  if (allSection) allSection.classList.remove('hidden');
  if (controls) controls.classList.remove('hidden');

  resetList();
  renderNextPage(); // Renamed from renderNextBatch in previous context, checking match
}

// â”€â”€â”€ Top 150 Cards â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function renderTopLanguages() {
  const grid = document.getElementById('top-grid');
  if (!grid) return;
  grid.innerHTML = '';
  const fragment = document.createDocumentFragment();

  // Only show languages with Ethnologue rank (the curated top 150)
  const top150 = allLanguages.filter(l => l.ethnologueRank !== null);
  const maxSpk = top150[0]?.speakers || 1;

  top150.forEach((lang, i) => {
    const rank = lang.ethnologueRank;
    const barW = Math.max(2, (lang.speakers / maxSpk) * 100);
    const card = document.createElement('div');

    let rankClass = '';
    if (rank === 1) rankClass = 'rank-1';
    else if (rank === 2) rankClass = 'rank-2';
    else if (rank === 3) rankClass = 'rank-3';
    else if (rank <= 10) rankClass = 'rank-top10';

    card.className = `language-card ${rankClass}`;
    card.innerHTML = `
      <div class="card-header">
        <span class="rank-badge">#${rank}</span>
        <div class="lang-name">${escHtml(lang.name)}</div>
        <div class="lang-code">${lang.iso.toUpperCase()}</div>
      </div>
      <div class="pop-bar-wrap">
        <div class="pop-bar" style="width:0%" data-target="${barW.toFixed(2)}"></div>
      </div>
      <div class="card-stats">
        <div class="stat"><span>Speakers:</span><span>${formatNum(lang.speakers)} native speakers</span></div>
        ${lang.family ? `<div class="stat"><span>Family:</span><span>${escHtml(lang.family)}</span></div>` : ''}
        ${lang.branch ? `<div class="stat"><span>Branch:</span><span class="branch-label">${escHtml(lang.branch)}</span></div>` : ''}
      </div>
      <div class="ethnologue-badge">Ethnologue 29th Ed. (2026)</div>
    `;

    // Stagger fade-in
    card.style.cssText = 'opacity:0;transform:translateY(14px)';
    setTimeout(() => {
      card.style.transition = 'opacity .4s ease, transform .4s ease';
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
      setTimeout(() => {
        const bar = card.querySelector('.pop-bar');
        if (bar) bar.style.width = bar.dataset.target + '%';
      }, 160);
    }, Math.min(i * 25, 1200));   // cap total delay at 1.2 s

    fragment.appendChild(card);

    // Click to view details
    card.addEventListener('click', () => showLanguageDetails(lang));
  });

  grid.appendChild(fragment);
}

// â”€â”€â”€ Paginated All-Languages List â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function resetList() {
  displayedCount = 0;
  document.getElementById('all-list').innerHTML = '';
  document.getElementById('load-more-wrap').classList.add('hidden');
}

function renderNextPage() {
  const list = document.getElementById('all-list');
  const chunk = filteredLanguages.slice(displayedCount, displayedCount + PAGE_SIZE);
  const fragment = document.createDocumentFragment();

  chunk.forEach(lang => {
    const row = document.createElement('div');
    row.className = 'lang-row';
    const rankStr = lang.ethnologueRank ? `#${lang.ethnologueRank}` : '-';
    row.innerHTML = `
      <span class="col-rank">${rankStr}</span>
      <span class="col-iso">${lang.iso.toUpperCase()}</span>
      <span class="col-name">${escHtml(lang.name)}</span>
      <span class="col-family">${lang.family ? escHtml(lang.family) : '<span class="muted">-</span>'}</span>
      <span class="col-speakers">${lang.speakers ? formatNum(lang.speakers) : '<span class="muted">-</span>'}</span>
    `;
    fragment.appendChild(row);

    // Click to view details
    row.addEventListener('click', () => showLanguageDetails(lang));
  });

  list.appendChild(fragment);

  displayedCount += chunk.length;
  updateLoadMore();
}

function updateLoadMore() {
  const remaining = filteredLanguages.length - displayedCount;
  const wrap = document.getElementById('load-more-wrap');
  const label = document.getElementById('load-more-label');
  const info = document.getElementById('pagination-info');

  const allCountEl = document.getElementById('all-count');
  if (allCountEl) {
    allCountEl.textContent = `${filteredLanguages.length.toLocaleString()} language${filteredLanguages.length !== 1 ? 's' : ''}`;
  }
  if (info) info.textContent = `Showing ${displayedCount.toLocaleString()} of ${filteredLanguages.length.toLocaleString()}`;

  if (remaining > 0) {
    if (label) label.textContent = `Load ${Math.min(PAGE_SIZE, remaining).toLocaleString()} more`;
    if (wrap) wrap.classList.remove('hidden');
  } else {
    if (wrap) wrap.classList.add('hidden');
  }
}

// â”€â”€â”€ Search & Sort â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function applyFilters() {
  const q = searchQuery.toLowerCase();

  let result = allLanguages.filter(lang =>
    !q ||
    lang.name.toLowerCase().includes(q) ||
    lang.iso.toLowerCase().includes(q) ||
    (lang.family && lang.family.toLowerCase().includes(q)) ||
    (lang.branch && lang.branch.toLowerCase().includes(q))
  );

  if (sortMode === 'name') {
    result.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortMode === 'iso') {
    result.sort((a, b) => a.iso.localeCompare(b.iso));
  } else if (sortMode === 'family') {
    result.sort((a, b) => {
      if (!a.family && !b.family) return a.name.localeCompare(b.name);
      if (!a.family) return 1;
      if (!b.family) return -1;
      return a.family.localeCompare(b.family) || a.name.localeCompare(b.name);
    });
  } else if (sortMode === 'rank') {
    result.sort((a, b) => {
      if (a.ethnologueRank && b.ethnologueRank) return a.ethnologueRank - b.ethnologueRank;
      if (a.ethnologueRank) return -1;
      if (b.ethnologueRank) return 1;
      return a.name.localeCompare(b.name);
    });
  } else {
    // speakers default
    result.sort((a, b) => {
      if (a.speakers && b.speakers) return b.speakers - a.speakers;
      if (a.speakers) return -1;
      if (b.speakers) return 1;
      return a.name.localeCompare(b.name);
    });
  }

  filteredLanguages = result;

  const badge = document.getElementById('search-count');
  badge.textContent = q ? `${result.length.toLocaleString()} results` : '';

  resetList();
  renderNextPage();
}

// â”€â”€â”€ Stats â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function updateStats() {
  const withSpk = allLanguages.filter(l => l.speakers).length;
  const families = new Set(allLanguages.map(l => l.family).filter(Boolean)).size;
  animateCount('stat-total', allLanguages.length, 0);
  animateCount('stat-speakers', withSpk, 300);
  animateCount('stat-families', families, 600);
}

// â”€â”€â”€ Helpers â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function formatNum(n) {
  if (!n) return '-';
  if (n >= 1e9) return (n / 1e9).toFixed(2) + 'B';
  if (n >= 1e6) return (n / 1e6).toFixed(1) + 'M';
  if (n >= 1e3) return (n / 1e3).toFixed(0) + 'K';
  return n.toLocaleString();
}

function escHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;')
    .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function animateCount(id, target, delay = 0) {
  setTimeout(() => {
    const el = document.getElementById(id);
    const dur = 1400, t0 = performance.now();
    const step = ts => {
      const p = Math.min((ts - t0) / dur, 1);
      if (el) el.textContent = Math.round((1 - Math.pow(1 - p, 3)) * target).toLocaleString();
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, delay);
}

function animateProgress() {
  const bar = document.getElementById('progress-bar');
  let w = 0;
  const iv = setInterval(() => {
    w = Math.min(w + (w < 30 ? 2 : w < 65 ? 0.7 : 0.15), 90);
    if (bar) bar.style.width = w + '%';
    if (w >= 90) clearInterval(iv);
  }, 180);
  if (bar) bar._iv = iv;
}

function setLoadingMsg(msg) {
  const el = document.getElementById('loading-msg');
  if (el) el.textContent = msg;
}

function showLoading() { document.getElementById('loading').classList.remove('hidden'); }
function hideLoading() {
  const bar = document.getElementById('progress-bar');
  if (bar._iv) clearInterval(bar._iv);
  bar.style.transition = 'width .4s ease';
  bar.style.width = '100%';
  setTimeout(() => {
    const loadingEl = document.getElementById('loading');
    if (loadingEl) loadingEl.classList.add('hidden');
    bar.style.width = '0%';
  }, 500);
}
function showError(msg) {
  const msgEl = document.getElementById('error-message');
  const stateEl = document.getElementById('error-state');
  if (msgEl) msgEl.textContent = msg;
  if (stateEl) stateEl.classList.remove('hidden');
}
function resetUI() {
  ['error-state', 'top-section', 'all-section'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.add('hidden');
  });
  const controls = document.getElementById('controls');
  if (controls) controls.classList.add('hidden');
}

// â”€â”€â”€ Events (Unified in Initialization) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

// â”€â”€â”€ Details Modal â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

function generateFallbackDesc(lang) {
  const family = lang.family || 'Unknown family';
  const branch = lang.branch || 'Unspecified branch';
  const speakers = lang.speakers ? `${lang.speakers.toLocaleString()} native speakers` : 'no confirmed speaker total';
  return `${lang.name} (${lang.iso.toUpperCase()}) is classified under ${family} (${branch}) and has ${speakers}. This profile is auto-generated when curated text is unavailable.`;
}

function showLanguageDetails(lang) {
  const modal = document.getElementById('modal-overlay');
  const rank = lang.ethnologueRank || '-';

  // Update badge class based on rank
  const badge = document.getElementById('modal-rank-badge');
  badge.textContent = `#${rank}`;
  badge.className = 'rank-badge'; // reset
  if (rank === 1) badge.classList.add('rank-1');
  else if (rank === 2) badge.classList.add('rank-2');
  else if (rank === 3) badge.classList.add('rank-3');
  else if (rank <= 10 && rank !== '-') badge.classList.add('rank-top10');

  document.getElementById('modal-name').textContent = lang.name;
  if (!lang.desc || lang.desc.length < 10) {
    lang.desc = generateFallbackDesc(lang);
  }
  document.getElementById('modal-description').textContent = lang.desc;
  document.getElementById('modal-iso').textContent = lang.iso.toUpperCase();
  document.getElementById('modal-family').textContent = lang.family || 'Unknown';
  document.getElementById('modal-branch').textContent = lang.branch || 'N/A';
  
  // High-fidelity speaker display
  const spkVal = document.getElementById('modal-speakers');
  if (lang.speakers) {
    spkVal.innerHTML = `${lang.speakers.toLocaleString()} <span class="muted">(${formatNum(lang.speakers)})</span>`;
  } else {
    spkVal.textContent = 'Data unavailable';
  }

  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden'; // prevent scroll
}

function closeLanguageDetails() {
  const modal = document.getElementById('modal-overlay');
  modal.classList.add('hidden');
  document.body.style.overflow = '';
}



