import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  title: {
    color: '#fff',
    fontSize: 30,
    fontWeight: '700',
    marginBottom: 40,
  },
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    paddingTop: 40,
  },
  containerBackground: {
    width: '100%',
    height: '100%',
  },
  form: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  formContainer: {
    width: 300,
    display: 'flex',
    alignItems: 'center',
  },
  formLabels: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    marginRight: 10,
  },
  formInputs: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    flex: 1,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
    lineHeight: 40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  buttonSeparator: {
    width: 40,
    height: 2,
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderRadius: 10,
  },
  buttonSeparatorContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    marginTop: -20,
  },
  forgot: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});
