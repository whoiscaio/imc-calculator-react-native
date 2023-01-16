import { Platform, SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import Header from './src/components/Header';

export default function App() {
  return (
    <SafeAreaView>
      <View style={style.appContainer}>
        <Header />
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  appContainer: {
    paddingTop: (Platform.OS === 'android') ? StatusBar.currentHeight : 0,
    backgroundColor: '#222026',
    height: '100%'
  }
})
