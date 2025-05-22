# 芸術家名鑑

各国の芸術家をタイムラインで見られるウェブサイトです。同じ時代に生きた芸術家たちを簡単に確認することができます。

## 特徴

* 年代、時代別のタイムラインで芸術家が列挙され、一覧で確認できます
* 各芸術家それぞれの生没年が確認できます
* 各芸術家の代表作とその発表年、所蔵場所を確認できます

## 技術スタック

* React
* Vite
* react-vertical-timeline-component (タイムラインの描画)
* react-icons (アイコン表示)

## 環境設定

### 必要条件

* Node.js (v20以上)
* npm (v9以上)

### インストール

1. リポジトリをクローン
```bash
git clone https://github.com/machi3machi/artists-timeline.git
cd artists-timeline
```

2. 依存パッケージのインストール
```bash
npm install
```

## ローカルでの起動方法

開発サーバーを起動するには、以下のコマンドを実行します：

```bash
npm run dev
```

ブラウザで `http://localhost:5173` にアクセスすると、アプリケーションが表示されます。

## ビルド方法

本番環境用のビルドを作成するには、以下のコマンドを実行します：

```bash
npm run build
```

ビルドされたファイルは `dist` ディレクトリに生成されます。

## デプロイ

mainブランチへのプッシュ時に、GitHub Actionsによって自動的にビルドとデプロイが行われます。
デプロイされたサイトは [https://machi3machi.github.io/artists-timeline/](https://machi3machi.github.io/artists-timeline/) で確認できます。

## ライセンス

MIT License
