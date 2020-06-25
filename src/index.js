import ThaiAddress from "./ThaiAddress";
import VueThailand from "./VueThailand.vue";
import database from "../utils/db/thailand.json";
function plugin(Vue, options = {}) {
  Vue.component("VueThailand", VueThailand);
  const data = database;
  Vue.prototype.$vueThailand = new ThaiAddress(data);
}

// Install by default if using the script tag
if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(plugin);
}

export default plugin;

const version = "__VERSION__";
// Export all components too
export { VueThailand, version };
