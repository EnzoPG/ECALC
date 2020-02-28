import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent'
  },
  btnFlex: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  btnStyle: {
    fontSize: 40,
    height: Dimensions.get('window').width / 4,
    width: Dimensions.get('window').width / 4,
    padding: 20,
    backgroundColor: '#3d5755',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#000000',
    color: '#fff'
  },
  operationButton: {
    color: '#fff',
    backgroundColor: '#faB231'
  },
  buttonDouble: {
    width: (Dimensions.get('window').width / 4) * 2
  },
  buttonTriple: {
    width: (Dimensions.get('window').width / 4) * 3
  }
});
