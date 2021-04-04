import React, {useState, useRef, useMemo, useEffect, createContext} from 'react'

import useStyle from '../../hooks/useStyle'

class NodeData {

    content = ""
    next = null
    previous = null

    constructor(content) {
        this.content = content
    }

}

class NodeDataManager {

    pivot = null

    constructor(items) {
        this.pivot = this.generate(items)
    }

    generate(items, parent=null, head=null, i=0) {
        let c = new NodeData(items[i])
        if(parent != null) {
            parent.next = c
            c.previous = parent
            if(i < items.length-1) this.generate(items, c, head, ++i)
            else {
                c.next = head
                head.previous = c
            }
        }
        else {
            this.generate(items, c, c, ++i)
            return c
        }
    }

    moveForward = () => {
      if(this.pivot !== null)
      this.pivot = this.pivot.next
    }

    moveBack = () => {
      if(this.pivot !== null)
        this.pivot = this.pivot.previous
    }

    active = () => this.pivot
    next = () => this.pivot.next
    previous = () => this.pivot.previous

}

export const SwiperContext = createContext()

const Swiper = ({
    id, header, items, numberVisible, is3D=false, dimension=null, 
    spaceBetween=0, navigation, pagination=null}) => {

    const numberVisibleWithHelpers = numberVisible+2
    const [data, setData] = useState(new NodeDataManager(items))
    const [visibleContent, setVisibleContent] = useState(Array(numberVisibleWithHelpers))
    const [animation, setAnimation] = useState('')
    const [running, setRunning] = useState(false)

    const slideRefs = Array(numberVisibleWithHelpers)
    slideRefs.fill(useRef())

    const update = () => {
        let node = data.active()
        for(let i = 0; i < (numberVisibleWithHelpers/2)-1; i++)
            node = node.previous
        let vCont = Array(numberVisibleWithHelpers)
        for(let i = 0; i < numberVisibleWithHelpers; i++){
            vCont[i] = node.content
            node = node.next
        }
        setVisibleContent(vCont)
    }

    useEffect(() => {
        update()
    }, [])

    let css = ''

    const generateStyles = () => {
        let styles = {
            swiperContainer: {
                '--container-width': '100%',
            }
        }
        
        let gap = dimension.width * 0.05 // vão entre os slides - default 0.05
        let fix = gap * numberVisible * 0.2 // correção para tornar as distancias mais naturais - default 0.2
        let origin = `var(--container-width)/2 - ${dimension.width/2}em ` // posição do slide do meio
        let mid = Math.ceil(numberVisibleWithHelpers/2) // metade dos slides total (slides visiveis + helpers de transição)

        let fixValues = Array(mid)
        let sB = Array(mid)

        // calcula as correções e espaços entre slides que
        // incrementam até a metade dos slides e decrementam para os posteriores
        // e vice-versa
        for(let k = 0; k < mid; k++){
            if(k === 0){
                fixValues[0] = is3D ? dimension.width/2 : 0
                sB[0] = 0
            }
            else {
                if(is3D){
                    fixValues[k] = fixValues[k-1] + (k === 1 ? 0 : dimension.width/2) - 1.5*fix*k
                }
                else {
                    fixValues[k] = fixValues[k-1] + dimension.width
                }
                sB[k] = k === 1 ? spaceBetween : (is3D ? (sB[k-1]*1.8) : sB[k-1]+spaceBetween)
            }
            
        } 
        fixValues[0] = 0

        let css1 = '', css2 = '', css3 = ''
        // gera as classes css para cada slide
        for(let i = 0, z = 0; i < numberVisibleWithHelpers; i++){

            // prepara a equação para o css calcular a posição 'left' dos slides
            let x = (i < mid) ? 
                (origin + `- ${fixValues[mid-i-1]}em - ${i < mid-1 ? sB[mid-i-1] : 0}em`) : 
                (origin + `+ ${fixValues[i-mid+1]}em + ${sB[i-mid+1]}em`)
            // a escala é calculada dividindo 1 pela metade dos slides totais
            // e para cada slide é multiplicado pelo index afim de "somar frações"
            // até completar 1 para o slide do meio, depois ocorre o inverso
            // até a fração inicial
            let scale = is3D ? (1/mid) * (i < mid ? i+1 : i+1-(2*(i-mid+1))) : 1
            // incrementa até a metade dos slides e depois decrementa
            z += is3D ? (i < mid ? 1 : -1) : 0
            // posição corrente dos slides
            css1 += 
                `#${id}.UI-swiper-container .UI-swiper-slide[data-swiper-slide="${i}"] {\n` +
                `   width: ${dimension.width}em;\n` +
                `   height: ${dimension.height}em;\n` +
                `   opacity: ${(i === 0 || i === numberVisibleWithHelpers-1) ? 0 : 1};\n` +
                `   z-index: ${z};\n` +
                "   position: absolute;\n" +
                `   left: calc(${x});\n` +
                `   transform: scale(${scale});\n` +
                "}\n";
            // animação que movimenta os slides para a esquerda buscando o conteudo posterior
            if(i < numberVisibleWithHelpers-1){
                css2 += 
                    `#${id}.UI-swiper-container .UI-swiper-slide-next-anim[data-swiper-slide="${i+1}"] {\n` +
                    `   opacity: ${(i === 0) ? 0 : 1};\n` +
                    `   z-index: ${z};\n` +
                    `   left: calc(${x});\n` +
                    `   transform: scale(${scale});\n` +
                    "}\n";
            }
            // animação que movimenta os slides para a direita buscando o conteudo anterior
            if(i > 0){
                css3 += 
                    `#${id}.UI-swiper-container .UI-swiper-slide-prev-anim[data-swiper-slide="${i-1}"] {\n` +
                    `   opacity: ${(i === numberVisibleWithHelpers-1) ? 0 : 1};\n` +
                    `   z-index: ${z};\n` +
                    `   left: calc(${x});\n` +
                    `   transform: scale(${scale});\n` +
                    "}\n";
            }
            
        }

        // classe q adiciona a transição separadamente
        css = `#${id}.UI-swiper-container .UI-swiper-slide-anim {transition: all 1s;}\n`
        //união dos fragmentos pra deixar mais organizado
        css += css1 + css2 + css3

        console.log(styles)

        return styles
    }

    const startAnimation = (animationClassName, dataFlow) => {
        if(!running){
            setRunning(true)
            setAnimation('UI-swiper-slide-anim ')
            setAnimation(oldValue => oldValue+animationClassName)
            setTimeout(() => {
                dataFlow()
                update()
                setAnimation('')
                setRunning(false)
            }, 1050)
        }
    }

    const handleNext = () => {
        startAnimation('UI-swiper-slide-next-anim', data.moveForward)
    }

    const handlePrevious = () => {
        startAnimation('UI-swiper-slide-prev-anim', data.moveBack)
    }

    const classes = useStyle(generateStyles())

    return (
        <SwiperContext.Provider value={{handleNext, handlePrevious}}>
            <div id={id} className={classes.swiperContainer + ' UI-swiper-container'}>
                <style rel='stylesheet' type='text/css'>
                    {css}
                </style>
                <div className='UI-swiper-header'>
                    {header}
                </div>
                <div className='UI-swiper-body'>
                    <div className='UI-swiper-body-wrapper'>
                        {visibleContent.map((value, key) => {
                            return (
                                <div 
                                    ref={slideRefs[key]}
                                    className={'UI-swiper-slide '+animation}
                                    key={key}
                                    data-swiper-slide={key}
                                >
                                    {visibleContent[key]}
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className='UI-swiper-footer'>
                    <div className='UI-swiper-button-next'>
                        {navigation.next}
                    </div>
                    <div className='UI-swiper-button-previous'>
                        {navigation.previous}
                    </div>
                </div>
            </div>     
        </SwiperContext.Provider>
    )
}

export default Swiper