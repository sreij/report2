import { useState } from "react";
import { SearchOutlined, AimOutlined } from "@ant-design/icons";
import { Button } from "antd";
import Footer from "./Footer";

async function getWeather(location) {
    const response = await fetch(`/.netlify/functions/getWeather?location=${location}`);
    const data = await response.json();
    return data;
}

async function getLocation() {
    if (navigator.geolocation) {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(async (position) => {
                const { latitude, longitude } = position.coords;
                const response = await fetch(`/.netlify/functions/getLocation?lat=${latitude}&lon=${longitude}`);
                const data = await response.json();
                resolve(data.location);
            }, reject);
        });
    } else {
        return "Geolocation not supported";
    }
}

export default function App() {
    const [weatherData, setWeatherData] = useState(null);
    const [location, setLocation] = useState("Tokyo");

    return (
        <div>
            <header>
                <h1>お天気アプリ</h1>
                <p>指定した場所や現在地の天気を見ることができます</p>
            </header>
            <form>
                <label>天気を検索</label>
                <input id="inputField" placeholder="location"></input>
                <Button icon={<SearchOutlined />}
                    onClick={async () => {
                        setWeatherData(null);
                        let newLocation = document.querySelector("#inputField").value;
                        if (newLocation === "") {
                            newLocation = "Tokyo";
                        }
                        setLocation(newLocation);
                        const data = await getWeather(newLocation);
                        setWeatherData(data);
                    }}
                >
                    検索
                </Button>
                <Button icon={<AimOutlined />}
                    onClick={async () => {
                        setWeatherData(null);
                        const data = await getLocation();
                        setLocation(data);
                        const weatherData = await getWeather(data);
                        setWeatherData(weatherData);
                    }}>
                    現在地
                </Button>
            </form>
            {weatherData ? (
                <main>
                    <article>
                        <h1>{location}の天気</h1>
                        <p>更新時間: {weatherData.current.last_updated}</p>
                        <p>気温: {weatherData.current.temp_c}°C</p>
                        <p>風速: {(parseFloat(weatherData.current.wind_kph) * 1000 / 3600).toFixed(2)}m/s</p>
                        <p>天候: {weatherData.current.condition.text}</p>
                    </article>
                    <aside>
                        <img src={weatherData.current.condition.icon} alt={weatherData.current.condition.text}/>
                    </aside>
                </main>
            ) : (
                <main>読み込み中...</main>
            )}
            <Footer />
        </div>
    );
}