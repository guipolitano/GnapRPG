import React from 'react';
import { Table } from 'semantic-ui-react';

const Niveis = (props) => {
    const { data } = props;
    return (
        <Table singleLine striped inverted compact>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell className="text-center head-tabela">
                        Nível
                </Table.HeaderCell>
                    <Table.HeaderCell className="text-center head-tabela">
                        Habilidades
                </Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {Object.entries(data).map(([key, valor]) => {
                    return (<Table.Row key={key}>
                        <Table.Cell>{parseInt(key) + 1}º</Table.Cell>
                        <Table.Cell>{valor}</Table.Cell>
                    </Table.Row>)
                })}
            </Table.Body>
        </Table>
    )
}

export default Niveis;