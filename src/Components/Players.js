import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import joueurData from './Joueur';


function Players() {
  return (
    <>
         <h1 className='text-center text-success my-4'>EQUIPE DE FOOT</h1>
         <div className='subtitle text-center text-success '>les noms des joueurs</div>
    <div className='container'>
        <div className='row'>
            {
                joueurData.map(joueur =>{
                    return(
                       <Col sm={4}>
                         <div className='col-md-3'>
                            <div className='card '>
                                <Card  style={{ width: '18rem' }}>
                                <Card.Img variant="top" src= {joueur.url} style={{width: '50%'}} />
                                <Card.Body className='text-center'>
                                    <h4>{joueur.nom} </h4>
                                    <p>{joueur.age} </p>
                                    <p>{joueur.equipe} </p>
                                    <p>{joueur.numéro} </p>
                                    <p>{joueur.nationalité} </p>
                                    <button className='btn btn-warning text-white'>FOOTBALLEUR</button>
                                </Card.Body>
                                </Card>
            
                            </div>
                        </div>
                       </Col>
                       
                    )
                })
            }
           
        </div>
    </div>
    </>
   
    //   <section  id='player'  className='players'>
    //   <Container fluid>
    //   <div className='title-holder'>
    //   <h2>EQUIPE</h2>
    //   <div className='subtitle'>les noms des joueurs</div>
    //   </div>
    //     <Row >
    //         {
    //             joueurData.map(joueur => {
    //                 return(
    //                     <Col sm={4}  key={joueur.nom}>
    //                         <div className='holder'>
    //                             <Card style={{ width: '18rem' }}>
                                
    //                             <Card.Img variant="top"  src={joueur.url} />
    //                             <Card.Body>
    //                                 <h3>{joueur.nom} </h3>
    //                                 <equipe>{joueur.equipe} </equipe>
                                    
    //                                 <age>{joueur.age} </age>
                                   
    //                                 <Card.Title>{joueur.nationalité} </Card.Title>
    //                                 <Card.Text>{joueur.numéro} </Card.Text>
    //                                 <a href='#' className='btn btn-primary'>Joueur</a>
    //                             </Card.Body>
    //                             </Card>
    //                         </div> 
    //                     </Col>
    //                 )
    //             })
    //         }
            
    //     </Row>
    // </Container>
    // </section>
  )
}

export default Players
