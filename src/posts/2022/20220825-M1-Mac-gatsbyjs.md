---
title: "M1 MacbookでのGatsby開発"
date: "2022-08-20"
tags: ["Obsidian"]
emoji: "💻"
---


## ラップトップ買い換えたら

M1 Macbookに買い換えたし、ブログでも書こうかと思い。

```shell
npm run develop
```

すると

```shell
“ERR! sharp Prebuilt libvips 8.10.5 binaries are not yet available for darwin-arm64v8”
```

というエラーをいただいた。

ググって同じ状況の記事を発見。

- [How to fix “ERR! sharp Prebuilt libvips 8.10.5 binaries are not yet available for darwin-arm64v8”](https://joseph-pereniguez.medium.com/how-to-fix-err-sharp-prebuilt-libvips-8-10-5-binaries-are-not-yet-available-for-darwin-arm64v8-1d29d538e932)

こちらを参考にしながら、エラーと格闘すると、sharpの問題を解決したっぽいが、今度は`react-icons`で一生止まる問題発生。

- [npm stuck too long on apple new m1 computer #2306](https://github.com/npm/cli/issues/2306)

こちらの記事を参考にしてnodeのバージョンを14にしてみた。

これで解決しました。

これで環境構築されたのでブログ記事を積極的に書いていきたい。





