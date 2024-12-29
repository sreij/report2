export default async(req)=>{
    const params = new URL(req.url).searchParams;
    const latitude = parseFloat(params.get('lat'));
    const longitude = parseFloat(params.get('lon'));
    const username = 'chrj23020';
    
    const response = await fetch(`http://api.geonames.org/findNearbyPlaceNameJSON?lat=${latitude}&lng=${longitude}&username=${username}`);
    const data = await response.json();

    return new Response(JSON.stringify({location: data.geonames[0].adminName1}));
}