import { Platform, SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import Header from './src/components/Header';
import IMCForm from './src/components/IMCForm';

export default function App() {
  return (
    <SafeAreaView>
      <View style={style.appContainer}>
        <Header />
        <IMCForm />
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  appContainer: {
    paddingTop: (Platform.OS === 'android') ? StatusBar.currentHeight : 0,
    backgroundColor: '#222026',
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  }
})
