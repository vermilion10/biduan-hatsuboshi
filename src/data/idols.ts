import sakiImg from '../assets/idols/saki-full.png?url';
import temariImg from '../assets/idols/temari-full.png?url';
import kotoneImg from '../assets/idols/kotone-full.png?url';
import maoImg from '../assets/idols/mao-full.png?url';
import liljaImg from '../assets/idols/lilja-full.png?url';
import chinaImg from '../assets/idols/china-full.png?url';
import sumikaImg from '../assets/idols/sumika-full.png?url';
import hiroImg from '../assets/idols/hiro-full.png?url';
import rinamiImg from '../assets/idols/rinami-full.png?url';
import umeImg from '../assets/idols/ume-full.png?url';
import misuzuImg from '../assets/idols/misuzu-full.png?url';
import senaImg from '../assets/idols/sena-full.png?url';
import tsubameImg from '../assets/idols/tsubame-full.png?url';

export interface Card {
  id: string;
  url: string;
  type: 'p-idol' | 's-card';
}

export interface Idol {
  id: string;
  name: string;
  romanizedName: string;
  jpQuote: string;
  hexColor: string;
  age: number;
  year: number;
  birthday: string;
  bloodType: string;
  height: number;
  weight: number;
  threeSizes: string;
  handedness: string;
  horoscope: string;
  cv: string;
  fullBodyUrl: string;
  cards: Card[];
  spotifyEmbedUrl: string;
}

