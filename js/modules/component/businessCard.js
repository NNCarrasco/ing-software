function constructBussinesCard(business, onclick) { //TODO: LAS VARIABLES ESTAN ES ESPAÑOL
	return `
    <div class="business-card" ${business.id? "id='" + business.id + "'" : ""} onclick="${onclick}(this)" > 
        <div class="header">
            ${ business.nombre ? 
                `<div class="name">
                    ${ business.nombre }
                </div>` : ""
            }
            ${ business.rubro ? 
                `<div class="rubro">
                    ${ business.rubro }
                </div>` : ""
            }
            ${ business.telefono ? 
                `<div class="phone">
                    <i class="fas fa-phone-square phone-icon"></i>
                    ${ business.telefono }
                </div>` : ""
            }
        </div>
        <div class="description">
            ${ business.description ? 
                `<span>
                    ${ business.description }
                </span>` : ""
            }
        </div>
    </div>
    `;
}

export default constructBussinesCard;