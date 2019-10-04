import React, { useState } from 'react';
import { Accordion, Icon } from 'semantic-ui-react';
import Habilidades from "./AccordionsInternos/Habilidades";
import Niveis from "./AccordionsInternos/Niveis";
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
                const { pericias, pv, proeficiencias, habilidades, tabela } = classes[key];
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
                                    <span className="cor-laranja">PV:</span> {pv.base} + ({pv.bonus}+ mod. CON por nv.)
                                </div>
                                <div>
                                    <span className="cor-laranja">PM:</span> {classes[key].pm} por nível)
                                </div>
                                <div>
                                    <span className="cor-laranja">Perícias Treinadas:</span> {pericias.qnt} entre {Object.entries(pericias.opcoes).map(([keyInt, val]) => {
                                        if ((Object.keys(pericias.opcoes).length-1).toString() === keyInt){
                                            return <i key={keyInt}>{val}.</i>
                                        }
                                        return <i key={keyInt}>{val}, </i>
                                    })}
                                </div>
                                <div>
                                    <span className="cor-laranja">Proeficiencias:</span> { proeficiencias ? proeficiencias : "Nenhuma"}
                                </div>
                            </div>
                            {/* Accordion Interno */}
                            <Accordion styled>
                                <Accordion.Title
                                    active={activeIndexInterno === 0}
                                    index={0}
                                    onClick={handleClickInterno}>
                                    <Icon name='dropdown' />
                                    <span className="titulo-accordion">Habilidades</span>
                                </Accordion.Title>
                                <Accordion.Content active={activeIndexInterno === 0}>
                                    <Habilidades data={habilidades}/>
                                </Accordion.Content>
                                <Accordion.Title
                                    active={activeIndexInterno === 1}
                                    index={1}
                                    onClick={handleClickInterno}>
                                    <Icon name='dropdown' />
                                    <span className="titulo-accordion">Bônus por Nível</span>
                                </Accordion.Title>
                                <Accordion.Content active={activeIndexInterno === 1}>
                                    <Niveis data={tabela}/>
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