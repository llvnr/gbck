import Config from "../module.js"
import "../html2canvas.js"

function Accueil(doc, options){

    // LOAD CSS 
        let cssNormalService = document.getElementById('cssNormalService')
        cssNormalService.href = '/css/module/style.css';
        let cssResponsiveService = document.getElementById('cssResponsiveService')
        cssResponsiveService.href = '/css/module/responsive.css';
    // LOAD CSS 

    let ShellGBCKLeftInputColorPrmHTML
    let ShellGBCKLeftInputHexaPrmHTML 
    let ShellGBCKLeftInputHexaScdHTML
    let ShellGBCKLeftRadioLineaireHTML
    let ShellGBCKLeftRadioRadialHTML
    let ShellGBCKLeftSelectDirectionHTML
    let ShellGBCKLeftCodeHTML
    let ShellGBCKRightHTML
    let optionHTML

    let ContainerPrincipaleContent = document.getElementById("ShellBody");
    ContainerPrincipaleContent.innerHTML = ""

    let cadreService = document.createElement('div')
    cadreService.classList.add('cadre__service')
        {
            // let logoServiceHTML = document.createElement('img')
            // logoServiceHTML.classList.add('cadre__service_logo')
            // logoServiceHTML.src = options.logo
            // cadreService.append(logoServiceHTML)
            // let titleHTML = document.createElement('h2')
            // titleHTML.innerText = options.app
            // cadreService.append(titleHTML)
            let descriptionHTML = document.createElement('small')
            descriptionHTML.innerText = Config.description
            cadreService.append(descriptionHTML)
            
        }
    ContainerPrincipaleContent.append(cadreService)

        let containerHTML = document.createElement('div')
    containerHTML.classList.add('container__application-gbck')

        let ShellGBCKHTML = document.createElement("div")
        ShellGBCKHTML.classList.add("ShellGBCK")

            let ShellGBCKLeftHTML = document.createElement("div")
            ShellGBCKLeftHTML.classList.add("ShellGBCK__left")

                {

                    let randomColorPrimary = "#" + Math.floor(Math.random()*16777215).toString(16);

                    let ShellGBCKLeftLabelPrimaireHTML = document.createElement("div")
                    ShellGBCKLeftLabelPrimaireHTML.classList.add("ShellGBCK__left-labelprimaire")
                    ShellGBCKLeftLabelPrimaireHTML.innerText = "Couleur primaire : "
                    ShellGBCKLeftHTML.append(ShellGBCKLeftLabelPrimaireHTML)

                    ShellGBCKLeftInputColorPrmHTML = document.createElement("input")
                    ShellGBCKLeftInputColorPrmHTML.type = "color"
                    ShellGBCKLeftInputColorPrmHTML.value = randomColorPrimary
                    ShellGBCKLeftInputColorPrmHTML.classList.add("ShellGBCK__left-inputcolorprm")
                    ShellGBCKLeftHTML.append(ShellGBCKLeftInputColorPrmHTML)

                    ShellGBCKLeftInputHexaPrmHTML = document.createElement("input")
                    ShellGBCKLeftInputHexaPrmHTML.type = "text"
                    ShellGBCKLeftInputHexaPrmHTML.classList.add("ShellGBCK__left-inputhexaprm")
                    ShellGBCKLeftInputHexaPrmHTML.value = randomColorPrimary
                    ShellGBCKLeftHTML.append(ShellGBCKLeftInputHexaPrmHTML)

                    let ShellGBCKLeftRandomPrmHTML = document.createElement("button")
                    ShellGBCKLeftRandomPrmHTML.classList.add("ShellGBCK__left-randomprm")
                    ShellGBCKLeftRandomPrmHTML.innerText = "Random"
                    ShellGBCKLeftHTML.append(ShellGBCKLeftRandomPrmHTML)

                    ShellGBCKLeftRandomPrmHTML.addEventListener("click", function() {
                        let newRandomColorPrimary = "#" + Math.floor(Math.random()*16777215).toString(16);
                        ShellGBCKLeftInputColorPrmHTML.value = newRandomColorPrimary
                        ShellGBCKLeftInputHexaPrmHTML.value = newRandomColorPrimary

                        loadCodeResult()

                    })

                }

                {

                    let randomColorSecondary = "#" + Math.floor(Math.random()*16777215).toString(16);

                    let ShellGBCKLeftLabelSecondaireHTML = document.createElement("div")
                    ShellGBCKLeftLabelSecondaireHTML.classList.add("ShellGBCK__left-labelsecondaire")
                    ShellGBCKLeftLabelSecondaireHTML.innerText = "Couleur secondaire :"
                    ShellGBCKLeftHTML.append(ShellGBCKLeftLabelSecondaireHTML)

                    let ShellGBCKLeftInputColorScdHTML = document.createElement("input")
                    ShellGBCKLeftInputColorScdHTML.type = "color"
                    ShellGBCKLeftInputColorScdHTML.value = randomColorSecondary
                    ShellGBCKLeftInputColorScdHTML.classList.add("ShellGBCK__left-inputcolorscd")
                    ShellGBCKLeftHTML.append(ShellGBCKLeftInputColorScdHTML)

                    ShellGBCKLeftInputHexaScdHTML = document.createElement("input")
                    ShellGBCKLeftInputHexaScdHTML.classList.add("ShellGBCK__left-inputhexascd")
                    ShellGBCKLeftInputHexaScdHTML.type = "text"
                    ShellGBCKLeftInputHexaScdHTML.value = randomColorSecondary
                    ShellGBCKLeftHTML.append(ShellGBCKLeftInputHexaScdHTML)

                    let ShellGBCKLeftRandomScdHTML = document.createElement("button")
                    ShellGBCKLeftRandomScdHTML.classList.add("ShellGBCK__left-randomscd")
                    ShellGBCKLeftRandomScdHTML.innerText = "Random"
                    ShellGBCKLeftHTML.append(ShellGBCKLeftRandomScdHTML)

                    ShellGBCKLeftRandomScdHTML.addEventListener("click", function() {
                        let newRandomColorSecondary = "#" + Math.floor(Math.random()*16777215).toString(16);
                        ShellGBCKLeftInputColorScdHTML.value = newRandomColorSecondary
                        ShellGBCKLeftInputHexaScdHTML.value = newRandomColorSecondary

                        loadCodeResult()

                    })

                    let ShellGBCKLeftMixRandomHTML = document.createElement("button")
                    ShellGBCKLeftMixRandomHTML.classList.add("ShellGBCK__left-mixrandom")
                    ShellGBCKLeftMixRandomHTML.innerText = "Mix Random"
                    ShellGBCKLeftHTML.append(ShellGBCKLeftMixRandomHTML)

                    ShellGBCKLeftMixRandomHTML.addEventListener("click", function() {

                        let newRandomColorPrimary = "#" + Math.floor(Math.random()*16777215).toString(16);
                        ShellGBCKLeftInputColorPrmHTML.value = newRandomColorPrimary
                        ShellGBCKLeftInputHexaPrmHTML.value = newRandomColorPrimary

                        let newRandomColorSecondary = "#" + Math.floor(Math.random()*16777215).toString(16);
                        ShellGBCKLeftInputColorScdHTML.value = newRandomColorSecondary
                        ShellGBCKLeftInputHexaScdHTML.value = newRandomColorSecondary

                        loadCodeResult()

                    })

                    let HRUnHTML = document.createElement("hr")
                    ShellGBCKLeftHTML.append(HRUnHTML)

                }

                {

                    let ShellGBCKLeftLabelTypeHTML = document.createElement("div")
                    ShellGBCKLeftLabelTypeHTML.classList.add("ShellGBCK__left-labeltype")
                    ShellGBCKLeftLabelTypeHTML.innerText = "Type de dégradé : "
                    ShellGBCKLeftHTML.append(ShellGBCKLeftLabelTypeHTML)

                    let fieldSetHTML = document.createElement("fieldset")

                        let divLinearHTML = document.createElement("div")
                            {
                                ShellGBCKLeftRadioLineaireHTML = document.createElement("input")
                                ShellGBCKLeftRadioLineaireHTML.type = "radio"
                                ShellGBCKLeftRadioLineaireHTML.name = "radioType"
                                ShellGBCKLeftRadioLineaireHTML.classList.add("ShellGBCK__left-radiolineaire")
                                ShellGBCKLeftRadioLineaireHTML.value = "linear"
                                ShellGBCKLeftRadioLineaireHTML.checked = true
                                divLinearHTML.append(ShellGBCKLeftRadioLineaireHTML)

                                let labelLinearHTML = document.createElement("label")
                                labelLinearHTML.classList.add("ShellGBCK__left-radiolabellinaire")
                                labelLinearHTML.innerText = "Dégradé linéaire"
                                divLinearHTML.append(labelLinearHTML)
                            }
                        fieldSetHTML.append(divLinearHTML)

                        let divRadialHTML = document.createElement("div")
                            {

                                ShellGBCKLeftRadioRadialHTML = document.createElement("input")
                                ShellGBCKLeftRadioRadialHTML.type = "radio"
                                ShellGBCKLeftRadioRadialHTML.name = "radioType"
                                ShellGBCKLeftRadioRadialHTML.classList.add("ShellGBCK__left-radioradial")
                                ShellGBCKLeftRadioRadialHTML.value = "radial"
                                divRadialHTML.append(ShellGBCKLeftRadioRadialHTML)

                                let labelRadialHTML = document.createElement("label")
                                labelRadialHTML.classList.add("ShellGBCK__left-radiolabelradial")
                                labelRadialHTML.innerText = "Dégradé radial"
                                divRadialHTML.append(labelRadialHTML)

                            }
                        fieldSetHTML.append(divRadialHTML)

                    ShellGBCKLeftHTML.append(fieldSetHTML)

                    let ShellGBCKLeftLabelDirectionHTML = document.createElement("div")
                    ShellGBCKLeftLabelDirectionHTML.classList.add("ShellGBCK__left-labeldirection")
                    ShellGBCKLeftLabelDirectionHTML.innerText = "Direction : "
                    ShellGBCKLeftHTML.append(ShellGBCKLeftLabelDirectionHTML)

                    ShellGBCKLeftSelectDirectionHTML = document.createElement("select")
                    ShellGBCKLeftSelectDirectionHTML.classList.add("ShellGBCK__left-selectdirection")

                        {

                            ShellGBCKLeftRadioLineaireHTML.addEventListener("change", function() {
                                loadDirection()
                                loadCodeResult()
                            })

                            ShellGBCKLeftRadioRadialHTML.addEventListener("change", function() {
                                loadDirection()
                                loadCodeResult()
                            })

                            loadDirection()

                            function loadDirection() {

                                let arrDirection
                                if(ShellGBCKLeftRadioLineaireHTML.value === "linear" && ShellGBCKLeftRadioLineaireHTML.checked) {
                                    arrDirection = [{
                                        label: 'De Haut en bas',
                                        action: '180deg'
                                    },
                                    {
                                        label: 'De haut droit vers bas gauche',
                                        action: '225deg'                                    
                                    },
                                    {
                                        label: 'De droite à gauche',
                                        action: '270deg'                                    
                                    },
                                    {
                                        label: 'De bas droite à haut gauche',
                                        action: '315deg'                                    
                                    },
                                    {
                                        label: 'De bas en haut',
                                        action: '0deg'                                    
                                    },
                                    {
                                        label: 'De bas gauche à haut droit',
                                        action: '45deg'                                    
                                    },
                                    {
                                        label: 'De gauche vers droit',
                                        action: '90deg'                                    
                                    },
                                    {
                                        label: 'De haut gauche vers bas droit',
                                        action: '135deg'                                    
                                    }]
    
                                } else if(ShellGBCKLeftRadioRadialHTML.value === "radial" && ShellGBCKLeftRadioRadialHTML.checked){
                                    arrDirection = [{
                                        label: 'Centre',
                                        action: 'circle at center'
                                    },
                                    {
                                        label: 'Haut',
                                        action: 'circle at top'
                                    },
                                    {
                                        label: 'Haut droite',
                                        action: 'circle at right top'
                                    },
                                    {
                                        label: 'Droite',
                                        action: 'circle at right'
                                    },
                                    {
                                        label: 'Bas droite',
                                        action: 'circle at right bottom'
                                    },
                                    {
                                        label: 'Bas',
                                        action: 'circle at bottom'
                                    },
                                    {
                                        label: 'Bas gauche',
                                        action: 'circle at left bottom'
                                    },
                                    {
                                        label: 'Gauche',
                                        action: 'circle at left'
                                    },
                                    {
                                        label: 'Haut gauche',
                                        action: 'circle at left top'
                                    }]
                                }
                                
                                ShellGBCKLeftSelectDirectionHTML.innerHTML = ""
                                arrDirection.forEach(element => {
                                    optionHTML = document.createElement("option")
                                    optionHTML.value = element.action 
                                    optionHTML.innerText = element.label
                                    ShellGBCKLeftSelectDirectionHTML.append(optionHTML)
                                });

                            }

                            ShellGBCKLeftSelectDirectionHTML.addEventListener("change", function(e) {
                                loadCodeResult()
                            })

                        }

                    ShellGBCKLeftHTML.append(ShellGBCKLeftSelectDirectionHTML)

                    let HRDeuxHTML = document.createElement("hr")
                    ShellGBCKLeftHTML.append(HRDeuxHTML)

                }

                {

                    let ShellGBCKLeftLabelCodeHTML = document.createElement("div")
                    ShellGBCKLeftLabelCodeHTML.classList.add("ShellGBCK__left-labelcode")
                    ShellGBCKLeftLabelCodeHTML.innerHTML = `Code CSS : <button class="ShellGBCK__left-btncopy">Copié</button>`
                    ShellGBCKLeftHTML.append(ShellGBCKLeftLabelCodeHTML)

                    ShellGBCKLeftCodeHTML = document.createElement("div")
                    ShellGBCKLeftCodeHTML.classList.add("ShellGBCK__left-code")
                    // ShellGBCKLeftCodeHTML.innerText = `background: linear-gradient(${optionHTML.value}, ${ShellGBCKLeftInputHexaPrmHTML.value} 0%, ${ShellGBCKLeftInputHexaScdHTML.value} 100%)`
                    ShellGBCKLeftHTML.append(ShellGBCKLeftCodeHTML)

                    let HRTroisHTML = document.createElement("hr")
                    ShellGBCKLeftHTML.append(HRTroisHTML)

                }

                {

                    let ShellGBCKLeftLabelSizeHTML = document.createElement("div")
                    ShellGBCKLeftLabelSizeHTML.classList.add("ShellGBCK__left-labelsize")
                    ShellGBCKLeftLabelSizeHTML.innerText = "Taille de l'image (en pixel)"
                    ShellGBCKLeftHTML.append(ShellGBCKLeftLabelSizeHTML)

                    let ShellGBCKLeftLabelWidthHTML = document.createElement("div")
                    ShellGBCKLeftLabelWidthHTML.classList.add("ShellGBCK__left-labelwidth")
                    ShellGBCKLeftLabelWidthHTML.innerText = "Hauteur : "
                    ShellGBCKLeftHTML.append(ShellGBCKLeftLabelWidthHTML)

                    let ShellGBCKLeftInputWidthHTML = document.createElement("input")
                    ShellGBCKLeftInputWidthHTML.classList.add("ShellGBCK__left-inputwidth")
                    ShellGBCKLeftInputWidthHTML.type = "number"
                    ShellGBCKLeftInputWidthHTML.min = "1920"
                    ShellGBCKLeftInputWidthHTML.max = "1920"
                    ShellGBCKLeftInputWidthHTML.value = "1920"
                    ShellGBCKLeftInputWidthHTML.step = "01"
                    ShellGBCKLeftHTML.append(ShellGBCKLeftInputWidthHTML)

                    let ShellGBCKLeftLabelHeightHTML = document.createElement("div")
                    ShellGBCKLeftLabelHeightHTML.classList.add("ShellGBCK__left-labelheight")
                    ShellGBCKLeftLabelHeightHTML.innerText = "Largeur : "
                    ShellGBCKLeftHTML.append(ShellGBCKLeftLabelHeightHTML)

                    let ShellGBCKLeftInputHeightHTML = document.createElement("input")
                    ShellGBCKLeftInputHeightHTML.classList.add("ShellGBCK__left-inputheight")
                    ShellGBCKLeftInputHeightHTML.type = "number"
                    ShellGBCKLeftInputHeightHTML.min = "1080"
                    ShellGBCKLeftInputHeightHTML.max = "1080"
                    ShellGBCKLeftInputHeightHTML.value = "1080"
                    ShellGBCKLeftInputHeightHTML.step = "01"
                    ShellGBCKLeftHTML.append(ShellGBCKLeftInputHeightHTML)

                    let ShellGBCKLeftDownloadPngBtnHTML = document.createElement("button")
                    ShellGBCKLeftDownloadPngBtnHTML.classList.add("ShellGBCK__left-downloadpngbtn")
                    ShellGBCKLeftDownloadPngBtnHTML.innerText = "Téléchargement PNG"
                    ShellGBCKLeftHTML.append(ShellGBCKLeftDownloadPngBtnHTML)

                    ShellGBCKLeftDownloadPngBtnHTML.addEventListener("click", function() {

                        let ShellGBCKRightHTML = document.getElementById("ShellGBCKRight")
                        let width = ShellGBCKLeftInputWidthHTML.value
                        let height = ShellGBCKLeftInputHeightHTML.value

                        gtag('event', 'service_gradientbck', {
                            "width": ShellGBCKLeftInputWidthHTML.value,
                            "height": ShellGBCKLeftInputHeightHTML.value,
                            "hexaPrimaire": ShellGBCKLeftInputHexaPrmHTML.value,
                            "hexaSecondaire": ShellGBCKLeftInputHexaScdHTML.value
                        })

                        const gradient = {
                            stops: [
                              { position: 0, color: ShellGBCKLeftInputHexaPrmHTML.value },
                              { position: 1, color: ShellGBCKLeftInputHexaScdHTML.value }
                            ]
                        };
                        const imgData = createLinearGradientImage(width, height, gradient);
                        
                        const link = document.createElement('a');
                        link.download = 'gradient-bck.png';
                        link.href = imgData;
                        link.click();

                        function createLinearGradientImage(width, height, gradient) {
                            const canvas = document.createElement('canvas');
                            canvas.width = width;
                            canvas.height = height;
                            const ctx = canvas.getContext('2d');
                            const grad = ctx.createLinearGradient(0, 0, width, height);
                            for (let stop of gradient.stops) {
                              grad.addColorStop(stop.position, stop.color);
                            }
                            ctx.fillStyle = grad;
                            ctx.fillRect(0, 0, width, height);
                            return canvas.toDataURL();
                        }
                        
                    })

                }

            ShellGBCKHTML.append(ShellGBCKLeftHTML)

            ShellGBCKRightHTML = document.createElement("div")
            ShellGBCKRightHTML.id = "ShellGBCKRight"
            ShellGBCKRightHTML.classList.add("ShellGBCK__right")
            ShellGBCKHTML.append(ShellGBCKRightHTML)

            loadCodeResult()

        containerHTML.append(ShellGBCKHTML)

    ContainerPrincipaleContent.append(containerHTML)

    function loadCodeResult() {

        let ShellGBCKRightHTML = document.getElementById("ShellGBCKRight")

        if(ShellGBCKLeftRadioLineaireHTML.value === "linear" && ShellGBCKLeftRadioLineaireHTML.checked) {
            if(ShellGBCKRightHTML != null){
                ShellGBCKRightHTML.style.background = `linear-gradient(${ShellGBCKLeftSelectDirectionHTML.value}, ${ShellGBCKLeftInputHexaPrmHTML.value} 0%, ${ShellGBCKLeftInputHexaScdHTML.value} 100%)`;
            }
            ShellGBCKLeftCodeHTML.innerText = `background: linear-gradient(${ShellGBCKLeftSelectDirectionHTML.value}, ${ShellGBCKLeftInputHexaPrmHTML.value} 0%, ${ShellGBCKLeftInputHexaScdHTML.value} 100%)`
        } else if(ShellGBCKLeftRadioRadialHTML.value === "radial" && ShellGBCKLeftRadioRadialHTML.checked){
            if(ShellGBCKRightHTML != null){
                ShellGBCKRightHTML.style.background = `radial-gradient(${ShellGBCKLeftSelectDirectionHTML.value}, ${ShellGBCKLeftInputHexaPrmHTML.value} 0%, ${ShellGBCKLeftInputHexaScdHTML.value} 100%)`;
            }
            ShellGBCKLeftCodeHTML.innerText = `background: radial-gradient(${ShellGBCKLeftSelectDirectionHTML.value}, ${ShellGBCKLeftInputHexaPrmHTML.value} 0%, ${ShellGBCKLeftInputHexaScdHTML.value} 100%)`
        }

    }

}

export default Accueil;