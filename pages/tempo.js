function Tempo(props) {
    console.log ('> Passando pelo Frontend;')
    const dynamicDate = new Date();
    const dynamicDateString = dynamicDate.toGMTString();

    
    return (
     <div>
        {dynamicDateString} (dinâmico)
    </div>
    )

}

export function getStarticProps() {
    console.log('> Passando pelo getStaticProps ();')
    const staticDate = new Date();
    const staticDateString = staticDate.toGMTString();

    return {
        props: {
            staticDateString
        }
    }
}

export default Tempo;