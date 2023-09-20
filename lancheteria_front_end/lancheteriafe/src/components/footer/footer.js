import "../../css/footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <h1>Lancheteria Da Lancha</h1>
      <h2>
        <p>Localização</p>
        <iframe
        className="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7381.666456551263!2d-49.069162546556235!3d-22.322146127678888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bf67bbd5354fe1%3A0x696e1315626228ba!2sSenac%20Bauru!5e0!3m2!1spt-BR!2sbr!4v1695213809525!5m2!1spt-BR!2sbr"
          
        ></iframe>
      </h2>
    </div>
  );
}
