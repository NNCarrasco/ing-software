import getIcons from "../utils/utils.js"

function constructWeatherForecastCard(forecast) {
    let icons = {};
    icons.tempMax = getIcons("weather", "temp-max");
    icons.tempMin = getIcons("weather", "temp-min");
    icons.temp = getIcons("weather", "temp");
    icons.iconWeather = getIcons("weather", forecast.weatherAfternoon);
    icons.date = getIcons("info", "calendar");
    let cardText = `
        <div class="forecast-card-container">
            <div class="description">
                ${ forecast.date ? 
                    `<div class="date">
                        ${ icons.date }
                        ${ forecast.date }
                    </div>` : ""
                }
                ${ icons.iconWeather ? 
                    `<span>
                        ${ icons.iconWeather }
                    </span>` : ""
                }
                ${ forecast.tempMax ? 
                    `<span>
                        ${ icons.tempMax }
                        ${ forecast.tempMax }
                    </span>` : ""
                }
                ${ forecast.tempMin ? 
                    `<span>
                        ${ icons.tempMin }
                        ${ forecast.tempMin }
                    </span>` : ""
                }
                ${ forecast.tempNoc ? 
                    `<span>
                        ${ icons.temp }
                        ${ forecast.tempNoc }
                    </span>` : ""
                }
            </div>
        </div>
    `;
    return cardText;
}

export default constructWeatherForecastCard;