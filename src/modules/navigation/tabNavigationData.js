import HomeScreen from '../home/HomeViewContainer';
import CalendarScreen from '../calendar/CalendarViewContainer';
import GridsScreen from '../grids/GridsViewContainer';
import PagesScreen from '../pages/PagesViewContainer';
import ComponentsScreen from '../components/ComponentsViewContainer';
import { Feather } from '@expo/vector-icons';


const iconHome = require('../../../assets/images/tabbar/home.png');
const iconCalendar = require('../../../assets/images/tabbar/calendar.png');
const iconGrids = require('../../../assets/images/tabbar/grids.png');
const iconPages = require('../../../assets/images/tabbar/pages.png');
const iconReporting = require('../../../assets/images/tabbar/chart.png');
const iconComponents = require('../../../assets/images/tabbar/components.png');
const iconSettings = require('../../../assets/images/tabbar/settings.png');


const tabNavigationData = [
  {
    name: 'Home',
    component: HomeScreen,
    icon: iconHome,
  },
  {
    name: 'Calendar',
    component: CalendarScreen,
    icon: iconCalendar,
  },
  {
    name: 'Ride',
    component: GridsScreen,
    icon: iconGrids,
  },
  {
    name: 'Reporting',
    component: PagesScreen,
    icon: iconReporting,
  },
  {
    name: 'Settings',
    component: ComponentsScreen,
    icon: iconSettings,
  },
];

export default tabNavigationData;
