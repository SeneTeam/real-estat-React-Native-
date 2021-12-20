import { StyleSheet } from 'react-native';
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
    color: 'white'
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  loginTitle: {
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
    paddingTop: '2%',
    paddingBottom: '3%'
  },
  subText: {
    fontSize: 16,
    color: '#ACB7C2',
    marginTop: '2%',
    marginBottom: '2%',
  },
  subTextForgot: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: '2%',
    marginBottom: '2%',
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
    backgroundColor: 'white'
  },
  loginVerticalPart: {
    alignItems: 'center',
    flex: 1,
    display: 'flex',
    justifyContent: 'center'
  },
  loginForm: {
    // flex: 1,
    display: 'flex',
    justifyContent: 'center',
    paddingLeft: '5%',
    paddingRight: '4%',
  },
});