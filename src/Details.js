import "./details.css";

export function Details(props) {

    console.log(props.details.types)

    // props kan undefined zijn on first render. gebruik ? om te checken of de sub properties bestaan
    const listTypes = props?.details?.types?.map((slot, index) => (
        <span key={index} className={slot.type.name}>{slot.type.name}</span>
    ));

    const listAbilities = props?.details?.abilities?.map((slot, index) => (
        <div key={index}>{slot.ability.name}</div>
    ));

    return (
        <div className="Details">
            <div>{props.details.name}</div>
            <div><img src={props.details.sprites.front_default} /></div>
            <div>{listTypes}</div>     
            <div>{listAbilities}</div>
        </div>
    );
}
