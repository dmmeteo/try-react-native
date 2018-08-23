// run in console: node node-server.js
// let en0 = require('os').networkInterfaces().en0.find(elm => elm.family == 'IPv4').address;
// const apiGetAllFoods = 'https://raw.githubusercontent.com/dmmeteo/try-react-native/master/data/flatListData.json'; 
// const apiGetAllFoods = 'http://192.168.0.103:8001/';
const apiGetAllFoods = 'http://10.0.7.239:8001/';
// const apiGetAllFoods = `http://${en0}:8001/`;
async function getFoodsFromServer() {
    try {
        let response = await fetch(apiGetAllFoods);
        let responseJson = await response.json()
        return responseJson.list_all_foods; //list of foods
    } catch (error) {
        console.error(`Error is: ${error}`);
    }
}
//send post request to insert new data
const insertNewFoodToServer = async (params) => {
    try {
        let response = await fetch(apiGetAllFoods, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(params)
        });
        let responseJson = await response.json();
        return responseJson.result;
    } catch (error) {
        console.error(`Error is: ${error}`);
    }
}
const updateAFood = async (params) => {
    try {
        let response = await fetch(apiGetAllFoods, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(params)
        });
        let responseJson = await response.json();
        return responseJson.result;
    } catch (error) {
        console.error(`Error is: ${error}`);
    }
}

export {getFoodsFromServer, insertNewFoodToServer, updateAFood};