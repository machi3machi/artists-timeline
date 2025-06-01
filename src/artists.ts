export interface Artist {
  name: string;
  date: string;
  country: string;
  work: string;
  era: string;
  iconColor: string;
}

export const artists: Artist[] = [
  // ロマネスク・ゴシック期
  {
    name: "ジスルベルトゥス",
    date: "1120 - 1130",
    country: "フランス",
    work: "最後の審判（1130年頃、オータン大聖堂）",
    era: "ロマネスク・ゴシック期",
    iconColor: "#b3cde0"
  },
  {
    name: "ヴィリギスのモザイク職人",
    date: "約1200",
    country: "神聖ローマ帝国",
    work: "マインツ大聖堂の装飾（1200年頃）",
    era: "ロマネスク・ゴシック期",
    iconColor: "#b3cde0"
  },
  {
    name: "アルノルフォ・ディ・カンビオ",
    date: "1240 - 1302",
    country: "イタリア",
    work: "フィレンツェ大聖堂の設計（1296年）",
    era: "ロマネスク・ゴシック期",
    iconColor: "#b3cde0"
  },
  {
    name: "ジョット・ディ・ボンドーネ",
    date: "1267 - 1337",
    country: "イタリア",
    work: "スクロヴェーニ礼拝堂のフレスコ画（1305年頃）",
    era: "ロマネスク・ゴシック期",
    iconColor: "#b3cde0"
  },

  // ルネサンス
  {
    name: "ドナテッロ",
    date: "1386 - 1466",
    country: "イタリア",
    work: "ダビデ像（1440年頃、バルジェロ国立博物館）",
    era: "ルネサンス",
    iconColor: "#fbb4ae"
  },
  {
    name: "マザッチョ",
    date: "1401 - 約1428",
    country: "イタリア",
    work: "楽園追放（1425年頃、サンタ・マリア・デル・カルミネ教会）",
    era: "ルネサンス",
    iconColor: "#fbb4ae"
  },
  {
    name: "サンドロ・ボッティチェリ",
    date: "1445 - 1510",
    country: "イタリア",
    work: "ヴィーナスの誕生（1485年頃、ウフィツィ美術館）",
    era: "ルネサンス",
    iconColor: "#fbb4ae"
  },
  {
    name: "レオナルド・ダ・ヴィンチ",
    date: "1452 - 1519",
    country: "イタリア",
    work: "モナ・リザ（1503年頃、ルーヴル美術館）",
    era: "ルネサンス",
    iconColor: "#fbb4ae"
  },
  {
    name: "ミケランジェロ・ブオナローティ",
    date: "1475 - 1564",
    country: "イタリア",
    work: "最後の審判（1536〜1541年、システィーナ礼拝堂）",
    era: "ルネサンス",
    iconColor: "#fbb4ae"
  },
  {
    name: "ラファエロ・サンティ",
    date: "1483 - 1520",
    country: "イタリア",
    work: "アテネの学堂（1509〜1511年、バチカン美術館）",
    era: "ルネサンス",
    iconColor: "#fbb4ae"
  },
  {
    name: "ティツィアーノ",
    date: "約1488/1490 - 1576",
    country: "イタリア",
    work: "ウルビーノのヴィーナス（1538年、ウフィツィ美術館）",
    era: "ルネサンス",
    iconColor: "#fbb4ae"
  },

  // バロック・ロココ期
  {
    name: "カラヴァッジオ",
    date: "1571 - 1610",
    country: "イタリア",
    work: "聖マタイの召命（1600年、サン・ルイジ・デイ・フランチェージ教会）",
    era: "バロック・ロココ期",
    iconColor: "#ccebc5"
  },
  {
    name: "ピーテル・パウル・ルーベンス",
    date: "1577 - 1640",
    country: "フランドル",
    work: "マリー・ド・メディシスの生涯（1621〜1625年、ルーヴル美術館）",
    era: "バロック・ロココ期",
    iconColor: "#ccebc5"
  },
  {
    name: "アンソニー・ヴァン・ダイク",
    date: "1599 - 1641",
    country: "フランドル",
    work: "チャールズ1世の肖像（1635年頃、ナショナル・ギャラリー）",
    era: "バロック・ロココ期",
    iconColor: "#ccebc5"
  },
  {
    name: "レンブラント・ファン・レイン",
    date: "1606 - 1669",
    country: "オランダ",
    work: "夜警（1642年、アムステルダム国立美術館）",
    era: "バロック・ロココ期",
    iconColor: "#ccebc5"
  },
  {
    name: "ヨハネス・フェルメール",
    date: "1632 - 1675",
    country: "オランダ",
    work: "真珠の耳飾りの少女（1665年頃、マウリッツハイス美術館）",
    era: "バロック・ロココ期",
    iconColor: "#ccebc5"
  },
  {
    name: "アントワーヌ・ヴァトー",
    date: "1684 - 1721",
    country: "フランス",
    work: "シテール島への出発（1717年、ルーヴル美術館）",
    era: "バロック・ロココ期",
    iconColor: "#ccebc5"
  },
  {
    name: "ジャン＝バティスト＝シメオン・シャルダン",
    date: "1703 - 1770",
    country: "フランス",
    work: "食器棚の上の道具類（1731年、ルーヴル美術館）",
    era: "バロック・ロココ期",
    iconColor: "#ccebc5"
  },

  // 新古典主義・ロマン主義・写実主義
  {
    name: "フランシスコ・ゴヤ",
    date: "1746 - 1828",
    country: "スペイン",
    work: "我が子を喰らうサトゥルヌス（1819〜1823年、プラド美術館）",
    era: "新古典主義・ロマン主義・写実主義",
    iconColor: "#decbe4"
  },
  {
    name: "ジャック＝ルイ・ダヴィッド",
    date: "1748 - 1825",
    country: "フランス",
    work: "マラーの死（1793年、ベルギー王立美術館）",
    era: "新古典主義・ロマン主義・写実主義",
    iconColor: "#decbe4"
  },
  {
    name: "葛飾北斎",
    date: "1760 - 1849",
    country: "日本",
    work: "神奈川沖浪裏（1831年、ポーラ美術館、大英博物館）",
    era: "新古典主義・ロマン主義・写実主義",
    iconColor: "#decbe4"
  },
  {
    name: "テオドール・ジェリコー",
    date: "1791 - 1824",
    country: "フランス",
    work: "メデューズ号の筏（1819年、ルーヴル美術館）",
    era: "新古典主義・ロマン主義・写実主義",
    iconColor: "#decbe4"
  },
  {
    name: "ウジェーヌ・ドラクロワ",
    date: "1798 - 1863",
    country: "フランス",
    work: "民衆を導く自由の女神（1830年、ルーヴル美術館）",
    era: "新古典主義・ロマン主義・写実主義",
    iconColor: "#decbe4"
  },
  {
    name: "ジャン＝フランソワ・ミレー",
    date: "1817 - 1878",
    country: "フランス",
    work: "落穂拾い（1857年、オルセー美術館）",
    era: "新古典主義・ロマン主義・写実主義",
    iconColor: "#decbe4"
  },
  {
    name: "ギュスターヴ・クールベ",
    date: "1819 - 1877",
    country: "フランス",
    work: "石割り（1849年、ドレスデン美術館）",
    era: "新古典主義・ロマン主義・写実主義",
    iconColor: "#decbe4"
  },

  // 印象派・ポスト印象派
  {
    name: "エドゥアール・マネ",
    date: "1832 - 1883",
    country: "フランス",
    work: "草上の昼食（1863年、オルセー美術館）",
    era: "印象派・ポスト印象派",
    iconColor: "#fed9a6"
  },
  {
    name: "エドガー・ドガ",
    date: "1834 - 1917",
    country: "フランス",
    work: "踊り子たち（1874年、オルセー美術館）",
    era: "印象派・ポスト印象派",
    iconColor: "#fed9a6"
  },
  {
    name: "ポール・セザンヌ",
    date: "1839 - 1906",
    country: "フランス",
    work: "サント＝ヴィクトワール山（1885年頃、オルセー美術館）",
    era: "印象派・ポスト印象派",
    iconColor: "#fed9a6"
  },
  {
    name: "クロード・モネ",
    date: "1840 - 1926",
    country: "フランス",
    work: "睡蓮（1916年、西洋美術館、オランジュリー美術館）",
    era: "印象派・ポスト印象派",
    iconColor: "#fed9a6"
  },
  {
    name: "ピエール＝オーギュスト・ルノワール",
    date: "1841 - 1919",
    country: "フランス",
    work: "ムーラン・ド・ラ・ギャレットの舞踏会（1876年、オルセー美術館）",
    era: "印象派・ポスト印象派",
    iconColor: "#fed9a6"
  },
  {
    name: "ポール・ゴーギャン",
    date: "1848 - 1903",
    country: "フランス",
    work: "浜辺のタヒチの女たち（1891年、オルセー美術館）",
    era: "印象派・ポスト印象派",
    iconColor: "#fed9a6"
  },
  {
    name: "フィンセント・ファン・ゴッホ",
    date: "1853 - 1890",
    country: "オランダ",
    work: "星月夜（1889年、MoMA ニューヨーク近代美術館）",
    era: "印象派・ポスト印象派",
    iconColor: "#fed9a6"
  },

  // 近代〜現代美術
  {
    name: "ワシリー・カンディンスキー",
    date: "1866 - 1944",
    country: "ロシア",
    work: "コンポジションVII（1913年、トレチャコフ美術館）",
    era: "近代〜現代美術",
    iconColor: "#ffffcc"
  },
  {
    name: "アンリ・マティス",
    date: "1869 - 1954",
    country: "フランス",
    work: "ダンス（1910年、エルミタージュ美術館）",
    era: "近代〜現代美術",
    iconColor: "#ffffcc"
  },
  {
    name: "パブロ・ピカソ",
    date: "1881 - 1973",
    country: "スペイン",
    work: "ゲルニカ（1937年、ソフィア王妃芸術センター）",
    era: "近代〜現代美術",
    iconColor: "#ffffcc"
  },
  {
    name: "ジョルジュ・ブラック",
    date: "1882 - 1963",
    country: "フランス",
    work: "マンドリンを持つ女（1910年、国立西洋美術館）",
    era: "近代〜現代美術",
    iconColor: "#ffffcc"
  },
  {
    name: "マルセル・デュシャン",
    date: "1887 - 1968",
    country: "フランス",
    work: "泉（1917年、複数レプリカ）",
    era: "近代〜現代美術",
    iconColor: "#ffffcc"
  },
  {
    name: "ジョアン・ミロ",
    date: "1893 - 1983",
    country: "スペイン",
    work: "コンステレーションシリーズ（1940年頃、ミロ財団）",
    era: "近代〜現代美術",
    iconColor: "#ffffcc"
  },
  {
    name: "サルバドール・ダリ",
    date: "1904 - 1989",
    country: "スペイン",
    work: "記憶の固執（1931年、MoMA ニューヨーク近代美術館）",
    era: "近代〜現代美術",
    iconColor: "#ffffcc"
  },
  {
    name: "ロイ・リキテンスタイン",
    date: "1923 - 1997",
    country: "アメリカ",
    work: "ワァーム！（1963年、テート・モダン）",
    era: "近代〜現代美術",
    iconColor: "#ffffcc"
  },
  {
    name: "アンディ・ウォーホル",
    date: "1928 - 1987",
    country: "アメリカ",
    work: "マリリン・モンロー（1962年、MoMAなど）",
    era: "近代〜現代美術",
    iconColor: "#ffffcc"
  },
  {
    name: "草間彌生",
    date: "1929 - 現在",
    country: "日本",
    work: "かぼちゃ（1994年、草間彌生美術館、ポーラ美術館）",
    era: "近代〜現代美術",
    iconColor: "#ffffcc"
  },
  {
    name: "ゲルハルト・リヒター",
    date: "1932 - 現在",
    country: "ドイツ",
    work: "アトラス（1962年以降、リヒター・アーカイブ）",
    era: "近代〜現代美術",
    iconColor: "#ffffcc"
  },
  {
    name: "荒川修作",
    date: "1936 - 2010",
    country: "日本",
    work: "意味のメカニズム（1984年、豊島美術館）",
    era: "近代〜現代美術",
    iconColor: "#ffffcc"
  },
  {
    name: "李禹煥",
    date: "1936 - 現在",
    country: "韓国",
    work: "関係項シリーズ（1971年以降、李禹煥美術館）",
    era: "近代〜現代美術",
    iconColor: "#ffffcc"
  },
  {
    name: "青島千穂",
    date: "1974 - 現在",
    country: "日本",
    work: "青の風景（2015年、東京都現代美術館）",
    era: "近代〜現代美術",
    iconColor: "#ffffcc"
  }
]; 