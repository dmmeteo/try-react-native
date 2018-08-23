from flask import Flask, request, json, jsonify
app = Flask(__name__)
db = [
    {
        "key": "123qwe",
        "name": "Cream Tea",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Cornish_cream_tea_2.jpg/220px-Cornish_cream_tea_2.jpg",
        "foodDescription": "This is a cup of cream tea"
    },
    {
        "key": "234wqe",
        "name": "Fresh mushroom",
        "imageUrl": "https://4.imimg.com/data4/YY/OE/MY-12863040/fresh-mushroom-500x500.jpg",
        "foodDescription": "Fresh mushroom with vegetables"
    },
    {
        "key": "849djf",
        "name": "Japanese Oyster",
        "imageUrl": "https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fs3-ap-northeast-1.amazonaws.com%2Fpsh-ex-ftnikkei-3937bb4%2Fimages%2F1%2F2%2F5%2F2%2F1632521-10-eng-GB%2F20171018_general-oyster-02.jpg?source=nar-cms",
        "foodDescription": "Oysters with ice rock"
    },
    {
        "key": "493sdj",
        "name": "Korean Kimchi",
        "imageUrl": "http://www.ricenflour.com/wp-content/uploads/2017/03/Vegan-kimchi-recipe-770x440.jpg",
        "foodDescription": "Traditional Korean Food"
    },
    {
        "key": "300owo",
        "name": "Multiple salad",
        "imageUrl": "http://forkmylifechicago.com/wp-content/uploads/2015/05/IMG_5803.jpg",
        "foodDescription": "Salad mixed with mushroom"
    },
    {
        "key": "903kdi",
        "name": "Vegetable",
        "imageUrl": "https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-hsq2bdc5qk2c2f6rm9gjd2no66-20171016015742.Medi.jpeg",
        "foodDescription": "Fresh vegetables"
    },
    {
        "key": "272mvl",
        "name": "traditional Japanese salad",
        "imageUrl": "https://i.pinimg.com/originals/da/7c/a9/da7ca9227766d18195fdf487afc99cd0.jpg",
        "foodDescription": "Very delicious Japanese Salad"
    }
]


@app.route('/', methods=['GET', 'POST'])
def get_request():
    if request.method == 'POST':
        db.append(request.get_json())
    return jsonify(db)
