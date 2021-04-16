import React from 'react';

const Footer = () => {
    return (
        <footer className="footer" style={{position: 'absolute', bottom: 0, width: '100%', height: 60, backgroundColor: '#f5f5f5'}}>
        <div className="container">
            <div style={{display: 'flex', justifyContent: 'space-between'}} className="row">
            <div style={{display: 'flex', alignItems: 'center'}} className="col-md-4">
                <span style={{fontSize: 12, color: '#666'}} className="tyc">Términos y Condiciones </span>
                <button type="button" className="btn btn-danger">Contáctenos</button>
            </div>
            <div style={{width: 680, padding: '0 20px', borderWidth: '0 1px', margin: 0, display: 'flex', alignItems: 'center'}} className="col-md-4">
                <p style={{fontSize: 12, lineHeight: '1.3em', color: '#666'}}><b>PBX</b>: (57) (5) 3715000 <b>Línea de atención</b>: (57) (5) 313-3400 Calle 53B N° 46 - 25, Barranquilla - Atlántico <b>Oficina Bogotá</b>: Dirección Calle 88 No. 13 A 07 <b>Teléfono</b>: (1) 218 5733 <b>Web</b>: www.elherealdo.co</p>
            </div>
            <div style={{width: 260, justifyContent: 'flex-end', display: 'flex', alignItems: 'center'}} className="col-md-4">
                <label>Miembro de:</label>
                <a href="#"><img src="https://www.elheraldo.co/sites/all/themes/elheraldo/images/image-footer-1.jpg" /></a>
            </div>
            </div>
        </div>
        </footer>
    )
}

export default Footer;
