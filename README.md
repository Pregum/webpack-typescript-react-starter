# Summary

ReactをwebpackとTypescriptを用いてVisual Studio Codeでデバックできる環境を作成したリポジトリです。

src/以下にTypescriptで実装したコードをwebpackを使用してJavascriptにトランスコンパイラしています。

Visual Studio Code上でブレークポイントを張って実際にデバックすることができます。

## Requirement

* npm (Confirmed in version 6.14.7)
* Visual Studio Code (Confirmed in version 1.47.3)

## Usage

* 共通
  1. `npm install`コマンドを実行してください。

* ブラウザ確認用
  1. クローンしたディレクトリで`npm run start` コマンドを実行し、ローカルサーバを起動します。
  1. Visual Studio Code上でindex.tsxを開いて、ブレークポイントを張ります。
  1. Visual Studio Code上でF5を入力し、デバックを開始します。
  1. `http://localhost:8080`を開くと"Hello World"と表示されます。

* 開発用ビルド
  1. クローンしたディレクトリで`npm run build`コマンドを実行します。
  1. dist/以下に出力されます。

* 本番用ビルド
  1. クローンしたディレクトリで`npm run build:prod`コマンドを実行します。
  1. dist/以下に出力されます。

## License

[MIT license](https://opensource.org/licenses/MIT)

* 参考サイト
  * https://qiita.com/IgnorantCoder/items/d26083d9f886ca66d4ae
