import { createI18n } from 'vue-i18n';
import en from './locales/en.json';
import ms from './locales/ms.json';
import zh from './locales/zh.json';



const messages = {
	en,
	ms,
	zh


};

const i18n = createI18n({
	locale: 'en', // set locale
	fallbackLocale: 'en', // set fallback locale
	messages, // set locale messages
});

export default i18n;
