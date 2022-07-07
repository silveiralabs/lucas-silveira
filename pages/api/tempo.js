function Tempo(props) {
    const dynamicDate = new Date();
    const dynamicDateString = dynamicDate.toGMTString();

    return (
     <div>
        <div>{dynamicDateString} (dinâmico)</div> 
        <div>{props.staticDateString} (estático)</div>
    </div>
    )

}

export function getStarticProps() {
    const staticDate = new Date();
    const staticDateString = staticDate.toGMTString();

    return {
        propos: {
            staticDateString
        }
    }
}

export default Tempo;