
import React, {
  Component
} from 'react'

import {
  Dimensions,
  Modal,
  StyleSheet,
  Switch,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native'

import IceColors from '../../common/ice-colors'
import stylesSeasonContext from './styles-season-context'

import AwesomeIcons from 'react-native-vector-icons/FontAwesome'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const deviceWidth = Dimensions.get('window').width;

export default class ModalPlanterInfo extends Component {
  constructor(props){
    super(props);
    this.state = {
      modalVisible: false,
      transparent: true,
      planter_id: this.props.planter_id,
      planter_first_name: this.props.planter_first_name,
      planter_last_name: this.props.planter_last_name,
      planter_full_name: this.props.planter_full_name,
      planter_additional_info: this.props.planter_additional_info,
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      planter_full_name: nextProps.planter_full_name,
      planter_additional_info: nextProps.planter_additional_info,
    })
  }

  _setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    var modalBackgroundStyle = {
      backgroundColor: this.state.transparent ? 'rgba(0, 0, 0, 0.7)' : '#f5fcff',
    };
    var innerContainerTransparentStyle = this.state.transparent
      ? {backgroundColor: IceColors.iceGreen, padding: 10, width: (deviceWidth/6)*5, alignSelf: 'center'}
      : null;

    return (
      <View>
        <Modal
          animationType={'slide'}
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {this._setModalVisible(false)}}
          >
          <View style={[styles.container, modalBackgroundStyle]}>
            <View style={[styles.innerContainer, innerContainerTransparentStyle]}>
              <AwesomeIcons
                  onPress={this._setModalVisible.bind(this, false)}
                  style={{fontSize: 18, padding: 10, alignSelf: 'flex-end'}}
                  name='close'
                  color='red' />
              <View style={{alignItems: 'flex-start'}}>
                <Text style={{padding: 20, paddingTop:0, fontSize: 16, fontWeight: '400'}}>Planter Name: </Text>
                <Text style={{fontWeight: '200', paddingLeft: 30, paddingRight: 30}}>{this.state.planter_full_name}</Text>
                <Text style={{padding: 20, fontSize: 16, fontWeight: '400'}}>Planter Additional Information: </Text>
                <Text style={{fontWeight: '200', paddingLeft: 30, paddingRight: 30, paddingBottom: 30}}>{this.state.planter_additional_info}</Text>
              </View>
            </View>
          </View>
        </Modal>
        <AwesomeIcons
          name='info'
          size={15}
          color={IceColors.iceGreen}
          onPress={this._setModalVisible.bind(this, true)}
          />

      </View>
    );
  }
}



var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  innerContainer: {
    borderRadius: 10,
    alignItems: 'center',
  }
});
