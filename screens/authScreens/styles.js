import { StyleSheet, StatusBar } from 'react-native';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white'
  },
  btnStyle: {
    backgroundColor: '#30C0E9',
    padding: 15,
    borderRadius: 23,
    textAlign: 'center',
    color: 'white',
    fontSize: 18
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000'
  },
  loginTitle: {
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
    paddingTop: '2%',
    paddingBottom: '3%',
    color: '#000'
  },
  subText: {
    fontSize: 18,
    color: '#ACB7C2',
    marginTop: '2%',
    marginBottom: '2%',
    lineHeight: 30
  },
  subTextForgot: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: '2%',
    marginBottom: '2%',
    color: '#ACB7C2',
  },
  textView: {
    flex: 4,
    width: '100%',
    backgroundColor: 'white'
  },
  subTextView: {
    // flex: 1,
    width: '100%',
    paddingLeft: '7%',
    paddingRight: '7%',
    textAlign: 'center',
  },
  subTextView1: {
    flex: 1,
    width: '100%',
    paddingLeft: '7%',
    paddingRight: '7%',
    textAlign: 'center',
  },
  btnView: {
    flex: 1,
    width: '100%',
    paddingLeft: '7%',
    paddingRight: '7%',
    display: 'flex',
    justifyContent: 'center'
  },
  imageWrap: {
    flex: 6,
    marginTop: 0,
    width: '100%',
  },
  image: {
    flex: 1,
    resizeMode: 'stretch'
  },
  buttonContainer: {
    borderRadius: 23,
  },
  login_btnStyle: {
    color: '#30C0E9',
    fontSize: 16,
    paddingTop: '2%',
    paddingBottom: '2%',
  },
  loginWrap: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: StatusBar.currentHeight,
    padding: 10,
  },
  containerDiv: {
    flex: 1
  },
  loginVerticalPart: {
    alignItems: 'center',
    flex: 1,
    display: 'flex',
    justifyContent: 'center'
  },
  loginForm: {
    // flex: 1,
    marginBottom: 15,
    display: 'flex',
    justifyContent: 'center',
    paddingLeft: '5%',
    paddingRight: '4%',
  },
  err_txt: {
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 12,
    paddingRight: 12,
    fontSize: 12,
    color: 'red'
  }
});