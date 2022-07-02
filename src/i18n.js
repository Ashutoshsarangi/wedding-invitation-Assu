import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  hindi: {
    translation: {
      "Save the Date": "तिथि को रक्षित करें",
      "Bride Name": "आशुतोष साधंगी",
      "and": "तथा",
      "Groom Name": "सुभलक्मी मिश्रा",
      "Are Getting Married": "शादी कर रहे हैं",
      "on": "दिन",
      "mrg Date": '17/01/2023',
      "remaining Days": 'दिन बाकी हैं'
    }
  },
  en: {
    translation: {
      "Save the Date": "SAVE THE DATE",
      "Bride Name": "Ashutosh Sarangi",
      "and": "&",
      "Groom Name": "Subhalaxmi Mishra",
      "Are Getting Married": "Are Getting Married",
      "on": "on",
      "mrg Date": '17/01/2023',
      "remaining Days": 'Days to Go'
    }
  },
  odia: {
    translation: {
      "Save the Date": "ତାରିଖ ଲେଖିନିଅନ୍ତୁ",
      "Bride Name": "ଆଶୁତୋଷ ଷଢଙ୍ଗୀ",
      "and": "ଏବଂ",
      "Groom Name": "ଶୁଭଲକ୍ଷ୍ମୀ ମିଶ୍ର",
      "Are Getting Married": "ବିବାହ କରୁଛନ୍ତି",
      "on": "ଦିନ",
      "mrg Date": '୧୭/୦୧/୨୦୨୩',
      "remaining Days": ' ଦିନ ବାକି ରହିଲା '
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;