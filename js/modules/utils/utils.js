function getIcons(iconType, value){
    if (iconType === "animal"){
        switch (value) {
            case 'Gato':
                return '<i class="fas fa-cat"></i>';
            case 'Perro':
                return '<i class="fas fa-dog"></i>';
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
    }
    return '';
}

export default getIcons;