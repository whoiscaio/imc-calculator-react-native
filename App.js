import { Platform, SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import Header from './src/components/Header';
import IMCForm from './src/components/IMCForm';
import WeightClassification from './src/components/WeightClassification';

export default function App() {
  return (
    <SafeAreaView>
      <View style={style.appContainer}>
        <Header />
        <View style={style.whiteWrapper}>
          <IMCForm />
          <WeightClassification />
        </View>
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
  },
  whiteWrapper: {
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: '#fff',
    paddingHorizontal: 25,
    paddingVertical: 30,
    flex: 1
  }
})
