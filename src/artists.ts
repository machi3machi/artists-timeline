export interface Artist {
  name: string;
  date: string;
  country: string;
  work: string;
  era: string;
  iconColor: string;
}

export const artists: Artist[] = [
  {
    name: "ジョット・ディ・ボンドーネ",
    date: "1267年頃 - 1337年",
    country: "イタリア",
    work: "スクロヴェーニ礼拝堂のフレスコ画",
    era: "ロマネスク・ゴシック期",
    iconColor: "#b3cde0"
  },
  {
    name: "レオナルド・ダ・ヴィンチ",
    date: "1452年 - 1519年",
    country: "イタリア",
    work: "モナ・リザ、最後の晩餐",
    era: "ルネサンス",
    iconColor: "#fbb4ae"
  }
  // 他のアーティストデータも同様に追加
]; 