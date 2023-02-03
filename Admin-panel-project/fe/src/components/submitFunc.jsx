import NewProduct from "./newProduct";

export default function CreateProduct() {
    const URL = 'http://localhost:8080/product-table'
    async function handleSubmit(event) {
        const postData = {
            name: event.target.name.value,
            price: event.target.price.value,
            image: event.target.image.value,
            stock: event.target.stock.value,
            size: event.target.size.value,
            color: event.target.color.value,
            category: event.target.category.value,
            description: event.target.description.value,
        }

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postData)
        }
        const FETCHED_DATA = await fetch(URL, options)
        const FETCHED_JSON = await FETCHED_DATA.json()
        console.log(FETCHED_JSON.data);
    }
    return (
        <NewProduct handleSubmitFunc={handleSubmit} />
    )
}