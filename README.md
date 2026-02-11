# Swift AWS Lambda Example

AWS CDK を使用して Swift で記述した AWS Lambda 関数をデプロイするサンプルプロジェクトです。

## 概要

このプロジェクトは、Swift AWS Lambda Runtime を使用して構築された Lambda 関数を、AWS CDK (TypeScript) でインフラストラクチャとしてコード化しデプロイする方法を示しています。

### 特徴

- Swift 6.2+ で記述された Lambda 関数
- Custom Runtime (provided.al2023) 上で動作
- ARM64 アーキテクチャ対応
- Function URL を使用した HTTP エンドポイント
- CloudWatch Logs 統合

## 技術スタック

| コンポーネント | 技術 |
|-------------|------|
| Lambda 言語 | Swift 6.2+ |
| インフラストラクチャ | AWS CDK (TypeScript) |
| Lambda Runtime | Custom Runtime (provided.al2023) |
| アーキテクチャ | ARM64 |
| ビルドツール | Swift Package Manager |

### 主要依存関係

**Swift:**
- [swift-aws-lambda-runtime](https://github.com/awslabs/swift-aws-lambda-runtime) 2.0.0+
- [swift-aws-lambda-events](https://github.com/awslabs/swift-aws-lambda-events) 1.0.0+

**CDK:**
- aws-cdk-lib 2.238.0+
- constructs 10.4.5+

## 前提条件

- macOS 15+ または Linux
- Swift 6.2 以降
- Node.js 20+ と pnpm/npm
- AWS CLI (設定済み)
- AWS CDK CLI

## プロジェクト構造

```
.
├── Sources/
│   └── LambdaExample/
│       └── LambdaExample.swift    # Swift Lambda ハンドラー
├── lib/
│   └── swift-aws-lambda-example-stack.ts  # CDK スタック定義
├── bin/
│   └── swift-aws-lambda-example.ts        # CDK アプリケーションエントリーポイント
├── Package.swift                  # Swift パッケージマニフェスト
├── cdk.json                       # CDK 設定
├── package.json                   # Node.js 依存関係
└── tsconfig.json                  # TypeScript 設定
```

## セットアップ

### 1. 依存関係のインストール

```bash
# Swift パッケージの解決
swift package resolve

# Node.js 依存関係のインストール
npm install
```

### 2. AWS CDK のブートストラップ（初回のみ）

```bash
npx cdk bootstrap
```

## ビルドとデプロイ

### Swift Lambda のビルド

```bash
swift build --product LambdaExample
```

ビルドが成功すると、`.build/plugins/AWSLambdaPackager/outputs/AWSLambdaPackager/LambdaExample/LambdaExample.zip` にデプロイ用の ZIP ファイルが生成されます。

### CDK のビルド

```bash
npm run build
```

### デプロイ

```bash
npx cdk deploy
```

デプロイが完了すると、Function URL が出力されます。

## API 仕様

### エンドポイント

デプロイ後、Function URL を使用して Lambda 関数にアクセスできます。

### リクエスト

```json
{
  "name": "string (optional)",
  "age": "number (optional)"
}
```

### レスポンス

```json
{
  "greetings": "string"
}
```

### 使用例

```bash
curl -X POST <Function-URL> \
  -H "Content-Type: application/json" \
  -d '{"name": "Swift", "age": 25}'
```

**レスポンス:**
```json
{
  "greetings": "Hello Swift. You look younger than your age."
}
```

## 開発コマンド

### Swift

```bash
# ビルド
swift build

# リリースビルド
swift build -c release
```

### CDK

```bash
# TypeScript のコンパイル
npm run build

# ファイル監視モード
npm run watch

# テスト実行
npm run test

# コードのリント
npm run lint

# リントの自動修正
npm run lint-fix

# CloudFormation テンプレートの生成
npx cdk synth

# デプロイ済みとの差分確認
npx cdk diff

# スタックの削除
npx cdk destroy
```

## 設定

### Lambda 関数の設定

`lib/swift-aws-lambda-example-stack.ts` で以下をカスタマイズできます：

- `functionName`: Lambda 関数名
- `retention`: ログ保持期間（デフォルト: 1日）
- `architecture`: アーキテクチャ（デフォルト: ARM64）

### Swift パッケージの設定

`Package.swift` で依存関係やビルド設定を変更できます。

## ライセンス

MIT

## 参考資料

- [Swift AWS Lambda Runtime](https://github.com/awslabs/swift-aws-lambda-runtime)
- [AWS CDK Documentation](https://docs.aws.amazon.com/cdk/)
- [Swift on AWS Lambda](https://aws.amazon.com/blogs/compute/introducing-swift-on-aws-lambda/)