export const idols: Idol[] = [
  {
    id: "saki",
    name: "花海 咲季",
    romanizedName: "Saki Hanami",
    jpQuote: "わたしは勝負が好き！ 勝つのが好き！ 負けるのがだ～いッキラい！！",
    hexColor: "#FF4F64",
    age: 16,
    year: 1,
    birthday: "April 2nd",
    bloodType: "A",
    height: 152,
    weight: 45,
    threeSizes: "84-55-80 cm",
    handedness: "Left",
    horoscope: "Aries",
    cv: "長月あおい (Nagatsuki Aoi)",
    fullBodyUrl: sakiImg,
    cards: [
      { id: "saki-p1", type: "p-idol", url: "https://res.cloudinary.com/dezghxeg3/image/upload/v2/gkms/img_general_cidol-hski-3-000_0-full.webp" },
      { id: "saki-p2", type: "p-idol", url: "https://imasgk.gamedbs.jp/image/pcard/img//1773888442002_embo0t4v.webp" },
      { id: "saki-p3", type: "p-idol", url: "https://imasgk.gamedbs.jp/image/pcard/img//1746070584005_aecydr48.webp" }
    ],
    spotifyEmbedUrl: "https://open.spotify.com/embed/track/4lhjjchD5D8bvjOXvysufP?utm_source=generator"
  },
  {
    id: "temari",
    name: "月村 手毬",
    romanizedName: "Tsukimura Temari",
    jpQuote: "夢？いいえ、 必ず達成する目標です。",
    hexColor: "#27B4EB",
    age: 15,
    year: 1,
    birthday: "June 3rd",
    bloodType: "AB",
    height: 162,
    weight: 51,
    threeSizes: "82-58-86 cm",
    handedness: "Right",
    horoscope: "Gemini",
    cv: "小鹿なお (Ojika Nao)",
    fullBodyUrl: temariImg,
    cards: [
      { id: "temari-p1", type: "p-idol", url: "https://imasgk.gamedbs.jp/image/pcard/img//1768546451002_w6hcr4u2.webp" },
      { id: "temari-p2", type: "p-idol", url: "https://imasgk.gamedbs.jp/image/pcard/img//1727661843016_uwz85nqs.webp" },
      { id: "temari-p3", type: "p-idol", url: "https://imasgk.gamedbs.jp/image/pcard/img//1746070585008_vrd0sbwc.webp" }
    ],
    spotifyEmbedUrl: "https://open.spotify.com/embed/track/3sNHZrJe1FRtt9OAA9KoNr?utm_source=generator"
  },
  {
    id: "kotone",
    name: "藤田 ことね",
    romanizedName: "Kotone Fujita",
    jpQuote: "褒められるのが好き！ 褒めてくれる人が好きっ！ ファンのみんなが、だぁ～い好きっ♪",
    hexColor: "#FFD203",
    age: 15,
    year: 1,
    birthday: "April 29th",
    bloodType: "O",
    height: 156,
    weight: 40,
    threeSizes: "75-55-75 cm",
    handedness: "Right",
    horoscope: "Taurus",
    cv: "飯田ヒカル (Iida Hikaru)",
    fullBodyUrl: kotoneImg,
    cards: [
      { id: "kotone-p1", type: "p-idol", url: "https://imasgk.gamedbs.jp/image/pcard/img//1746070584002_1cmnfqds.webp" },
      { id: "kotone-p2", type: "p-idol", url: "https://imasgk.gamedbs.jp/image/pcard/img//1759130122005_mfad4i1o.webp" },
      { id: "kotone-p3", type: "p-idol", url: "https://imasgk.gamedbs.jp/image/pcard/img//1754968127001_bilwegn3.webp" }
    ],
    spotifyEmbedUrl: "https://open.spotify.com/embed/track/0AYzHE6EK8qlUzJe5c0cV1?utm_source=generator"
  },
  {
    id: "mao",
    name: "有村 麻央",
    romanizedName: "Mao Arimura",
    jpQuote: "――『可愛い』からこそ 『かっこいい』。 ボクらしくやってみますよ。",
    hexColor: "#C45DC8",
    age: 17,
    year: 3,
    birthday: "January 18th",
    bloodType: "A",
    height: 157,
    weight: 46,
    threeSizes: "85-53-85 cm",
    handedness: "Right",
    horoscope: "Capricorn",
    cv: "七瀬つむぎ (Nanase Tsumugi)",
    fullBodyUrl: maoImg,
    cards: [
      { id: "mao-p1", type: "p-idol", url: "https://imasgk.gamedbs.jp/image/pcard/img//1761876422002_q1bts9nh.webp" },
      { id: "mao-p2", type: "p-idol", url: "https://imasgk.gamedbs.jp/image/pcard/img//1756435939002_67kiet0u.webp" },
      { id: "mao-p3", type: "p-idol", url: "https://imasgk.gamedbs.jp/image/pcard/img//1735218958001_b3chox67.webp" }
    ],
    spotifyEmbedUrl: "https://open.spotify.com/embed/track/4pB100OePzQo9nkot6bZQW?utm_source=generator"
  },
  {
    id: "lilja",
    name: "葛城 リーリヤ",
    romanizedName: "Katsuragi Lilja",
    jpQuote: "わたしなんか……とは、思うんです。 だけど、この夢は、必ず叶えます。",
    hexColor: "#D2E3E4",
    age: 15,
    year: 1,
    birthday: "July 24th",
    bloodType: "B",
    height: 161,
    weight: 43,
    threeSizes: "82-53-80 cm",
    handedness: "Right",
    horoscope: "Leo",
    cv: "花岩香奈 (Hanaiwa Kana)",
    fullBodyUrl: liljaImg,
    cards: [
      { id: "lilja-p1", type: "p-idol", url: "https://imasgk.gamedbs.jp/image/pcard/img//1765170699002_8ha5tfwj.webp" },
      { id: "lilja-p2", type: "p-idol", url: "https://imasgk.gamedbs.jp/image/pcard/img//1736996467001_w4lk5q8h.webp" },
      { id: "lilja-p3", type: "p-idol", url: "https://imasgk.gamedbs.jp/image/pcard/img//1733715429005_p2kgf4id.webp" }
    ],
    spotifyEmbedUrl: "https://open.spotify.com/embed/track/17NiqjyW9nWFXJNEsnYoC1?utm_source=generator"
  },
  {
    id: "china",
    name: "倉本 千奈",
    romanizedName: "Kuramoto China",
    jpQuote: "アイドルとしての実力？ もちろんぶっちぎりで 最下位ですわっ！",
    hexColor: "#FE8A22",
    age: 15,
    year: 1,
    birthday: "August 1st",
    bloodType: "O",
    height: 148,
    weight: 43,
    threeSizes: "73-56-73 cm",
    handedness: "Right",
    horoscope: "Leo",
    cv: "伊藤舞音 (Itou Mao)",
    fullBodyUrl: chinaImg,
    cards: [
      { id: "china-p1", type: "p-idol", url: "https://imasgk.gamedbs.jp/image/pcard/img//1769489945001_dr0j92fy.webp" },
      { id: "china-p2", type: "p-idol", url: "https://imasgk.gamedbs.jp/image/pcard/img//1761012199002_ulfz4mea.webp" },
      { id: "china-p3", type: "p-idol", url: "https://imasgk.gamedbs.jp/image/pcard/img//1736393297004_ovgs3bfe.webp" }
    ],
    spotifyEmbedUrl: "https://open.spotify.com/embed/track/7KBVyssu8FKs6Zue1DdJzA?utm_source=generator"
  },
  {
    id: "sumika",
    name: "紫雲 清夏",
    romanizedName: "Shiun Sumika",
    jpQuote: "あたしが本気で踊るとこ、 見せたげる♪",
    hexColor: "#92DE5A",
    age: 15,
    year: 1,
    birthday: "November 11th",
    bloodType: "O",
    height: 168,
    weight: 54,
    threeSizes: "89-58-85 cm",
    handedness: "Left",
    horoscope: "Scorpio",
    cv: "湊みや (Minato Miya)",
    fullBodyUrl: sumikaImg,
    cards: [
      { id: "sumika-p1", type: "p-idol", url: "https://imasgk.gamedbs.jp/image/pcard/img//1750303370002_oqvbzhr6.webp" },
      { id: "sumika-p2", type: "p-idol", url: "https://imasgk.gamedbs.jp/image/pcard/img//1719844353013_xok7hled.webp" },
      { id: "sumika-p3", type: "p-idol", url: "https://imasgk.gamedbs.jp/image/pcard/img//1743478833010_r38zmu7l.webp" }
    ],
    spotifyEmbedUrl: "https://open.spotify.com/embed/track/3Dtha3rjGgfXiNCc9x3Y6D?utm_source=generator"
  },
  {
    id: "hiro",
    name: "篠澤 広",
    romanizedName: "Shinosawa Hiro",
    jpQuote: "プロデューサーはひどい。 鬼。悪魔。 そういうところが……すき。",
    hexColor: "#00BED8",
    age: 15,
    year: 1,
    birthday: "December 21st",
    bloodType: "AB",
    height: 159,
    weight: 41,
    threeSizes: "72-54-76 cm",
    handedness: "Left",
    horoscope: "Sagittarius",
    cv: "川村玲奈 (Kawamura Reina)",
    fullBodyUrl: hiroImg,
    cards: [
      { id: "hiro-p1", type: "p-idol", url: "https://imasgk.gamedbs.jp/image/pcard/img//1769489946004_kzh2gqac.webp" },
      { id: "hiro-p2", type: "p-idol", url: "https://imasgk.gamedbs.jp/image/pcard/img//1721663724002_ha0tfp2n.webp" },
      { id: "hiro-p3", type: "p-idol", url: "https://imasgk.gamedbs.jp/image/pcard/img//1752722280001_wdskaqyt.webp" }
    ],
    spotifyEmbedUrl: "https://open.spotify.com/embed/track/5C4gqAe9z0pEtcYZt0g5o4?utm_source=generator"
  },
  {
    id: "rinami",
    name: "姫崎 莉波",
    romanizedName: "Himesaki Rinami",
    jpQuote: "ほら、ネクタイが曲がってるよ。 ――うん、これでよし。",
    hexColor: "#FD7EC2",
    age: 17,
    year: 3,
    birthday: "March 5th",
    bloodType: "A",
    height: 166,
    weight: 56,
    threeSizes: "90-59-93 cm",
    handedness: "Right",
    horoscope: "Pisces",
    cv: "薄井友里 (Usui Yuri)",
    fullBodyUrl: rinamiImg,
    cards: [
      { id: "rinami-p1", type: "p-idol", url: "https://imasgk.gamedbs.jp/image/pcard/img//1729236349004_94uqc8f2.webp" },
      { id: "rinami-p2", type: "p-idol", url: "https://imasgk.gamedbs.jp/image/pcard/img//1758117466002_iy5usr12.webp" },
      { id: "rinami-p3", type: "p-idol", url: "https://imasgk.gamedbs.jp/image/pcard/img//1720793207001_sm823eyl.webp" }
    ],
    spotifyEmbedUrl: "https://open.spotify.com/embed/track/6OHHhksmxIPQilCkC5PA2f?utm_source=generator"
  },
  {
    id: "ume",
    name: "花海 佑芽",
    romanizedName: "Hanami Ume",
    jpQuote: "あたしの夢は、 お姉ちゃんに勝つことです！",
    hexColor: "#F74C2C",
    age: 15,
    year: 1,
    birthday: "April 1st",
    bloodType: "AB",
    height: 158,
    weight: 50,
    threeSizes: "91-60-85 cm",
    handedness: "Right",
    horoscope: "Aries",
    cv: "松田彩音 (Matsuda Ayane)",
    fullBodyUrl: umeImg,
    cards: [
      { id: "ume-p1", type: "p-idol", url: "https://imasgk.gamedbs.jp/image/pcard/img//1717207823005_lcb1xeft.webp" },
      { id: "ume-p2", type: "p-idol", url: "https://imasgk.gamedbs.jp/image/pcard/img//1764309474001_k97b2lrf.webp" },
      { id: "ume-p3", type: "p-idol", url: "https://imasgk.gamedbs.jp/image/pcard/img//1732796698010_cxzm9k40.webp" }
    ],
    spotifyEmbedUrl: "https://open.spotify.com/embed/track/47n8aNni2F0UFoubloGJbu?utm_source=generator"
  },
  {
    id: "misuzu",
    name: "秦谷 美鈴",
    romanizedName: "Hataya Misuzu",
    jpQuote: "……いい日差し。 こちらで休んでいきませんか。",
    hexColor: "#6EA3FC",
    age: 15,
    year: 1,
    birthday: "February 6th",
    bloodType: "B",
    height: 160,
    weight: 42,
    threeSizes: "73-54-74 cm",
    handedness: "Right",
    horoscope: "Aquarius",
    cv: "春咲暖 (Harusaki Non)",
    fullBodyUrl: misuzuImg,
    cards: [
      { id: "misuzu-p1", type: "p-idol", url: "https://imasgk.gamedbs.jp/image/pcard/img//1767580172002_pb6d32ho.webp" },
      { id: "misuzu-p2", type: "p-idol", url: "https://imasgk.gamedbs.jp/image/pcard/img//1753930598001_4lrta7em.webp" },
      { id: "misuzu-p3", type: "p-idol", url: "https://imasgk.gamedbs.jp/image/pcard/img//1747367496013_v25ke7mb.webp" }
    ],
    spotifyEmbedUrl: "https://open.spotify.com/embed/track/6H5Wms1kWQVilYPj8KstIz?utm_source=generator"
  },
  {
    id: "sena",
    name: "十王 星南",
    romanizedName: "Juo Sena",
    jpQuote: "初星学園高等部生徒会長。 ――十王星南よ。",
    hexColor: "#FFAC28",
    age: 17,
    year: 3,
    birthday: "December 7th",
    bloodType: "A",
    height: 170,
    weight: 54,
    threeSizes: "88-56-86 cm",
    handedness: "Ambidextrous",
    horoscope: "Sagittarius",
    cv: "陽高真白 (Hitaka Mashiro)",
    fullBodyUrl: senaImg,
    cards: [
      { id: "sena-p1", type: "p-idol", url: "https://imasgk.gamedbs.jp/image/pcard/img//1770606115002_uqhtdpx9.webp" },
      { id: "sena-p2", type: "p-idol", url: "https://imasgk.gamedbs.jp/image/pcard/img//1753930600007_p8y9gtcb.webp" },
      { id: "sena-p3", type: "p-idol", url: "https://imasgk.gamedbs.jp/image/pcard/img//1739501777001_y9f5g8zs.webp" }
    ],
    spotifyEmbedUrl: "https://open.spotify.com/embed/track/5IDLlIOba6KkH2S6hJqaKB?utm_source=generator"
  },
  {
    id: "tsubame",
    name: "雨夜 燕",
    romanizedName: "Amaya Tsubame",
    jpQuote: "この私を並のアイドルと比べるな。 私の敵は、あいつだけだ。",
    hexColor: "#8874FF",
    age: 17,
    year: 3,
    birthday: "May 20th",
    bloodType: "A",
    height: 169,
    weight: 51,
    threeSizes: "80-55-82 cm",
    handedness: "Right",
    horoscope: "Taurus",
    cv: "天音ゆかり (Amane Yukari)",
    fullBodyUrl: tsubameImg,
    cards: [
      { id: "tsubame-p1", type: "p-idol", url: "https://imasgk.gamedbs.jp/image/pcard/img//1763259820007_sp5h0cm8.webp" },
      { id: "tsubame-p2", type: "p-idol", url: "https://imasgk.gamedbs.jp/image/pcard/img//1763259819005_oz9rcbaw.webp" },
      { id: "tsubame-p3", type: "p-idol", url: "https://imasgk.gamedbs.jp/image/pcard/img//1763259819004_uw39xzgb.webp" }
    ],
    spotifyEmbedUrl: "https://open.spotify.com/embed/track/2lSLJUdUP82uFZKZ43gZlr?utm_source=generator"
  }
];
