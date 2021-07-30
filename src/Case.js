function Case(props) { 

    let className = props.chosenCase === props.caseName 
    ? "case case-active" 
    : "case"

    return (
        <div className={className} onClick={handleClick}>
            <img src={props.img} alt={props.caseName}></img>
            <div>{props.caseName}</div>
        </div>
        
    )

    function handleClick(e) {
        props.setActive(props.caseName)
    }
}

export default Case