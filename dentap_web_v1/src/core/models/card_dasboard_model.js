import { ImagesUrl } from "../const";

class CardDashboardModel {
    constructor(id, title, description, image, color) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.image = image;
        this.color = color;
    }

    get getId() {
        return this.id;
    }

    get getTitle() {
        return this.title;
    }

    get getDescription() {
        return this.description;
    }

    get getImage() {
        return this.image;
    }

    get getColor() {
        return this.color;
    }

    set setId(id) {
        this.id = id;
    }

    set setTitle(title) {
        this.title = title;
    }

    set setDescription(description) {
        this.description = description;
    }

    set setImage(image) {
        this.image = image;
    }

    set setColor(color) {
        this.color = color;
    }

    static fromJson(json) {
        return new CardDashboardModel(
            json.id,
            json.title,
            json.description,
            json.image,
            json.color
        );
    }

    toJson() {
        return {
            id: this.id,
            title: this.title,
            description: this.description,
            image: this.image,
            color: this.color
        };
    }

    static fromJsonArray(jsonArray) {
        return jsonArray.map(CardDashboardModel.fromJson);
    }

    static fromJsonArrayToMap(jsonArray) {
        let map = new Map();
        jsonArray.forEach((json) => {
            map.set(json.id, CardDashboardModel.fromJson(json));
        });
        return map;
    }

    static fromMapToJsonArray(map) {
        let jsonArray = [];
        map.forEach((value) => {
            jsonArray.push(value.toJson());
        });
        return jsonArray;
    }
}

// Create a list of cards
const cards = [
    new CardDashboardModel(
        1,
        "Gestionar",
        "Usuarios",
        ImagesUrl.doctorOrange,
        "col-green"
    ),
    new CardDashboardModel(
        2,
        "Gestionar",
        "Pacientes",
        ImagesUrl.banner1,
        "col-blue"
    ),
    new CardDashboardModel(
        3,
        "Gestionar",
        "Citas",
        ImagesUrl.citas,
        "col-green"
    ),
];

// export card
export default cards;

