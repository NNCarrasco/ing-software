function constructAlertCard(alert) {
    let zoneList = [];
    for (let zone of Object.values(alert.zones)){
        zoneList.push(`<li>${zone}</li>`)
    }
    let cardText = `
        <div class="alert-card-container>
            <div class="header">
                ${ alert.title ? 
                    `<div class="title">
                        ${ alert.title }
                    </div>` : ""
                }
                ${ alert.status ? 
                    `<div class="status">
                        ${ alert.status }
                    </div>` : ""
                }
                ${ alert.date ? 
                    `<div class="date">
                        ${ alert.date }
                    </div>` : ""
                }
                ${ alert.hour ? 
                    `<div class="hour">
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