import Case from './Case'
import clutchCase from './assets/clutch-case.png'
import spectrum2Case from './assets/spectrum2-case.png'
import snakebiteCase from './assets/snakebite-case.png'

function CaseSelector(props) {
    return (
        <div className="case-selector">
            <Case caseName="Clutch" img={clutchCase} setActive={props.chooseNewCase} chosenCase={props.chosenCase}/>
            <Case caseName="Spectrum 2" img={spectrum2Case} setActive={props.chooseNewCase} chosenCase={props.chosenCase}/>
            <Case caseName="Snakebite" img={snakebiteCase} setActive={props.chooseNewCase} chosenCase={props.chosenCase}/>
        </div>
    )
}

export default CaseSelector