import {Text,View,TouchableOpacity, TextInput, StyleSheet,ScrollView, ImageBackground,Image} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

const Home = () => {
  return (
    <View style={Style.wholepage}>
        <ImageBackground source={require('../assets/home/home_bg.png')} style={Style.bgimage}>
            <View style={Style.bgdiv}>
                <Text style={Style.bgimageText}>Home</Text>
            </View>
        </ImageBackground>
        <View style={Style.scrollContainer}>
            <View style={Style.textboxContainer}>
                <TextInput style={Style.textbox} placeholder="Search here..."/>
                <Icon name="search" size={20} color="black" />
            </View>
            <ScrollView style={card.scrollcontainer} contentContainerStyle={{ alignItems: 'center' }}>
                <TouchableOpacity onPress={()=>{console.log('pressed')}}>
                    <View style={card.cardcontainer}>
                        <Text style={{fontSize:20,fontWeight:'bold'}}>Computer Science Engineering</Text>
                        <View style={card.content}>
                            <View style={card.leftside}>
                                <View style={card.dataContainer}>
                                    <Text>No. of students</Text>
                                    <Text style={{fontSize:20,fontWeight:'bold'}}>35</Text>
                                </View>
                            </View>
                            <Image style={card.rightside} source={require('../assets/home/sample_1.png')}/>
                        </View>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        </View>
    </View>
  )
}
const card= StyleSheet.create({
    scrollcontainer:{
        width:'100%',
        display:'flex',
        marginTop:40
    },
    cardcontainer:{
        display:'flex',
        width: "90%",
        backgroundColor:'#EFEFEF',
        padding:'10%',
        flexDirection:'column',
        borderRadius:13
    },
    dataContainer:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#F7F7F7',
        flexShrink:0,
        borderRadius:10,

    },
    content:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    leftside:{
        width:'70%',
        display:'flex',
        flexDirection:'column'
    },
    rightside:{
        width:'40%',
    }
})
const Style = StyleSheet.create(
    {
        wholepage:{
            display:'flex',
            alignItems:'center',
            flexDirection:'column'
        },
        bgimage:{
            width:'100%',
            height:'50%',
            display:'flex',
            alignItems:'center',
            flexDirection:'column',
        },
        bgdiv:{
            display:'flex',
            backgroundColor:'red',
            width:130,
            height:60,
            padding:10,
            backgroundColor:'rgba(255, 255, 255, 0.372)',
            borderBottomRightRadius:20,
            borderBottomLeftRadius:20,
            alignItems:'center',
            justifyContent:'center',
            shadowColor:'black',
            shadowOffset: { width: 2, height: 2 },
            shadowOpacity: 0.344,
            shadowRadius: 7,
            elevation: 2,
        },
        bgimageText:{
            marginTop:14,
            color:'black',
        },
        scrollContainer:{
            width:'100%',
            height:'100%',
            display:'flex',
            marginTop:-320,
            alignItems:'center',
            flexDirection:'column',
            backgroundColor:'white',
            shadowColor: 'black',
            shadowOffset: { width: 20, height: -80 },
            shadowOpacity: 1,
            shadowRadius: 4,
            elevation: 5,
            borderTopLeftRadius:30,
            borderTopRightRadius:30,
        },
        textboxContainer:{
            width:209,
            height:47,
            backgroundColor:'#F8F8F8',
            borderRadius:15,
            display:'flex',
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'center',
            gap:25,
            marginTop:-25,
            shadowColor:'black',
            shadowOffset: {width: 0, height: 19},
            shadowRadius: 10,
            shadowOpacity: 1,
            elevation: 10,
        },
        textbox:{
            marginLeft:1,
            marginBottom:6,
            borderBottomColor:'#818181',
            borderStyle:'solid',
            borderBottomWidth:1,
            width:'60%'
        }
    }
)

export default Home;
