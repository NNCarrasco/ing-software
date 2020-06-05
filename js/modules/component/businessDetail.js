import getIcons from "../utils/utils.js"

function constructBusinessDetail(business, onclick) { //TODO: LAS VARIABLES ESTAN ES ESPAÑOL
    let icons = {};
    icons.phone = getIcons("info", "phone");
    icons.x = getIcons("info", "x");
    return `
    <div class="business-detail"> 
        <div class="header">
            <div class="close-icon" id="close-icon" onclick="${onclick}()">
                ${ icons.x }
            </div>
            ${ business.nombre ? 
                `<div class="name">
                    ${ business.nombre }
                </div>` : ""
            }
            ${ business.rubro ? 
                `<div class="type">
                    ${ business.rubro }
                </div>` : ""
            }
            ${ business.telefono ? 
                `<div class="phone">
                    ${ icons.phone }
                    ${ business.telefono }
                </div>` : ""
            }
            ${ business.horario ? 
                `<div class="time-work">
                    ${ business.horario }
                </div>` : ""
            }
            ${ business.email ? 
                `<div class="mail">
                    ${ business.email }
                </div>` : ""
            }
            ${ business.direccion ? 
                `<div class="address">
                    ${ business.direccion }
                </div>` : ""
            }
        </div>
        <div class="description">
            ${ business.descriptionLong ? 
                `<span>
                    ${ business.descriptionLong }
                </span>` : ""
            }
        </div>
    </div>
    `;
}

export default constructBusinessDetail;