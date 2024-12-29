export default async (req) => {
    const params = new URL(req.url).searchParams;
    const location = params.get('location');

    const apikey = '7eb57afc13ef435abae92509242912';
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${apikey}&q=${location}&aqi=no`);
    const data = await response.json();
    
    return new Response(JSON.stringify(data));
}