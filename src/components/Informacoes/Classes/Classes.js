import React, { useState } from 'react';
import { Accordion, Icon } from 'semantic-ui-react';
import data from "../../../util/jsons/classes.json";

const Classes = (props) => {
    const { classes } = data;

    const [activeIndex, setIndex] = useState(-1);
    const [activeIndexInterno, setIndexInterno] = useState(-1);

    function handleClick(e, titleProps) {
        const { index } = titleProps
        const newIndex = activeIndex === index ? -1 : index

        setIndex(newIndex);
    }
    function handleClickInterno(e, titleProps) {
        const { index } = titleProps
        const newIndexInterno = activeIndexInterno === index ? -1 : index

        setIndexInterno(newIndexInterno);
    }
    return (
        <Accordion styled>
            {Object.keys(classes).map(key => {
                return (
                    <React.Fragment key={key}>
                        <Accordion.Title
                            active={activeIndex === key}
                            index={key}
                            onClick={handleClick}>
                            <Icon name='dropdown' />
                            <span className="titulo-accordion">{classes[key].nome}</span>
                        </Accordion.Title>
                        <Accordion.Content className="content-interno" active={activeIndex === key}>
                            <div className="text-center">
                                <div>
                                    <span className="cor-laranja">PV:</span> {classes[key].pv.base} + ({classes[key].pv.bonus}+ mod. CON por nv.)
                                </div>
                                <div>
                                    <span className="cor-laranja">PM:</span> {classes[key].pm} por nível)
                                </div>
                                <div>
                                    <span className="cor-laranja">Perícias Treinadas:</span> {classes[key].pericias.qnt} entre {Object.entries(classes[key].pericias.opcoes).map(([keyInt, val]) => {
                                        if ((Object.keys(classes[key].pericias.opcoes).length-1).toString() === keyInt){
                                            return <i key={keyInt}>{val}.</i>
                                        }
                                        return <i key={keyInt}>{val}, </i>
                                    })}
                                </div>
                            </div>
                            {/* Accordion Interno */}
                            <Accordion styled>
                                <Accordion.Title
                                    active={activeIndexInterno === 0}
                                    index={0}
                                    onClick={handleClickInterno}>
                                    <Icon name='dropdown' />
                                    <span className="titulo-accordion">teste</span>
                                </Accordion.Title>
                                <Accordion.Content active={activeIndexInterno === 0}>
                                    Teste
                                </Accordion.Content>
                            </Accordion>
                            {/* Fim Accordion Interno */}
                        </Accordion.Content>
                    </React.Fragment>)
            })}
        </Accordion>
    );
}

export default Classes;