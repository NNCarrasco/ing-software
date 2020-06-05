import getIcons from "../utils/utils.js"

function constructWeatherTodayDetail(weather) {
    let icons = {};
    icons.weatherIcon = getIcons("weather", weather.weatherId);
    icons.temperature = getIcons("weather", "temp");
    icons.humidity = getIcons("weather", "humidity")
    icons.wind = getIcons("weather", "wind")
    let text = `
        <div class="weather-today-container">
            <div class="header">
                    <div class="title">
                        Tiempo de Hoy
                    </div>
                <div class="line"></div>
            </div>
            <div class="description">
                ${ icons.weatherIcon ? 
                    `<div class="weather-time ">
                        ${ icons.weatherIcon }
                        ${ weather.description }
                    </div>` : ""
                }
                <div class="other-data">
                    ${ weather.tempDesc ? 
                        `<div class="item">
                            ${ icons.temperature }
                            ${ weather.tempDesc }
                        </div>` : ""
                    }
                    ${ weather.humidity ? 
                        `<div class="item">
                            ${ icons.humidity }
                            ${ weather.humidity }
                        </div>` : ""
                    }
                    ${ weather.wind_speed ? 
                        `<div class="item">
                            ${ icons.wind } 
                            ${ weather.wind_speed } 
                        </div>` : ""
                    }
                </div>
            </div>
        </div>
    `;
    return text;
}

export default constructWeatherTodayDetail;