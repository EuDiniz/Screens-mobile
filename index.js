@format 

import { appRegistry }  from 'react-native';
import App from  './App/screens/navigator';
import { name as appName} from './app.json';

appRegistry.registerComponent(appName, () => App);