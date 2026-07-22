/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly PUBLIC_SURVEY_BIRTHDAY_URL: string
  readonly PUBLIC_NOSURVEY_BIRTHDAY_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
