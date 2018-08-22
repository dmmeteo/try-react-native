// to run json-server: json-server --watch ./data/flatListData.json
// const apiGetAllFoods = 'https://jsonplaceholder.typicode.com/users'; 
const apiGetAllFoods = 'https://raw.githubusercontent.com/dmmeteo/flask-microservices-swagger/master/swagger.json'; 
async function getFoodsFromServer() {
    try {
        let response = await fetch(apiGetAllFoods);
        let responseJson = await response.json();
        console.log(responseJson)
        return responseJson; //list of foods
    } catch (error) {
        console.error(`Error is: ${error}`);
    }
}

export {getFoodsFromServer};