interface ImportMetaEnv {
    readonly VITE_MICROCMS_API_KEY: string;
    readonly VITE_SERVICE_DOMAIN: string;
    // ...ここに追加していく
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }