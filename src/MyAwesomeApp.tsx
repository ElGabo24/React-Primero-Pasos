import type { CSSProperties } from "react";

const firstName = 'Gabriel';
const lastName = 'Terrazas';

const favoriteGames = ['Elden Ring', 'Smash', 'Metal Gear']
const isActive = true;

const address = {
    zipCode: 'ABC-123',
    country: 'Canada'
}

const MyStyles: CSSProperties = {
    backgroundColor: 'lightgray',
    borderRadius: isActive ? 10 : 20,
    padding: 10
}

export function MyAwesomeApp() {
    return (
        <div data-testid="div-app">
            <h1 data-testid="first-name-title"> {firstName} </h1>
            <h2> {lastName}</h2>

            <p className="mi-clase-favorito" >
                {favoriteGames.join(', ')}</p>
            <p>{2 + 2}</p>

            <h1>{isActive ? 'Activo' : 'No activo'}</h1>

            <p
                style={MyStyles}
            >
                {JSON.stringify(address)}
            </p>
        </div>
    )
}