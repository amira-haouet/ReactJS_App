import React from "react";

//let c='Bienvenu a notre site de la societe';
class Acceuil extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: "Bienvenu a notre site de la societe",
      Contact: {
        Societe: "Ma Societe",
        Email: "haouetamira@gmail.com",
        logo: "logo512.png",
      },
      Depart: [
        { id: 1, x: "Comercial" },
        { id: 2, x: "Dev" },
        { id: 3, x: "Maintenance" },
      ],
    };
  }
  render() {
    const ContainerStyle = { display: "flex", flexWrap: "wrap" };

    return (
      <div>
        <h2> {this.state.msg}</h2>
        <table>
          <tr>
            <h3>Qui somme nous?</h3>
          </tr>
          <tr>
            <td>
              <img src={this.state.Contact.logo} width="100"></img>
            </td>
            <td>
              <li> {this.state.Contact.Societe}</li>
              <li>{this.state.Contact.Email}</li>
            </td>
          </tr>
        </table>


        <div>
          <h3>liste des depat</h3>

          {this.state.Depart.map((d, index) => {
            return (
              <table>
                <tr>
                  <td>{d.id}</td>

                  <td>{d.x}</td>
                </tr>
                <tr></tr>
              </table>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Acceuil;
