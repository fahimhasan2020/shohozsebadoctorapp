import AsyncStorage from '@react-native-async-storage/async-storage';
const data = {
    'host':'https://admin.shohozseba.com/user/doctor/',
    'hostSingle':'https://admin.shohozseba.com/user/',
    'name':'',
    'accessToken':'',
    'loggedIn':false,
    'activity':true,
    'phoneNumber':'',
    'email':'',
    'id':'',
    'lat':'',
    'details':"",
    'tradeLicance':'',
    'profilePicture':''
};

const reducer = (state = data, action) => {
    switch (action.type) {
        case 'LOGOUT':
            return {
                ...state,
                loggedIn: action.logged
            };
        case 'LOGIN':
            return {
                ...state,
                loggedIn: action.logged
            };
        case 'PROFILE_CHANGE':
            AsyncStorage.setItem('id', action.user.id.toString());
            return {
                ...state,
                name: action.user.name,
                email: action.user.email,
                phoneNumber: action.user.phone_number,
                lat: action.user.lat,
                lng: action.user.lng,
                tradeLicance: action.user.trade_licence,
                id: action.user.id,
                details: action.user.details,
                profilePicture:action.user.profile_picture
            };
        case 'SETSTATE':
            return {
                ...state,
                loggedIn: action.stata
            };
        case 'UPDATE_DP':
                return {
                    ...state,
                    profilePicture: action.dp
                };
        case 'CHANGE_ACTIVITY':
            return {
                ...state,
                activity: action.stata
            };
        case 'CHANGE_TOKEN':
            return {
                ...state,
                accessToken: action.token
            };
        default:
            return state;
    }
};
export default reducer;