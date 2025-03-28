import { StyleSheet} from 'react-native';


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
    },
    loginBox: {
      width: '90%', // Limit width
      maxWidth: 400, // Prevents full-screen stretching
      backgroundColor: '#f8f9fa',
      padding: 20,
      borderRadius: 10,
      shadowColor: '#000',
      shadowOpacity: 0.2,
      shadowRadius: 5,
      elevation: 5,
    },
    headerContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 20,
    },
    title: {
      fontSize: 23,
      fontWeight: 'bold',
    },
    registerText: {
      fontSize: 16,
      color: '#007BFF',
      fontWeight: 'bold',
    },
    input: {
      width: '100%',
      height: 50,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      paddingHorizontal: 10,
      marginBottom: 15,
      backgroundColor: '#fff',
    },
    button: {
      width: '100%',
      height: 50,
      backgroundColor: '#007BFF',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5,
    },
    buttonText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
    },
  });
  


  export default styles;