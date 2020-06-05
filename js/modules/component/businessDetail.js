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
            ${ business.timeWork ? 
                `<div class="time-work">
                    ${ business.timeWork }
                </div>` : ""
            }
            ${ business.email ? 
                `<div class="mail">
                    ${ business.email }
                </div>` : ""
            }
            ${ business.address ? 
                `<div class="address">
                    ${ business.address }
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