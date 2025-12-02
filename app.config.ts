import 'dotenv/config';

export default {
  expo: {
    name: "carteira_acoes",
    slug: "carteira_acoes",
    version: "1.0.0",
    extra: {
      BASE_URL: process.env.BASE_URL,
      BASE_ANDROID_URL: process.env.BASE_ANDROID_URL
    }
  }
};
