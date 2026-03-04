import Barplot from './Barplot.jsx'

const Card =  ({ row }) => {
    return (
        <div
        style={{ 
            border: "1px solid #000",
            width: 250,
            padding: 12, 
            borderRadius: 4, 
            color: "#303030" }}>
        <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${row.id}.png`}
            alt={row.name}
            style={{ width: 96, height: 96 }}
        />
        <p><strong>{row.name}</strong></p>
        <p>Type: {row.type}</p>
        <Barplot width={row.hp} color={"#0011ffff"} type="hp" />
        <Barplot width={row.attack} color={"#ff0000"} type="attack" />
        </div>
    );
}


export default Card;