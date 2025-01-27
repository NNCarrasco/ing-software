import getIcons from "../utils/utils.js"

function constructBussinesCard(business, onclick) { //TODO: LAS VARIABLES ESTAN ES ESPAÑOL
    let icons = {};
    icons.phone = getIcons("info", "phone");
    icons.partner = getIcons("info", "partner");
	return `
    <div class="business-card" ${business.id? "id='" + business.id + "'" : ""} onclick="${onclick}(this)" > 
        <div class="header">
            ${ business.name ? 
                `<div class="name">
                    ${ business.name }
                </div>` : ""
            }
            ${ business.type ? 
                `<div class="type">
                    ${ business.type }
                </div>` : ""
            }
            ${ business.phone ? 
                `<div class="phone">
                    ${ icons.phone }
                    ${ business.phone }
                </div>` : ""
            }
            ${ business.isPartner === "Si" ? 
                `<div class="partner">
                    ${ icons.partner }
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