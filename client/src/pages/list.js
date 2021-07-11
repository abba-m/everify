import { connect } from "react-redux";

import { Container, Table } from "reactstrap";

function List({ verifiedCandidates }) {
  const d = new Date();

  const renderCandidates = () => {
    if (!verifiedCandidates) return <h4>List Empty</h4>;
    return verifiedCandidates.map((cdt) => (
      <tr>
        <th scope="row">1</th>
        <td>{cdt.Name}</td>
        <td className="text-success">{cdt.Matric_num}</td>
        <td>{d.toGMTString()}</td>
      </tr>
    ));
  };
  return (
    <Container>
      <h3 className="ml-4 text-success font-weight-light styled-text mb-3">
        List
      </h3>
      <Table responsive={true}>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Matric No</th>
            <th>Time Scanned</th>
          </tr>
        </thead>
        <tbody>{renderCandidates()}</tbody>
      </Table>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  verifiedCandidates: state.candidates.verifiedCandidates,
});

export default connect(mapStateToProps)(List);
