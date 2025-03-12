import { library, config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faArrowLeft, fas } from "@fortawesome/free-solid-svg-icons";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";

config.autoAddCss = false;

// You can add your icons directly in this plugin. See other examples for how you
// can add other styles or just individual icons.
library.add(fas, faAngleUp, faAngleDown, faArrowLeft);

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("font-awesome-icon", FontAwesomeIcon);
});
