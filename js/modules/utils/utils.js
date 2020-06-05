function getIcons(iconType, value){
    if (iconType === "animal"){
        switch (value) {
            case 'Gato':
                return '<i class="fas fa-cat"></i>';
            case 'Perro':
                return '<i class="fas fa-dog"></i>';
            case 'Otros':
                return '<i class="fas fa-dragon"></i>';
        }
    } else if (iconType === "gender") {
        switch (value) {
            case 'Macho':
                return '<i class="fas fa-mars"></i>';
            case 'Hembra':
                return '<i class="fas fa-venus"></i>';
        }
    } else if (iconType === "info") {
        switch (value) {
            case 'phone':
                return '<i class="fas fa-phone-square phone-icon"></i>';
            case 'partner':
                return '<i class="fas fa-star partner-icon"></i>';
            case 'x':
                return '<i class="fas fa-times"></i>';
            case 'arrow':
                return '<i class="fas fa-chevron-right"></i>';
            case 'calendar':
                return '<i class="far fa-calendar-alt"></i>';
            case 'clock':
                return '<i class="far fa-clock"></i>';
        }
    } else if (iconType === "weather") {
        switch (value) {
            case 0:
                return '<i class="fas fa-sun"></i>';
            case 1:
                return '<i class="fas fa-cloud-sun"></i>';
            case 2:
                return '<i class="fas fa-cloud-sun"></i>';
            case 4:
                return '<i class="fas fa-cloud"></i>';
            case 11:
                return '<i class="fas fa-cloud-sun-rain"></i>';
            case 'temp':
                return '<i class="fas fa-thermometer-half"></i>';
            case 'humidity':
                return '<i class="fas fa-tint"></i>';
            case 'wind':
                return '<i class="fas fa-wind"></i>';
            case 'temp-max':
                return '<i class="fas fa-temperature-high"></i>';
            case 'temp-min':
                return '<i class="fas fa-temperature-low"></i>';
        }
    }
    return '';
}

export default getIcons;