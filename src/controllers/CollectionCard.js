import { Row, Col } from 'react-bootstrap'


export const CollectionCard = (props) => {

    function viewAllItems(){
        window.location.href=props.link;
    };

    return (
        <>
        <Row className="collections">
            {props.items.map((list , i) => {
                return ( i <=3 &&
                <Col md={3} xs={3}> 
                    <a href={'/jobs/'+list.id}>   
                    <div className="card">
                        <img class="card-img-top" src="https://img.cryptokitties.co/0x06012c8cf97bead5deae237070f9587f8e7a266d/1994426.png" alt="Card image" />
                        <div class="card-body">
                        <h5 class="card-title">{list.jobTitle}</h5>
                        <p class="card-text">{list.description}</p>
                            <p class="card-text"><small class="text-muted">{list.budget}</small></p>
                        </div>
                    </div>
                    </a>
                </Col>
                )
            }) 
            }
        </Row>
        <div className="button-center-container"> 
         {props.items.length > 4 &&
            <button className="btn btn-outline-primary" onClick={() => viewAllItems()}>View All</button>
        }
        </div>
        </>
    )
}