# Vite＋Vue3 を利用したテストプロジェクト

Vue3 で作ったコンポーネントの単体テスト・E2Eテストを学ぶためのサンプルプロジェクトです。

## 推奨IDE

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## 事前準備

```sh
npm install
```

### コンパイル・実行

```sh
npm run dev
```

### 製品ビルド(タイプチェックもします)

```sh
npm run build
```

### Vitest を利用した単体テスト

```sh
npm run test:unit
```

### Playwright を利用したE2Eテスト

```sh
# 最初にブラウザをインストール
npx playwright install

# e2e テスト実行
npm run test:e2e
# Chromium だけで実行
npm run test:e2e -- --project=chromium
# 特定ファイルだけ実行
npm run test:e2e -- tests/example.spec.ts
# デバッグモードで実行
npm run test:e2e -- --debug
```

### ESLint を利用した Lint チェック

```sh
npm run lint
```
