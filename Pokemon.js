
const args = process.argv.slice(2);

//faire une fonction qui fait un appel API pour récupérer les données de l'API
async function getPokemon(args) {
    //pour faire un appel API on utilise la fonction fetch() qui prend en paramètre l'URL de l'API
    const response = await fetch('https://pokebuildapi.fr/api/v1/pokemon/'+args);
    //on récupère les données de l'API au format JSON
    const data = await response.json();
    //on retourne les données de l'API

    await getPokemonSize(data.name,data.pokedexId);
    console.log("\n");
    console.log("   - HP :"+data.stats.HP);
    console.log("   - Attack :"+data.stats.attack);
    console.log("   - Defense :"+data.stats.defense);
    console.log("   - Special Attack :"+data.stats.special_attack);
    console.log("   - Special Defense :"+data.stats.special_defense);
    console.log("   - Speed :"+data.stats.speed);
    console.log("\n");
    if(data.apiEvolutions.length>0){
        for (let i = 0; i < data.apiEvolutions.length; i++) {
            console.log("   - Evolves to: "+data.apiEvolutions[i].name+ " ("+data.apiEvolutions[i].pokedexId+")");
        }
    }
    //vérifier que data.apiPreEvolution.name existe et n'est pas null et différent de undefined et différent de "none"
    if(data.apiPreEvolution.name && data.apiPreEvolution.name !== "none"){
        console.log("   - Evolves from: "+data.apiPreEvolution.name+ " ("+data.apiPreEvolution.pokedexIdd+")");
    }


    console.log("\n");




    return data;
}

//faire une fonction qui fait un appel API pour récupérer les données de l'API
async function getPokemonSize(name,id) {
    //pour faire un appel API on utilise la fonction fetch() qui prend en paramètre l'URL de l'API
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/'+id);
    //on récupère les données de l'API au format JSON
    const data = await response.json();
    //on retourne les données de l'API
    console.log(name+" :");
    console.log("   - Id: :"+id);
    console.log("   - Weight: "+data.weight+" g");
    console.log("   - Height :"+data.height*10+" cm");

    return data;
}

for (let i = 0; i < args.length; i++) {
    getPokemon(args[i]);


}














