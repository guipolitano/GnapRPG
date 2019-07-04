import React, { Component } from "react";
import {
  Card,
  Divider,
  Accordion,
  Grid,
  Icon,
  List,
  Table
} from "semantic-ui-react";
import "./Informacoes.css";
class Informacoes extends Component {
  state = { mainActiveIndex: -1, classeActiveIndex: -1 };

  handleClickMain = (e, titleProps) => {
    const { index } = titleProps;
    const mainActiveIndex = this.state.mainActiveIndex;
    const newMainIndex = mainActiveIndex === index ? -1 : index;

    this.setState({ mainActiveIndex: newMainIndex });
  };

  handleClickClasse = (e, titleProps) => {
    const { index } = titleProps;
    const classeActiveIndex = this.state.classeActiveIndex;
    const newClasseIndex = classeActiveIndex === index ? -1 : index;

    this.setState({ classeActiveIndex: newClasseIndex });
  };

  render() {
    const tratos = Object.keys(this.props.infoRaca.tratos).map(
      key => this.props.infoRaca.tratos[key]
    );
    const pericias_classe = Object.keys(
      this.props.infoClasse.pericias_classe
    ).map(key => this.props.infoClasse.pericias_classe[key]);
    const talentos = Object.keys(this.props.infoClasse.talentos_adicionais).map(
      key => this.props.infoClasse.talentos_adicionais[key]
    );
    const habilidades = Object.keys(this.props.infoClasse.habilidades).map(
      key => this.props.infoClasse.habilidades[key]
    );
    return (
      <div style={{ padding: "1em" }}>
        <Card.Header textAlign="center">INFORMAÇÕES</Card.Header>
        <Divider style={{ marginTop: "10px", marginBottom: "10px" }} />
        <Accordion styled>
          <Accordion.Title
            index={0}
            active={this.state.mainActiveIndex === 0}
            onClick={this.handleClickMain}
          >
            <Icon name="dropdown" />
            ATRIBUTOS BÁSICOS
          </Accordion.Title>
          <Accordion.Content active={this.state.mainActiveIndex === 0}>
            <Grid
              className="justify-content-center"
              style={{ padding: "1em" }}
              columns="equal"
              divided="vertically"
            >
              <Grid.Row className="justify-content-between">
                <Grid.Column className="text-center" width={8}>
                  <span className="header">FORÇA:</span> A Força mede seu poder
                  muscular, sua força física. O modificador de Força será
                  aplicado nas jogadas de ataque corpo-a-corpo; dano de ataques
                  corpo-a-corpo ou com armas de arremesso; testes de Atletismo;
                  testes de Força para levantar peso, quebrar objetos e atos
                  similares
                </Grid.Column>
                <Grid.Column className="text-center" width={8}>
                  <span className="header">DESTREZA:</span> A Destreza mede
                  agilidade, reflexos, equilíbrio e coordenação motora. O
                  modificador de Destreza será aplicado nas jogadas de ataque à
                  distância; classe de armadura; testes de Reflexos; testes de
                  Acrobacia, Cavalgar, Iniciativa, Furtividade e Ladinagem.
                </Grid.Column>
              </Grid.Row>
              <Grid.Row className="justify-content-between">
                <Grid.Column className="text-center" width={8}>
                  <span className="header">CONSTITUIÇÃO:</span> A saúde e vigor
                  físico do herói são representados pela Constituição. Seu
                  modificador será aplicado a seus pontos de vida iniciais, e
                  também aos PV que você ganha quando sobe de nível
                </Grid.Column>
                <Grid.Column className="text-center" width={8}>
                  <span className="header">INTELIGÊNCIA:</span> A capacidade de
                  pensar, raciocinar e resolver problemas é medida pela
                  Inteligência. Você usará seu modificador de Inteligência para
                  determinar seu número de perícias treinadas e idiomas
                  conhecidos, e aplicará o modificador de Inteligência a testes
                  de Conhecimento, Identificar Magia e Ofício.
                </Grid.Column>
              </Grid.Row>
              <Grid.Row className="justify-content-between">
                <Grid.Column className="text-center" width={8}>
                  <span className="header">SABEDORIA:</span> A Sabedoria
                  representa a percepção e força de vontade, além de seu bom
                  senso, intuição e sentidos. Não é a mesma coisa que
                  Inteligência: enquanto a Inteligência determina sua capacidade
                  de aprendizado e raciocínio, a Sabedoria diz como você percebe
                  o mundo e a si mesmo. O modificador de Sabedoria será aplicado
                  a testes de Vontade; testes de Cura, Intuição, Percepção e
                  Sobrevivência
                </Grid.Column>
                <Grid.Column className="text-center" width={8}>
                  <span className="header">CARISMA:</span> Carisma mede sua
                  força de personalidade, magnetismo pessoal, charme, simpatia,
                  capacidade de persuasão e beleza física. Seu modificador de
                  Carisma será aplicado em testes de Adestrar Animais, Atuação,
                  Diplomacia, Enganação, Intimidar e Obter Informação; qualquer
                  teste envolvendo influenciar outras pessoas ou criaturas
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Accordion.Content>
          <Accordion.Title
            index={1}
            active={this.state.mainActiveIndex === 1}
            onClick={this.handleClickMain}
          >
            <Icon name="dropdown" />
            RAÇA
          </Accordion.Title>
          <Accordion.Content active={this.state.mainActiveIndex === 1}>
            <h5 className="text-center">{this.props.infoRaca.nome}</h5>
            <h6 className="text-center">
              <i>{this.props.infoRaca.habilidades}</i>
            </h6>
            <hr
              style={{
                width: "50%",
                marginTop: "0px",
                marginBottom: "0px"
              }}
            />
            <List divided>
              {tratos.map((item, index) => (
                <List.Item
                  index={index}
                  icon="chevron right"
                  style={
                    index % 2 === 0 ? { color: "#e9910f" } : { color: "white" }
                  }
                  key={index}
                  content={tratos[index]}
                />
              ))}
            </List>
          </Accordion.Content>
          <Accordion.Title
            index={2}
            active={this.state.mainActiveIndex === 2}
            onClick={this.handleClickMain}
          >
            <Icon name="dropdown" />
            CLASSE
          </Accordion.Title>
          <Accordion.Content active={this.state.mainActiveIndex === 2}>
            <h5 className="text-center">{this.props.infoClasse.nome}</h5>
            <h6 className="text-center">
              <i>{this.props.infoClasse.descricao}</i>
            </h6>
            <hr
              style={{
                width: "50%",
                marginTop: "0px",
                marginBottom: "0px"
              }}
            />
            <div className="text-center">
              <span>
                Perícias Treinadas: {this.props.infoClasse.pericias_treinadas}
              </span>{" "}
              |&nbsp;
              <span>
                PV: {this.props.infoClasse.pv.inicial} +(
                {this.props.infoClasse.pv.bonus}+ mod. CON por nv.)
              </span>
            </div>
            <Accordion className="accordion-interno" styled>
              <Accordion.Title
                index={0}
                active={this.state.classeActiveIndex === 0}
                onClick={this.handleClickClasse}
              >
                <Icon name="dropdown" />
                Perícias e Talentos
              </Accordion.Title>
              <Accordion.Content active={this.state.classeActiveIndex === 0}>
                <div className="row text-center">
                  <div className="col-sm-6" style={{ paddingRight: "1px" }}>
                    <Table singleLine striped inverted compact>
                      <Table.Header>
                        <Table.Row>
                          <Table.HeaderCell className="text-center head-tabela">
                            Perícias de Classe
                          </Table.HeaderCell>
                        </Table.Row>
                      </Table.Header>
                      <Table.Body style={{ fontSize: "11px" }}>
                        {pericias_classe.length > 0 &&
                        pericias_classe[0] !== "" ? (
                          pericias_classe.map((item, index) => (
                            <Table.Row>
                              <Table.Cell>{pericias_classe[index]}</Table.Cell>
                            </Table.Row>
                          ))
                        ) : (
                          <Table.Row>
                            <Table.Cell>Nenhuma</Table.Cell>
                          </Table.Row>
                        )}
                      </Table.Body>
                    </Table>
                  </div>
                  <div className="col-sm-6" style={{ paddingLeft: "1px" }}>
                    <Table singleLine striped inverted compact>
                      <Table.Header>
                        <Table.Row>
                          <Table.HeaderCell className="text-center head-tabela">
                            Talentos Adicionais
                          </Table.HeaderCell>
                        </Table.Row>
                      </Table.Header>
                      <Table.Body style={{ fontSize: "11px" }}>
                        {talentos.length > 0 && talentos[0] !== "" ? (
                          talentos.map((item, index) => (
                            <Table.Row>
                              <Table.Cell>{talentos[index]}</Table.Cell>
                            </Table.Row>
                          ))
                        ) : (
                          <Table.Row>
                            <Table.Cell>Nenhuma</Table.Cell>
                          </Table.Row>
                        )}
                      </Table.Body>
                    </Table>
                  </div>
                </div>
              </Accordion.Content>
              <Accordion.Title
                index={1}
                active={this.state.classeActiveIndex === 1}
                onClick={this.handleClickClasse}
              >
                <Icon name="dropdown" />
                Habilidades
              </Accordion.Title>
              <Accordion.Content active={this.state.classeActiveIndex === 1}>
                <List divided>
                  {habilidades.map((item, index) => (
                    <List.Item index={index} icon="chevron right" key={index}>
                      <span style={{ color: "#e9910f" }}>
                        <Icon name="chevron right" />
                        {habilidades[index].nome}: &nbsp;
                      </span>
                      {typeof habilidades[index].descricao === "object"
                        ? Object.keys(habilidades[index].descricao).map(key => {
                            if (key == 0) {
                              return (
                                <span>
                                  {habilidades[index].descricao[key]}
                                  <p>&nbsp;</p>
                                </span>
                              );
                            } else {
                              return (
                                <p> -{habilidades[index].descricao[key]}</p>
                              );
                            }
                          })
                        : habilidades[index].descricao}
                    </List.Item>
                  ))}
                </List>
              </Accordion.Content>

              {Object.keys(this.props.infoClasse.magias).length > 0 ? (
                <React.Fragment>
                  <Accordion.Title
                    index={2}
                    active={this.state.classeActiveIndex === 2}
                    onClick={this.handleClickClasse}
                  >
                    <Icon name="dropdown" />
                    Magias
                  </Accordion.Title>
                  <Accordion.Content
                    active={this.state.classeActiveIndex === 2}
                  >
                    Teste
                  </Accordion.Content>
                </React.Fragment>
              ) : (
                ""
              )}
            </Accordion>
          </Accordion.Content>
        </Accordion>

        <Divider style={{ marginTop: "10px", marginBottom: "10px" }} />
      </div>
    );
  }
}

export default Informacoes;
