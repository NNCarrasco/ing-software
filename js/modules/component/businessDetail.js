function constructBusinessDetail(business, onclick) { //TODO: LAS VARIABLES ESTAN ES ESPAÑOL
    return `
    <div class="business-detail"> 
        <div class="header">
            <div class="close-icon" id="close-icon" onclick="${onclick}()">
                <i class="fas fa-times"></i>
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
                    <i class="fas fa-phone-square phone-icon"></i>
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