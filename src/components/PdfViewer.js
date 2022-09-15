import sanchezResume from "../assets/sanchezResume.pdf";
function PdfViewer(props) {
  function closePdfHandler() {
    props.closePdfHandler();
  }
  return <embed src={sanchezResume} width="800px" height="2100px" />;
}
export default PdfViewer;
