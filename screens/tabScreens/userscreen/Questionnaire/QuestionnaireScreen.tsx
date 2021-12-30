// import { styles } from './styles.js';
import { Image, View, TouchableOpacity,ScrollView, Dimensions } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import React, { useState } from 'react';
import { Text } from '../../../../components/Themed';
import Questionnare from '../../../components/user/Questionnaire';


let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

const UserScreen = ({ navigation, route }: { navigation: NavigationProp<any>, route: any }) => {
    const [isEdit, setIsEdit] = useState(false);
    const win = Dimensions.get('window');
    const [visible, setVisible] = React.useState(false);//let arrayData0:any,arrayData1:any,arrayData2:any,arrayData3:any=[]
    const [preArchitecture, setPreArchitecture]=useState(0)
    const [preCategory2, setPreCategory2]=useState(0)
    const [preCategory3, setPreCategory3]=useState(0)
    const [preCategory4, setPreCategory4]=useState(0)
    const [isZeroCategory,setIsZeroCategory]=useState([{isZero:true},
                                                      {isZero:true},
                                                      {isZero:true},
                                                      {isZero:true}])
    const toggleAlert = React.useCallback((value) => {
      setVisible(value);
    }, [visible]);
    const [percent,setPercent]=useState(0)
    const [architecture, setArchitecture]=useState([{title:'Modern design',state:false},
                                                    {title:'Terrace',state:false},
                                                    {title:'Pool',state:false},
                                                    {title:'2 floors',state:false},
                                                    {title:'Garden',state:false}])
    const [category2,setCategory2]=useState([{title:'Modern design',state:false},
                                            {title:'Terrace',state:false},
                                            {title:'Pool',state:false},
                                            {title:'2 floors',state:false},
                                            {title:'Garden',state:false},
                                            {title:'Open space',state:false}])
    const [category3,setCategory3]=useState([{title:'Modern design',state:false},
                                            {title:'Terrace',state:false},
                                            {title:'Pool',state:false},
                                            {title:'2 floors',state:false}])
    const [category4,setCategory4]=useState([{title:'Modern design',state:false},
                                            {title:'Terrace',state:false},
                                            {title:'Pool',state:false},
                                            {title:'2 floors',state:false}])
    const calcPercent=(data0:any,data1:any,data2:any,data3:any)=>{
      let preData0:any=0
      let preData1:any=0
      let preData2:any=0
      let preData3:any=0
      data0.forEach((item:any)=>{if (item.state) preData0++})
      data1.forEach((item:any)=>{if (item.state) preData1++})
      data2.forEach((item:any)=>{if (item.state) preData2++})
      data3.forEach((item:any)=>{if (item.state) preData3++})
      setPercent((preData0+preData1+preData2+preData3)*100/
      (architecture.length+category2.length+category3.length+category4.length))//
      setPreArchitecture(preData0)
      setPreCategory2(preData1)
      setPreCategory3(preData2)
      setPreCategory4(preData3)
    }
    const btnClick=(data:any,index:any)=>{
      if(data.isEdit){
        switch (data.name){
          case 'Architecture':architecture[index].state=!data.questionnaireData[index].state
                              setArchitecture([...architecture]);break;
          case 'Category2':category2[index].state=!data.questionnaireData[index].state
                              setCategory2([...category2]);break;
          case 'Category3':category3[index].state=!data.questionnaireData[index].state
                              setCategory3([...category3]);break;
          case 'Category4':category4[index].state=!data.questionnaireData[index].state
                              setCategory4([...category4]);break;
        }
        calcPercent(architecture,category2,category3,category4)
      }
    }

    const handleQuestionnaire=()=>{
      if(isEdit){
        if(preArchitecture==0)isZeroCategory[0].isZero=true;else if(preArchitecture>0)isZeroCategory[0].isZero=false
        if(preCategory2==0)isZeroCategory[1].isZero=true;else if(preCategory2>0)isZeroCategory[1].isZero=false
        if(preCategory3==0)isZeroCategory[2].isZero=true;else if(preCategory3>0)isZeroCategory[2].isZero=false
        if(preCategory4==0)isZeroCategory[3].isZero=true;else if(preCategory4>0)isZeroCategory[3].isZero=false
        setIsZeroCategory([...isZeroCategory])
      }
      if(preArchitecture>0 && preCategory2>0 && preCategory3>0 && preCategory4>0||!isEdit)
      setIsEdit(!isEdit)
    }
    return (
        <View style={styles.loginWrap}>
            <View style={{flex:2, flexDirection:'row'}}>
              <Text style={styles.title}>Questionnaire</Text>
              <View style={{flexDirection:'row',marginLeft:'auto'}}>
                <Text style={[styles.title,{color:isEdit?'#30C0E9':'#D0D8E0'}]}>{percent.toFixed(0)}%</Text>
                {/* <TouchableOpacity style={{marginTop:5,}} onPress={()=>{setIsEdit(!isEdit)}}> */}
                  {isEdit?<Image style={{width:15,height:18,marginTop:'auto',marginBottom:10,marginRight:30,marginLeft:5}} source={require('../../../../assets/icons/Vector_(6).png')}/>:
                  <Image style={{width:15,height:18,marginTop:'auto',marginBottom:10,marginRight:30,marginLeft:5}} source={require('../../../../assets/icons/Vector_(5).png')}/>}
                {/* </TouchableOpacity> */}
              </View>
            </View>
            
            <View style={{flex:10,marginLeft:20,marginRight:20}}>
              <ScrollView>
                <View>
                  <Questionnare btnClick={btnClick} indexData={{name:'Architecture',isEdit,questionnaireData:architecture}}/>
                  {isZeroCategory[0].isZero&&<Text style={{color:'#FF737F',fontSize:12,fontWeight:'300'}}>Select at least one parameter</Text>}
                  <Questionnare btnClick={btnClick} indexData={{name:'Category2',isEdit,questionnaireData:category2}}/>
                  {isZeroCategory[1].isZero&&<Text style={{color:'#FF737F',fontSize:12,fontWeight:'300'}}>Select at least one parameter</Text>}
                  <Questionnare btnClick={btnClick} indexData={{name:'Category3',isEdit,questionnaireData:category3}}/>
                  {isZeroCategory[2].isZero&&<Text style={{color:'#FF737F',fontSize:12,fontWeight:'300'}}>Select at least one parameter</Text>}
                  <Questionnare btnClick={btnClick} indexData={{name:'Category4',isEdit,questionnaireData:category4}}/>
                  {isZeroCategory[3].isZero&&<Text style={{color:'#FF737F',fontSize:12,fontWeight:'300'}}>Select at least one parameter</Text>}
                </View>
              </ScrollView>
            </View>
            <View style={{height:90}}>
              <TouchableOpacity style={{marginTop:5,}} onPress={()=>handleQuestionnaire()}>
                <Text style={[styles.homeTitleText1,{textAlign:'center'}]}>{isEdit?'Save':'continue the survey'}</Text>
              </TouchableOpacity>
            </View>
          </View>
    );
};
export default UserScreen

import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  homeTitleText1:{
    fontSize:28,
    margin:20,
    marginTop:'auto',
    // height:50,
    fontWeight:'500',
    color:'white',
    backgroundColor:'#30C0E9',
    padding:15, 
    paddingTop:10,
    borderRadius:30
  },
  btnStyle: {
    backgroundColor: '#30C0E9',
    padding: 15,
    borderRadius: 10,
    textAlign: 'center',
    color: 'white'
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 'auto',
    marginLeft:20
  },
  subText: {
    fontSize: 16,
    color: '#ACB7C2',
    marginTop: '2%',
    marginBottom: '2%',
  },
  loginWrap: {
    flex: 1,
    backgroundColor: 'white'
  },
  loginVerticalPart: {
    alignItems: 'center',
    flex: 2,
    display: 'flex',
    justifyContent: 'center'
  },
});