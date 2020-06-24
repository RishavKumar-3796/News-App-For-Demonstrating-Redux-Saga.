import { getStatusBarHeight } from 'react-native-status-bar-height';
import { scale } from '../theme';
import { Platform } from 'react-native';
import moment from 'moment';

const statusBarHeightFunc = () => {
    const statusBarHeight = getStatusBarHeight(true);
    let bottomMarginForNotch = scale(5);
    if (Platform.OS === 'ios') {
        if (statusBarHeight === 44) {
            bottomMarginForNotch = scale(20);
        }
    }
    return bottomMarginForNotch;
}

const transformDateFromNow = (date) => {
    let formattedDate = moment(date).fromNow()
    return formattedDate;
}

export default { statusBarHeightFunc, transformDateFromNow }