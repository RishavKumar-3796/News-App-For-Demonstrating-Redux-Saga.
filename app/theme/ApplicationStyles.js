import { Colors } from './';
import Global from '../configs/Global';

// This file is for a reusable grouping of Theme items.
// Similar to an XML fragment layout in Android

const ApplicationStyles = {
    screen: {
        mainContainer: {
            flex: 1,
            backgroundColor: Colors.transparent
        },
        safeAreaViewContainer: {
            flex: 1,
            backgroundColor: Colors.primaryOrange,
            marginBottom: Global.statusBarHeightFunc()
        },
    }
};

export default ApplicationStyles;
