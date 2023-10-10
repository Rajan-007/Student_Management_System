import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View ,TouchableOpacity,handlePress ,lineargradient} from 'react-native';
import { LinearGradient } from 'expo';

export default function App() {
  return (
    <View className=" flex min-h-screen bg-white">
      <Text className='mt-40 px-8 text-5xl font-bold'>Login</Text>
      <Text className=' pl-8 text-lg '>Please sign in to continue </Text>
      <TextInput placeholder='Email id' className="w-80 border bg-slate-100 rounded ml-10 mt-20 px-2 py-2 flex flex-row justify-center border-black" />
      <TextInput secureTextEntry placeholder='Password' className="w-80 bg-slate-100 border rounded ml-10 mt-16 px-2 py-2 flex flex-row justify-center border-black" />
      <TouchableOpacity onPress={handlePress}>
        <View>
          <Text className=' pl-60 pt-6 text-md font-bold '>Forgot password ? </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity className="mx-20 mt-10 " onPress={handlePress}>
        <View >
          <Text className="py-4 font-bold text-center text-lg bg-blue-500 rounded-full">Press Me</Text>
        </View>
      </TouchableOpacity>
      <View className='flex-1 flex-row justify-center items-end'>
        <Text>Don't have an account ?</Text>
        <TouchableOpacity>
        <Text className='font-bold'>SignUp</Text>
        </TouchableOpacity>
      </View>
      <LinearGradient
        colors={['#4c669f', '#3b5998', '#192f6a']}
        style={{ padding: 15, alignItems: 'center', borderRadius: 5 }}>
          <Text
            style={{
              backgroundColor: 'transparent',
              fontSize: 15,
              color: '#fff',
            }}>
            Sign in with Facebook
          </Text>
      </LinearGradient>
      <StatusBar style="auto" />
    </View>
  );
}


