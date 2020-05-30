import getIcons from "../utils/utils.js"

function constructAdviceCard(advice) {
    let animalType;
    let animalGender;
    if(advice.adviceType){
        animalType = getIcons('animal', advice.animalType);
    }
    if(advice.gender){
        animalGender = getIcons('gender', advice.gender);
    }
    let cardText = `
        <div class="advice-card-container${ advice.adviceType ? ' card-type-'+advice.adviceType : '' } ">
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
                <div class="line"></div>
            </div>
            <div class="description">
                ${ advice.description ? 
                    `<span>
                        ${ advice.description }
                    </span>` : ""
                }
            </div>
        </div>
    `;
    return cardText;
}

export default constructAdviceCard;