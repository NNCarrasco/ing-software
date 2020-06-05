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
        }
    }
    return '';
}

export default getIcons;