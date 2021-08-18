import { Platform, NativeModules } from 'react-native';
import I18n from 'i18n-js';
import enUS from './en-US';
import ptBR from './pt-BR';
import I18nLocal from './i18nLocal';
import es from './es';

// A normalização é necessária pois no android e no iOS o retorno do mesmo idioma pode ser diferente
// Exemplo: no iOS podemos receber pt_US e no android pt_BR para o idioma português brasileiro.
const normalizeLanguage = {
  en_US: 'en_US',
  pt_BR: 'pt_BR',
  en: 'en_US',
  pt_US: 'pt_BR',
  es_US: 'es',
  es_ES: 'es',
};

const getLanguageByDevice = () =>
  Platform.OS === 'ios'
    ? NativeModules.SettingsManager.settings.AppleLocale
    : NativeModules.I18nManager.localeIdentifier;

I18n.translations = {
  en_US: enUS,
  pt_BR: ptBR,
  es,
};

const setI18nLanguage = () => {
  const language = normalizeLanguage[getLanguageByDevice()];
  const iHaveThisLanguage = Object.prototype.hasOwnProperty.call(
    I18n.translations,
    language
  );

  I18n.locale = iHaveThisLanguage ? language : 'en_US';
};

setI18nLanguage();

const translate = (key) => I18n.t(`${key}`);

export { translate, I18nLocal };
