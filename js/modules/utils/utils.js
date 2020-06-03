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
    }
    return '';
}

export default getIcons;