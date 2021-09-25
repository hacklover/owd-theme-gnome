// desktop component
import Desktop from './components/Desktop.vue'

// desktop modules
import DesktopLauncher from "./modules/DesktopLauncher";
import DesktopNotification from "./modules/DesktopNotification";
import DesktopStatus from "./modules/DesktopStatus";

export default {
  name: 'gnome',

  component: Desktop,

  modules: [
    DesktopLauncher,
    DesktopNotification,
    DesktopStatus
  ],

  options: {
    Logo: {
      enabled: true
    },
    Dock: {
      enabled: true
    },
    Window: {
      icons: {
        minimize: 'mdi-window-minimize',
        maximize: 'mdi-window-maximize',
        fullscreen: 'mdi-fullscreen',
        close: 'mdi-window-close',
        external: 'mdi-open-in-new'
      }
    },
    SystemBar: {
      enabled: true,
      position: 'top',
      icons: {
        'battery': 'mdi-battery',
        'battery-0': 'mdi-battery-alert-variant-outline',
        'battery-20': 'mdi-battery-20',
        'battery-40': 'mdi-battery-40',
        'battery-60': 'mdi-battery-60',
        'battery-80': 'mdi-battery-80',
        'battery-100': 'mdi-battery'
      }
    },
    ApplicationMenu: {
      categoryAppsTriggerType: 'mouseover'
    },
    NotificationMenu: {
      menu: {
        dateFormat: 'MMM D',
        timeFormat: 'HH:mm'
      },
      calendar: {
        header: {
          dayOfWeekFormat: 'dddd',
          dateFormat: 'MMMM D YYYY'
        }
      },
      floatingNotification: {
        max: 2,
        duration: 8000
      }
    }
  }
}