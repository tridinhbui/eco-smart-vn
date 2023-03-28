import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import NAVBAR_EN from '../i18n/data/en/navbar.json'
import NAVBAR_VN from '../i18n/data/vn/navbar.json'

import BANNER_HOME_EN from '../i18n/data/en/homeLng/bannerLng.json'
import BANNER_HOME_VN from '../i18n/data/vn/homeLng/bannerLng.json'

import PROCESS_HOME_EN from '../i18n/data/en/homeLng/processLng.json'
import PROCESS_HOME_VN from '../i18n/data/vn/homeLng/processLng.json'

const resources = {
    en: {
        translation: {
            navbar: NAVBAR_EN,
            bannerHome: BANNER_HOME_EN,
            processHome: PROCESS_HOME_EN
        }
    },
    vn: {
        translation: {
            navbar: NAVBAR_VN,
            bannerHome: BANNER_HOME_VN,
            processHome: PROCESS_HOME_VN
        }
    }
}

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: 'vn',
        fallbackLng: 'vn',
        interpolation: {
            escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
        }
    });

