import { createI18n, type I18nOptions } from 'vue-i18n';

async function createI18nInstance() {
    const options: I18nOptions = {
        locale: 'zn',
        fallbackLocale: 'zn',
        messages: {
            en: await import('../locales/en.json').then((module) => module.default),
            zh: await import('../locales/zh.json').then((module) => module.default)
        }
    };
    const i18n = createI18n(options);
    return i18n;
}

export const i18n = createI18nInstance();

export default i18n;