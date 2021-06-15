import React, { Fragment, Component } from "react";
import {
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { ScrollView, SafeAreaView, Platform, Button, Image, StyleSheet, View, Text, TouchableOpacity, Dimensions, Alert, TextInput, AsyncStorage } from "react-native";
import { Icon, SearchBar } from "react-native-elements"
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import Tabview from "./Tabview";
import {tagArray} from "./Tabview";
import SearchHeader from 'react-native-search-header';
import getData from "./getData";

import { info } from "./LoadAsyncStorage";

//// data 받아오기 
let DataList = new getData();
DataList.get_Data();
DataList.getUserData();
// DataList.delete_text();
// DataList.delete_user(); 
  export {DataList};
var search;
let tag =[];

// 메인 페이지 만드는 클래스
export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      now: true,
    }
  };

  Tagsearchbutton(){
    let trueCount=0;
    for(let i=0; i<=5; i++){
      if((tagArray.kind_bool[i] === true )||(tagArray.region_bool[i] === true)||(tagArray.delivery_bool == true)){
        trueCount++;
      }
    }

    if(info.isFirst == null) {
      this.props.navigation.push('Term');
      //Alert.alert("제 1조 (목적 및 정의)\n본 약관(이하 ‘본 약관’이라 함)은 한동대학교 동아리CRA 소속 우주최강맛집탐사대 팀(이하 ‘맛탐대’라 함)이 소유하고 운영하는 한동네맛집 어플리케이션을 통하여 제공되는 모든 서비스(이하 ‘본 서비스’라 함)와 관련하여 맛탐대가 제공하는 어플리케이션에 접속하여 본 약관을 동의한 후 서비스를 제공받는 고객(이하 ‘사용자’이라 함)과 맛탐대 간의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.\n\n제2조 (약관의 게시와 개정) \n1. 맛탐대는 맛탐대의 모든 약관과 법령에 따라 명시해야 하는 정보가 있을 경우, 약관동의 페이지에 게시할 수 있습니다. \n2. 맛탐대는 관련법을 위배하지 않는 범위에서 본 약관을 개정할 수 있습니다. \n3. 만약 개정 내용이 사용자에게 불리한 경우, 적용 일자 7일 이전부터 적용 일자 전일까지 한동네맛집 접속 첫화면에 공지합니다. \n4. 맛탐대가 제2항에 따라 개정 약관을 공지한 후, 사용자가 15일 이내에 명시적으로 거부 의사 표시를 하지 않은 경우 사용자가 개정 약관에 동의한 것으로 간주합니다. \n5. 사용자가 개정약관의 적용에 동의하지 않는 경우, 사용자는 어플리케이션을 삭제함으로써 거부 의사를 표시할 수 있습니다. \n6. 사용자는 약관 일부분만을 동의 또는 거부할 수 없습니다. \n7. 사용자는 본 서비스 이용 시 본 약관의 규정된 내용을 따라야 하고 관련법규를 준수해야 합니다. \n\n제3조(서비스 이용 계약 등) \n1. 사용자가 되고자 하는 자는 어플리케이션 첫 실행 시 보이는 약관 내용를 읽고 동의 버튼을 누르는 방법으로 사용자가 될 수 있습니다. \n2. 맛탐대는 제1항과 같은 방법으로 사용자에게 서비스 이용을 승낙함을 원칙으로 합니다. 다만, 다음 각호에 해당하는 경우, 별도의 통보 없이 사용자의 이용을 제한할 수 있습니다. \n- 각 약관을 준수하지 않거나 각 약관에 의해 가입 신청자가 사용자 자격을 상실한 적이 있을 경우\n- 기타 사용자로 등록하는 것이 부적절하다고 판단되는 경우\n3. 사용자가입의 성립은 약관 동의를 한 이후부터 시작됩니다. \n4. 맛탐대는 부정사용방지를 위해 다중 기기 사용자 확인을 할 수 있습니다. \n\n제4 조 (지적 재산권 및 서비스 내용물의 소유권 및 사용권) \n1. '내용물' 이라 함은 문자, 그림, 사진, 동영상, 리뷰, 위치 및 기타 데이터 또는 모든 다른 형태의 송신 및 커뮤니케이션된 정보를 뜻합니다.  한동네맛집에 있는 모든 내용물 (이하 ‘서비스 내용물’ 이라 함)은 오직 서비스 이용 목적을 위해서만 사용자에게 제공되며, 관련 지적재산권의 보호를 받습니다. 사용자는 당사의 서면 승인 없이 서비스 내용물을 변경, 수집, 복제, 송신, 출판 (온라인, 오프라인 포함), 배포, 방송 기타 방법에 의하여 이용하거나 제3자에게 이용하게 하여서는 아니 됩니다. \n2. 서비스 내용물에는 사용자 내용물, 한동네맛집 내용물과 제3자 내용물이 모두 포함됩니다.  '사용자 내용물' 이라 함은 별점, 평점, 댓글, 찜한 식당 등 사용자가 한동네맛집을 이용하면서 등록하거나 그 외 맛탐대에게 송신하는 모든 내용물을 의미합니다.  '한동네맛집 내용물' 이라 함은 한동네맛집이 직접 제작하는 내용물 혹은 맛탐대 파이어스토어에 송신하거나 맛탐대가 수집한 식당 정보들을 포함합니다.  '제3자 내용물' 이라 함은 자 혹은 한동네맛집에서 창조되거나 유래되는 내용물은 아니지만 한동네맛집 서비스를 통해 사용자에게 제공되는 내용물을 의미합니다. \n3. 한동네맛집 내용물에 대한 저작권 및 기타 지적 재산권은 맛탐대에 귀속됩니다.  맛탐대는 적절한 이유가 있을 경우 모든 서비스 내용물을 자의적으로 삭제, 수정, 편집, 복제 혹은 재등록 할 수 있습니다. 본 계약에서 달리 명시된 바를 제외하고 당사는 사용자에게 어떠한 라이선스나 사용권도 부여하지 않습니다. 본 약관은 맛탐대 또는 맛탐대로부터 라이선스를 받은 자가 서비스 내용물이나 서비스에 대해 가지고 있는 권리, 또 이와 연관된 특허, 상표, 저작권 또는 다른 지적재산권에 영향을 주지 않습니다. 본 약관은 한동네맛집의 상표나 다른 제3자의 상표권과 관련 라이선스나 다른 권리를 부여하지 않습니다. \n4. 사용자 (이하 '해당 사용자'라 함)가 직접 작성 및 등록한 찜한 식당, 평가점수, 답글, 댓글, 사진 등의 게시물 (이하 '해당 가 내용물'이라 함)에 대한 저작권 및 지적 재산권은 해당 사용자에게 있으며, 해당 사용자 내용물이 타인의 저작권을 침해하는 경우 그에 대한 책임은 해당 사용자 본인이 부담합니다. 해당 사용자는 맛탐대에게 해당 사용자 내용물을 독점적으로 이용할 수 있는 권리를 부여합니다. 이에 따라 맛탐대는 한동네맛집 어플리케이션, 모바일, 광고물, 검색 노출, 판촉, 홍보 등의 기타 매체에 해당 사용자 내용물을 무상으로 영구적으로 이용할 수 있으며, 필요한 범위 내에서 해당 사용자 내용물의 일부를 수정, 복제 및 편집할 수 있습니다. 또한, 해당 사용자는 맛탐대가 커뮤니티 가이드라인 혹은 기타 맛탐대의 적절한 이유에 따라 언제든지 해당 사용자는 내용물을 삭제, 수정 혹은 재등록할 권한이 있음에 동의합니다. 단, 해당 사용자는 해당 사용자 내용물에 대하여 마케팅, 판촉, 홍보 및 기타 자료로 사용되지 않을 것을 요청할 수 있지만 직접 수정 혹은 삭제할 수는 없습니다. \n5. ‘제 3자 내용물’이 사용자에게 문제를 일으켰을 때 맛탐대는 어떠한 책임도 지지않습니다. 다만, 제 3자 내용물에 저작권법 상 문제가 있을 시에 맛탐대는 위배되는 내용을 즉각적으로 삭제하는 것으로 조취를 취할 수 있습니다. 제 3자 내용물은 아래와 같습니다. \n-한동네맛집은 우아한형제들에서 제공한 배달의민족 폰트인 한나체와 연성체가 적용되어 있으며 폰트에 대한 지적 재산권은 우아한형제들에게 귀속되어 있습니다. \n-한동네맛집이 제공하는 식당의 ‘지도보기’ 기능은 네이버 지도와 연결되어 있어 그 권리는 네이버에게 있습니다. \n-한동네맛집이 제공하는 식당 사진은 해당 식당 홈페이지, 맛집 추천 페이스북, 개인 블로그 등에서 가져온 사진입니다. 추후 이와 관련한 지적재산권 문제가 발생할 시에 맛탐대는 해당 식당 사진을 즉시 내리는 것으로 조취를 취할 수 있습니다. \n\n제 5조 (“사용자”의 의무) \n1. 맛탐대가 관계 법령 및 각 약관에 의해서 책임을 지는 경우를 제외하고, 자신의 개인정보에 관한 관리책임은 각 사용자에게 있으므로, 부정 사용되지 않도록 관리해야 합니다. \n2. 사용자는 다음 행위를 할 수 없습니다\n- 맛탐대 및 제3자의 명예를 손상시키거나 업무를 방해하는 행위\n- 맛탐대의 모든 재산에 대한 침해 행위\n- 맛탐대의 서비스 이외의 허가하지 않은 행위\n- 맛탐대의 직원 또는 서비스 관리자를 사칭하는 행위\n- 서비스 내 게시물 및 자료를 허가 없이 이용, 변조, 삭제 및 외부로 유출하는 행위\n- 타인의 개인정보 및 계정을 수집, 저장, 공개, 이용하거나 자신과 타인의 개인정보를 제3자에게 공개, 양도하는 행위\n- 다중 계정을 생성 및 이용하는 행위\n- 허가되지 않은 상업적 행위\n- 통합개인정보처리방침 등 사용자가 동의한 모든 약관에 대해 따르지 않는 행위\n- 현행법에 어긋나거나 서비스 제공에 있어 부적절하다고 판단되는 행위\n- 댓글에 타인을 비방하는 말이나 욕을 사용하는 행위\n- 의도적으로 특정 식당에 전화를 하여 욕을 하거나 중복적으로 식당을 비방하는 댓글을 작성하는 행위\n3. 사용자는 서비스를 이용함에 있어 맛탐대의 각 약관을 준수하지 않거나 의무를 다하지 않아 맛탐대나 다른 사용자가 손해를 입을 경우, 그 손해를 배상할 책임이 있습니다. \n\n제 6 조 ('게시물'의 관리)  \n1. '사용자'의 댓글내용이나 추가 식당 정보가 '정보통신망법' 및 '저작권법'등 관련법에 위반되는 내용을 포함하는 경우, 맛탐대는 관련법이 정한 절차에 따라 해당 내용에 대하여 게시중단 및 삭제 등을 할 수 있으며, '맛탐대'는 관련법에 따라 조치를 취하여야 합니다. \n2. '맛탐대'는 전항에 따른 타인의 요청이 없는 경우라도 권리침해가 인정될 만한 사유가 있거나 기타 맛탐대 정책 및 관련법에 위반되는 경우에는 관련법에 따라 해당 '게시물'에 대해 임시조치 등을 취할 수 있습니다. \n3. 본 조에 따른 세부 절차는 '정보통신망법' 및 '저작권법'이 규정한 범위 내에서 '맛탐대'가 정한 절차에 따릅니다. \n\n제 7 조 (접근 및 간섭) \n본 서비스를 이용함에 있어서, 사용자는 다음에 동의합니다: \n1. 로봇, 스파이더, 스크래퍼, 크롤러 또는 기타 자동 장치를, 당사의 서면 허가 없이 어떠한 목적으로든지 한동네맛집 어플리케이션, PC 및 모바일 웹사이트 및 서비스 내용물에 접근하는데 사용되는 프로세스 및 수단을 사용하지 않기로 동의합니다. \n2. 한동네맛집의 기반 시설에 비합리적인 또는 비례에 맞지 않게 큰 부하를 가중시키거나 가중시킬 수 있는 (맛탐대의 단독 재량 하에) 어떠한 조치도 취하지 않기로 동의합니다. \n3. 맛탐대의 서면 동의 없이 맛탐대가 제공하는 서비스 가운데 어떤 내용물을 감시하거나 복사하는 모든 매뉴얼 프로세스를 시행하지 않기로 동의합니다. \n4. 맛탐대 서비스의 기능 및 내용물을 간섭하거나 간섭하려고 하는 모든 장치, 소프트웨어 또는 루틴을 활용하지 않기로 동의합니다. \n5. 다른 사람들이 불쾌감을 느낄 수 있는 내용이나 사진을 올리지 않기로 동의합니다. 문제가 생길 시에는 사용자 자격이 정지되거나 어플리케이션 이용에 제한을 받을 수 있음을 동의합니다. \n\제 8 조 (면책조항) \n1. 맛탐대는 천재지변, 전쟁, 기간통신사업자의 서비스 중지 및 기타 이에 준하는 불가항력으로 인하여 서비스를 제공할 수 없는 경우에는 서비스 제공에 대한 책임이 면제됩니다. \n2. 맛탐대는 서비스용 설비의 보수, 교체, 정기점검, 공사 등 부득이한 사유로 발생한 손해에 대한 책임이 면제됩니다. \n3. 맛탐대는 사용자의 기기 오류 및 소프트웨어에 의해 손해가 발생한 경우 책임을 지지 않습니다. \n4. 맛탐대는 사용자의 게시물을 등록 전에 사전심사 하거나 상시적으로 게시물의 내용을 확인 또는 검토하여야 할 의무가 없으며, 그 결과에 대한 책임을 지지 아니합니다. \n5. 맛탐대는 맛탐대가 제공하는 모든 식당 정보에 오류가 있을 시 책임을 지지 아니합니다. \n\n제 9 조 (재판권 및 준거법) \n1. 이 약관에 명시되지 않은 사항은 전기통신사업법 등 대한민국의 관계법령과 상관습에 따릅니다. \n2. 서비스 이용으로 발생한 분쟁에 대해 소송이 제기되는 경우 대한민국 대구지방법원 포항지원을 관할 법원으로 합니다. \n\n부칙 (2019. 9. 13) \n본 약관은 2019년 11월 16일부터 적용됩니다.");
      // set isFirst
      (async() => {
        try {
          await AsyncStorage.setItem('isFirst', JSON.stringify(false));
          info.isFirst = false;
          console.log('Set isFirst');
        } catch (err) {
          console.log('[Set isFirst]', err);
        }
      })();
      (async() => {  
          try {
              loaded = await AsyncStorage.getItem('isFirst')
              .then((loaded) => {
                  info.isFirst = loaded;
                  console.log("[isFirst]: ", info.isFirst);
              });
          } catch(err) {
              console.log('in loadIsFirst: ', err);
          }
      })();
    } else if(trueCount===0){
    // if(trueCount===0){
      Alert.alert("카테고리를 선택해주세요","정확한 검색을 위해서는 카테고리를 하나 이상 선택해야 합니다:)")
    } else{
      // this.props.navigation.navigate('SearchList')
      this.props.navigation.push('SearchList');
    }
  }
  categoryButtonClick(){
    //pop
    for(let i=0; i<=5; i++){
      tag.pop(
        <Text style={styles.tagElements}>
          {tagArray.kind_name[i]}
        </Text>
      ); 
      tag.pop(
        <Text style={styles.tagElements}>
          {tagArray.region_name[i]}
        </Text>
      );
    }
    tag.pop(
      <Text style={styles.tagElements}>
        {tagArray.delivery_name}
      </Text>
    );
    //push
    for(let i=0; i<=5; i++){
      if(tagArray.kind_bool[i] == true){
        tag.push(
          <Text style={styles.tagElements}>
            {tagArray.kind_name[i]}
          </Text>
        ); 
      }  
      if(tagArray.region_bool[i] == true){
        tag.push(
          <Text style={styles.tagElements}>
            {tagArray.region_name[i]}
          </Text>
        );
      }
    }

    if(tagArray.delivery_bool == true){
      tag.push(
        <Text style={styles.tagElements}>
          {tagArray.delivery_name}
        </Text>
      ); 
    } 
    this.setState({
      now: false,
    });
  }

  
  render() {
    return (
      <Fragment>
        <SafeAreaView style={{ flex:0, backgroundColor: 'white', marginTop : Platform.OS ==='ios'? 0 : getStatusBarHeight()}} />
        <SafeAreaView style={{ flex: 1, backgroundColor : 'pink'}}>
          <View style={styles.container}>
            <View style={styles.header}>
              <View style={{width: RFValue(25), height : RFValue(25)}}>
              </View>
              <Text style={{fontSize: RFValue(25), fontFamily: 'yeon-sung'}}>
                한동네맛집
              </Text>
              <Icon
                name='search'
                type='material'
                onPress = {() => this.searchHeader.show()}
              />
            </View>
            <SearchHeader
              ref = {(searchHeader) => {
                this.searchHeader = searchHeader;
              }}
              headerHeight = {RFValue(55)}
              placeholder = 'Search...'
              placeholderColor = 'gray'
              onClear = {() => {
                  console.log(`Clearing input!`);
              }}
              /**
               * 연관검색어 구현 (8/15 updated)
              **/
             suggestionHistoryEntryRollOverCount = {3}
              onSearch = {(item) => {
                if(info.isFirst == null) {
                  this.props.navigation.push('Term');
                  //Alert.alert("제 1조 (목적 및 정의)\n본 약관(이하 ‘본 약관’이라 함)은 한동대학교 동아리CRA 소속 우주최강맛집탐사대 팀(이하 ‘맛탐대’라 함)이 소유하고 운영하는 한동네맛집 어플리케이션을 통하여 제공되는 모든 서비스(이하 ‘본 서비스’라 함)와 관련하여 맛탐대가 제공하는 어플리케이션에 접속하여 본 약관을 동의한 후 서비스를 제공받는 고객(이하 ‘사용자’이라 함)과 맛탐대 간의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.\n\n제2조 (약관의 게시와 개정) \n1. 맛탐대는 맛탐대의 모든 약관과 법령에 따라 명시해야 하는 정보가 있을 경우, 약관동의 페이지에 게시할 수 있습니다. \n2. 맛탐대는 관련법을 위배하지 않는 범위에서 본 약관을 개정할 수 있습니다. \n3. 만약 개정 내용이 사용자에게 불리한 경우, 적용 일자 7일 이전부터 적용 일자 전일까지 한동네맛집 접속 첫화면에 공지합니다. \n4. 맛탐대가 제2항에 따라 개정 약관을 공지한 후, 사용자가 15일 이내에 명시적으로 거부 의사 표시를 하지 않은 경우 사용자가 개정 약관에 동의한 것으로 간주합니다. \n5. 사용자가 개정약관의 적용에 동의하지 않는 경우, 사용자는 어플리케이션을 삭제함으로써 거부 의사를 표시할 수 있습니다. \n6. 사용자는 약관 일부분만을 동의 또는 거부할 수 없습니다. \n7. 사용자는 본 서비스 이용 시 본 약관의 규정된 내용을 따라야 하고 관련법규를 준수해야 합니다. \n\n제3조(서비스 이용 계약 등) \n1. 사용자가 되고자 하는 자는 어플리케이션 첫 실행 시 보이는 약관 내용를 읽고 동의 버튼을 누르는 방법으로 사용자가 될 수 있습니다. \n2. 맛탐대는 제1항과 같은 방법으로 사용자에게 서비스 이용을 승낙함을 원칙으로 합니다. 다만, 다음 각호에 해당하는 경우, 별도의 통보 없이 사용자의 이용을 제한할 수 있습니다. \n- 각 약관을 준수하지 않거나 각 약관에 의해 가입 신청자가 사용자 자격을 상실한 적이 있을 경우\n- 기타 사용자로 등록하는 것이 부적절하다고 판단되는 경우\n3. 사용자가입의 성립은 약관 동의를 한 이후부터 시작됩니다. \n4. 맛탐대는 부정사용방지를 위해 다중 기기 사용자 확인을 할 수 있습니다. \n\n제4 조 (지적 재산권 및 서비스 내용물의 소유권 및 사용권) \n1. '내용물' 이라 함은 문자, 그림, 사진, 동영상, 리뷰, 위치 및 기타 데이터 또는 모든 다른 형태의 송신 및 커뮤니케이션된 정보를 뜻합니다.  한동네맛집에 있는 모든 내용물 (이하 ‘서비스 내용물’ 이라 함)은 오직 서비스 이용 목적을 위해서만 사용자에게 제공되며, 관련 지적재산권의 보호를 받습니다. 사용자는 당사의 서면 승인 없이 서비스 내용물을 변경, 수집, 복제, 송신, 출판 (온라인, 오프라인 포함), 배포, 방송 기타 방법에 의하여 이용하거나 제3자에게 이용하게 하여서는 아니 됩니다. \n2. 서비스 내용물에는 사용자 내용물, 한동네맛집 내용물과 제3자 내용물이 모두 포함됩니다.  '사용자 내용물' 이라 함은 별점, 평점, 댓글, 찜한 식당 등 사용자가 한동네맛집을 이용하면서 등록하거나 그 외 맛탐대에게 송신하는 모든 내용물을 의미합니다.  '한동네맛집 내용물' 이라 함은 한동네맛집이 직접 제작하는 내용물 혹은 맛탐대 파이어스토어에 송신하거나 맛탐대가 수집한 식당 정보들을 포함합니다.  '제3자 내용물' 이라 함은 자 혹은 한동네맛집에서 창조되거나 유래되는 내용물은 아니지만 한동네맛집 서비스를 통해 사용자에게 제공되는 내용물을 의미합니다. \n3. 한동네맛집 내용물에 대한 저작권 및 기타 지적 재산권은 맛탐대에 귀속됩니다.  맛탐대는 적절한 이유가 있을 경우 모든 서비스 내용물을 자의적으로 삭제, 수정, 편집, 복제 혹은 재등록 할 수 있습니다. 본 계약에서 달리 명시된 바를 제외하고 당사는 사용자에게 어떠한 라이선스나 사용권도 부여하지 않습니다. 본 약관은 맛탐대 또는 맛탐대로부터 라이선스를 받은 자가 서비스 내용물이나 서비스에 대해 가지고 있는 권리, 또 이와 연관된 특허, 상표, 저작권 또는 다른 지적재산권에 영향을 주지 않습니다. 본 약관은 한동네맛집의 상표나 다른 제3자의 상표권과 관련 라이선스나 다른 권리를 부여하지 않습니다. \n4. 사용자 (이하 '해당 사용자'라 함)가 직접 작성 및 등록한 찜한 식당, 평가점수, 답글, 댓글, 사진 등의 게시물 (이하 '해당 가 내용물'이라 함)에 대한 저작권 및 지적 재산권은 해당 사용자에게 있으며, 해당 사용자 내용물이 타인의 저작권을 침해하는 경우 그에 대한 책임은 해당 사용자 본인이 부담합니다. 해당 사용자는 맛탐대에게 해당 사용자 내용물을 독점적으로 이용할 수 있는 권리를 부여합니다. 이에 따라 맛탐대는 한동네맛집 어플리케이션, 모바일, 광고물, 검색 노출, 판촉, 홍보 등의 기타 매체에 해당 사용자 내용물을 무상으로 영구적으로 이용할 수 있으며, 필요한 범위 내에서 해당 사용자 내용물의 일부를 수정, 복제 및 편집할 수 있습니다. 또한, 해당 사용자는 맛탐대가 커뮤니티 가이드라인 혹은 기타 맛탐대의 적절한 이유에 따라 언제든지 해당 사용자는 내용물을 삭제, 수정 혹은 재등록할 권한이 있음에 동의합니다. 단, 해당 사용자는 해당 사용자 내용물에 대하여 마케팅, 판촉, 홍보 및 기타 자료로 사용되지 않을 것을 요청할 수 있지만 직접 수정 혹은 삭제할 수는 없습니다. \n5. ‘제 3자 내용물’이 사용자에게 문제를 일으켰을 때 맛탐대는 어떠한 책임도 지지않습니다. 다만, 제 3자 내용물에 저작권법 상 문제가 있을 시에 맛탐대는 위배되는 내용을 즉각적으로 삭제하는 것으로 조취를 취할 수 있습니다. 제 3자 내용물은 아래와 같습니다. \n-한동네맛집은 우아한형제들에서 제공한 배달의민족 폰트인 한나체와 연성체가 적용되어 있으며 폰트에 대한 지적 재산권은 우아한형제들에게 귀속되어 있습니다. \n-한동네맛집이 제공하는 식당의 ‘지도보기’ 기능은 네이버 지도와 연결되어 있어 그 권리는 네이버에게 있습니다. \n-한동네맛집이 제공하는 식당 사진은 해당 식당 홈페이지, 맛집 추천 페이스북, 개인 블로그 등에서 가져온 사진입니다. 추후 이와 관련한 지적재산권 문제가 발생할 시에 맛탐대는 해당 식당 사진을 즉시 내리는 것으로 조취를 취할 수 있습니다. \n\n제 5조 (“사용자”의 의무) \n1. 맛탐대가 관계 법령 및 각 약관에 의해서 책임을 지는 경우를 제외하고, 자신의 개인정보에 관한 관리책임은 각 사용자에게 있으므로, 부정 사용되지 않도록 관리해야 합니다. \n2. 사용자는 다음 행위를 할 수 없습니다\n- 맛탐대 및 제3자의 명예를 손상시키거나 업무를 방해하는 행위\n- 맛탐대의 모든 재산에 대한 침해 행위\n- 맛탐대의 서비스 이외의 허가하지 않은 행위\n- 맛탐대의 직원 또는 서비스 관리자를 사칭하는 행위\n- 서비스 내 게시물 및 자료를 허가 없이 이용, 변조, 삭제 및 외부로 유출하는 행위\n- 타인의 개인정보 및 계정을 수집, 저장, 공개, 이용하거나 자신과 타인의 개인정보를 제3자에게 공개, 양도하는 행위\n- 다중 계정을 생성 및 이용하는 행위\n- 허가되지 않은 상업적 행위\n- 통합개인정보처리방침 등 사용자가 동의한 모든 약관에 대해 따르지 않는 행위\n- 현행법에 어긋나거나 서비스 제공에 있어 부적절하다고 판단되는 행위\n- 댓글에 타인을 비방하는 말이나 욕을 사용하는 행위\n- 의도적으로 특정 식당에 전화를 하여 욕을 하거나 중복적으로 식당을 비방하는 댓글을 작성하는 행위\n3. 사용자는 서비스를 이용함에 있어 맛탐대의 각 약관을 준수하지 않거나 의무를 다하지 않아 맛탐대나 다른 사용자가 손해를 입을 경우, 그 손해를 배상할 책임이 있습니다. \n\n제 6 조 ('게시물'의 관리)  \n1. '사용자'의 댓글내용이나 추가 식당 정보가 '정보통신망법' 및 '저작권법'등 관련법에 위반되는 내용을 포함하는 경우, 맛탐대는 관련법이 정한 절차에 따라 해당 내용에 대하여 게시중단 및 삭제 등을 할 수 있으며, '맛탐대'는 관련법에 따라 조치를 취하여야 합니다. \n2. '맛탐대'는 전항에 따른 타인의 요청이 없는 경우라도 권리침해가 인정될 만한 사유가 있거나 기타 맛탐대 정책 및 관련법에 위반되는 경우에는 관련법에 따라 해당 '게시물'에 대해 임시조치 등을 취할 수 있습니다. \n3. 본 조에 따른 세부 절차는 '정보통신망법' 및 '저작권법'이 규정한 범위 내에서 '맛탐대'가 정한 절차에 따릅니다. \n\n제 7 조 (접근 및 간섭) \n본 서비스를 이용함에 있어서, 사용자는 다음에 동의합니다: \n1. 로봇, 스파이더, 스크래퍼, 크롤러 또는 기타 자동 장치를, 당사의 서면 허가 없이 어떠한 목적으로든지 한동네맛집 어플리케이션, PC 및 모바일 웹사이트 및 서비스 내용물에 접근하는데 사용되는 프로세스 및 수단을 사용하지 않기로 동의합니다. \n2. 한동네맛집의 기반 시설에 비합리적인 또는 비례에 맞지 않게 큰 부하를 가중시키거나 가중시킬 수 있는 (맛탐대의 단독 재량 하에) 어떠한 조치도 취하지 않기로 동의합니다. \n3. 맛탐대의 서면 동의 없이 맛탐대가 제공하는 서비스 가운데 어떤 내용물을 감시하거나 복사하는 모든 매뉴얼 프로세스를 시행하지 않기로 동의합니다. \n4. 맛탐대 서비스의 기능 및 내용물을 간섭하거나 간섭하려고 하는 모든 장치, 소프트웨어 또는 루틴을 활용하지 않기로 동의합니다. \n5. 다른 사람들이 불쾌감을 느낄 수 있는 내용이나 사진을 올리지 않기로 동의합니다. 문제가 생길 시에는 사용자 자격이 정지되거나 어플리케이션 이용에 제한을 받을 수 있음을 동의합니다. \n\제 8 조 (면책조항) \n1. 맛탐대는 천재지변, 전쟁, 기간통신사업자의 서비스 중지 및 기타 이에 준하는 불가항력으로 인하여 서비스를 제공할 수 없는 경우에는 서비스 제공에 대한 책임이 면제됩니다. \n2. 맛탐대는 서비스용 설비의 보수, 교체, 정기점검, 공사 등 부득이한 사유로 발생한 손해에 대한 책임이 면제됩니다. \n3. 맛탐대는 사용자의 기기 오류 및 소프트웨어에 의해 손해가 발생한 경우 책임을 지지 않습니다. \n4. 맛탐대는 사용자의 게시물을 등록 전에 사전심사 하거나 상시적으로 게시물의 내용을 확인 또는 검토하여야 할 의무가 없으며, 그 결과에 대한 책임을 지지 아니합니다. \n5. 맛탐대는 맛탐대가 제공하는 모든 식당 정보에 오류가 있을 시 책임을 지지 아니합니다. \n\n제 9 조 (재판권 및 준거법) \n1. 이 약관에 명시되지 않은 사항은 전기통신사업법 등 대한민국의 관계법령과 상관습에 따릅니다. \n2. 서비스 이용으로 발생한 분쟁에 대해 소송이 제기되는 경우 대한민국 대구지방법원 포항지원을 관할 법원으로 합니다. \n\n부칙 (2019. 9. 13) \n본 약관은 2019년 11월 16일부터 적용됩니다.");
                  // set isFirst
                  (async() => {
                    try {
                      await AsyncStorage.setItem('isFirst', JSON.stringify(false));
                      info.isFirst = false;
                      console.log('Set isFirst');
                    } catch (err) {
                      console.log('[Set isFirst]', err);
                    }
                  })();
                  (async() => {  
                      try {
                          loaded = await AsyncStorage.getItem('isFirst')
                          .then((loaded) => {
                              info.isFirst = loaded;
                              console.log("[isFirst]: ", info.isFirst);
                          });
                      } catch(err) {
                          console.log('in loadIsFirst: ', err);
                      }
                  })();
                }
                this.props.navigation.navigate('InfoByName',{NameOfRestaurant: item.nativeEvent.text});
                this.searchHeader.clear();
                this.searchHeader.hide();
                console.log("serach");
              }}
              topOffset={0}
              onGetAutocompletions = {async (text) => {
                if (text) {
                  return DataList.name_list.filter(item => {
                    return item.includes(text);
                  })
                } else {
                  return [];
                }
              }}
              suggestionHistoryEntryRollOverCount = {3}
            />
            <View style={styles.tag}>
              <View style={styles.tagarea2}>
                <ScrollView horizontal={true}>
                  {tag}
                </ScrollView>    
              </View>
              <TouchableOpacity
                style={styles.tagsearchbuttonarea}
                onPress={
                  this.Tagsearchbutton.bind(this)
                }            
              >
                <Text style={{color : 'white', fontFamily: 'hanna'}}>태그검색</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.content}>
              <Tabview updateTagArray= {() => this.categoryButtonClick()}/>
              <View style={{flexDirection : 'row', justifyContent : 'space-around', alignItems : 'center', backgroundColor: 'pink', height : 50}}>
                <TouchableOpacity
                  style={{flexDirection : 'row', justifyContent : 'center', alignItems : 'center',width:'50%', height:50}}
                  onPress={()=>
                    this.props.navigation.navigate('Home')
                  }
                >
                  <Text style = {{fontFamily: 'hanna'}}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{flexDirection : 'row', justifyContent : 'center', alignItems : 'center',width:'50%', height:50}}
                  onPress={()=>this.props.navigation.navigate('FavoriteList')}
                >
                  <View>
                    <Text style = {{fontFamily: 'hanna'}}>My Page</Text>
                  </View>
                </TouchableOpacity>
              </View> 
            </View>
          </View>
        </SafeAreaView>
      </Fragment>
    );
  }
}

