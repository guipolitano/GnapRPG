import React, { Component } from "react";
import { Card, Divider, Accordion, Grid, Icon, List } from "semantic-ui-react";
class Informacoes extends Component {
  state = { activeIndex: -1 };

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  render() {
    const { activeIndex } = this.state;
    const tratos = Object.keys(this.props.infoRaca.tratos).map(
      key => this.props.infoRaca.tratos[key]
    );
    return (
      <div style={{ padding: "1em" }}>
        <Card.Header textAlign="center">INFORMAÇÕES</Card.Header>
        <Divider style={{ marginTop: "10px", marginBottom: "10px" }} />
        <Accordion styled>
          <Accordion.Title
            index={0}
            active={activeIndex === 0}
            onClick={this.handleClick}
          >
            <Icon name="dropdown" />
            ATRIBUTOS BÁSICOS
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 0}>
            <Grid className="justify-content-center" 
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
            active={activeIndex === 1}
            onClick={this.handleClick}
          >
            <Icon name="dropdown" />
            RAÇA
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 1}>
            <h5 className="text-center">{this.props.infoRaca.nome}</h5>
            <h6 className="text-center"><i>({this.props.infoRaca.habilidades})</i></h6>
            <hr
              style={{ width: "50%", marginTop: "0px", marginBottom: "0px" }}
            />
            <List divided>
              {tratos.map((item, index) => (
                <List.Item
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
        </Accordion>

        <Divider style={{ marginTop: "10px", marginBottom: "10px" }} />
      </div>
    );
  }
}

export default Informacoes;
