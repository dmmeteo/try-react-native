const horizontalStatus = {
    rainy: {
        ios: 'ios-rainy',
        android: 'md-rainy'
    },
    cloud:{
        ios: 'ios-cloudy',
        android: 'md-cloudy'
    },
    thunderstorm: {
        ios: 'ios-thunderstorm',
        android: 'md-thunderstorm'
    },
    sunny: {
        ios: 'ios-sunny',
        android: 'md-sunny'
    }
};

const horizontalFlatListData = [
    {
        hour: '1 AM',
        status: horizontalStatus.rainy,
        degrees: 25
    },
    {
        hour: '2 AM',
        status: horizontalStatus.cloud,
        degrees: 27
    },
    {
        hour: '3 AM',
        status: horizontalStatus.cloud,
        degrees: 28
    },
    {
        hour: '4 AM',
        status: horizontalStatus.thunderstorm,
        degrees: 24
    },
    {
        hour: '5 AM',
        status: horizontalStatus.rainy,
        degrees: 26
    },
    {
        hour: '6 AM',
        status: horizontalStatus.sunny,
        degrees: 27
    },
    {
        hour: '7 AM',
        status: horizontalStatus.sunny,
        degrees: 30
    },
    {
        hour: '8 AM',
        status: horizontalStatus.cloud,
        degrees: 28
    },
    {
        hour: '9 AM',
        status: horizontalStatus.sunny,
        degrees: 30
    },
    {
        hour: '10 AM',
        status: horizontalStatus.sunny,
        degrees: 31
    }
];

export {horizontalStatus};
export {horizontalFlatListData};