// 스타일
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: 'white'
  },
  header : {
    backgroundColor: 'white', 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems : 'center',
    height : RFValue(55),
    paddingHorizontal : RFValue(15),
    borderColor : '#AAAAAA',
    borderBottomWidth :1,
  },
  tag : {
    flexDirection : 'row',
    justifyContent : 'space-around', 
    alignItems : 'center', 
    borderBottomWidth :1,
    borderColor : '#AAAAAA',
    height : RFValue(50),
  },
  tagarea : {
    flexDirection : 'row', 
    flexWrap : 'wrap',
    justifyContent : 'flex-start', 
    alignItems : 'flex-start', 
    paddingVertical : RFValue(5),
    paddingHorizontal : RFValue(10),
    backgroundColor: "white", 
    width : (Dimensions.get('window').width)/100*80,
  },
  sTextItem: {
    height: 50,
    width: "100%",
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 18
  },
  tagarea2 : {
    flexDirection : 'row', 
    flexWrap : 'wrap',
    justifyContent : 'flex-start', 
    alignItems : 'flex-start', 
    paddingVertical : RFValue(5),
    paddingHorizontal : RFValue(10),
    backgroundColor: "white", 
    width : (Dimensions.get('window').width)/100*75
  },
  tagElements : {
    flexDirection : 'row', 
    justifyContent : 'center', 
    alignItems : 'center',
    textAlign: 'center',  
    backgroundColor : '#DDDDDD', 
    paddingVertical : RFValue(3),
    paddingHorizontal : RFValue(15),
    margin : RFValue(5),
    borderWidth : 1,
    borderColor : '#AAAAAA',
    color : 'grey',
    borderRadius : 5,
    fontFamily: 'hanna',
  },
  tagsearchbuttonarea : {
    flexDirection: 'row',
    justifyContent : 'center', 
    alignItems : 'center',
    marginRight : 15, 
    paddingVertical : 7, 
    paddingHorizontal : 10, 
    backgroundColor: '#e64980', 
    borderRadius : 5,
  },
  content: {
    flex: 1,
  },
  bottomButton : {
    flexDirection : 'row',
    justifyContent : 'space-between',
    alignItems: 'center',
    paddingVertical : RFValue(15),
    paddingHorizontal : '4%'
  },
  searchbar: {
    flexDirection: 'row',
    justifyContent : 'space-between',
    alignItems: 'center',
    width: '100%',
    height : RFValue(55),
    borderBottomWidth :1,
    borderColor : '#AAAAAA',
  },
  searchbaritself: {
    borderRadius: 5,
    backgroundColor: 'lightgray',
    marginVertical: '3%',
    paddingLeft: '5%',
    width: '80%',
    height : RFValue(40),
    marginRight: '5%',
  },
});