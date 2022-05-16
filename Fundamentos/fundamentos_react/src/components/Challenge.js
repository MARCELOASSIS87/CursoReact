const Challenge = () => {

    const latitude = 20.2;
    const longitude = 31.2;

    const handleMyEvent = (e) => {
        console.log(e);
        { Soma(latitude, longitude) };

        console.log("Ativou o evento");
    };

    const Soma = (a, b) => {
        const soma = (a + b);
        return (
            <div>
                <h2>{Soma}</h2>
                <p>{console.log("A soma é: %d ", soma)}</p>
            </div >

        )
    };
    return (
        <div>
            <div>
                <h2>Número 1 = {latitude}</h2>
                <h2>Número 2 = {longitude}</h2>

                <button onClick={handleMyEvent}>Soma dos números</button>

            </div>
        </div>


    )

};

export default Challenge;