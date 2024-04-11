/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly HN_API: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
