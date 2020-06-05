import getIcons from "../utils/utils.js"

function constructAdviceCard(advice, onclick) {
    let animalType;
    let animalGender;
    let arrowIcon = getIcons("info", "arrow")
    if(advice.adviceType){
        animalType = getIcons('animal', advice.animalType);
    }
    if(advice.gender){
        animalGender = getIcons('gender', advice.gender);
    }
    let cardText = `
        <div class="advice-card-container${ advice.adviceType ? ' card-type-'+advice.adviceType : '' }" onclick="${onclick}(this)">
            <div class="header">
                ${ advice.name ? 
                    `<div class="name">
                        ${ advice.name }
                    </div>` : ""
                }
                ${ advice.adviceType ? 
                    `<div class="advice-type">
                        ${ advice.adviceType }
                    </div>` : ""
                }
                ${ animalType ? 
                    `<div class="animal-type">
                        ${ animalType }
                    </div>` : ""
                }
                ${ animalGender ? 
                    `<div class="gender ${advice.gender}">
                        ${ animalGender }
                    </div>` : ""
                }
                ${arrowIcon}
                <div class="line"></div>
            </div>
            <div class="description">
                ${ advice.description ? 
                    `<span>
                        ${ advice.description }
                    </span>` : ""
                }
                <div class="display-none extra-data">
                    ${ advice.img ? 
                        `<div class="img">
                            <img src="data:image/jpeg;base64,${advice.img}"/>
                        </div>` : ""
                    }
                    ${ advice.ownerName ? 
                        `<div class="owner-name">
                            <span>Nombre del dueño:</span>
                            ${ advice.ownerName }
                        </div>` : ""
                    }
                    ${ advice.phoneNumber ? 
                        `<div class="phone-number">
                            <span>Telefono del dueño:</span>
                            ${ advice.phoneNumber }
                        </div>` : ""
                    }
                    ${ advice.email ? 
                        `<div class="email">
                            <span>Mail del dueño:</span>
                            ${ advice.email }
                        </div>` : ""
                    }
                    ${ advice.date ? 
                        `<div class="date">
                            ${ advice.date }
                        </div>` : ""
                    }
                    ${ advice.address ? 
                        `<div class="address">
                            ${ advice.address }
                        </div>` : ""
                    }
                </div>
            </div>
        </div>
    `;
    return cardText;
}

export default constructAdviceCard;