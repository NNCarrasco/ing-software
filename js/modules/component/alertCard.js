import getIcons from "../utils/utils.js"

function constructAlertCard(alert) {
    let zoneList = '';
    for (let zone of Object.values(alert.zones)){
        zoneList += `<div class="item">${zone}</div>`;
    }
    let icons = {};
    icons.calendar = getIcons("info", "calendar");
    icons.clock = getIcons("info", "clock");
    let cardText = `
        <div class="alert-card-container">
            <div class="header">
                ${ alert.title ? 
                    `<div class="title">
                        ${ alert.title }
                    </div>` : ""
                }
                ${ alert.date ? 
                    `<div class="date">
                        ${ icons.calendar }
                        ${ alert.date }
                    </div>` : ""
                }
                ${ alert.hour ? 
                    `<div class="hour">
                        ${ icons.clock }
                        ${ alert.hour }
                    </div>` : ""
                }
                <div class="line"></div>
            </div>
            <div class="description">
                ${ alert.description ? 
                    `<span>
                        ${ alert.description }
                    </span>` : ""
                }
            </div>
            <div class="alert-zones">
                ${zoneList}
            </div> 
        </div>
    `;
    return cardText;
}

export default constructAlertCard;