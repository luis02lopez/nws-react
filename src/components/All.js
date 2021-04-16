import React from 'react';

const All = () => {
    return (
        <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="text-center">
              Jueves, <span>25 de Febrero</span>, 2021
            </div>
            <h1 className="title-home">
              <figure className="logo">
                <img style={{width: '100%', height: 40}} src="https://www.elheraldo.co/sites/all/themes/elheraldo/images/el-heraldo-logo.svg" alt="EL HERALDO" />
              </figure>
            </h1>
            <a className="portada-dia" style={{display: 'block', margin: '5px auto 15px', fontFamily: '"Conv_Roboto-Bold"', fontSize: 11, color: '#b10012', textAlign: 'center', textTransform: 'uppercase', WebkitTransition: 'all 0.1s linear', transition: 'all 0.1s linear'}} href="#">Portada del día</a>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="alert alert-success alert-dismissible text-center" role="alert">
              <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button>
              <strong>20 nuevas noticias desde tu última visita.</strong>
            </div>
          </div>
        </div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              <a className="navbar-brand" href="#">Menú 
                <img src="https://www.elheraldo.co/sites/all/themes/elheraldo/images/el-heraldo-logo.svg" />
              </a>
            </div>
            <div className="collapse navbar-collapse row" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav text-center">
                <li><a href="#"> <span className="glyphicon glyphicon-refresh" aria-hidden="true" /> Noticias</a></li>
                <li><a data-toggle="collapse" href="#collapseExample" aria-expanded="true" aria-controls="collapseExample"> <span className="glyphicon glyphicon-lock" aria-hidden="true" /> Judiciales <span className="badge">1</span> </a></li>
                <li><a href="#"> <span className="glyphicon glyphicon-play-circle" aria-hidden="true" /> Deportes</a></li>
                <li><a href="#"> <span className="glyphicon glyphicon-list-alt" aria-hidden="true" /> Clasificados <span className="label label-success">Nuevo!</span></a></li>
                <li><a href="#"> <span className="glyphicon glyphicon-user" aria-hidden="true" /> Política</a></li>
              </ul>
              <ul className="nav navbar-nav navbar-right"> 
                <li id="fat-menu" className="dropdown"> 
                  <a href="#" className="dropdown-toggle" id="drop3" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> <span className="glyphicon glyphicon-flag" aria-hidden="true" /> Regiones <span className="caret" /> </a> 
                  <ul className="dropdown-menu" aria-labelledby="drop3"> 
                    <li><a href="#">Costa</a></li> 
                    <li><a href="#">Llano</a></li> 
                    <li><a href="#">Interior</a></li> 
                  </ul> 
                </li> 
              </ul>
            </div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-6 collapse in" id="collapseExample">
            <div className="row">
              <div className="row">
                <div className="col-md-12">
                  <h4 className="text-center">TITULAR 1</h4>
                </div>
              </div>
              <div className="col-md-6">
                <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget feugiat lacus. Phasellus non nunc non ipsum malesuada egestas. Duis non porta ligula, vitae placerat risus. Fusce massa neque, vulputate ac velit quis, eleifend ullamcorper tortor. Maecenas in laoreet nunc. Morbi scelerisque eleifend consequat. Donec ut luctus orci. Morbi quis nisl arcu. Donec et elit elit. Praesent et dictum nibh, sed rhoncus metus.</p>
              </div>
              <div className="col-md-6">
                <div className="thumbnail">
                  <img src="https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row">
              <div className="row">
                <div className="col-md-12">
                  <h4 className="text-center">TITULAR 2</h4>
                </div>
              </div>
              <div className="col-md-6">
                <div className="thumbnail">
                  <img src="https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg" />
                </div>
              </div>
              <div className="col-md-6">
                <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget feugiat lacus. Phasellus non nunc non ipsum malesuada egestas. Duis non porta ligula, vitae placerat risus. Fusce massa neque, vulputate ac velit quis, eleifend ullamcorper tortor. Maecenas in laoreet nunc. Morbi scelerisque eleifend consequat. Donec ut luctus orci. Morbi quis nisl arcu. Donec et elit elit. Praesent et dictum nibh, sed rhoncus metus.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="row">
              <div className="row">
                <div className="col-md-12">
                  <h4 className="text-center">TITULAR 3</h4>
                </div>
              </div>
              <div className="col-md-6">
                <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget feugiat lacus. Phasellus non nunc non ipsum malesuada egestas. Duis non porta ligula, vitae placerat risus. Fusce massa neque, vulputate ac velit quis, eleifend ullamcorper tortor. Maecenas in laoreet nunc. Morbi scelerisque eleifend consequat. Donec ut luctus orci. Morbi quis nisl arcu. Donec et elit elit. Praesent et dictum nibh, sed rhoncus metus.</p>
              </div>
              <div className="col-md-6">
                <div className="thumbnail">
                  <img src="https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row">
              <div className="row">
                <div className="col-md-12">
                  <h4 className="text-center">TITULAR 4</h4>
                </div>
              </div>
              <div className="col-md-6">
                <div className="thumbnail">
                  <img src="https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg" />
                </div>
              </div>
              <div className="col-md-6">
                <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget feugiat lacus. Phasellus non nunc non ipsum malesuada egestas. Duis non porta ligula, vitae placerat risus. Fusce massa neque, vulputate ac velit quis, eleifend ullamcorper tortor. Maecenas in laoreet nunc. Morbi scelerisque eleifend consequat. Donec ut luctus orci. Morbi quis nisl arcu. Donec et elit elit. Praesent et dictum nibh, sed rhoncus metus.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 panel panel-primary">
            <div className="panel-heading">
              <h3 className="panel-title text-center">Mensaje!</h3>
            </div>
            <div className="panel-body">
              Suscribase a nuestra revista Miércoles.
            </div>
          </div>
        </div>
      </div>      
    )
}

export default All;
