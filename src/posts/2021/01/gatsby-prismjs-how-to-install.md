---
title: "Gatsby.js: Prismjsプラグインで読みやすいコードを表示する"
date: "2021-01-11"
tags: ["Gatsby"]
---

## 目標
このように、ブログポストに参考コードを入れたい時にわかりやすい様にテーマを適応したい。

```javascript:title=test.js
const test = ()=>{
return true
}
```

[prismjs]というライブラリのGatsbyプラグインを用いる。
ファイルの名前の表示したいのでgatsby-remark-code-titlesプラグインも。

## gatsby-remark-prismjsのインストール

```console:title=terminal
$ npm install prismjs gatsby-remark-prismjs gatsby-remark-code-titles
```


### gatsby-configの設定

```javascript{3}:title=gatsby-config.js
//...中略
{
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-code-titles",
          "gatsby-remark-prismjs",
          {
//...中略
```
この時、gatsby-remark-code-titleはgatsby-remark-prismjsより先に記入する必要がある。
Prismjsは様々なテーマを提供していて、公式サイトで確認することができる。

### テーマの適用

``` javascript:title=blog-template.js
import "prismjs/themes/prism-tomorrow.css"
```

以上で導入は完了。しかしこの状態はあまり美しくないのでCSSを少し修正する必要がある。

## gatsby-remark-code-titlesのスタイル
素の状態だとあまりにも素っ気ないので、CSSを追加した。
最初はブログテンプレートのCSSに記入したが、なぜだか読み込まれなかったのでglobal.cssに追加した。

``` css:title=global.css
.gatsby-code-title {
  background: #5555;
  color: #ffffff;
  margin-bottom: -0.7em;
  padding: 1rem;
  font-size: 0.9em;
  line-height: 0.3;
  font-weight: 800;
  border-radius: 5px 5px 0 0;
  display: table;
}
```