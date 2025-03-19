import { library, config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faArrowLeft,
  faGripLines,
  fas,
} from "@fortawesome/free-solid-svg-icons";
import { faAngleUp, faAngleDown, faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import {
  fab,
  faGithub,
  faInstagram,
  faLinkedin,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";

config.autoAddCss = false;

// You can add your icons directly in this plugin. See other examples for how you
// can add other styles or just individual icons.
library.add(
  fas,
  fab,
  faAngleUp,
  faAngleDown,
  faArrowLeft,
  faGripLines,
  faArrowUpRightFromSquare,
  faInstagram,
  faGithub,
  faLinkedin,
  faPinterest,
);

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("font-awesome-icon", FontAwesomeIcon);
});
