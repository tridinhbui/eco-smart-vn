import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import NAVBAR_EN from '../i18n/data/en/navbar.json'
import NAVBAR_VN from '../i18n/data/vn/navbar.json'

import BANNER_HOME_EN from '../i18n/data/en/homeLng/bannerLng.json'
import BANNER_HOME_VN from '../i18n/data/vn/homeLng/bannerLng.json'

import PROCESS_HOME_EN from '../i18n/data/en/homeLng/processLng.json'
import PROCESS_HOME_VN from '../i18n/data/vn/homeLng/processLng.json'

import ADVISORY_HOME_EN from '../i18n/data/en/homeLng/advisoryLng.json'
import ADVISORY_HOME_VN from '../i18n/data/vn/homeLng/advisoryLng.json'

import ACHIEVE_HOME_EN from '../i18n/data/en/homeLng/achieveLng.json'
import ACHIEVE_HOME_VN from '../i18n/data/vn/homeLng/achieveLng.json'

import HEADERS_HOME_EN from '../i18n/data/en/homeLng/headersLng.json'
import HEADERS_HOME_VN from '../i18n/data/vn/homeLng/headersLng.json'

import PRODUCTS_HOME_EN from '../i18n/data/en/homeLng/productsLng.json'
import PRODUCTS_HOME_VN from '../i18n/data/vn/homeLng/productsLng.json'

import FOOTER_EN from '../i18n/data/en/footer.json'
import FOOTER_VN from '../i18n/data/vn/footer.json'

const resources = {
    en: {
        translation: {
            navbar: NAVBAR_EN,
            bannerHome: BANNER_HOME_EN,
            processHome: PROCESS_HOME_EN,
            advisoryHome: ADVISORY_HOME_EN,
            achieveHome: ACHIEVE_HOME_EN,
            headersHome: HEADERS_HOME_EN,
            productsHome: PRODUCTS_HOME_EN,
            footer: FOOTER_EN
        }
    },
    vn: {
        translation: {
            navbar: NAVBAR_VN,
            bannerHome: BANNER_HOME_VN,
            processHome: PROCESS_HOME_VN,
            advisoryHome: ADVISORY_HOME_VN,
            achieveHome: ACHIEVE_HOME_VN,
            headersHome: HEADERS_HOME_VN,
            productsHome: PRODUCTS_HOME_VN,
            footer: FOOTER_VN
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

