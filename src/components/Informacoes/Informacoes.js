import React, { useState } from 'react';
import { Header, Accordion, Icon } from 'semantic-ui-react';
import './Informacoes.scss';

import AtributosBasicos from './AtributosBasicos/AtributosBasicos.js';
import Classes from './Classes/Classes.js';

const Informacoes = props => {
    const [activeIndex, setIndex] = useState(-1);
    function handleClick(e, titleProps) {
        const { index } = titleProps
        const newIndex = activeIndex === index ? -1 : index

        setIndex(newIndex);
    }

    return (
        <div className="container-informacoes">
            <Header as='h1' textAlign='center'>Informacoes</Header>
            <div className="container-accordion">
                <Accordion styled>
                    <Accordion.Title
                        active={activeIndex === 0}
                        index={0}
                        onClick={handleClick}
                    >
                        <Icon name='dropdown' />
                        <span className="titulo-accordion">ATRIBUTOS</span>
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 0}>
                        <AtributosBasicos />
                    </Accordion.Content>
                    <Accordion.Title
                        active={activeIndex === 1}
                        index={1}
                        onClick={handleClick}
                    >
                        <Icon name='dropdown' />
                        <span className="titulo-accordion">RAÇAS</span>
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 1}>
                        Raças
                    </Accordion.Content>
                    <Accordion.Title
                        active={activeIndex === 2}
                        index={2}
                        onClick={handleClick}
                    >
                        <Icon name='dropdown' />
                        <span className="titulo-accordion">CLASSES</span>
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 2}>
                        <Classes/>
                    </Accordion.Content>
                </Accordion>
            </div>
        </div>);
}

export default Informacoes;