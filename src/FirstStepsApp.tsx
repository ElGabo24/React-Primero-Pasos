import { ItemCounter } from "./shopping-cart/ItemCounter";

interface ItemInCart {
    id: number;
    productName: string;
    quantity: number;
}

const itemsInCart: ItemInCart[] = [
    { id: 1, productName: 'Nintendo Switch 2', quantity: 1 },
    { id: 2, productName: 'Pro Controller', quantity: 2 },
    { id: 3, productName: 'Super Smash', quantity: 3 },
]

export function FirstStepsApp() {
    return (
        <>
            <h1>Carrito de compras</h1>

            {
                itemsInCart.map(({ id, productName, quantity }) => (
                    <ItemCounter key={id} name={productName} quantity={quantity} />
                ))
            }

            {/* <ItemCounter name="Nintendo Switch 2" quantity={2} />
            <ItemCounter name="Pro Controller" quantity={5} />
            <ItemCounter name="Super Smash" quantity={9} />
            <ItemCounter name="Super Mario" quantity={3} /> */}

            {/* <h1>Hola Mundo!!</h1>
            <p>Esto es un párrafo !!</p>

            <button>Click me</button>

            <div>
                <h2>Hola dentro de un div</h2>
            </div> */}
        </>
    );
}