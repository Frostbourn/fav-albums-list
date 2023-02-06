import Container from "react-bootstrap/Container";

export default function Heading() {
  return (
    <Container fluid>
      <div className='text-center mt-5'>
        <div className='display-4'>Albums</div>
        <p className='lead'>List of my favorite albums</p>
      </div>
    </Container>
  );
}
