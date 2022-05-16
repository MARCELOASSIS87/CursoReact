const TemplateExpressions =()=>{
    const name = "Marcelo";
    const latlong = {
        latitude: 20.20902374,
        longitude: 31.20983091,
    };
    return(
        <div>
            <h1>Eu sou o {name}, Muito Prazer!!</h1>
            <p>Latitude{latlong.latitude}</p>
            <p>Longitude{latlong.longitude}</p>
            {/* Pode-se usar o JS direto aqui dentro */}
            <p>{4+4}</p>
            <p>{console.log("JSX react dentro o Template")}</p>
        </div>
    );
};

export default TemplateExpressions;