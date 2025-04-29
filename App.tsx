
import { ThemeProvider } from 'styled-components/native';
import {useFonts, Nunito_400Regular, Nunito_700Bold} from "@expo-google-fonts/nunito"

import { Home } from './src/screens/Home';
import theme from './src/theme';
import { Loading } from '@components/Loading';
import { StatusBar } from 'react-native';
import { Statistic } from '@screens/Statistic';

export default function App() {

  const [fontsLoaded] = useFonts({Nunito_400Regular, Nunito_700Bold})


  return (
    <ThemeProvider theme={theme}>

      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <Statistic/> : <Loading/>}

    </ThemeProvider>
  );
}

